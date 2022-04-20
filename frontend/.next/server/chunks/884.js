exports.id = 884;
exports.ids = [884];
exports.modules = {

/***/ 6549:
/***/ ((module) => {

// Exports
module.exports = {
	"lml": "card_lml__M7G1q"
};


/***/ }),

/***/ 1053:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ NewMentorCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var _styles_card_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6549);
/* harmony import */ var _styles_card_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_card_module_scss__WEBPACK_IMPORTED_MODULE_2__);



function Chip({ text  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "m-1 py-1 px-2 rounded-full border-2 border-gray-600",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            className: "text-xs",
            children: text
        })
    }));
}
function NewMentorCard({ mentor , previewMentor  }) {
    const chips = [
        mentor.country,
        ...mentor.languages
    ];
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "mb-4 min-h-[450px] m-2 rounded-2xl shadow-lg flex flex-col",
        onClick: ()=>previewMentor(mentor)
        ,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: mentor.imageUrl,
                className: "w-full max-h-[250px] overflow-hidden rounded-t-2xl object-cover"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col flex-auto items-center w-full p-6 bg-white rounded-b-2xl",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                        className: "text-2xl font-bold mb-4",
                        children: [
                            mentor.firstName,
                            " ",
                            mentor.lastName
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex flex-column flex-wrap justify-center",
                        children: chips.slice(0, 5).map((chip, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Chip, {
                                text: chip
                            }, idx)
                        )
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mt-3 flex-auto overflow-hidden",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: mentor.description.slice(0, 50) + (mentor.description.length > 50 ? '...' : '')
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex-initial mt-3 flex justify-center w-full",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                            href: "#",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                className: `${(_styles_card_module_scss__WEBPACK_IMPORTED_MODULE_2___default().lml)} text-sm inline-flex flex-row items-center font-semibold`,
                                style: {
                                    marginTop: "auto"
                                },
                                children: [
                                    `View ${mentor.firstName}`,
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                        className: "w-6 h-6 ml-3 transition-all",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "2",
                                            d: "M17 8l4 4m0 0l-4 4m4-4H3"
                                        })
                                    })
                                ]
                            })
                        })
                    })
                ]
            })
        ]
    }));
};


/***/ }),

/***/ 8288:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ apiUrl),
/* harmony export */   "F": () => (/* binding */ baseUrl)
/* harmony export */ });
let exports;
if (true) {
    exports = __webpack_require__(8671);
} else {}
const apiUrl = exports.apiUrl;
const baseUrl = exports.baseUrl;


/***/ }),

/***/ 8671:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "apiUrl": () => (/* binding */ apiUrl),
/* harmony export */   "baseUrl": () => (/* binding */ baseUrl)
/* harmony export */ });
const apiUrl = process.env.API_URL;
const baseUrl = process.env.BASE_URL;


/***/ }),

/***/ 5682:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ sanitizeUrl)
/* harmony export */ });
/* unused harmony export sleep */
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8288);

const sleep = (millis)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(resolve, millis);
    });
};
const sanitizeUrl = (url)=>{
    let webdevUrl = '';
    if (true) {
        webdevUrl = _config__WEBPACK_IMPORTED_MODULE_0__/* .baseUrl */ .F;
    }
    const sanitized = url[0] == '/' ? webdevUrl + '/' + url.slice(1) : url;
    return sanitized;
};


/***/ })

};
;