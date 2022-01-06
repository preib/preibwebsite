import { Component } from 'react';
import TopPadding from "components/global/topPadding"
import NoteCard from "components/notes/Notecard"
import InfiniteScroller from 'components/InfiniteScroller';
import { sanitizeUrl } from 'utils';
import SearchBox from 'components/mentors/SearchBox';
import Link from 'next/link';
import LoadingDiv from 'components/LoadingDiv';

function Button(props) {
	return (
		<div
			className="py-1 px-5 font-bold bg-blue-400 rounded-full border-2 border-blue-600 text-white
			focus:ring focus:outline-none hover:shadow-lg transition-all
			duration-100 hover:scale-105 cursor-pointer m-1">
			{ props.children }
		</div>
	);
}

interface IProps {
	initialNotes: any[],
	hasMore: boolean,
	limit: number,
	offset: number,
	baseUrl: string,
	gradeFilter: number,
	error: any,
	searchQuery: string
}

interface IState {
	notes: any[],
	hasMore: boolean,
	limit: number,
	offset: number,
	loading: boolean,
	baseUrl: string,
	gradeFilter: number,
}

export default class Notes extends Component<IProps, IState> {
	state: IState = {
		notes: this.props.initialNotes || [],
		hasMore: this.props.hasMore == undefined ? true : this.props.hasMore,
		limit: this.props.limit || 15,
		offset: this.props.offset || 0,
		loading: false,
		baseUrl: this.props.baseUrl,
		gradeFilter: this.props.gradeFilter
	}

	loadMore = async () => {
		if (this.state.hasMore && !this.state.loading) {
			this.setState({ loading: true });

			const { baseUrl, limit, offset, gradeFilter } = this.state;
			let fetchUrl = `${baseUrl}?limit=${limit}&offset=${offset}`;
			if (gradeFilter && !isNaN(gradeFilter)) {
				fetchUrl += `&grade=${gradeFilter}`;
			}
			const res = await fetch(fetchUrl);

			if (res.status === 200) {
				const data = await res.json();
				this.setState((state) => {
					return {
						notes: [ ...state.notes, ...data.data ],
						offset: offset + data.data.length,
						loading: false,
						hasMore: data.data.length === limit
					}
				});
			} else {
				this.setState({
					loading: false,
					hasMore: false
				});
			}
		}
	}

	handleSearch = (ev, query) => {
		if (query) {
			if (query !== this.props.searchQuery) {
				window.location.assign(`/notes?q=${query}${this.state.gradeFilter === null ? '' : `&grade=${this.state.gradeFilter}` }`);
			}
		} else {
			window.location.assign(`/notes`)
		}
	}

	render() {
		let currentUrl = `/notes${ this.props.searchQuery == null ? '?' : `?q=${this.props.searchQuery}&` }`;
		console.log(this.state.notes)
		return (
			<>
				<TopPadding />
				<div className="px-12 pt-10">
					<div className="flex flex-row items-center justify-between mb-">
						<h1 className="font-black font-title text-5xl">Pre-IB Notes for all subjects</h1>
					</div>

					<div className="my-6">
						<SearchBox initialValue={this.props.searchQuery} onSearch={this.handleSearch} />
					</div>

					<div className="m-7 md:grid grid-cols-7">
						<div className="col-span-1">
							<h3 className="text-lg font-bold mb-3">Filter By Grade</h3>
							<div className="inline-flex md:inline-block flex-wrap">
								{
									[ 9, 10, 11, 12 ].map( (grade, idx) => 
										(
											<Button key={idx}>
												<Link href={`${currentUrl}filter=${grade}`}>
													<a className="text-white no-underline hover:no-underline hover:text-white">{ `Grade ${grade}` }</a>
												</Link>
											</Button>
										)
									)
								}
								<Button>
									<Link href={currentUrl}>
										<a className="text-white no-underline hover:no-underline hover:text-white">None</a>
									</Link>
								</Button>
							</div>
						</div>

						<div className="p-3 w-full col-span-6">
							{
								this.props.error === null ?
								<>
									<InfiniteScroller onReachEnd={this.loadMore}>
										<div className="grid grid-cols-3 gap-6">
											{
												this.state.notes.map( (note) => 
													<NoteCard
														key={note.id}
														id={note.id}
														grade={note.grade.toString()}
														title={note.title}
														subjects={[ note.courseName, note.grade < 11 ? 'Pre-IB' : 'IB' ]}
														imageURL={note.preview}
													/>
												)
											}
										</div>
									</InfiniteScroller>
								</>
								:
								<div className="grid place-items-center h-full">
									<h3 className="text-3xl text-red-700 font-bold">{ this.props.error  }</h3>
								</div>
							}
							<div className="mt-5">
								{ this.state.loading && <LoadingDiv message="Loading..." /> }
							</div>
						</div>
					</div>
				</div>
			</>
		)
	}
}

const LIMIT = 15;

export async function getServerSideProps({ query }) {
	let { q, filter } = query;
	filter = parseInt(filter); //grade filter
	
	let baseUrl = q === undefined ? '/api/notes' : `/api/notes/search/${q}`;
	
	let fetchUrl = `${baseUrl}?limit=${LIMIT}&offset=0`;
	if (filter && !isNaN(filter)) {
		fetchUrl += `&grade=${filter}`;
	}

	// console.log(sanitizeUrl(fetchUrl));
	const res = await fetch(sanitizeUrl(fetchUrl));
	
	let props: { props: IProps };
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
	} else if (res.status !== 200 ) {
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
				hasMore : result.data.length === LIMIT,
				baseUrl,
				gradeFilter: filter || null,
				error: null,
				searchQuery: q || null
			}
		};
	}

	return props;
};
