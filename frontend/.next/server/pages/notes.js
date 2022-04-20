(() => {
var exports = {};
exports.id = 397;
exports.ids = [397];
exports.modules = {

/***/ 4564:
/***/ ((module) => {

// Exports
module.exports = {
	"card": "notecard_card__J2nXa"
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

/***/ 2092:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Notes),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/global/topPadding.tsx
var topPadding = __webpack_require__(5523);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./styles/notecard.module.scss
var notecard_module = __webpack_require__(4564);
var notecard_module_default = /*#__PURE__*/__webpack_require__.n(notecard_module);
;// CONCATENATED MODULE: ./components/notes/Notecard.tsx



const NoteCard = ({ title , grade , subjects , id , imageURL  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
        href: `/notes/${id}`,
        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `${(notecard_module_default()).card} rounded-4xl overflow-hidden transition-shadow hover:shadow-md`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "border-2 h-56"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "p-5",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: " font-bold text-center text-xl",
                                children: title
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "flex flex-row justify-center gap-x-2 mt-4",
                                children: [
                                    ...subjects,
                                    grade
                                ].map((subject, idx)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "border-2 rounded-full py-1 px-2",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "text-md",
                                            children: subject
                                        })
                                    }, idx)
                                )
                            })
                        ]
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const Notecard = (NoteCard);

// EXTERNAL MODULE: ./components/InfiniteScroller.jsx
var InfiniteScroller = __webpack_require__(4473);
// EXTERNAL MODULE: ./utils.ts
var utils = __webpack_require__(5682);
// EXTERNAL MODULE: ./components/mentors/SearchBox.tsx
var SearchBox = __webpack_require__(4375);
// EXTERNAL MODULE: ./components/LoadingDiv.tsx
var LoadingDiv = __webpack_require__(6268);
;// CONCATENATED MODULE: ./pages/notes/index.tsx









function Button(props) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "py-1 px-5 font-bold bg-blue-400 rounded-full border-2 border-blue-600 text-white focus:ring focus:outline-none hover:shadow-lg transition-all duration-100 hover:scale-105 cursor-pointer m-1",
        children: props.children
    }));
}
class Notes extends external_react_.Component {
    render() {
        let currentUrl = `/notes${this.props.searchQuery == null ? '?' : `?q=${this.props.searchQuery}&`}`;
        console.log(this.state.notes);
        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(topPadding/* default */.Z, {
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "px-12 pt-10",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex flex-row items-center justify-between mb-",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "font-black font-title text-5xl",
                                children: "Pre-IB Notes for all subjects"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "my-6",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(SearchBox/* default */.Z, {
                                initialValue: this.props.searchQuery,
                                onSearch: this.handleSearch
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "m-7 md:grid grid-cols-7",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "col-span-1",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            className: "text-lg font-bold mb-3",
                                            children: "Filter By Grade"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "inline-flex md:inline-block flex-wrap",
                                            children: [
                                                [
                                                    9,
                                                    10,
                                                    11,
                                                    12
                                                ].map((grade, idx)=>/*#__PURE__*/ jsx_runtime_.jsx(Button, {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                            href: `${currentUrl}filter=${grade}`,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                className: "text-white no-underline hover:no-underline hover:text-white",
                                                                children: `Grade ${grade}`
                                                            })
                                                        })
                                                    }, idx)
                                                ),
                                                /*#__PURE__*/ jsx_runtime_.jsx(Button, {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                        href: currentUrl,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            className: "text-white no-underline hover:no-underline hover:text-white",
                                                            children: "None"
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "p-3 w-full col-span-6",
                                    children: [
                                        this.props.error === null ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(InfiniteScroller/* default */.Z, {
                                                onReachEnd: this.loadMore,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "grid grid-cols-3 gap-6",
                                                    children: this.state.notes.map((note)=>/*#__PURE__*/ jsx_runtime_.jsx(Notecard, {
                                                            id: note.id,
                                                            grade: note.grade.toString(),
                                                            title: note.title,
                                                            subjects: [
                                                                note.courseName,
                                                                note.grade < 11 ? 'Pre-IB' : 'IB'
                                                            ],
                                                            imageURL: note.preview
                                                        }, note.id)
                                                    )
                                                })
                                            })
                                        }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "grid place-items-center h-full",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                className: "text-3xl text-red-700 font-bold",
                                                children: this.props.error
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "mt-5",
                                            children: this.state.loading && /*#__PURE__*/ jsx_runtime_.jsx(LoadingDiv/* default */.Z, {
                                                message: "Loading..."
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        }));
    }
    constructor(...args){
        super(...args);
        this.state = {
            notes: this.props.initialNotes || [],
            hasMore: this.props.hasMore == undefined ? true : this.props.hasMore,
            limit: this.props.limit || 15,
            offset: this.props.offset || 0,
            loading: false,
            baseUrl: this.props.baseUrl,
            gradeFilter: this.props.gradeFilter
        };
        this.loadMore = async ()=>{
            if (this.state.hasMore && !this.state.loading) {
                this.setState({
                    loading: true
                });
                const { baseUrl , limit , offset , gradeFilter  } = this.state;
                let fetchUrl = `${baseUrl}?limit=${limit}&offset=${offset}`;
                if (gradeFilter && !isNaN(gradeFilter)) {
                    fetchUrl += `&grade=${gradeFilter}`;
                }
                const res = await fetch(fetchUrl);
                if (res.status === 200) {
                    const data = await res.json();
                    this.setState((state)=>{
                        return {
                            notes: [
                                ...state.notes,
                                ...data.data
                            ],
                            offset: offset + data.data.length,
                            loading: false,
                            hasMore: data.data.length === limit
                        };
                    });
                } else {
                    this.setState({
                        loading: false,
                        hasMore: false
                    });
                }
            }
        };
        this.handleSearch = (ev, query)=>{
            if (query) {
                if (query !== this.props.searchQuery) {
                    window.location.assign(`/notes?q=${query}${this.state.gradeFilter === null ? '' : `&grade=${this.state.gradeFilter}`}`);
                }
            } else {
                window.location.assign(`/notes`);
            }
        };
    }
}

const LIMIT = 15;
const getServerSideProps = async ({ query  })=>{
    let { q  } = query;
    let filter = parseInt(query.filter); //grade filter
    let baseUrl = q === undefined ? '/api/notes' : `/api/notes/search/${q}`;
    let fetchUrl = `${baseUrl}?limit=${LIMIT}&offset=0`;
    if (filter && !isNaN(filter)) {
        fetchUrl += `&grade=${filter}`;
    }
    // console.log(sanitizeUrl(fetchUrl));
    const res = await fetch((0,utils/* sanitizeUrl */.N)(fetchUrl));
    let props;
    if (res.status == 404) {
        props = {
            props: {
                initialNotes: [],
                error: 'No notes matched this criteria.',
                limit: LIMIT,
                offset: 0,
                baseUrl,
                gradeFilter: filter || null,
                hasMore: false,
                searchQuery: q || null
            }
        };
    } else if (res.status !== 200) {
        props = {
            props: {
                initialNotes: [],
                hasMore: false,
                limit: LIMIT,
                offset: 0,
                baseUrl,
                gradeFilter: filter || null,
                error: 'Internal Server Error. Reload the Page or Contact the System Administrators',
                searchQuery: q || null
            }
        };
    } else {
        const result = await res.json();
        props = {
            props: {
                initialNotes: result.data,
                limit: LIMIT,
                offset: result.data.length,
                hasMore: result.data.length === LIMIT,
                baseUrl,
                gradeFilter: filter || null,
                error: null,
                searchQuery: q || null
            }
        };
    }
    return props;
};


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


/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [190,664,268,772], () => (__webpack_exec__(2092)));
module.exports = __webpack_exports__;

})();