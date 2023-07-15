"use strict";
(() => {
var exports = {};
exports.id = 493;
exports.ids = [493];
exports.modules = {

/***/ 345:
/***/ ((module) => {

module.exports = import("moralis");;

/***/ }),

/***/ 635:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var moralis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(345);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([moralis__WEBPACK_IMPORTED_MODULE_0__]);
moralis__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const config = {
    domain: process.env.APP_DOMAIN,
    statement: "Web Login.",
    uri: process.env.NEXTAUTH_URL,
    timeout: 60
};
async function handler(req, res) {
    const { address , chain  } = req.body;
    try {
        await moralis__WEBPACK_IMPORTED_MODULE_0__["default"].start({
            apiKey: process.env.MORALIS_API_KEY
        });
    } catch (e) {
        console.log("Moralis Started Already");
    }
    try {
        const message = await moralis__WEBPACK_IMPORTED_MODULE_0__["default"].Auth.requestMessage({
            address,
            chain,
            ...config
        });
        res.status(200).json(message);
    } catch (error) {
        res.status(400).json({
            error
        });
        console.error(error);
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(635));
module.exports = __webpack_exports__;

})();