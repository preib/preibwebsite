import Head from 'next/head';
import Link from 'next/link';
import { Component } from 'react';
import { sanitizeUrl } from 'utils';
import NewMentorCard from 'components/mentors/NewMentorCard';
import InfiniteScroller from 'components/InfiniteScroller';
import LoadingDiv from 'components/LoadingDiv';
import SearchBox from 'components/mentors/SearchBox';
import TopPadding from 'components/global/topPadding';
import { GetServerSideProps } from 'next'
import BeatLoader from "react-spinners/BeatLoader";
import { motion, AnimatePresence } from "framer-motion"


// TYPES
interface IProps {
	initialMentors: any[];
	hasMore: boolean;
	limit: number;
	offset: number;
	queryURL: string;
	searchQuery: string;
	error: string | null;
	courseFilter: string[] | null;
	courseFilterSelected: object;
}
interface IState {
	mentors: any;
	hasMore: any;
	limit: any;
	offset: any;
	loading: boolean;
	queryURL: any;
	searchLoading: boolean;
	isError: boolean;
	errorMessage: string | null;
	courseFilter: string[] | null;
	courseFilterSelected: object;
	searchQuery: string;
}

// COMPONENT
export default class Mentors extends Component<IProps, IState>{
	state = {
		// displayed data
		mentors: this.props.initialMentors || [],
		
		// UI
		loading: false,
		searchLoading: false,
		courseFilterSelected:this.props.courseFilterSelected,

		// Errors
		isError: !!this.props.error,
		errorMessage: this.props.error,
		
		// Functionality for getting more of the same
		hasMore: this.props.hasMore == undefined ? true : this.props.hasMore,
		limit: this.props.limit || 15,
		offset: this.props.offset || 0,
		queryURL: this.props.queryURL,
		searchQuery: this.props.searchQuery,
		courseFilter: this.props.courseFilter,
	} as IState;

	loadMore = async () => {
		if (this.state.hasMore && !this.state.loading) {
			this.setState({ loading: true });
			const { limit, offset } = this.state;
			const res = await fetch(`${this.state.queryURL}limit=${limit}&offset=${offset}`);
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
				this.setState({ loading: false, hasMore: false });
			}
		}
	}

	search = async (query: string) => {
		// start loading
		this.setState({
			searchLoading: true,
		});
		const props = await queryBackendInitial(query, this.state.courseFilter);
		this.setState({
			mentors: props.initialMentors || [],

			loading: false,
			searchLoading: false,
			
			isError: !!props.error,
			errorMessage: props.error,
			
			hasMore: props.hasMore == undefined ? true : props.hasMore,
			limit: props.limit || 15,
			offset: props.offset || 0,
			queryURL: props.queryURL,
			searchQuery: query,
		})
	}

	handleSearch = (query: string) => {
		window.history.pushState(
			{ page: 1 },
			"[WHAT DOES THIS DO???]",
			createMentorURL(query, this.state.courseFilter)
		);
		this.search(query);
	}

	buttonTap = (courseName: string) => {
		let newCourseFilter: string[];
		if(courseName == "All"){
			this.setState({
				courseFilterSelected: {
					'All': true,
					"Biology": false,
					"Chemistry": false,
					"Mathematics": false,
					"Physics": false,
					"Engineering": false,
					"Literature": false,
				}
			});
			// NO COURSE FILTER
			newCourseFilter = null;
		}else{
			this.setState({
				courseFilterSelected:{
					...this.state.courseFilterSelected,
					"All": false,
					[courseName]: !this.state.courseFilterSelected[courseName],
				}
			})

			// if there are existing values in courseFilter
			if (this.state.courseFilter) {
				// if the course is already in the array, remove it
				if (this.state.courseFilter.includes(courseName)){
					newCourseFilter = this.state.courseFilter.filter(course => course != courseName);
					if(newCourseFilter.length == 0){
						newCourseFilter = null;
						this.setState({ courseFilterSelected: { 'All': true} });
					}
				}
				// if the course is not in the array, add it
				else
					newCourseFilter = this.state.courseFilter.concat(courseName)
			}
			// if there are no existing values in courseFilter
			else newCourseFilter = [courseName]
		}
		
		
		this.setState({ courseFilter: newCourseFilter }, ()=>{
			window.history.pushState(
				{ page: 1 },
				"[WHAT DOES THIS DO???]",
				createMentorURL(this.state.searchQuery, newCourseFilter) || "?"
			);
			this.search(this.state.searchQuery);
		});
	}

	render() {
		return (
			<>
				<Head>
					<title>Pre-IB | Mentors</title>
					<meta name="description" content="PreIB is a community of mentors that are interested in guiding prospecting IB students in their IB journey" />
					<link rel="icon" href="/favicon.ico" />
				</Head>
				
				<TopPadding></TopPadding>
				<h1 className="text-6xl font-bold mb-6 text-center md:mt-20">Mentor Profiles</h1>
				{/* Search Box Here */}
				<div id="search" className="m-3 grid place-items-center">
					<div className="w-11/12 md:w-5/6 lg:w-8/12">
						<SearchBox initialValue={this.props.searchQuery} onSearch={this.handleSearch} />
					</div>
				</div>
				<div id="mainBody" className="m-7 md:grid grid-cols-7">
					{/* Categories here */}
					<div id="categories" className="col-span-1">
						<h3 className="text-lg font-bold mb-3">Categories</h3>
						<div className="inline-flex md:inline-block flex-wrap max-w-full">
							{
								SUBJECTS.map((name) => (
									<div className={"py-1 px-5 font-bold rounded-full border-2 focus:ring focus:outline-none hover:shadow-lg transition-all duration-100 hover:scale-105 cursor-pointer m-1 " + 
										(
											this.state.courseFilterSelected[name]
											?"bg-blue-400 border-blue-600 text-white"
											:""
										)
									}
										onClick={() => { this.buttonTap(name) }} key={name}
										
									>
										{name}
									</div>
								))
							}
						</div>
					</div>
	
					{/* Mentors Here */}
					<AnimatePresence exitBeforeEnter>
					{ this.state.searchLoading
						?
							<motion.div
								className="col-span-6 grid place-items-center"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.2 }}
								key="loader"
							>
								<BeatLoader color="#FF0000" loading={this.state.searchLoading} size={70} />
							</motion.div>
						:
							<motion.div
								id="mentorlist" className="p-3 w-full col-span-6"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.2 }}
								key="mentorlist"
							>
								{ this.state.isError == false
									?
										<>
											<InfiniteScroller onReachEnd={this.loadMore}>
												<div id="mentorgrid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
													{
														this.state.mentors.map((mentor) => <NewMentorCard key={mentor.id} mentor={mentor} />)
													}
												</div>
											</InfiniteScroller>
											<div id="loading" className="mt-5">
												{this.state.loading && <LoadingDiv message="Loading..." />}
											</div>
										</>
									:
										<div id="error" className="grid place-items-center h-full">
											<h3 className="text-3xl text-red-700 font-bold">{this.state.errorMessage}</h3>
										</div>
								}
							</motion.div>
					}
					</AnimatePresence>
				</div>
			</>
		)
	}
}

const SUBJECTS = ["All", "Biology", "Chemistry", "Mathematics", "Physics", "Engineering", "Literature"];
const LIMIT = 15;

const createMentorURL = (searchTerm?: string, courseFilter?: string[]) => {
	const fakeURL = new URL("https://www.fake.com")
	if (searchTerm) fakeURL.searchParams.set("q", searchTerm);
	if (courseFilter) fakeURL.searchParams.set("course", courseFilter.join(","));
	return fakeURL.search
}

const queryBackendInitial = async (searchTerm?: string, courseFilter?: string[]): Promise<IProps> =>{	
	// Create Fetch URL
	const queryURL = !!searchTerm || !!courseFilter ? "/api/mentors/search?" : "/api/mentors?";
	const fetchURL = new URL(sanitizeUrl(queryURL))
	if(searchTerm)
		for (const field of ['country', 'city', 'school', 'languages[]'])
			fetchURL.searchParams.append(field, searchTerm)
	
	fetchURL.searchParams.set('limit', LIMIT.toString());
	fetchURL.searchParams.set('offset', "0");
	if(courseFilter) fetchURL.searchParams.set('courses[]', courseFilter.join(','));

	const res = await fetch(fetchURL.href);
	let courseFilterSelected: object;
	if(courseFilter)
		courseFilterSelected = {
			'All': courseFilter.includes('All'),
			"Biology": courseFilter.includes('Biology'),
			"Chemistry": courseFilter.includes('Chemistry'),
			"Mathematics": courseFilter.includes('Mathematics'),
			"Physics": courseFilter.includes('Physics'),
			"Engineering": courseFilter.includes('Engineering'),
			"Literature": courseFilter.includes('Literature'),
		}
	else
		courseFilterSelected = {
			'All': true,
			"Biology": false,
			"Chemistry": false,
			"Mathematics": false,
			"Physics": false,
			"Engineering": false,
			"Literature": false,
		}
	
	// ERROR CATCHING
	// Not Found
	if (res.status === 404)
		return {
			initialMentors: null,
			limit: null,
			offset: null,
			courseFilter,
			courseFilterSelected,

			hasMore: false,
			queryURL,
			searchQuery: searchTerm || null,
			error: 'No mentors matched this criteria.',
		}
	// Server Error
	else if (res.status !== 200)
		return {
			initialMentors: null,
			limit: null,
			offset: null,
			courseFilter,
			courseFilterSelected,

			hasMore: false,
			queryURL,
			searchQuery: searchTerm || null,
			error: "Internal Server error",
		}

	const result = await res.json()
	return{
		initialMentors: result.data,
		limit: LIMIT,
		offset: result.data.length,
		hasMore: result.data.length === LIMIT,
		courseFilter,
		courseFilterSelected,

		queryURL,
		searchQuery: searchTerm || null,
		error: null,
	}
}

export const getServerSideProps: GetServerSideProps = async ({ query }) =>{
	let { q, course } = query as { q: string, course: string|undefined };
	if(course) return { props: await queryBackendInitial(q || null, course.split(","))}
	else return { props: await queryBackendInitial(q || null, null)}
}
