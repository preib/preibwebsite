import { apiUrl } from '../../config';
import Head from 'next/head';
import TopReview from '../../components/mentors/TopReview';
import OtherMentorsView from '../../components/mentors/OtherMentorsView';
import ContactMentorForm from '../../components/mentors/ContactMentorForm';

function Chip({ text }) {
    return (
        <div className="m-1 py-1 px-2 rounded-full border-2 border-white shadow-lg">
            <p className="text-xs">{ text }</p>
        </div>
    );
}


export default function MentorByUUID({ mentor }) {
    const chips = [ mentor.country, ...mentor.languages ];
    return (
        <>
            <Head>
                <title>PreIb | {mentor.firstName}</title>
                <meta name="description" content="PreIB is a community of mentors that are interested in guiding prospecting IB students in their IB journey" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div style={{ marginTop: '8vh' }}>
                <div className="container mx-auto px-4">

                    <div className="pt-4">
                        <div className="mx-auto shadow-xl rounded-xl" style={{maxWidth: '840px'}}>
                            <div className="rounded-xl shadow-lg">
                                <div className="rounded-t-xl px-8 py-3" style={{maxHeight:'440px', background: `url("${mentor.bannerUrl}")`}}>
                                    <div className="grid grid-cols-1 place-items-center md:flex md:flex-row md:flex-wrap text-white">
                                        <div className="rounded-full border-4 border-white" style={{width: '210px', height: '210px'}}>
                                            <img src={mentor.imageUrl} className="rounded-full w-full h-full" />
                                        </div>

                                        <div className="mt-4 md:mt-auto md:ml-4">
                                            <h1 className="text-2xl font-bold">
                                                { mentor.firstName } { mentor.lastName }
                                            </h1>
                                            <div className="mt-2">
                                                {/* Rating Goes Here */}
                                            </div>

                                            <div className="mt-2 flex flex-column flex-wrap">
                                                {
                                                    chips.slice(0, 5).map( (chip, idx) => <Chip key={idx} text={chip} /> )
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-b-xl bg-gray-50 px-8 py-3">
                                    <p className="mt-2 text-black text-md">
                                        {
                                            mentor.description
                                        }
                                    </p>
                                </div>
                            </div>
                            
                            <div className="px-4 pb-2">
                                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 space-x-2">
                                    <div className="">
                                        <div className="ml-4">
                                            <TopReview mentor={mentor} />
                                        </div>
                                    </div>
                                    
                                    <div className="h-full">
                                        <div className="h-auto">
                                            <div className="mt-8 md:mt-0 rounded-lg border-2 border-gray-600 p-3">
                                            <h2 className="text-xl text-black font-bold">
                                                Subjects
                                            </h2>

                                            <div className="mt-4">
                                                {
                                                    mentor.courses.map( ({ courseName, strength: confidence }, idx) => (
                                                            <div key={idx} className={`${ idx > 0 ? 'mt-2' : ''} grid grid-cols-1 sm:grid-cols-2`}>
                                                                <h5 className="text-md font-bold text-gray-500">
                                                                    { courseName }
                                                                </h5>

                                                                <div className={`overflow-hidden h-6 rounded-full border-2 border-gray-500`}>
                                                                    <div style={{ width: `${confidence}%`}} className={`h-full bg-${ confidence < 25 ? 'red' : ( confidence >= 60 ? 'green' : 'yellow') }-400`}></div>
                                                                </div>
                                                            </div>
                                                        )
                                                    )
                                                }
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <ContactMentorForm mentor={mentor}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-12">
                        <hr />

                        <h3 className="mt-4 text-xl font-bold text-black">
                            Other students also viewed:
                        </h3>

                        
                        <OtherMentorsView />
                    </div>
                </div>
            </div>
        </>
    )
}

export async function getServerSideProps(context) {
    const { uuid } = context.query;
    const res = await fetch(`${apiUrl}/mentors/${uuid}`);
    if (res.status == 404) {
        return {
            redirect: {
                destination: '/404',
                permanent: false
            }
        }
    } else if (res.status == 200) {
        const data = await res.json();
        // console.log(data.data);
        return {
            props: {
                mentor: data.data
            }
        }
    } else {
        // 500
    }
}
