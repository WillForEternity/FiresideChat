import React, { useState, useEffect, useRef } from "react";
import axios from 'axios';

const TypingAnimation = () => (
  <div className="flex space-x-2 items-center">
    <div className="w-3 h-3 rounded-full bg-red-400 animate-pulse"></div>
    <div className="w-3 h-3 rounded-full bg-red-600 animate-pulse delay-75"></div>
    <div className="w-3 h-3 rounded-full bg-red-800 animate-pulse delay-150"></div>
  </div>
);

const Background = () => {
    const svgRef = useRef(null);
  
    useEffect(() => {
      const generateSmoothWave = (time) => {
        const numPoints = 5;
        const points = [];
        for (let i = 0; i <= numPoints; i++) {
          const t = i / numPoints;
          const x = t * 160;
          const y = Math.sin(t * Math.PI * 2 + time) * 3;
          points.push(`${x} ${y}`);
        }
        return points.join(' L ');
      };
  
      let time = 0;
      const animateWaves = () => {
        const svg = svgRef.current;
        if (!svg) return;
  
        time += 0.11;
  
        const paths = svg.querySelectorAll('path');
        paths.forEach((path) => {
          const newPath = `M ${generateSmoothWave(time)}`;
          path.setAttribute('d', newPath);
        });
  
        requestAnimationFrame(animateWaves);
      };
  
      animateWaves();
    }, []);
  
    return (
      <div className="fixed inset-0 w-full h-full overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 via-gray-950 to-gray-950 animate-flicker"></div>
        
        <svg ref={svgRef} className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="waving-grid" width="160" height="160" patternUnits="userSpaceOnUse">
              {[0, 40, 80, 120, 160].map((x, index) => (
                <path 
                  key={`v${index}`} 
                  d={`M ${x} 0 L ${x} 200`} 
                  fill="none" 
                  stroke="rgba(255,255,255,1)" 
                  strokeWidth="0.5"
                  transform={`translate(${x} 0) rotate(90)`}
                />
              ))}
              {[0, 40, 80, 120, 160].map((y, index) => (
                <path 
                  key={`h${index}`} 
                  d={`M 0 ${y} L 200 ${y}`} 
                  fill="none" 
                  stroke="rgba(255,255,255,1)" 
                  strokeWidth="0.5"
                  transform={`translate(0 ${y})`}
                />
              ))}
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#waving-grid)" />
        </svg>
        
        <div className="absolute inset-0 bg-gradient-to-t from-orange-400/10 via-transparent to-transparent animate-flicker-intense"></div>
      </div>
    );
  };

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [chatLog, setChatLog] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [attachments, setAttachments] = useState([]);
  const inputRef = useRef(null);
  const [expandedAttachment, setExpandedAttachment] = useState(null);
  const chatLogRef = useRef(null);

  useEffect(() => {
    if (chatLogRef.current) {
      chatLogRef.current.scrollTop = chatLogRef.current.scrollHeight;
    }
  }, [chatLog]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() === '' && attachments.length === 0) return;

    setChatLog((prevChatLog) => [...prevChatLog, { type: 'user', message: inputValue, attachments }]);
    sendMessage(inputValue, attachments);
    setInputValue('');
    setAttachments([]);
  }

  const sendMessage = async (message, attachments) => {
    setIsLoading(true);
    try {
      const response = await axios.post('/api/chat', { message });
      setChatLog((prevChatLog) => [...prevChatLog, { type: 'bot', message: response.data.message }]);
    } catch (error) {
      console.error('Error calling chat API:', error);
      setChatLog((prevChatLog) => [...prevChatLog, { type: 'bot', message: "Sorry, I encountered an error. Please try again." }]);
    } finally {
      setIsLoading(false);
    }
  }

  const handlePaste = (event) => {
    event.preventDefault();
    const pastedData = event.clipboardData.getData('text');
    if (pastedData.trim() !== '') {
      setAttachments(prev => [...prev, { type: 'text', content: pastedData }]);
    }
  }

  const toggleAttachment = (index) => {
    setExpandedAttachment(expandedAttachment === index ? null : index);
  }

  return (
    <div className="relative flex flex-col h-screen">
      <Background />
      <div className="relative z-10 flex flex-col h-full">
        <header className="p-6">
          <h1 className="text-4xl font-light bg-gradient-to-r from-white to-red-900 text-transparent bg-clip-text text-left">Fireside Chat</h1>
          <p className="text-xl font-extralight bg-gradient-to-r from-red-900 to-white text-transparent bg-clip-text text-left">Together, the world is at our fingertips. You can create more than you realize.</p>
        </header>
        
        <main className="flex-1 overflow-hidden flex flex-col">
          <div ref={chatLogRef} className="flex-1 overflow-y-auto space-y-6 px-4 md:px-8 lg:px-16">
            {chatLog.map((message, index) => (
              <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-3xl ${message.type === 'user' ? 'text-right' : 'text-left'}}>
                  <p className="text-xl font-light text-gray-400 leading-relaxed">{message.message}</p>
                  {message.attachments?.map((attachment, i) => (
                    <div key={i} className="mt-2">
                      <button 
                        onClick={() => toggleAttachment(index * 1000 + i)}
                        className="text-sm text-red-400 hover:text-red-800 transition-colors duration-200"
                      >
                        Attachment {i + 1}
                      </button>
                      {expandedAttachment === index * 1000 + i && (
                        <div className="mt-2 text-sm text-gray-300">
                          <pre className="whitespace-pre-wrap max-w-full overflow-x-auto text-left">{attachment.content}</pre>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <TypingAnimation />
              </div>
            )}
          </div>
          
          <form onSubmit={handleSubmit} className="py-6 px-4 md:px-8 lg:px-16">
            <div className="flex items-center">
              <input
                type="text"
                className="flex-1 bg-transparent text-gray-400 text-xl font-light border-b-2 border-gray-700 focus:border-gray-400 transition-colors duration-300 focus:outline-none py-2 pr-4"
                placeholder="Talk to me... send me a message or paste in content."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onPaste={handlePaste}
                ref={inputRef}
              />
              <button type="submit" className="text-gray-400 hover:text-red-800 transition-colors duration-300 ml-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
            {attachments.length > 0 && (
              <div className="mt-4 flex-wrap space-x-2">
                {attachments.map((attachment, index) => (
                  <div key={index} className="text-gray-300 text-sm">
                    <span>Attachment {index + 1}</span>
                  </div>
                ))}
              </div>
            )}
          </form>
        </main>
      </div>
    </div>
  );
}
