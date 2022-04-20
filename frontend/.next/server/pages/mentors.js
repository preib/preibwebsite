(() => {
var exports = {};
exports.id = 532;
exports.ids = [532];
exports.modules = {

/***/ 4069:
/***/ ((module) => {

// Exports
module.exports = {
	"mentor-preview__background": "mentorPreview_mentor-preview__background__xvsK_",
	"mentor-preview__body": "mentorPreview_mentor-preview__body__vBG_I",
	"mentor-preview__name": "mentorPreview_mentor-preview__name__1dkQT",
	"mentor-preview__title": "mentorPreview_mentor-preview__title__33Mg9",
	"mentor-preview__modal": "mentorPreview_mentor-preview__modal__IxCKe",
	"mentor-preview__bg-img": "mentorPreview_mentor-preview__bg-img__ZiRrW",
	"mentor-preview__pfp-img": "mentorPreview_mentor-preview__pfp-img__GWB5r",
	"mentor-preview--align-img-txt": "mentorPreview_mentor-preview--align-img-txt__lSz54",
	"mentor-preview__mentor-metadata": "mentorPreview_mentor-preview__mentor-metadata__Ax39D",
	"mentor-preview__course-list": "mentorPreview_mentor-preview__course-list__2QP0R",
	"mentor-preview__course--strong": "mentorPreview_mentor-preview__course--strong__NZ5gk",
	"mentor-preview__course--weak": "mentorPreview_mentor-preview__course--weak__Hf9OU",
	"mentor-preview__desc": "mentorPreview_mentor-preview__desc__PvaIp",
	"mentor-preview__form": "mentorPreview_mentor-preview__form__kQ_fu",
	"mentor-preview__input--small": "mentorPreview_mentor-preview__input--small__WiwXQ",
	"mentor-preview__input--large": "mentorPreview_mentor-preview__input--large__yast6",
	"mentor-preview__fields--format": "mentorPreview_mentor-preview__fields--format__w3ADY",
	"mentor-preview__send": "mentorPreview_mentor-preview__send__i2ePu",
	"MuiFormLabel-root": "mentorPreview_MuiFormLabel-root__R4qjU",
	"Mui-focused": "mentorPreview_Mui-focused__B1O5O",
	"MuiOutlinedInput-root": "mentorPreview_MuiOutlinedInput-root__np4Y3",
	"MuiOutlinedInput-notchedOutline": "mentorPreview_MuiOutlinedInput-notchedOutline__JgABJ"
};


/***/ }),

/***/ 6097:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Mentors),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "react-modal"
const external_react_modal_namespaceObject = require("react-modal");
var external_react_modal_default = /*#__PURE__*/__webpack_require__.n(external_react_modal_namespaceObject);
// EXTERNAL MODULE: ./utils.ts
var utils = __webpack_require__(5682);
// EXTERNAL MODULE: ./components/mentors/MentorCard.tsx
var MentorCard = __webpack_require__(1053);
// EXTERNAL MODULE: ./components/InfiniteScroller.jsx
var InfiniteScroller = __webpack_require__(4473);
// EXTERNAL MODULE: ./components/LoadingDiv.tsx
var LoadingDiv = __webpack_require__(6268);
// EXTERNAL MODULE: ./components/mentors/SearchBox.tsx
var SearchBox = __webpack_require__(4375);
// EXTERNAL MODULE: ./components/global/topPadding.tsx
var topPadding = __webpack_require__(5523);
;// CONCATENATED MODULE: external "react-collapsible"
const external_react_collapsible_namespaceObject = require("react-collapsible");
var external_react_collapsible_default = /*#__PURE__*/__webpack_require__.n(external_react_collapsible_namespaceObject);
// EXTERNAL MODULE: ./styles/mentorPreview.module.scss
var mentorPreview_module = __webpack_require__(4069);
var mentorPreview_module_default = /*#__PURE__*/__webpack_require__.n(mentorPreview_module);
;// CONCATENATED MODULE: external "@mui/material/TextField"
const TextField_namespaceObject = require("@mui/material/TextField");
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/styles"
const styles_namespaceObject = require("@mui/material/styles");
;// CONCATENATED MODULE: ./components/mentors/MentorPreview.tsx





const MentorPreview = ({ mentor  })=>{
    console.log(mentor);
    const chips = [
        mentor.country,
        ...mentor.languages
    ];
    const { 0: firstName1 , 1: setFirstName  } = (0,external_react_.useState)("");
    const { 0: lastName1 , 1: setLastName  } = (0,external_react_.useState)("");
    const { 0: country1 , 1: setCountry  } = (0,external_react_.useState)("");
    const { 0: email1 , 1: setEmail  } = (0,external_react_.useState)("");
    const { 0: message1 , 1: setMessage  } = (0,external_react_.useState)("");
    const { 0: success , 1: setSuccess  } = (0,external_react_.useState)(null);
    const submitEmail = async (firstName, lastName, country, email, message)=>{
        const res = await fetch("/api/contact/mentor", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                firstName,
                lastName,
                country,
                email,
                message,
                mentor_name: mentor.firstName,
                mentor_uuid: mentor.id
            })
        });
        if (res.status !== 200) setSuccess(false);
        else setSuccess(true);
    };
    const BlackInput = (0,styles_namespaceObject.styled)((TextField_default()))({
        '& label.Mui-focused': {
            color: 'black'
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'black'
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'black'
            },
            '&:hover fieldset': {
                borderColor: 'black'
            },
            '&.Mui-focused fieldset': {
                borderColor: 'black'
            }
        }
    });
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (mentorPreview_module_default())["mentor-preview__background"],
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                alt: "background photo",
                src: `/background_img/background_${Math.floor(Math.random() * 2 + 1)}.jpg`,
                className: (mentorPreview_module_default())["mentor-preview__bg-img"]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (mentorPreview_module_default())["mentor-preview__body"],
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (mentorPreview_module_default())["mentor-preview__info"],
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (mentorPreview_module_default())["mentor-preview--align-img-txt"],
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        className: (mentorPreview_module_default())["mentor-preview__pfp-img"],
                                        alt: `${mentor.firstName} ${mentor.lastName}'s profile picture`,
                                        src: mentor.imageUrl
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: (mentorPreview_module_default())["mentor-preview__mentor-metadata"],
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                                    className: (mentorPreview_module_default())["mentor-preview__name"],
                                                    children: [
                                                        mentor.firstName,
                                                        " ",
                                                        mentor.lastName
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: chips.slice(0, 5).join(", ")
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (mentorPreview_module_default())["mentor-preview__course-list"],
                            children: mentor.courses.map((course, i)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (mentorPreview_module_default())[`mentor-preview__course--${course.courseName.includes("HL ") ? "strong" : "weak"}`],
                                    children: course.courseName
                                }, i)
                            )
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (mentorPreview_module_default())["mentor-preview__desc"],
                            children: mentor.description
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                            className: (mentorPreview_module_default())["mentor-preview__form"],
                            onSubmit: ()=>submitEmail(firstName1, lastName1, country1, email1, message1)
                            ,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                    className: (mentorPreview_module_default())["mentor-preview__title"],
                                    children: [
                                        "Want ",
                                        mentor.firstName,
                                        " .",
                                        mentor.lastName[0],
                                        " as a mentor?"
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (mentorPreview_module_default())["mentor-preview__fields--format"],
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(BlackInput, {
                                            variant: "outlined",
                                            className: (mentorPreview_module_default())["mentor-preview__input--small"],
                                            value: firstName1,
                                            onChange: (e)=>setFirstName(e.target.value)
                                            ,
                                            required: true,
                                            label: "Name"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(BlackInput, {
                                            variant: "outlined",
                                            className: (mentorPreview_module_default())["mentor-preview__input--small"],
                                            value: lastName1,
                                            onChange: (e)=>setLastName(e.target.value)
                                            ,
                                            required: true,
                                            label: "Surname"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(BlackInput, {
                                            inputProps: {
                                                style: {
                                                    fontFamily: 'nunito',
                                                    color: 'white'
                                                }
                                            },
                                            variant: "outlined",
                                            className: (mentorPreview_module_default())["mentor-preview__input--small"],
                                            value: country1,
                                            onChange: (e)=>setCountry(e.target.value)
                                            ,
                                            required: true,
                                            label: "Country"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(BlackInput, {
                                    variant: "outlined",
                                    className: (mentorPreview_module_default())["mentor-preview__input--large"],
                                    value: email1,
                                    onChange: (e)=>setEmail(e.target.value)
                                    ,
                                    required: true,
                                    label: "Email Address"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(BlackInput, {
                                    className: (mentorPreview_module_default())["mentor-preview__input--large"],
                                    value: message1,
                                    onChange: (e)=>setMessage(e.target.value)
                                    ,
                                    label: "Your message (subject, goal with mentorship)",
                                    multiline: true
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: (mentorPreview_module_default())["mentor-preview__send"],
                                    children: "Send Message!"
                                })
                            ]
                        }),
                        success !== null && (success ? "Message sent!" : "Failed to sent message!")
                    ]
                })
            })
        ]
    }));
};
/* harmony default export */ const mentors_MentorPreview = (MentorPreview);

;// CONCATENATED MODULE: ./pages/mentors/index.tsx













// COMPONENTS
function Button({ active , children , onClick  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `py-1 px-5 font-bold ${active ? 'bg-blue-100' : ''} rounded-lg mt-2 border-2
			border-${active ? 'blue-600' : 'gray-100'} ${active ? 'text-blue-600' : 'text-black'}
			focus:ring focus:outline-none hover:shadow-lg transition-all
			duration-100 hover:scale-105 cursor-pointer m-1`,
        onClick: ()=>onClick()
        ,
        children: children
    }));
}
class Mentors extends external_react_.Component {
    render() {
        console.log(this.props.courseFilter);
        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("title", {
                            children: "PreIb | Mentors"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            name: "description",
                            content: "PreIB is a community of mentors that are interested in guiding prospecting IB students in their IB journey"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "icon",
                            href: "/favicon.ico"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(topPadding/* default */.Z, {
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((external_react_modal_default()), {
                    isOpen: this.state.modalOpen,
                    onRequestClose: this.closePreview,
                    className: (mentorPreview_module_default())["mentor-preview__modal"],
                    children: /*#__PURE__*/ jsx_runtime_.jsx(mentors_MentorPreview, {
                        mentor: this.state.previewMentor
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    className: "text-6xl font-bold mb-6 text-center mt-24",
                    children: "Mentor Profiles"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    id: "search",
                    className: "m-3 grid place-items-center",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-11/12 md:w-5/6 lg:w-8/12",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(SearchBox/* default */.Z, {
                            initialValue: this.props.searchQuery,
                            onSearch: this.handleSearch
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    id: "mainBody",
                    className: "m-1 lg:m-7 md:grid grid-cols-4 xl:grid-cols-7",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            id: "categories",
                            className: "col-span-1",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_collapsible_default()), {
                                trigger: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "mb-3 flex",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "mr-2 text-blue-700",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                className: "h-5 w-5",
                                                viewBox: "0 0 20 20",
                                                fill: "currentColor",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    fillRule: "evenodd",
                                                    d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                                                    clipRule: "evenodd"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            className: "text-lg font-bold",
                                            children: "Filter By Courses"
                                        })
                                    ]
                                }),
                                triggerWhenOpen: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "mb-3 flex",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "mr-2 text-gray-400",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                className: "h-5 w-5",
                                                viewBox: "0 0 20 20",
                                                fill: "currentColor",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    fillRule: "evenodd",
                                                    d: "M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z",
                                                    clipRule: "evenodd"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            className: "text-lg font-bold",
                                            children: "Filter By Courses"
                                        })
                                    ]
                                }),
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "inline-flex md:inline-block flex-wrap",
                                    children: courseFilters.map((course, idx)=>/*#__PURE__*/ jsx_runtime_.jsx(Button, {
                                            active: this.props.courseFilter.includes(course),
                                            onClick: this.handleCourseClick.bind(this, course),
                                            children: course
                                        }, idx)
                                    )
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            id: "mentorlist",
                            className: "lg:p-3 w-full col-span-3 xl:col-span-6",
                            children: this.props.error ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                id: "error",
                                className: "grid place-items-center h-full",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: "text-3xl text-red-700 font-bold",
                                    children: this.props.error
                                })
                            }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(InfiniteScroller/* default */.Z, {
                                        onReachEnd: this.loadMore,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            id: "mentorgrid",
                                            className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3",
                                            children: this.state.mentors.map((mentor)=>/*#__PURE__*/ jsx_runtime_.jsx(MentorCard/* default */.Z, {
                                                    mentor: mentor,
                                                    previewMentor: this.mentorPreview
                                                }, mentor.id)
                                            )
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        id: "loading",
                                        className: "mt-5",
                                        children: this.state.loading && /*#__PURE__*/ jsx_runtime_.jsx(LoadingDiv/* default */.Z, {
                                            message: "Loading..."
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        }));
    }
    constructor(...args){
        super(...args);
        this.state = {
            mentors: this.props.initialMentors || [],
            hasMore: this.props.hasMore == undefined ? true : this.props.hasMore,
            limit: this.props.limit || 15,
            offset: this.props.offset || 0,
            loading: false,
            dataQuery: this.props.dataQuery,
            modalOpen: false,
            previewMentor: null
        };
        this.loadMore = async ()=>{
            if (this.state.hasMore && !this.state.loading) {
                this.setState({
                    loading: true
                });
                const { limit , offset  } = this.state;
                const res = await fetch(`${this.state.dataQuery}&limit=${limit}&offset=${offset}`);
                // await sleep(2000);
                if (res.status == 200) {
                    const data = await res.json();
                    this.setState((state)=>{
                        return {
                            mentors: [
                                ...state.mentors,
                                ...data.data
                            ],
                            offset: offset + limit,
                            loading: false,
                            hasMore: data.data.length == limit
                        };
                    });
                } else {
                    // 400 or 500
                    this.setState({
                        loading: false,
                        hasMore: false
                    });
                }
            }
        };
        this.mentorPreview = (mentor)=>{
            this.setState({
                previewMentor: mentor,
                modalOpen: true
            });
        };
        this.closePreview = ()=>{
            this.setState({
                modalOpen: false
            });
        };
        this.handleSearch = (ev, query)=>{
            window.location.assign(this.createForwardURL(query, this.props.courseFilter, this.props.languageFilter));
        };
        this.handleCourseClick = (course)=>{
            console.log('course', course);
            let courses;
            if (this.props.courseFilter.includes(course)) {
                courses = this.props.courseFilter.filter((i)=>i != course
                );
            } else {
                courses = [
                    ...this.props.courseFilter,
                    course
                ];
            }
            window.location.assign(this.createForwardURL(this.props.searchQuery, courses, this.props.languageFilter));
        };
        this.createForwardURL = (searchTerm, courses, languages)=>{
            if (!searchTerm && courses.length + languages.length == 0) {
                return '/mentors';
            }
            let fetchURL = `/mentors?`;
            let andRequired = false;
            if (searchTerm) {
                fetchURL += `q=${searchTerm}`;
                andRequired = true;
            }
            if (courses.length > 0) {
                fetchURL += (andRequired ? '&' : '') + courses.map((i)=>`courses=${i}`
                ).join('&');
                andRequired = true;
            }
            if (languages.length > 0) {
                fetchURL += (andRequired ? '&' : '') + languages.map((i)=>`languages=${i}`
                ).join('&');
            }
            return fetchURL;
        };
    }
}
// COMPONENT

const courseFilters = [
    'Arabic A Literature',
    'Biology',
    'Business Management',
    'Chemistry',
    'Chinese B',
    'Computer Science',
    'Design Technology',
    'Economics',
    'English A Language and Literature',
    'English B',
    'English Language and Performace',
    'Environmental Systems and Societies',
    'French AB Initio',
    'French B',
    'Geography',
    'German AB',
    'German B',
    'Global Politics',
    'History',
    'History of Europe',
    'Information Technology in a Global Society',
    'Korean A',
    'Language Arabic B',
    'Language B Chinese',
    'Language B German',
    'Language Spanish B',
    'Mandarin B',
    'Math Analysis and Approaches',
    'Mathematics Analysis and Approaches',
    'Mathematics Analysis and Interpretations',
    'Modern Green A Language and Literature',
    'Music',
    'Philosophy',
    'Physics',
    'Polish A',
    'Psychology',
    'Spanish A',
    'Spanish AB Initio',
    'Spanish B',
    'Swahili B',
    'Theatre',
    'Visual Arts'
];
const LIMIT = 15;
const allQuerifier = (term)=>{
    let asNumber = parseInt(term);
    if (isNaN(asNumber)) {
        return [
            'name',
            'country',
            'timezone'
        ].map((x)=>`${x}=${term}`
        ).join('&');
    } else {
        return `ibYear=${asNumber}`;
    }
};
const createFetchURL = (searchTerm, courses, languages)=>{
    if (!searchTerm && courses.length + languages.length == 0) {
        return '/api/mentors?';
    }
    let fetchURL = `/api/mentors/search?`;
    let andRequired = false;
    if (searchTerm) {
        fetchURL += allQuerifier(searchTerm);
        andRequired = true;
    }
    if (courses.length > 0) {
        fetchURL += (andRequired ? '&' : '') + courses.map((i)=>`courses[]=${i}`
        ).join('&');
        andRequired = true;
    }
    if (languages.length > 0) {
        fetchURL += (andRequired ? '&' : '') + languages.map((i)=>`languages[]=${i}`
        ).join('&');
    }
    return fetchURL;
};
async function getServerSideProps({ query  }) {
    let { q , courses , languages  } = query;
    courses = courses ? Array.isArray(courses) ? courses : [
        courses
    ] : [];
    languages = languages ? Array.isArray(languages) ? languages : [
        languages
    ] : [];
    q = q || null;
    let dataQuery = createFetchURL(q, courses, languages);
    console.log(dataQuery);
    // Only load in the list
    const fetchURL = (0,utils/* sanitizeUrl */.N)(`${dataQuery}&limit=${LIMIT}&offset=0`);
    const res = await fetch(fetchURL);
    let props = {
        initialMentors: [],
        hasMore: false,
        limit: LIMIT,
        offset: 0,
        dataQuery: dataQuery,
        searchQuery: q ? q : null,
        error: null,
        courseFilter: courses,
        languageFilter: languages
    };
    if (res.status === 404) {
        // Non-Existent
        props = {
            ...props,
            error: 'No mentors matched this criteria.'
        };
    } else if (res.status !== 200) {
        // An oopsie
        console.log(res);
        try {
            console.log(await res.json());
        } catch  {
            console.log('could not parse json');
        }
        props = {
            ...props,
            error: 'Internal Server Error'
        };
    } else {
        // All good
        const result = await res.json();
        props = {
            ...props,
            initialMentors: result.data,
            offset: result.data.length,
            hasMore: result.data.length === LIMIT
        };
    }
    return {
        props
    };
}


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

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

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
var __webpack_exports__ = __webpack_require__.X(0, [190,664,268,884,772], () => (__webpack_exec__(6097)));
module.exports = __webpack_exports__;

})();