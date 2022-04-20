(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1095:
/***/ ((module) => {

// Exports
module.exports = {
	"contactBox": "footer_contactBox__7spaI",
	"circly": "footer_circly__dqmxP"
};


/***/ }),

/***/ 948:
/***/ ((module) => {

// Exports
module.exports = {
	"dropdown": "navbar_dropdown__la5sm",
	"innerDropdown": "navbar_innerDropdown__yv2Ia",
	"fadeIn": "navbar_fadeIn__NTop1"
};


/***/ }),

/***/ 765:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ global_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./styles/navbar.module.scss
var navbar_module = __webpack_require__(948);
var navbar_module_default = /*#__PURE__*/__webpack_require__.n(navbar_module);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/global/NavBar.tsx




function NoDropdown({ name , func  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
        href: "/" + name,
        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
            className: "link",
            onMouseEnter: func,
            children: name
        })
    }));
}
const NavBar = ()=>{
    const { 0: scrollPosition , 1: setScrollPosition  } = (0,external_react_.useState)(0);
    const handleScroll = ()=>{
        const position = window.pageYOffset;
        setScrollPosition(position);
    };
    (0,external_react_.useEffect)(()=>{
        window.addEventListener('scroll', handleScroll, {
            passive: true
        });
        return ()=>{
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const { 0: mentorDropdownOpen , 1: setMentorDropdownOpen  } = (0,external_react_.useState)(false);
    const { 0: resourcesDropdownOpen , 1: setResourcesDropdownOpen  } = (0,external_react_.useState)(false);
    const { 0: aboutDropdownOpen , 1: setAboutDropdownOpen  } = (0,external_react_.useState)(false);
    const openDropdown = (dropdownID)=>{
        closeAllDropdowns();
        switch(dropdownID){
            case 'mentor':
                setMentorDropdownOpen(true);
                break;
            case 'resources':
                setResourcesDropdownOpen(true);
                break;
            case 'about':
                setAboutDropdownOpen(true);
                break;
            default:
                break;
        }
    };
    const closeAllDropdowns = ()=>{
        [
            setMentorDropdownOpen,
            setResourcesDropdownOpen,
            setAboutDropdownOpen
        ].forEach((f)=>{
            f(false);
        });
    };
    return(// TODO MAKE NAVBAR MOBILE FRIENDLY
    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        onMouseLeave: closeAllDropdowns,
        className: "fixed w-full py-4 hidden md:flex justify-center gap-x-6 z-20",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "left-0 -z-10 absolute bg-white h-full w-full shadow-md",
                style: {
                    top: scrollPosition > 50 ? "0" : "-100%",
                    transition: "top 0.3s ease"
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "absolute left-20 text-xl font-bold",
                style: {
                    top: "50%",
                    transform: "translateY(-50%)"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: "/",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: "link",
                        children: "preib"
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (navbar_module_default()).dropdown,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(NoDropdown, {
                        name: "mentors",
                        func: ()=>{
                            openDropdown("mentor");
                        }
                    }),
                    mentorDropdownOpen && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (navbar_module_default()).innerDropdown,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: "/mentors/become",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "link",
                                children: " Become a Mentor "
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(NoDropdown, {
                name: "notes",
                func: closeAllDropdowns
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(NoDropdown, {
                name: "partnerships",
                func: closeAllDropdowns
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (navbar_module_default()).dropdown,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(NoDropdown, {
                        name: "about",
                        func: ()=>{
                            openDropdown("about");
                        }
                    }),
                    aboutDropdownOpen && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (navbar_module_default()).innerDropdown,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: "/why-us",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "link",
                                children: "Why Us?"
                            })
                        })
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const global_NavBar = (NavBar);

// EXTERNAL MODULE: ./styles/footer.module.scss
var footer_module = __webpack_require__(1095);
var footer_module_default = /*#__PURE__*/__webpack_require__.n(footer_module);
// EXTERNAL MODULE: ./components/LoadingDiv.tsx
var LoadingDiv = __webpack_require__(6268);
;// CONCATENATED MODULE: ./components/global/Footer.tsx





const Footer = ()=>{
    let { 0: loading , 1: setLoading  } = (0,external_react_.useState)(false);
    let { 0: sent , 1: setSent  } = (0,external_react_.useState)(false);
    let { 0: error , 1: setError  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        if (error) {
            setTimeout(()=>setError(false)
            , 4000);
        }
    }, [
        error
    ]);
    (0,external_react_.useEffect)(()=>{
        if (sent) {
            setTimeout(()=>setSent(false)
            , 4000);
        }
    }, [
        sent
    ]);
    const formSubmit = async (ev)=>{
        ev.preventDefault();
        setLoading(true);
        setSent(false);
        setError(false);
        const data = Array.from(new FormData(ev.target)).reduce((obj, [name, value])=>{
            obj[name] = value;
            return obj;
        }, {
        });
        if (Object.values(data).some((item)=>item.length == 0
        )) {
            setError(true);
            setLoading(false);
            return;
        }
        const req = await fetch('/api/contact/general', {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (req.status === 200) {
            setSent(true);
            setLoading(false);
        } else {
            setError(true);
            setLoading(false);
        }
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "bg-blue-300",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (footer_module_default()).circly
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-y-8 py-10 px-4 sm:px-20",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-col gap-y-8",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "grid grid-cols-2",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                className: "font-bold text-2xl mb-4",
                                                children: "About"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "inline-flex flex-col gap-2",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                        href: "/about",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            children: "About"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                        href: "/services",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            children: "Services"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                        href: "/blog",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            children: "Blog"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                        href: "/faq",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            children: "FAQ"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                className: "font-bold text-2xl mb-4",
                                                children: "Company"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "inline-flex flex-col gap-2",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                        href: "/mentors/become",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            children: "Become a Mentor"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                        href: "/legal/privacy",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            children: "Privacy"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                        href: "/legal/terms",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            children: "Terms of Use"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                        href: "/legal/cookies",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            children: "Cookies"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                        href: "/help",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            children: "Help"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "col-span-2",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                        className: "text-3xl font-bold mb-4",
                                        children: "Social Networks"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex flex-row gap-x-4 items-center",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "https://www.instagram.com/pre_ib/",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                        className: "w-12 h-12 hover:scale-110 transition-transform",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 512 512",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                    d: "M256 109.3c47.8 0 53.4 0.2 72.3 1 17.4 0.8 26.9 3.7 33.2 6.2 8.4 3.2 14.3 7.1 20.6 13.4 6.3 6.3 10.1 12.2 13.4 20.6 2.5 6.3 5.4 15.8 6.2 33.2 0.9 18.9 1 24.5 1 72.3s-0.2 53.4-1 72.3c-0.8 17.4-3.7 26.9-6.2 33.2 -3.2 8.4-7.1 14.3-13.4 20.6 -6.3 6.3-12.2 10.1-20.6 13.4 -6.3 2.5-15.8 5.4-33.2 6.2 -18.9 0.9-24.5 1-72.3 1s-53.4-0.2-72.3-1c-17.4-0.8-26.9-3.7-33.2-6.2 -8.4-3.2-14.3-7.1-20.6-13.4 -6.3-6.3-10.1-12.2-13.4-20.6 -2.5-6.3-5.4-15.8-6.2-33.2 -0.9-18.9-1-24.5-1-72.3s0.2-53.4 1-72.3c0.8-17.4 3.7-26.9 6.2-33.2 3.2-8.4 7.1-14.3 13.4-20.6 6.3-6.3 12.2-10.1 20.6-13.4 6.3-2.5 15.8-5.4 33.2-6.2C202.6 109.5 208.2 109.3 256 109.3M256 77.1c-48.6 0-54.7 0.2-73.8 1.1 -19 0.9-32.1 3.9-43.4 8.3 -11.8 4.6-21.7 10.7-31.7 20.6 -9.9 9.9-16.1 19.9-20.6 31.7 -4.4 11.4-7.4 24.4-8.3 43.4 -0.9 19.1-1.1 25.2-1.1 73.8 0 48.6 0.2 54.7 1.1 73.8 0.9 19 3.9 32.1 8.3 43.4 4.6 11.8 10.7 21.7 20.6 31.7 9.9 9.9 19.9 16.1 31.7 20.6 11.4 4.4 24.4 7.4 43.4 8.3 19.1 0.9 25.2 1.1 73.8 1.1s54.7-0.2 73.8-1.1c19-0.9 32.1-3.9 43.4-8.3 11.8-4.6 21.7-10.7 31.7-20.6 9.9-9.9 16.1-19.9 20.6-31.7 4.4-11.4 7.4-24.4 8.3-43.4 0.9-19.1 1.1-25.2 1.1-73.8s-0.2-54.7-1.1-73.8c-0.9-19-3.9-32.1-8.3-43.4 -4.6-11.8-10.7-21.7-20.6-31.7 -9.9-9.9-19.9-16.1-31.7-20.6 -11.4-4.4-24.4-7.4-43.4-8.3C310.7 77.3 304.6 77.1 256 77.1L256 77.1z"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                    d: "M256 164.1c-50.7 0-91.9 41.1-91.9 91.9s41.1 91.9 91.9 91.9 91.9-41.1 91.9-91.9S306.7 164.1 256 164.1zM256 315.6c-32.9 0-59.6-26.7-59.6-59.6s26.7-59.6 59.6-59.6 59.6 26.7 59.6 59.6S288.9 315.6 256 315.6z"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                                                                    cx: "351.5",
                                                                    cy: "160.5",
                                                                    r: "21.5"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "https://github.com/preib/preibwebsite",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                        className: "w-12 h-12 hover:scale-110 transition-transform",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 512 512",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                            d: "M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z"
                                                        })
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "https://www.linkedin.com/company/pre-ib/about/",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                        className: "w-10 h-10 hover:scale-110 transition-transform",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        width: "24",
                                                        height: "24",
                                                        viewBox: "0 0 24 24",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                            d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                                                        })
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                        onSubmit: formSubmit,
                        id: "footerContactForm",
                        className: (footer_module_default()).contactBox + " bg-white py-6 px-10 border-2",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "text-4xl font-bold mb-8",
                                children: "Contact Us."
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex flex-col gap-y-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "text",
                                        name: "name",
                                        id: "name",
                                        className: "focus:ring transition-shadow",
                                        placeholder: "Name..."
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "email",
                                        name: "email",
                                        id: "email",
                                        className: "focus:ring transition-shadow",
                                        placeholder: "Email..."
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                        name: "message",
                                        id: "message",
                                        className: "focus:ring transition-shadow",
                                        placeholder: "Message..."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex mt-8 ",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                        type: "submit",
                                        className: "flex flex-row p-3 font-semibold focus:ring focus:outline-none rounded-full transition-shadow",
                                        children: [
                                            "Send Message",
                                            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                className: "w-6 h-6 ml-3 transition-all",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: "2",
                                                    d: "M17 8l4 4m0 0l-4 4m4-4H3"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            loading && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "grid place-items-start align-center p-4",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(LoadingDiv/* Spinner */.$, {
                                                    color: "blue-600"
                                                })
                                            }),
                                            error && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "grid place-items-start align-center p-4 text-red-700",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    className: "h-5 w-5",
                                                    viewBox: "0 0 20 20",
                                                    fill: "currentColor",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                        fillRule: "evenodd",
                                                        d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",
                                                        clipRule: "evenodd"
                                                    })
                                                })
                                            }),
                                            sent && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "grid place-items-start align-center p-4 text-green-400",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    className: "h-5 w-5",
                                                    viewBox: "0 0 20 20",
                                                    fill: "currentColor",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                        fillRule: "evenodd",
                                                        d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                                                        clipRule: "evenodd"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const global_Footer = (Footer);

;// CONCATENATED MODULE: ./components/global/Layout.tsx



const Layout = ({ children  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(global_NavBar, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(global_Footer, {
            })
        ]
    }));
};
/* harmony default export */ const global_Layout = (Layout);


/***/ }),

/***/ 5656:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_global_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(765);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];








function MyApp({ Component , pageProps , router  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.AnimatePresence, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
            id: "root",
            initial: "pageInitial",
            animate: "pageAnimate",
            exit: "pageExit",
            variants: {
                pageInitial: {
                    opacity: 0
                },
                pageAnimate: {
                    opacity: 1,
                    transition: {
                        duration: 0.8,
                        ease: 'easeInOut'
                    }
                },
                pageExit: {
                    opacity: 0,
                    transition: {
                        duration: 0.5,
                        ease: 'easeInOut'
                    }
                }
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_global_Layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                    ...pageProps
                })
            })
        }, router.route)
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

});

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

/***/ }),

/***/ 6197:
/***/ ((module) => {

"use strict";
module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [190,664,268], () => (__webpack_exec__(5656)));
module.exports = __webpack_exports__;

})();