"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./comp/ModalButtons.js":
/*!******************************!*\
  !*** ./comp/ModalButtons.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _public_assets_icons_cart_gif__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/assets/icons/cart.gif */ \"./public/assets/icons/cart.gif\");\n/* harmony import */ var _public_assets_icons_phone_gif__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/assets/icons/phone.gif */ \"./public/assets/icons/phone.gif\");\n/* harmony import */ var _public_assets_icons_guy_gif__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../public/assets/icons/guy.gif */ \"./public/assets/icons/guy.gif\");\n/* harmony import */ var _Modals_AboutModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Modals/AboutModal */ \"./comp/Modals/AboutModal.js\");\n/* harmony import */ var _Modals_ContactModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Modals/ContactModal */ \"./comp/Modals/ContactModal.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar ModalButtons = function() {\n    var modal = function modal() {\n        if (modalOpen) {\n            console.log(\"modal is open\");\n            if (currentModalId === \"about\") {\n                console.log(\"currentModalId is about\");\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Modals_AboutModal__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    handleClose: function() {\n                        return close();\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\CODE\\\\ANDRE-V@\\\\Andre--v2\\\\comp\\\\ModalButtons.js\",\n                    lineNumber: 48,\n                    columnNumber: 16\n                }, this));\n            } else if (currentModalId === \"contact\") {\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Modals_ContactModal__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    handleClose: function() {\n                        return close();\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\CODE\\\\ANDRE-V@\\\\Andre--v2\\\\comp\\\\ModalButtons.js\",\n                    lineNumber: 50,\n                    columnNumber: 16\n                }, this));\n            } else {\n                console.log(\"no id defined\", currentModalId);\n                return null;\n            }\n        }\n        return null;\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), modalOpen = ref[0], setModalOpen = ref[1];\n    var close = function() {\n        return setModalOpen(false);\n    };\n    var open = function() {\n        return setModalOpen(true);\n    };\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), currentModalId = ref1[0], setCurrentModalId = ref1[1];\n    var content = [\n        {\n            id: \"contact\",\n            modalContent: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Modals_ContactModal__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\CODE\\\\ANDRE-V@\\\\Andre--v2\\\\comp\\\\ModalButtons.js\",\n                lineNumber: 23,\n                columnNumber: 21\n            }, _this)\n        }, \n    ];\n    {\n        var _this1 = _this;\n        content.map(function(contentItem) {\n            var id = contentItem.id, modalContent = contentItem.modalContent;\n            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: function() {\n                    setCurrentModalId(id);\n                    open();\n                }\n            }, id, false, {\n                fileName: \"C:\\\\CODE\\\\ANDRE-V@\\\\Andre--v2\\\\comp\\\\ModalButtons.js\",\n                lineNumber: 32,\n                columnNumber: 9\n            }, _this1));\n        });\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"m-container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {\n                className: \"item\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/About\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                src: _public_assets_icons_guy_gif__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                                alt: \"GuySign\",\n                                width: 200,\n                                height: 200\n                            }, void 0, false, {\n                                fileName: \"C:\\\\CODE\\\\ANDRE-V@\\\\Andre--v2\\\\comp\\\\ModalButtons.js\",\n                                lineNumber: 65,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: \"ABOUT\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\CODE\\\\ANDRE-V@\\\\Andre--v2\\\\comp\\\\ModalButtons.js\",\n                                lineNumber: 66,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\CODE\\\\ANDRE-V@\\\\Andre--v2\\\\comp\\\\ModalButtons.js\",\n                        lineNumber: 64,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\CODE\\\\ANDRE-V@\\\\Andre--v2\\\\comp\\\\ModalButtons.js\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\CODE\\\\ANDRE-V@\\\\Andre--v2\\\\comp\\\\ModalButtons.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"item\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/Shop\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                src: _public_assets_icons_cart_gif__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                alt: \"GuySign\",\n                                width: 200,\n                                height: 200\n                            }, void 0, false, {\n                                fileName: \"C:\\\\CODE\\\\ANDRE-V@\\\\Andre--v2\\\\comp\\\\ModalButtons.js\",\n                                lineNumber: 100,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\CODE\\\\ANDRE-V@\\\\Andre--v2\\\\comp\\\\ModalButtons.js\",\n                            lineNumber: 99,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\CODE\\\\ANDRE-V@\\\\Andre--v2\\\\comp\\\\ModalButtons.js\",\n                        lineNumber: 98,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: \"SHOP\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\CODE\\\\ANDRE-V@\\\\Andre--v2\\\\comp\\\\ModalButtons.js\",\n                        lineNumber: 103,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\CODE\\\\ANDRE-V@\\\\Andre--v2\\\\comp\\\\ModalButtons.js\",\n                lineNumber: 97,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"item\",\n                onClick: function() {\n                    setCurrentModalId(\"contact\");\n                    open();\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        src: _public_assets_icons_phone_gif__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                        alt: \"GuySign\",\n                        width: 200,\n                        height: 200\n                    }, void 0, false, {\n                        fileName: \"C:\\\\CODE\\\\ANDRE-V@\\\\Andre--v2\\\\comp\\\\ModalButtons.js\",\n                        lineNumber: 113,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: \"CONTACT\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\CODE\\\\ANDRE-V@\\\\Andre--v2\\\\comp\\\\ModalButtons.js\",\n                        lineNumber: 114,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\CODE\\\\ANDRE-V@\\\\Andre--v2\\\\comp\\\\ModalButtons.js\",\n                lineNumber: 106,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.AnimatePresence, {\n                initial: false,\n                exitBeforeEnter: true,\n                children: modal()\n            }, void 0, false, {\n                fileName: \"C:\\\\CODE\\\\ANDRE-V@\\\\Andre--v2\\\\comp\\\\ModalButtons.js\",\n                lineNumber: 117,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\CODE\\\\ANDRE-V@\\\\Andre--v2\\\\comp\\\\ModalButtons.js\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, _this));\n};\n_s(ModalButtons, \"Ixn/rjnjiGGrlNlqWcjofs19P5k=\");\n_c = ModalButtons;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ModalButtons);\nvar _c;\n$RefreshReg$(_c, \"ModalButtons\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LG1EQUFLO2dDQUFDNkIsR0FBRyxFQUFFNUIscUVBQUk7Z0NBQUU2QixHQUFHLEVBQUMsQ0FBUztnQ0FBQ0MsS0FBSyxFQUFFLEdBQUc7Z0NBQUVDLE1BQU0sRUFBRSxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7O2dHQUcxREMsQ0FBRTtrQ0FBQyxDQUFJOzs7Ozs7Ozs7Ozs7d0ZBR1RULENBQUc7Z0JBQ0ZFLFNBQVMsRUFBQyxDQUFNO2dCQUNoQkQsT0FBTyxFQUFFLFFBQVEsR0FBRixDQUFDO29CQUNkUCxpQkFBaUIsQ0FBQyxDQUFTO29CQUMzQkQsSUFBSTtnQkFDTixDQUFDOztnR0FFQWpCLG1EQUFLO3dCQUFDNkIsR0FBRyxFQUFFM0Isc0VBQUs7d0JBQUU0QixHQUFHLEVBQUMsQ0FBUzt3QkFBQ0MsS0FBSyxFQUFFLEdBQUc7d0JBQUVDLE1BQU0sRUFBRSxHQUFHOzs7Ozs7Z0dBQ3ZEQyxDQUFFO2tDQUFDLENBQU87Ozs7Ozs7Ozs7Ozt3RkFHWjFCLDBEQUFlO2dCQUFDMkIsT0FBTyxFQUFFLEtBQUs7Z0JBQUVDLGVBQWUsRUFBRSxJQUFJOzBCQUNuRDFCLEtBQUs7Ozs7Ozs7Ozs7OztBQUlkLENBQUM7R0E5R0tELFlBQVk7S0FBWkEsWUFBWTtBQWdIbEIsK0RBQWVBLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wL01vZGFsQnV0dG9ucy5qcz9mOTI0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBDYXJ0IGZyb20gXCIuLi9wdWJsaWMvYXNzZXRzL2ljb25zL2NhcnQuZ2lmXCI7XHJcbmltcG9ydCBQaG9uZSBmcm9tIFwiLi4vcHVibGljL2Fzc2V0cy9pY29ucy9waG9uZS5naWZcIjtcclxuaW1wb3J0IEd1eSBmcm9tIFwiLi4vcHVibGljL2Fzc2V0cy9pY29ucy9ndXkuZ2lmXCI7XHJcblxyXG5pbXBvcnQgQWJvdXRNb2RhbCBmcm9tIFwiLi9Nb2RhbHMvQWJvdXRNb2RhbFwiO1xyXG5pbXBvcnQgQ29udGFjdE1vZGFsIGZyb20gXCIuL01vZGFscy9Db250YWN0TW9kYWxcIjtcclxuaW1wb3J0IHsgbW90aW9uLCBBbmltYXRlUHJlc2VuY2UgfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5cclxuY29uc3QgTW9kYWxCdXR0b25zID0gKCkgPT4ge1xyXG4gIGNvbnN0IFttb2RhbE9wZW4sIHNldE1vZGFsT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGNsb3NlID0gKCkgPT4gc2V0TW9kYWxPcGVuKGZhbHNlKTtcclxuICBjb25zdCBvcGVuID0gKCkgPT4gc2V0TW9kYWxPcGVuKHRydWUpO1xyXG5cclxuICB2YXIgW2N1cnJlbnRNb2RhbElkLCBzZXRDdXJyZW50TW9kYWxJZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgdmFyIGNvbnRlbnQgPSBbXHJcbiAgICB7XHJcbiAgICAgIGlkOiBcImNvbnRhY3RcIixcclxuICAgICAgbW9kYWxDb250ZW50OiA8Q29udGFjdE1vZGFsIC8+LFxyXG4gICAgfSxcclxuICBdO1xyXG5cclxuICB7XHJcbiAgICBjb250ZW50Lm1hcCgoY29udGVudEl0ZW0pID0+IHtcclxuICAgICAgY29uc3QgeyBpZCwgbW9kYWxDb250ZW50IH0gPSBjb250ZW50SXRlbTtcclxuXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAga2V5PXtpZH1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgc2V0Q3VycmVudE1vZGFsSWQoaWQpO1xyXG4gICAgICAgICAgICBvcGVuKCk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID48L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbW9kYWwoKSB7XHJcbiAgICBpZiAobW9kYWxPcGVuKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwibW9kYWwgaXMgb3BlblwiKTtcclxuICAgICAgaWYgKGN1cnJlbnRNb2RhbElkID09PSBcImFib3V0XCIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImN1cnJlbnRNb2RhbElkIGlzIGFib3V0XCIpO1xyXG4gICAgICAgIHJldHVybiA8QWJvdXRNb2RhbCBoYW5kbGVDbG9zZT17KCkgPT4gY2xvc2UoKX0gLz47XHJcbiAgICAgIH0gZWxzZSBpZiAoY3VycmVudE1vZGFsSWQgPT09IFwiY29udGFjdFwiKSB7XHJcbiAgICAgICAgcmV0dXJuIDxDb250YWN0TW9kYWwgaGFuZGxlQ2xvc2U9eygpID0+IGNsb3NlKCl9IC8+O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibm8gaWQgZGVmaW5lZFwiLCBjdXJyZW50TW9kYWxJZCk7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tY29udGFpbmVyXCI+XHJcbiAgICAgIDxtb3Rpb24uZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5cclxuICAgICAgICA8TGluayBocmVmPVwiL0Fib3V0XCI+XHJcbiAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgPEltYWdlIHNyYz17R3V5fSBhbHQ9XCJHdXlTaWduXCIgd2lkdGg9ezIwMH0gaGVpZ2h0PXsyMDB9IC8+XHJcbiAgICAgICAgICAgIDxoMz5BQk9VVDwvaDM+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L21vdGlvbi5kaXY+XHJcblxyXG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9BcnRpc3RpY0V4cHJlc3Npb25cIj5cclxuICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXtIYW5kc30gYWx0PVwiR3V5U2lnblwiIHdpZHRoPXsyMDB9IGhlaWdodD17MjAwfSAvPlxyXG4gICAgICAgICAgICA8aDM+RVhQUkVTU0lPTjwvaDM+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2Rpdj4gKi99XHJcbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5cclxuICAgICAgICA8TGluayBocmVmPVwiL0FkdmVydGlzaW5nQ2FtcGFpZ25zXCI+XHJcbiAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgPEltYWdlIHNyYz17QnJhaW59IGFsdD1cIkd1eVNpZ25cIiB3aWR0aD17MjAwfSBoZWlnaHQ9ezIwMH0gLz5cclxuICAgICAgICAgICAgPGgzPkFEVkVSVElTSU5HPC9oMz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvZGl2PiAqL31cclxuXHJcbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5cclxuICAgICAgICA8TGluayBocmVmPVwiL0RpdmVyc2l0eVwiPlxyXG4gICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e0hlYXJ0fSBhbHQ9XCJHdXlTaWduXCIgd2lkdGg9ezIwMH0gaGVpZ2h0PXsyMDB9IC8+XHJcbiAgICAgICAgICAgIDxoMz5ESVZFUlNJVFk8L2gzPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9kaXY+ICovfVxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9TaG9wXCI+XHJcbiAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgPEltYWdlIHNyYz17Q2FydH0gYWx0PVwiR3V5U2lnblwiIHdpZHRoPXsyMDB9IGhlaWdodD17MjAwfSAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8aDM+U0hPUDwvaDM+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cIml0ZW1cIlxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgIHNldEN1cnJlbnRNb2RhbElkKFwiY29udGFjdFwiKTtcclxuICAgICAgICAgIG9wZW4oKTtcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPEltYWdlIHNyYz17UGhvbmV9IGFsdD1cIkd1eVNpZ25cIiB3aWR0aD17MjAwfSBoZWlnaHQ9ezIwMH0gLz5cclxuICAgICAgICA8aDM+Q09OVEFDVDwvaDM+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPEFuaW1hdGVQcmVzZW5jZSBpbml0aWFsPXtmYWxzZX0gZXhpdEJlZm9yZUVudGVyPXt0cnVlfT5cclxuICAgICAgICB7bW9kYWwoKX1cclxuICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9kYWxCdXR0b25zO1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJMaW5rIiwiSW1hZ2UiLCJDYXJ0IiwiUGhvbmUiLCJHdXkiLCJBYm91dE1vZGFsIiwiQ29udGFjdE1vZGFsIiwibW90aW9uIiwiQW5pbWF0ZVByZXNlbmNlIiwiTW9kYWxCdXR0b25zIiwibW9kYWwiLCJtb2RhbE9wZW4iLCJjb25zb2xlIiwibG9nIiwiY3VycmVudE1vZGFsSWQiLCJoYW5kbGVDbG9zZSIsImNsb3NlIiwic2V0TW9kYWxPcGVuIiwib3BlbiIsInNldEN1cnJlbnRNb2RhbElkIiwiY29udGVudCIsImlkIiwibW9kYWxDb250ZW50IiwibWFwIiwiY29udGVudEl0ZW0iLCJkaXYiLCJvbkNsaWNrIiwiY2xhc3NOYW1lIiwiaHJlZiIsImEiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImgzIiwiaW5pdGlhbCIsImV4aXRCZWZvcmVFbnRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./comp/ModalButtons.js\n");

/***/ })

});