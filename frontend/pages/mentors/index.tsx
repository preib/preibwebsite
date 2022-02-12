import Head from 'next/head';
import Link from 'next/link';
import { Component } from 'react';
import Modal from "react-modal";
import { baseUrl } from '../../config';
import { sleep, sanitizeUrl } from '../../utils';
import NewMentorCard from '../../components/mentors/MentorCard';
import InfiniteScroller from '../../components/InfiniteScroller';
import LoadingDiv from '../../components/LoadingDiv';
import SearchBox from '../../components/mentors/SearchBox';
import TopPadding from '../../components/global/topPadding';
import Collapsible from 'react-collapsible';
import { mentorType } from '~/types/mentor';
import MentorPreview from '~/components/mentors/MentorPreview';

// COMPONENTS
function Button({ active, children, onClick}) {
	return (
		<div
			className={`py-1 px-5 font-bold ${ active ? 'bg-blue-100' : '' } rounded-lg mt-2 border-2
			border-${ active ? 'blue-600' : 'gray-100' } ${ active ? 'text-blue-600' : 'text-black'}
			focus:ring focus:outline-none hover:shadow-lg transition-all
			duration-100 hover:scale-105 cursor-pointer m-1`} onClick={ () => onClick() }>
			{ children }
		</div>
	);
}

// TYPES
interface IProps {
	initialMentors: any[];
	hasMore: boolean;
	limit: number;
	offset: number;
	dataQuery: string;
	searchQuery: string;
	error: string;
	courseFilter: string[],
	languageFilter: string[]
}
interface IState {
	mentors: any;
	hasMore: any;
	limit: any;
	offset: any;
	loading: boolean;
	dataQuery: any;
	modalOpen: boolean;
	previewMentor: mentorType | null
}

// COMPONENT
export default class Mentors extends Component<IProps, IState>{
	state = {
		mentors: this.props.initialMentors || [],
		hasMore: this.props.hasMore == undefined ? true : this.props.hasMore,
		limit: this.props.limit || 15,
		offset: this.props.offset || 0,
		loading: false,
		dataQuery: this.props.dataQuery,
		modalOpen: false,
		previewMentor: null
	}

	loadMore = async () => {
		if (this.state.hasMore && !this.state.loading) {
			this.setState({ loading: true });
			const { limit, offset } = this.state;
			const res = await fetch(`${this.state.dataQuery}&limit=${limit}&offset=${offset}`);
			// await sleep(2000);
			if (res.status == 200) {
				const data = await res.json();
				this.setState((state) => {
					return {
						mentors: [ ...state.mentors, ...data.data],
						offset: offset + limit,
						loading: false,
						hasMore: data.data.length == limit
					}
				});
			} else {
				// 400 or 500
				this.setState({
					loading: false,
					hasMore: false
				});
			}
		}
	}

	mentorPreview = (mentor: mentorType) => {
		this.setState({previewMentor: mentor, modalOpen: true});
	}

	closePreview = () => {
		this.setState({modalOpen: false});
	}

	handleSearch = (ev, query) => {
		window.location.assign(this.createForwardURL(query, this.props.courseFilter, this.props.languageFilter));
	}

	handleCourseClick = (course) => {
		console.log('course', course);
		let courses;
		if (this.props.courseFilter.includes(course)) {
			courses = this.props.courseFilter.filter( (i) => i != course );
		} else {
			courses = [ ...this.props.courseFilter, course ];
		}
		window.location.assign(this.createForwardURL(this.props.searchQuery, courses, this.props.languageFilter));
	}

	createForwardURL = (searchTerm?: string, courses?: string[], languages?: string[]) => {
		if ( !searchTerm && courses.length + languages.length == 0) {
			return '/mentors';
		}
	
		let fetchURL = `/mentors?`;
	
		let andRequired = false;
		if (searchTerm) {
			fetchURL += `q=${searchTerm}`;
			andRequired = true;
		}
	
		if (courses.length > 0) {
			fetchURL += ( andRequired ? '&' : '' ) + courses.map( (i) => `courses=${i}` ).join('&');
			andRequired = true;
		}
	
		if (languages.length > 0) {
			fetchURL += ( andRequired ? '&' : '' ) + languages.map( (i) => `languages=${i}` ).join('&');
		}
	
		return fetchURL;
	}

	render() {
		console.log(this.props.courseFilter);
		return (
			<>
				<Head>
					<title>PreIb | Mentors</title>
					<meta name="description" content="PreIB is a community of mentors that are interested in guiding prospecting IB students in their IB journey" />
					<link rel="icon" href="/favicon.ico" />
				</Head>
				
				<TopPadding></TopPadding>
				<Modal
					isOpen={this.state.modalOpen}
					onRequestClose={this.closePreview}
				>
					<MentorPreview mentor={this.state.previewMentor} />
				</Modal>
				<h1 className="text-6xl font-bold mb-6 text-center mt-24">Mentor Profiles</h1>
				{/* Search Box Here */}
				<div id="search" className="m-3 grid place-items-center">
					<div className="w-11/12 md:w-5/6 lg:w-8/12">
						<SearchBox initialValue={this.props.searchQuery} onSearch={this.handleSearch} />
					</div>
				</div>
				<div id="mainBody" className="m-1 lg:m-7 md:grid grid-cols-4 xl:grid-cols-7">
					{/* Categories here */}
					<div id="categories" className="col-span-1">
						<Collapsible
							trigger={
								(
									<div className="mb-3 flex">
										<span className="mr-2 text-blue-700">
											<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
											<path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
											</svg>
										</span>
										<h3 className="text-lg font-bold">Filter By Courses</h3>
									</div>
								)
							}
							triggerWhenOpen={ 
								(
									<div className="mb-3 flex">
										<span className="mr-2 text-gray-400">
											<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
												<path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
											</svg>
										</span>
										<h3 className="text-lg font-bold">Filter By Courses</h3>
									</div>
								)
							}>
							<div className="inline-flex md:inline-block flex-wrap">
								{
									courseFilters.map( (course, idx) => (
											<Button key={idx} active={this.props.courseFilter.includes(course)} onClick={this.handleCourseClick.bind(this, course)}>
													{ course }
											</Button>
										)
									)
								}
							</div>
						</Collapsible>
					</div>
	
					{/* Mentors Here */}
					<div id="mentorlist" className="lg:p-3 w-full col-span-3 xl:col-span-6">
						{
							this.props.error ?
							<div id="error" className="grid place-items-center h-full">
								<h3 className="text-3xl text-red-700 font-bold">{ this.props.error }</h3>
							</div>
							: 
							<>
								<InfiniteScroller onReachEnd={this.loadMore}>
									<div id="mentorgrid" className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
										{
											this.state.mentors.map( (mentor) => <NewMentorCard key={mentor.id} mentor={mentor} previewMentor={this.mentorPreview}/> )
										}
									</div>
								</InfiniteScroller>
								<div id="loading" className="mt-5">
									{ this.state.loading && <LoadingDiv message="Loading..." /> }
								</div>
							</>
						}
						
					</div>
				</div>
			</>
		)
	}
}

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

const allQuerifier = (term) => {
	let asNumber = parseInt(term);
	if (isNaN(asNumber)) {
		return ['name', 'country', 'timezone'].map( (x) => `${x}=${term}` ).join('&');
	} else {
		return `ibYear=${asNumber}`;
	}
};

const createFetchURL = (searchTerm?: string, courses?: string[], languages?: string[]) => {
	if ( !searchTerm && courses.length + languages.length == 0) {
		return '/api/mentors?';
	}

	let fetchURL = `/api/mentors/search?`;

	let andRequired = false;
	if (searchTerm) {
		fetchURL += allQuerifier(searchTerm);
		andRequired = true;
	}

	if (courses.length > 0) {
		fetchURL += ( andRequired ? '&' : '' ) + courses.map( (i) => `courses[]=${i}` ).join('&');
		andRequired = true;
	}

	if (languages.length > 0) {
		fetchURL += ( andRequired ? '&' : '' ) + languages.map( (i) => `languages[]=${i}` ).join('&');
	}

	return fetchURL;
}

export async function getServerSideProps({ query }) {
	let { q, courses, languages } = query;

	courses = courses ? ( Array.isArray(courses) ? courses: [ courses ] ) : [];
	languages = languages ? ( Array.isArray(languages) ? languages : [ languages ] ) : [];
	q = q || null;

	let dataQuery = createFetchURL(q, courses, languages);

	console.log(dataQuery);

	// Only load in the list
	const fetchURL = sanitizeUrl(`${dataQuery}&limit=${LIMIT}&offset=0`);
	const res = await fetch(fetchURL);

	let props: IProps = {
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
		console.log(res)
		try { console.log(await res.json()) } catch { console.log('could not parse json') }
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
			hasMore: result.data.length === LIMIT,
		};
	}

	return { props };
}
