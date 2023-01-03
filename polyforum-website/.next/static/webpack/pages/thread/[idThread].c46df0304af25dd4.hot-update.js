"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/thread/[idThread]",{

/***/ "./pages/thread/[idThread].js":
/*!************************************!*\
  !*** ./pages/thread/[idThread].js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_pageWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/pageWrapper */ \"./components/pageWrapper.js\");\n/* harmony import */ var react_bulma_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bulma-components */ \"./node_modules/react-bulma-components/cjs/index.js\");\n/* harmony import */ var _components_showPosts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/showPosts */ \"./components/showPosts.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_customPuffLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/customPuffLoader */ \"./components/customPuffLoader.js\");\n/* harmony import */ var _components_protectedRoute__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/protectedRoute */ \"./components/protectedRoute.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst ThreadPage = ()=>{\n    _s();\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    /**\r\n    * l'id du thread\r\n    */ let thread = router.query.idThread;\n    /**\r\n     * Si la donnée a été récupérée\r\n     */ const [loaded, setLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const link = \"/api/thread/\".concat(thread);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (!router.isReady) return;\n        (async ()=>{\n            // On veut faire la requête une seule fois\n            if (!loaded) {\n                try {\n                    const response = await axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].get(link);\n                    setPosts(response.data);\n                } // Si on attrape une erreur alors on montre un message d'erreur et on met que l'utilisateur est non défini\n                catch (e) {\n                    showErrorMessage(\"Il y a eu une erreur lors de la r\\xe9cup\\xe9ration de l'utilisateur\", e.response.data);\n                }\n                // On dit que la donnée est mise à jour\n                setLoaded(true);\n            }\n        })();\n    }, [\n        loaded,\n        router.isReady\n    ]);\n    // Si la donnée n'a pas encore été récupérée on montre le loader\n    if (!loaded) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_customPuffLoader__WEBPACK_IMPORTED_MODULE_5__.CustomPuffLoader, {}, void 0, false, {\n            fileName: \"D:\\\\Documents\\\\doc_cours\\\\IDU4\\\\s7\\\\fullstack\\\\projet\\\\Projet_Full_stack_repo\\\\Projet_FullStack\\\\polyforum-website\\\\pages\\\\thread\\\\[idThread].js\",\n            lineNumber: 57,\n            columnNumber: 14\n        }, undefined);\n    }\n    // Si l'utilisateur n'est pas défini ça veut dire qu'il n'existe pas et donc on veut revenir à la page des utilisateurs\n    if (posts === undefined) {\n        router.replace(\"/\");\n        return null;\n    }\n    if (posts == \"\" || posts == undefined) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_pageWrapper__WEBPACK_IMPORTED_MODULE_1__.PageWrapper, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bulma_components__WEBPACK_IMPORTED_MODULE_8__.Columns.Column, {\n                className: \"is-full posts-list\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"/newpost/\" + thread,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bulma_components__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                            className: \"is-block is-info is-fullwidth is-medium\",\n                            children: \"Cr\\xe9er un post\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Documents\\\\doc_cours\\\\IDU4\\\\s7\\\\fullstack\\\\projet\\\\Projet_Full_stack_repo\\\\Projet_FullStack\\\\polyforum-website\\\\pages\\\\thread\\\\[idThread].js\",\n                            lineNumber: 71,\n                            columnNumber: 42\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Documents\\\\doc_cours\\\\IDU4\\\\s7\\\\fullstack\\\\projet\\\\Projet_Full_stack_repo\\\\Projet_FullStack\\\\polyforum-website\\\\pages\\\\thread\\\\[idThread].js\",\n                        lineNumber: 71,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"D:\\\\Documents\\\\doc_cours\\\\IDU4\\\\s7\\\\fullstack\\\\projet\\\\Projet_Full_stack_repo\\\\Projet_FullStack\\\\polyforum-website\\\\pages\\\\thread\\\\[idThread].js\",\n                        lineNumber: 72,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bulma_components__WEBPACK_IMPORTED_MODULE_8__.Heading, {\n                        className: \"is-3\",\n                        children: \"Il n'y a aucun poste pour le moment\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Documents\\\\doc_cours\\\\IDU4\\\\s7\\\\fullstack\\\\projet\\\\Projet_Full_stack_repo\\\\Projet_FullStack\\\\polyforum-website\\\\pages\\\\thread\\\\[idThread].js\",\n                        lineNumber: 73,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Documents\\\\doc_cours\\\\IDU4\\\\s7\\\\fullstack\\\\projet\\\\Projet_Full_stack_repo\\\\Projet_FullStack\\\\polyforum-website\\\\pages\\\\thread\\\\[idThread].js\",\n                lineNumber: 70,\n                columnNumber: 11\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"D:\\\\Documents\\\\doc_cours\\\\IDU4\\\\s7\\\\fullstack\\\\projet\\\\Projet_Full_stack_repo\\\\Projet_FullStack\\\\polyforum-website\\\\pages\\\\thread\\\\[idThread].js\",\n            lineNumber: 69,\n            columnNumber: 9\n        }, undefined);\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_pageWrapper__WEBPACK_IMPORTED_MODULE_1__.PageWrapper, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bulma_components__WEBPACK_IMPORTED_MODULE_8__.Columns.Column, {\n                className: \"is-full posts-list\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bulma_components__WEBPACK_IMPORTED_MODULE_8__.Heading, {\n                        className: \"is-1 center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                            children: posts.thread[0].titre\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Documents\\\\doc_cours\\\\IDU4\\\\s7\\\\fullstack\\\\projet\\\\Projet_Full_stack_repo\\\\Projet_FullStack\\\\polyforum-website\\\\pages\\\\thread\\\\[idThread].js\",\n                            lineNumber: 82,\n                            columnNumber: 46\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Documents\\\\doc_cours\\\\IDU4\\\\s7\\\\fullstack\\\\projet\\\\Projet_Full_stack_repo\\\\Projet_FullStack\\\\polyforum-website\\\\pages\\\\thread\\\\[idThread].js\",\n                        lineNumber: 82,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"D:\\\\Documents\\\\doc_cours\\\\IDU4\\\\s7\\\\fullstack\\\\projet\\\\Projet_Full_stack_repo\\\\Projet_FullStack\\\\polyforum-website\\\\pages\\\\thread\\\\[idThread].js\",\n                        lineNumber: 83,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"/newpost/\" + thread,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bulma_components__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                            className: \"is-block is-info is-fullwidth is-medium\",\n                            children: \"Cr\\xe9er un poste\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Documents\\\\doc_cours\\\\IDU4\\\\s7\\\\fullstack\\\\projet\\\\Projet_Full_stack_repo\\\\Projet_FullStack\\\\polyforum-website\\\\pages\\\\thread\\\\[idThread].js\",\n                            lineNumber: 84,\n                            columnNumber: 44\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Documents\\\\doc_cours\\\\IDU4\\\\s7\\\\fullstack\\\\projet\\\\Projet_Full_stack_repo\\\\Projet_FullStack\\\\polyforum-website\\\\pages\\\\thread\\\\[idThread].js\",\n                        lineNumber: 84,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"D:\\\\Documents\\\\doc_cours\\\\IDU4\\\\s7\\\\fullstack\\\\projet\\\\Projet_Full_stack_repo\\\\Projet_FullStack\\\\polyforum-website\\\\pages\\\\thread\\\\[idThread].js\",\n                        lineNumber: 85,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bulma_components__WEBPACK_IMPORTED_MODULE_8__.Heading, {\n                        className: \"is-3\",\n                        children: \"Liste des postes :\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Documents\\\\doc_cours\\\\IDU4\\\\s7\\\\fullstack\\\\projet\\\\Projet_Full_stack_repo\\\\Projet_FullStack\\\\polyforum-website\\\\pages\\\\thread\\\\[idThread].js\",\n                        lineNumber: 86,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                        fileName: \"D:\\\\Documents\\\\doc_cours\\\\IDU4\\\\s7\\\\fullstack\\\\projet\\\\Projet_Full_stack_repo\\\\Projet_FullStack\\\\polyforum-website\\\\pages\\\\thread\\\\[idThread].js\",\n                        lineNumber: 87,\n                        columnNumber: 13\n                    }, undefined),\n                    posts.posts.sort((a, b)=>{\n                        if (a.date_thread > b.date_thread) return -1;\n                        if (a.date_thread < b.date_thread) return 1;\n                        return 0;\n                    }).map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_showPosts__WEBPACK_IMPORTED_MODULE_2__.ShowPosts, {\n                            id_thread: thread,\n                            id_post: post.id_post,\n                            titre: post.titre,\n                            contenu: post.contenu_post,\n                            createur: post.id_utilisateur,\n                            date: post.date_post.split(\"T\")[0]\n                        }, post.id_post, false, {\n                            fileName: \"D:\\\\Documents\\\\doc_cours\\\\IDU4\\\\s7\\\\fullstack\\\\projet\\\\Projet_Full_stack_repo\\\\Projet_FullStack\\\\polyforum-website\\\\pages\\\\thread\\\\[idThread].js\",\n                            lineNumber: 96,\n                            columnNumber: 19\n                        }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Documents\\\\doc_cours\\\\IDU4\\\\s7\\\\fullstack\\\\projet\\\\Projet_Full_stack_repo\\\\Projet_FullStack\\\\polyforum-website\\\\pages\\\\thread\\\\[idThread].js\",\n                lineNumber: 81,\n                columnNumber: 11\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"D:\\\\Documents\\\\doc_cours\\\\IDU4\\\\s7\\\\fullstack\\\\projet\\\\Projet_Full_stack_repo\\\\Projet_FullStack\\\\polyforum-website\\\\pages\\\\thread\\\\[idThread].js\",\n            lineNumber: 80,\n            columnNumber: 9\n        }, undefined);\n    }\n};\n_s(ThreadPage, \"Y3W0Coa2VJ3eLUkn7FY0alttRuQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = ThreadPage;\n// On exporte la page\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c1 = (0,_components_protectedRoute__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(ThreadPage, false));\nvar _c, _c1;\n$RefreshReg$(_c, \"ThreadPage\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90aHJlYWQvW2lkVGhyZWFkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQXlEO0FBQ0Q7QUFDSDtBQUNYO0FBQ0k7QUFDUjtBQUM2QjtBQUNOO0FBQ25DO0FBRTFCLE1BQU1XLGFBQWEsSUFBTTs7SUFFdkIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdULCtDQUFRQSxDQUFDLEVBQUU7SUFFckMsTUFBTVUsU0FBU1Asc0RBQVNBO0lBQ3RCO0lBS0E7SUFLQSxNQUFNYSxPQUFPLGVBQXNCLE9BQVBMO0lBRTVCVjtRQUNFLElBQUcsQ0FBQ1MsT0FBT08sT0FBTyxFQUFFO1FBR2pCLFdBQVk7WUFFVDtvREFDQSxHQUFJLENBQUNIO2dCQUVELElBQUk7b0JBQ0E7b0JBRUFMLFNBQVNTLFNBQVNFLElBQUk7Z0JBQzFCLEVBRUk7Z0JBQ0o7b0JBQ0lFLGlCQUFpQjtnQkFDckI7Z0JBRUEsdUNBQXVDO2dCQUN2Q1AsVUFBVTtZQUNkLENBQUM7UUFDTDtJQUNKLEdBQUc7UUFBQ0Q7UUFBUUo7S0FBZTtJQUczQjtJQUNBLElBQUksQ0FBQ0k7UUFDSDs7Ozs7SUFDRixDQUFDO0lBRUQ7SUFDQSxJQUFJTixVQUFVZTtRQUNaYixHQUFBQSxTQUFPYzs7SUFFVCxDQUFDO0lBR0QsSUFBR2hCLFNBQVMsTUFBTUE7UUFDaEI7Ozs7MEZBR0ksaUVBQUNtQjt3QkFBRUMsTUFBTSxvRUFBY2pCLGtFQUFBQTtrQ0FBUTs7K0ZBQTREOzs7Ozs7Ozs7OztrQ0FDekYsUUFBQ2tCOzs7OztrQ0FDRCxRQUFDL0I7d0JBQVE0QixXQUFVO2tDQUFPOzs7Ozs7Ozs7Ozs7Ozs7OztJQUtsQyxPQUFPO1FBQ0w7c0JBRUk7cUJBQWdCQTs7MEZBQ2QsaUVBQUM1Qjt3QkFBUTRCLFdBQVU7a0NBQWM7Ozs7Ozs7Ozs7OztrQ0FDakMsUUFBQ0c7Ozs7O2tDQUNELFFBQUNGO3dCQUFFQyxNQUFNO2tDQUFzQjtpQ0FBUUY7K0ZBQW9EOzs7Ozs7Ozs7OztrQ0FDM0YsUUFBQ0c7Ozs7O2tDQUNELFFBQUMvQjt3QkFBUTRCLFdBQVU7a0NBQU87Ozs7OztrQ0FDMUIsUUFBQ007Ozs7O29CQUlDeEIsTUFBTUEsS0FBSyxDQUFDeUIsSUFBSSxDQUFDLENBQUNOLEdBQUdHLElBQU07d0JBQ3pCLElBQUlILEVBQUVPO3dCQUNOLElBQUlQLEVBQUVPO2dDQUNOO29CQUNGLEdBQUdDLEdBQUcsQ0FBQyxDQUFDQzs0QkFHSkMsV0FBVzFCOzRCQUNYMkIsU0FBU0YsS0FBS0UsT0FBTzs0QkFDckJQOzRCQUNBUSxTQUFTSCxLQUFLSSxPQUFBQSw2REFBWTs0QkFDMUJDLFVBQVVMLEtBQUtNOzRCQUNmQyxNQUFNUCxLQUFLUSxTQUFTLENBQUNDOzJCQU5oQlQsS0FBS0UsT0FBTzs7Ozs7Ozs7Ozs7Ozs7OztJQVkvQixDQUFDO0FBR0g7R0FyR0kvQjs7Ozs7S0FBQUE7QUF1R047QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy90aHJlYWQvW2lkVGhyZWFkXS5qcz8zMDE5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGFnZVdyYXBwZXJ9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3BhZ2VXcmFwcGVyXCI7XHJcbmltcG9ydCB7Q29sdW1ucywgSGVhZGluZ30gZnJvbSBcInJlYWN0LWJ1bG1hLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtTaG93UG9zdHN9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Nob3dQb3N0c1wiO1xyXG5pbXBvcnQge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0J1dHRvbn0gZnJvbSBcInJlYWN0LWJ1bG1hLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHtDdXN0b21QdWZmTG9hZGVyfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jdXN0b21QdWZmTG9hZGVyXCI7XHJcbmltcG9ydCBQcm90ZWN0ZWRSb3V0ZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wcm90ZWN0ZWRSb3V0ZVwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jb25zdCBUaHJlYWRQYWdlID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIC8qKlxyXG4gICAgKiBsJ2lkIGR1IHRocmVhZFxyXG4gICAgKi9cclxuICAgIGxldCB0aHJlYWQgPSByb3V0ZXIucXVlcnkuaWRUaHJlYWQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTaSBsYSBkb25uw6llIGEgw6l0w6kgcsOpY3Vww6lyw6llXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IFtsb2FkZWQsIHNldExvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgbGluayA9IGAvYXBpL3RocmVhZC8ke3RocmVhZH1gO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGlmKCFyb3V0ZXIuaXNSZWFkeSkgcmV0dXJuO1xyXG4gICAgICBcclxuXHJcbiAgICAgICAgKGFzeW5jICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIC8vIE9uIHZldXQgZmFpcmUgbGEgcmVxdcOqdGUgdW5lIHNldWxlIGZvaXNcclxuICAgICAgICAgICAgaWYgKCFsb2FkZWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGxpbmspO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZXRQb3N0cyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU2kgb24gYXR0cmFwZSB1bmUgZXJyZXVyIGFsb3JzIG9uIG1vbnRyZSB1biBtZXNzYWdlIGQnZXJyZXVyIGV0IG9uIG1ldCBxdWUgbCd1dGlsaXNhdGV1ciBlc3Qgbm9uIGTDqWZpbmlcclxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd0Vycm9yTWVzc2FnZShcIklsIHkgYSBldSB1bmUgZXJyZXVyIGxvcnMgZGUgbGEgcsOpY3Vww6lyYXRpb24gZGUgbCd1dGlsaXNhdGV1clwiLCBlLnJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIE9uIGRpdCBxdWUgbGEgZG9ubsOpZSBlc3QgbWlzZSDDoCBqb3VyXHJcbiAgICAgICAgICAgICAgICBzZXRMb2FkZWQodHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSgpXHJcbiAgICB9LCBbbG9hZGVkLCByb3V0ZXIuaXNSZWFkeV0pO1xyXG5cclxuXHJcbiAgICAvLyBTaSBsYSBkb25uw6llIG4nYSBwYXMgZW5jb3JlIMOpdMOpIHLDqWN1cMOpcsOpZSBvbiBtb250cmUgbGUgbG9hZGVyXHJcbiAgICBpZiAoIWxvYWRlZCkge1xyXG4gICAgICByZXR1cm4gPEN1c3RvbVB1ZmZMb2FkZXIvPlxyXG4gICAgfVxyXG5cclxuICAgIC8vIFNpIGwndXRpbGlzYXRldXIgbidlc3QgcGFzIGTDqWZpbmkgw6dhIHZldXQgZGlyZSBxdSdpbCBuJ2V4aXN0ZSBwYXMgZXQgZG9uYyBvbiB2ZXV0IHJldmVuaXIgw6AgbGEgcGFnZSBkZXMgdXRpbGlzYXRldXJzXHJcbiAgICBpZiAocG9zdHMgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICByb3V0ZXIucmVwbGFjZShcIi9cIik7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gIFxyXG5cclxuICAgIGlmKHBvc3RzID09IFwiXCIgfHwgcG9zdHMgPT0gdW5kZWZpbmVkKXtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8UGFnZVdyYXBwZXI+XHJcbiAgICAgICAgICA8Q29sdW1ucy5Db2x1bW4gY2xhc3NOYW1lPVwiaXMtZnVsbCBwb3N0cy1saXN0XCI+XHJcbiAgICAgICAgICA8YSBocmVmPXsnL25ld3Bvc3QvJyArIHRocmVhZH0+PEJ1dHRvbiBjbGFzc05hbWU9XCJpcy1ibG9jayBpcy1pbmZvIGlzLWZ1bGx3aWR0aCBpcy1tZWRpdW1cIj5DcsOpZXIgdW4gcG9zdDwvQnV0dG9uPjwvYT5cclxuICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgIDxIZWFkaW5nIGNsYXNzTmFtZT1cImlzLTNcIj5JbCBuJ3kgYSBhdWN1biBwb3N0ZSBwb3VyIGxlIG1vbWVudDwvSGVhZGluZz5cclxuXHJcbiAgICAgICAgICA8L0NvbHVtbnMuQ29sdW1uPlxyXG4gICAgICAgIDwvUGFnZVdyYXBwZXI+IFxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8UGFnZVdyYXBwZXI+XHJcbiAgICAgICAgICA8Q29sdW1ucy5Db2x1bW4gY2xhc3NOYW1lPVwiaXMtZnVsbCBwb3N0cy1saXN0XCI+XHJcbiAgICAgICAgICAgIDxIZWFkaW5nIGNsYXNzTmFtZT1cImlzLTEgY2VudGVyXCI+PGI+e3Bvc3RzLnRocmVhZFswXS50aXRyZX08L2I+PC9IZWFkaW5nPlxyXG4gICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgPGEgaHJlZj17Jy9uZXdwb3N0LycgKyB0aHJlYWR9PjxCdXR0b24gY2xhc3NOYW1lPVwiaXMtYmxvY2sgaXMtaW5mbyBpcy1mdWxsd2lkdGggaXMtbWVkaXVtXCI+Q3LDqWVyIHVuIHBvc3RlPC9CdXR0b24+PC9hPlxyXG4gICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgPEhlYWRpbmcgY2xhc3NOYW1lPVwiaXMtM1wiPkxpc3RlIGRlcyBwb3N0ZXMgOjwvSGVhZGluZz5cclxuICAgICAgICAgICAgPGhyIC8+XHJcbiAgXHJcbiAgICAgICAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgICBwb3N0cy5wb3N0cy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYS5kYXRlX3RocmVhZCA+IGIuZGF0ZV90aHJlYWQpIHJldHVybiAtMTtcclxuICAgICAgICAgICAgICAgIGlmIChhLmRhdGVfdGhyZWFkIDwgYi5kYXRlX3RocmVhZCkgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgICB9KS5tYXAoKHBvc3QpID0+IChcclxuICAgICAgICAgICAgICAgICAgPFNob3dQb3N0c1xyXG4gICAgICAgICAgICAgICAgICBrZXk9e3Bvc3QuaWRfcG9zdH1cclxuICAgICAgICAgICAgICAgICAgaWRfdGhyZWFkPXt0aHJlYWR9XHJcbiAgICAgICAgICAgICAgICAgIGlkX3Bvc3Q9e3Bvc3QuaWRfcG9zdH1cclxuICAgICAgICAgICAgICAgICAgdGl0cmU9e3Bvc3QudGl0cmV9XHJcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnU9e3Bvc3QuY29udGVudV9wb3N0fVxyXG4gICAgICAgICAgICAgICAgICBjcmVhdGV1cj17cG9zdC5pZF91dGlsaXNhdGV1cn1cclxuICAgICAgICAgICAgICAgICAgZGF0ZT17cG9zdC5kYXRlX3Bvc3Quc3BsaXQoXCJUXCIpWzBdfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvQ29sdW1ucy5Db2x1bW4+XHJcbiAgICAgICAgPC9QYWdlV3JhcHBlcj4gXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICBcclxuICB9O1xyXG5cclxuLy8gT24gZXhwb3J0ZSBsYSBwYWdlXHJcbmV4cG9ydCBkZWZhdWx0IFByb3RlY3RlZFJvdXRlKFRocmVhZFBhZ2UsIGZhbHNlKTsiXSwibmFtZXMiOlsiUGFnZVdyYXBwZXIiLCJDb2x1bW5zIiwiSGVhZGluZyIsIlNob3dQb3N0cyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQnV0dG9uIiwidXNlUm91dGVyIiwiQ3VzdG9tUHVmZkxvYWRlciIsIlByb3RlY3RlZFJvdXRlIiwiYXhpb3MiLCJUaHJlYWRQYWdlIiwicG9zdHMiLCJzZXRQb3N0cyIsInJvdXRlciIsInRocmVhZCIsInF1ZXJ5IiwiaWRUaHJlYWQiLCJsb2FkZWQiLCJzZXRMb2FkZWQiLCJsaW5rIiwiaXNSZWFkeSIsInJlc3BvbnNlIiwiZ2V0IiwiZGF0YSIsImUiLCJzaG93RXJyb3JNZXNzYWdlIiwidW5kZWZpbmVkIiwicmVwbGFjZSIsIkNvbHVtbiIsImNsYXNzTmFtZSIsImEiLCJocmVmIiwiYnIiLCJiIiwidGl0cmUiLCJociIsInNvcnQiLCJkYXRlX3RocmVhZCIsIm1hcCIsInBvc3QiLCJpZF90aHJlYWQiLCJpZF9wb3N0IiwiY29udGVudSIsImNvbnRlbnVfcG9zdCIsImNyZWF0ZXVyIiwiaWRfdXRpbGlzYXRldXIiLCJkYXRlIiwiZGF0ZV9wb3N0Iiwic3BsaXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/thread/[idThread].js\n"));

/***/ })

});