import Head from 'next/head';
import Link from 'next/link';
import { Component } from 'react';
import { baseUrl } from '../../config';
import { sleep } from '../../utils';
import NewMentorCard from '../../components/mentors/NewMentorCard';
import InfiniteScroller from '../../components/mentors/InfiniteScroller';
import LoadingDiv from '../../components/mentors/LoadingDiv';
import SearchBox from '../../components/mentors/SearchBox';
import TopPadding from '../../components/global/topPadding';

// COMPONENTS
function Button(props) {
	return (
		<div
			className="py-1 px-5 bg-blue-400 rounded-full font-bold border-2 border-blue-600
			text-white focus:ring focus:outline-none hover:shadow-lg transition-all
			duration-100 hover:scale-105 cursor-pointer m-1">
			{ props.children }
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
}
interface IState {
	mentors: any;
	hasMore: any;
	limit: any;
	offset: any;
	loading: boolean;
	dataQuery: any;
}

// COMPONENT
export default class Mentors extends Component<IProps, IState>{
	state = {
		mentors: this.props.initialMentors || [],
		hasMore: this.props.hasMore == undefined ? true : this.props.hasMore,
		limit: this.props.limit || 15,
		offset: this.props.offset || 0,
		loading: false,
		dataQuery: this.props.dataQuery
	}

	loadMore = async () => {
		if (this.state.hasMore && !this.state.loading) {
			this.setState({ loading: true });
			const { limit, offset } = this.state;
			const res = await fetch(`${this.state.dataQuery}limit=${limit}&offset=${offset}`);
			await sleep(2000);
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

	handleSearch = (ev, query) => {
		window.location.assign(`/mentors?q=${query}`);
	}

	render() {
		return (
			<>
				<Head>
					<title>PreIb | Mentors</title>
					<meta name="description" content="PreIB is a community of mentors that are interested in guiding prospecting IB students in their IB journey" />
					<link rel="icon" href="/favicon.ico" />
				</Head>
				
				<TopPadding></TopPadding>
				<h1 className="text-6xl font-bold mb-6 text-center mt-24">Mentor Profiles</h1>
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
						<div className="inline-flex md:inline-block flex-wrap">
							{
								Object.entries(easyEndpoints).map( ([_, { name, link }]) => (
									<Button key={name}>
										<Link href={link}>
											<a className="text-white no-underline hover:no-underline hover:text-white">{name}</a>
										</Link>
									</Button>
								))
							}
						</div>
					</div>
	
					{/* Mentors Here */}
					<div id="mentorlist" className="p-3 w-full col-span-6">
						{
							this.props.error == undefined ?
							<>
								<InfiniteScroller onReachEnd={this.loadMore}>
								<div id="mentorgrid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
									{
										this.state.mentors.map( (mentor) => <NewMentorCard key={mentor.id} mentor={mentor} /> )
									}
								</div>
								</InfiniteScroller>
								<div id="loading" className="mt-5">
									{ this.state.loading && <LoadingDiv message="Loading..." /> }
								</div>
							</>
							
							: 
							<div id="error" className="grid place-items-center h-full">
								<h3 className="text-3xl text-red-700 font-bold">{ this.props.error }</h3>
							</div>
						}
						
					</div>
				</div>
			</>
		)
	}
}

const easyEndpoints = {
	all: {
		name: 'All',
		link: "/mentors",
		query: "/api/mentors?"
	},
	biology: {
		name: 'Biology',
		link: "/mentors?q=biology",
		query: "/api/mentors/search?courses[]=Biology&",
	},
	chemistry: {
		name: 'Chemistry',
		link: "/mentors?q=chemistry",
		query: "/api/mentors/search?courses[]=Chemistry&",
	},
	mathematics: {
		name: 'Mathematics',
		link: "/mentors?q=mathematics",
		query: "/api/mentors/search?courses[]=Mathematics&",
	},
	physics: {
		name: 'Physics',
		link: "/mentors?q=physics",
		query: "/api/mentors/search?courses[]=Physics&",
	},
	engineering: {
		name: 'Engineering',
		link: "/mentors?q=engineering",
		query: "/api/mentors/search?courses[]=Engineering&",
	},
	literature: {
		name: 'Literature',
		link: "/mentors?q=literature",
		query: "/api/mentors/search?courses[]=Literature&",
	},
};

const LIMIT = 15;

const allQuerifier = (term) => {
	return ['country', 'city', 'school'].map( (x) => `${x}=${term}` ).join('&') + `&languages[]=${term}&courses[]=${term}`
};

const sanitize = (url) => {
	return url[0] == '/' ? baseUrl + '/' + url.slice(1) : url;
}

export async function getServerSideProps({ query }) {
	let { q } = query;
	const finalQuery = q || 'all';
	const data = easyEndpoints[finalQuery.toLowerCase()];

	let dataQuery;
	if (data !== undefined)  dataQuery = data.query;
	else dataQuery = `/api/mentors/search?${allQuerifier(q)}&`;

	// Only load in the list
	const fetchURL = sanitize(`${dataQuery}limit=${LIMIT}&offset=0`)
	const res = await fetch(fetchURL);

	// Error processing
	if (res.status === 404) {
		let props = {
			props: {
				hasMore: false,
				dataQuery,
				error: 'No mentors matched this criteria.',
				searchQuery: ""
			}
		}
		if (q != undefined) {
			props.props.searchQuery = q;
		}
		return props;
	} else if (res.status !== 200) {
		console.log(res)
		try {console.log(await res.json())}
		catch {console.error('Error parsing JSON')}
		let props = {
			props: {
				hasMore: false,
				dataQuery,
				error: 'Internal Server error',
				searchQuery: q
			}
		}
		if (q != undefined) {
			props.props.searchQuery = q;
		}
		return props;
	}
	
	const result = await res.json();
	let props = {
		props: {
			initialMentors: result.data,
			limit: LIMIT,
			offset: result.data.length,
			hasMore: result.data.length === LIMIT,
			dataQuery,
			searchQuery:"",
		}
	}
	if (q != undefined) {
		props.props.searchQuery = q;
	}
	return props;    
}
