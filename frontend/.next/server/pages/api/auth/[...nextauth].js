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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "moralis":
/*!**************************!*\
  !*** external "moralis" ***!
  \**************************/
/***/ ((module) => {

module.exports = import("moralis");;

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var moralis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moralis */ \"moralis\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([moralis__WEBPACK_IMPORTED_MODULE_2__]);\nmoralis__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_1___default()({\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0___default()({\n            name: \"MoralisAuth\",\n            credentials: {\n                message: {\n                    label: \"Message\",\n                    type: \"text\",\n                    placeholder: \"0x0\"\n                },\n                signature: {\n                    label: \"Signature\",\n                    type: \"text\",\n                    placeholder: \"0x0\"\n                }\n            },\n            async authorize (credentials) {\n                try {\n                    // \"message\" and \"signature\" are needed for authorisation\n                    // we described them in \"credentials\" above\n                    const { message , signature  } = credentials;\n                    const { address , profileId  } = (await moralis__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Auth.verify({\n                        message,\n                        signature\n                    })).raw;\n                    const user = {\n                        address,\n                        profileId,\n                        signature\n                    };\n                    // returning the user object and creating  a session\n                    return user;\n                } catch (e) {\n                    console.error(e);\n                    return null;\n                }\n            }\n        })\n    ],\n    // adding user info to the user session object\n    callbacks: {\n        async jwt ({ token , user  }) {\n            user && (token.user = user);\n            return token;\n        },\n        async session ({ session , token  }) {\n            session.user = token.user;\n            return session;\n        }\n    }\n}));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFrRTtBQUNqQztBQUNIO0FBRTlCLGlFQUFlQyxnREFBUUEsQ0FBQztJQUNwQkUsV0FBVztRQUNQSCxzRUFBbUJBLENBQUM7WUFDaEJJLE1BQU07WUFDTkMsYUFBYTtnQkFDVEMsU0FBUztvQkFDTEMsT0FBTztvQkFDUEMsTUFBTTtvQkFDTkMsYUFBYTtnQkFDakI7Z0JBQ0FDLFdBQVc7b0JBQ1BILE9BQU87b0JBQ1BDLE1BQU07b0JBQ05DLGFBQWE7Z0JBQ2pCO1lBQ0o7WUFDRSxNQUFNRSxXQUFVTixXQUFXLEVBQUU7Z0JBQzNCLElBQUk7b0JBQ0YseURBQXlEO29CQUN6RCwyQ0FBMkM7b0JBQzNDLE1BQU0sRUFBRUMsUUFBTyxFQUFFSSxVQUFTLEVBQUUsR0FBR0w7b0JBRy9CLE1BQU0sRUFBRU8sUUFBTyxFQUFFQyxVQUFTLEVBQUUsR0FBRyxDQUM3QixNQUFNWCwyREFBbUIsQ0FBQzt3QkFBRUk7d0JBQVNJO29CQUFVLEVBQUMsRUFDaERNLEdBQUc7b0JBRUwsTUFBTUMsT0FBTzt3QkFBRUw7d0JBQVNDO3dCQUFXSDtvQkFBVTtvQkFDN0Msb0RBQW9EO29CQUNwRCxPQUFPTztnQkFDVCxFQUFFLE9BQU9DLEdBQUc7b0JBQ1ZDLFFBQVFDLEtBQUssQ0FBQ0Y7b0JBQ2QsT0FBTyxJQUFJO2dCQUNiO1lBQ0Y7UUFDTjtLQUNIO0lBQ0QsOENBQThDO0lBQzlDRyxXQUFXO1FBQ1AsTUFBTUMsS0FBSSxFQUFFQyxNQUFLLEVBQUVOLEtBQUksRUFBRSxFQUFFO1lBQ3ZCQSxRQUFTTSxDQUFBQSxNQUFNTixJQUFJLEdBQUdBLElBQUc7WUFDekIsT0FBT007UUFDWDtRQUNBLE1BQU1DLFNBQVEsRUFBRUEsUUFBTyxFQUFFRCxNQUFLLEVBQUUsRUFBRTtZQUM5QkMsUUFBUVAsSUFBSSxHQUFHTSxNQUFNTixJQUFJO1lBQ3pCLE9BQU9PO1FBQ1g7SUFDSjtBQUNKLEVBQUUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb25lbmQvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzPzUyN2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFscyc7XG5pbXBvcnQgTmV4dEF1dGggZnJvbSAnbmV4dC1hdXRoJztcbmltcG9ydCBNb3JhbGlzIGZyb20gJ21vcmFsaXMnO1xuXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aCh7XG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xuICAgICAgICAgICAgbmFtZTogJ01vcmFsaXNBdXRoJyxcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZToge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ01lc3NhZ2UnLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnMHgwJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNpZ25hdHVyZToge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1NpZ25hdHVyZScsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICcweDAnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgLy8gXCJtZXNzYWdlXCIgYW5kIFwic2lnbmF0dXJlXCIgYXJlIG5lZWRlZCBmb3IgYXV0aG9yaXNhdGlvblxuICAgICAgICAgICAgICAgICAgLy8gd2UgZGVzY3JpYmVkIHRoZW0gaW4gXCJjcmVkZW50aWFsc1wiIGFib3ZlXG4gICAgICAgICAgICAgICAgICBjb25zdCB7IG1lc3NhZ2UsIHNpZ25hdHVyZSB9ID0gY3JlZGVudGlhbHM7XG5cblxuICAgICAgICAgICAgICAgICAgY29uc3QgeyBhZGRyZXNzLCBwcm9maWxlSWQgfSA9IChcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgTW9yYWxpcy5BdXRoLnZlcmlmeSh7IG1lc3NhZ2UsIHNpZ25hdHVyZSB9KVxuICAgICAgICAgICAgICAgICAgKS5yYXc7XG5cbiAgICAgICAgICAgICAgICAgIGNvbnN0IHVzZXIgPSB7IGFkZHJlc3MsIHByb2ZpbGVJZCwgc2lnbmF0dXJlIH07XG4gICAgICAgICAgICAgICAgICAvLyByZXR1cm5pbmcgdGhlIHVzZXIgb2JqZWN0IGFuZCBjcmVhdGluZyAgYSBzZXNzaW9uXG4gICAgICAgICAgICAgICAgICByZXR1cm4gdXNlcjtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICB9KSxcbiAgICBdLFxuICAgIC8vIGFkZGluZyB1c2VyIGluZm8gdG8gdGhlIHVzZXIgc2Vzc2lvbiBvYmplY3RcbiAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgYXN5bmMgand0KHsgdG9rZW4sIHVzZXIgfSkge1xuICAgICAgICAgICAgdXNlciAmJiAodG9rZW4udXNlciA9IHVzZXIpO1xuICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgICAgICB9LFxuICAgICAgICBhc3luYyBzZXNzaW9uKHsgc2Vzc2lvbiwgdG9rZW4gfSkge1xuICAgICAgICAgICAgc2Vzc2lvbi51c2VyID0gdG9rZW4udXNlcjtcbiAgICAgICAgICAgIHJldHVybiBzZXNzaW9uO1xuICAgICAgICB9LFxuICAgIH0sXG59KTsiXSwibmFtZXMiOlsiQ3JlZGVudGlhbHNQcm92aWRlciIsIk5leHRBdXRoIiwiTW9yYWxpcyIsInByb3ZpZGVycyIsIm5hbWUiLCJjcmVkZW50aWFscyIsIm1lc3NhZ2UiLCJsYWJlbCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInNpZ25hdHVyZSIsImF1dGhvcml6ZSIsImFkZHJlc3MiLCJwcm9maWxlSWQiLCJBdXRoIiwidmVyaWZ5IiwicmF3IiwidXNlciIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJjYWxsYmFja3MiLCJqd3QiLCJ0b2tlbiIsInNlc3Npb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();