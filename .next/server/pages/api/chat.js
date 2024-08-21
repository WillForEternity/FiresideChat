"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/chat";
exports.ids = ["pages/api/chat"];
exports.modules = {

/***/ "openai":
/*!*************************!*\
  !*** external "openai" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("openai");

/***/ }),

/***/ "(api)/./src/pages/api/chat.js":
/*!*******************************!*\
  !*** ./src/pages/api/chat.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"openai\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_0__);\n\nconst configuration = new openai__WEBPACK_IMPORTED_MODULE_0__.Configuration({\n    apiKey: process.env.OPENAI_API_KEY\n});\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIApi(configuration);\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        try {\n            const completion = await openai.createChatCompletion({\n                model: \"gpt-3.5-turbo\",\n                messages: [\n                    {\n                        \"role\": \"system\",\n                        \"content\": \"You are a helpful assistant.\"\n                    },\n                    {\n                        \"role\": \"user\",\n                        \"content\": req.body.message\n                    }\n                ]\n            });\n            res.status(200).json({\n                message: completion.data.choices[0].message.content\n            });\n        } catch (error) {\n            console.error(\"Error calling OpenAI API:\", error);\n            res.status(500).json({\n                error: \"An error occurred while processing your request.\"\n            });\n        }\n    } else {\n        res.setHeader(\"Allow\", [\n            \"POST\"\n        ]);\n        res.status(405).end(`Method ${req.method} Not Allowed`);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2NoYXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWtEO0FBRWxELE1BQU1FLGdCQUFnQixJQUFJRixpREFBYUEsQ0FBQztJQUN0Q0csUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyxjQUFjO0FBQ3BDO0FBQ0EsTUFBTUMsU0FBUyxJQUFJTiw2Q0FBU0EsQ0FBQ0M7QUFFZCxlQUFlTSxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxJQUFJRCxJQUFJRSxNQUFNLEtBQUssUUFBUTtRQUN6QixJQUFJO1lBQ0YsTUFBTUMsYUFBYSxNQUFNTCxPQUFPTSxvQkFBb0IsQ0FBQztnQkFDbkRDLE9BQU87Z0JBQ1BDLFVBQVU7b0JBQ1I7d0JBQUMsUUFBUTt3QkFBVSxXQUFXO29CQUE4QjtvQkFDNUQ7d0JBQUMsUUFBUTt3QkFBUSxXQUFXTixJQUFJTyxJQUFJLENBQUNDLE9BQU87b0JBQUE7aUJBQzdDO1lBQ0g7WUFFQVAsSUFBSVEsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUYsU0FBU0wsV0FBV1EsSUFBSSxDQUFDQyxPQUFPLENBQUMsRUFBRSxDQUFDSixPQUFPLENBQUNLLE9BQU87WUFBQztRQUM3RSxFQUFFLE9BQU9DLE9BQU87WUFDZEMsUUFBUUQsS0FBSyxDQUFDLDZCQUE2QkE7WUFDM0NiLElBQUlRLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVJLE9BQU87WUFBbUQ7UUFDbkY7SUFDRixPQUFPO1FBQ0xiLElBQUllLFNBQVMsQ0FBQyxTQUFTO1lBQUM7U0FBTztRQUMvQmYsSUFBSVEsTUFBTSxDQUFDLEtBQUtRLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRWpCLElBQUlFLE1BQU0sQ0FBQyxZQUFZLENBQUM7SUFDeEQsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGF0Z3B0LWFwaS8uL3NyYy9wYWdlcy9hcGkvY2hhdC5qcz8zNTY5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbmZpZ3VyYXRpb24sIE9wZW5BSUFwaSB9IGZyb20gXCJvcGVuYWlcIjtcblxuY29uc3QgY29uZmlndXJhdGlvbiA9IG5ldyBDb25maWd1cmF0aW9uKHtcbiAgYXBpS2V5OiBwcm9jZXNzLmVudi5PUEVOQUlfQVBJX0tFWSxcbn0pO1xuY29uc3Qgb3BlbmFpID0gbmV3IE9wZW5BSUFwaShjb25maWd1cmF0aW9uKTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNvbXBsZXRpb24gPSBhd2FpdCBvcGVuYWkuY3JlYXRlQ2hhdENvbXBsZXRpb24oe1xuICAgICAgICBtb2RlbDogXCJncHQtMy41LXR1cmJvXCIsXG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAge1wicm9sZVwiOiBcInN5c3RlbVwiLCBcImNvbnRlbnRcIjogXCJZb3UgYXJlIGEgaGVscGZ1bCBhc3Npc3RhbnQuXCJ9LFxuICAgICAgICAgIHtcInJvbGVcIjogXCJ1c2VyXCIsIFwiY29udGVudFwiOiByZXEuYm9keS5tZXNzYWdlfVxuICAgICAgICBdLFxuICAgICAgfSk7XG5cbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVzc2FnZTogY29tcGxldGlvbi5kYXRhLmNob2ljZXNbMF0ubWVzc2FnZS5jb250ZW50IH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjYWxsaW5nIE9wZW5BSSBBUEk6JywgZXJyb3IpO1xuICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogJ0FuIGVycm9yIG9jY3VycmVkIHdoaWxlIHByb2Nlc3NpbmcgeW91ciByZXF1ZXN0LicgfSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJlcy5zZXRIZWFkZXIoJ0FsbG93JywgWydQT1NUJ10pO1xuICAgIHJlcy5zdGF0dXMoNDA1KS5lbmQoYE1ldGhvZCAke3JlcS5tZXRob2R9IE5vdCBBbGxvd2VkYCk7XG4gIH1cbn0iXSwibmFtZXMiOlsiQ29uZmlndXJhdGlvbiIsIk9wZW5BSUFwaSIsImNvbmZpZ3VyYXRpb24iLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiT1BFTkFJX0FQSV9LRVkiLCJvcGVuYWkiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiY29tcGxldGlvbiIsImNyZWF0ZUNoYXRDb21wbGV0aW9uIiwibW9kZWwiLCJtZXNzYWdlcyIsImJvZHkiLCJtZXNzYWdlIiwic3RhdHVzIiwianNvbiIsImRhdGEiLCJjaG9pY2VzIiwiY29udGVudCIsImVycm9yIiwiY29uc29sZSIsInNldEhlYWRlciIsImVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/chat.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/chat.js"));
module.exports = __webpack_exports__;

})();