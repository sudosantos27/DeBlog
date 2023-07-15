"use strict";
(() => {
var exports = {};
exports.id = 483;
exports.ids = [483];
exports.modules = {

/***/ 872:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(893);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(579);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moralis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(345);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(648);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(844);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([moralis__WEBPACK_IMPORTED_MODULE_3__, axios__WEBPACK_IMPORTED_MODULE_4__, ethers__WEBPACK_IMPORTED_MODULE_5__]);
([moralis__WEBPACK_IMPORTED_MODULE_3__, axios__WEBPACK_IMPORTED_MODULE_4__, ethers__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function members({ nft , expiry  }) {
    // Get the message API and context holder from antd
    const [messageApi, contextHolder] = antd__WEBPACK_IMPORTED_MODULE_1__.message.useMessage();
    // Function to handle adding an extra month to the membership
    async function addMonth() {
        // Create an ethers BrowserProvider instance
        const provider = new ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.BrowserProvider(window.ethereum);
        // Request access to the user's Ethereum accounts
        await provider.send("eth_requestAccounts", []);
        // Get the connected wallet signer
        const connectedWallet = await provider.getSigner();
        // Send a transaction to add an extra month
        let tx = await connectedWallet.sendTransaction({
            to: "0x0D411733722ABD798579e5478503414BfC467907",
            value: (0,ethers__WEBPACK_IMPORTED_MODULE_5__.parseEther)("0.1")
        });
        // Wait for the transaction to be confirmed and obtain the receipt
        tx.wait().then(async (r)=>{
            // Send a GET request to extend the membership for an extra month
            const res = await axios__WEBPACK_IMPORTED_MODULE_4__["default"].get(`http://localhost:3001/extraMonth`, {
                params: {
                    id: nft.token_id,
                    expiry: expiry
                }
            });
            // Display success message using the message API
            messageApi.success("Subscription Extended - Reloading Page in 4 seconds.");
            // Reload the page after 4 seconds
            setTimeout(()=>{
                location.reload();
            }, 4000);
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            contextHolder,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().bannerImg),
                alt: "bannerImg",
                src: "/pitch.jpg"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().exclusiveContent),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().creatorInfo),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "/messi.png",
                                alt: "creator",
                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().creatorProfileImg)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().creatorProfileName),
                                children: "Lionel Messi"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().creatorProfileOccupation),
                                children: "Football Player"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().socials),
                                alt: "socials",
                                src: "/socials.png"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().numOfMembers),
                                children: "10M"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().numOfMembersTitle),
                                children: "Members"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().feed),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().feedTitle),
                                children: "Exclusive Feed"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().feedItems),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        style: {
                                            textAlign: "left",
                                            width: "100%"
                                        },
                                        children: "World Cup 2022"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
                                        width: "100%",
                                        height: "315",
                                        src: "https://www.youtube.com/embed/ZmKy_fnRM_E",
                                        title: "YouTube video player",
                                        frameborder: "0",
                                        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                                        allowfullscreen: true
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().feedItems),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        style: {
                                            textAlign: "left",
                                            width: "100%"
                                        },
                                        children: "All 32 Goals For PSG"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
                                        width: "100%",
                                        height: "315",
                                        src: "https://www.youtube.com/embed/bth3AQSqd7I",
                                        title: "YouTube video player",
                                        frameborder: "0",
                                        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                                        allowfullscreen: true
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().subInfo),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().timeLeft),
                                children: "Member Status"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Card, {
                                title: "Member",
                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().yourMembership),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().cardTitle),
                                        children: "Number"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: nft.token_id
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().cardTitle),
                                        children: "Expiry"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: new Date(expiry).toLocaleString()
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().cardTitle),
                                        children: "Scope"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: "Full Access to Lionel Messi's exclusive content."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().extend),
                                        onClick: addMonth,
                                        children: "Add 1 Month"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().opensea),
                                        onClick: ()=>{
                                            window.open(`https://testnets.opensea.io/assets/mumbai/0xbddbF0Fc68982C307030A0D0053CF398D51d4184/${nft.token_id}`);
                                        },
                                        children: "View on Opensea"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
async function getServerSideProps(context) {
    // Get the session using getSession
    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.getSession)(context);
    // If session is not available, redirect to the homepage
    if (!session) {
        return {
            redirect: {
                destination: "/",
                permanent: false
            }
        };
    }
    try {
        // Initialize Moralis with the provided API key
        await moralis__WEBPACK_IMPORTED_MODULE_3__["default"].start({
            apiKey: process.env.MORALIS_API_KEY
        });
    } catch (e) {
        console.log("Moralis started already.");
    }
    // Fetch the NFT owners from Moralis EvmApi
    const response = await moralis__WEBPACK_IMPORTED_MODULE_3__["default"].EvmApi.nft.getNFTOwners({
        chain: "0x13881",
        format: "decimal",
        mediaItems: false,
        address: "0xbddbF0Fc68982C307030A0D0053CF398D51d4184"
    });
    // Find the NFT owned by the current user from the response
    const nft = response.raw.result.find((e)=>e.owner_of.toLowerCase() === session.user.address.toLowerCase());
    // If a valid NFT is found, fetch its metadata and check for expiry
    if (nft) {
        const metadata = await axios__WEBPACK_IMPORTED_MODULE_4__["default"].get(nft.token_uri);
        // If the membership is still valid, pass the expiry and NFT data as props
        if (metadata.data.attributes[0].value >= Date.now()) {
            return {
                props: {
                    expiry: metadata.data.attributes[0].value,
                    nft: nft
                }
            };
        }
    } else {
        console.log("No valid subscription");
    }
    // If no valid subscription is found or user is not authenticated, redirect to the homepage
    return {
        redirect: {
            destination: "/",
            permanent: false
        }
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (members);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 725:
/***/ ((module) => {

module.exports = require("antd");

/***/ }),

/***/ 649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 844:
/***/ ((module) => {

module.exports = import("ethers");;

/***/ }),

/***/ 345:
/***/ ((module) => {

module.exports = import("moralis");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,579], () => (__webpack_exec__(872)));
module.exports = __webpack_exports__;

})();