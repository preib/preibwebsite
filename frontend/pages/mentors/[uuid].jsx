import { apiUrl } from '../../config';
import Head from 'next/head';
import TopReview from '../../components/TopReview';
import OtherMentorsView from '../../components/OtherMentorsView';
import ContactMentorForm from '../../components/ContactMentorForm';

function Chip({ text }) {
    return (
        <div className="m-1 py-1 px-2 rounded-full border-2 border-gray-600 shadow-lg">
            <p className="text-xs">{ text }</p>
        </div>
    );
}


export default function MentorByUUID({ mentor }) {
    const chips = [ mentor.country, ...mentor.languages, ...mentor.courses.map( (item) => item[0] ) ];
    return (
        <>
            <Head>
                <title>PreIb | {mentor.firstname}</title>
                <meta name="description" content="PreIB is a community of mentors that are interested in guiding prospecting IB students in their IB journey" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div style={{ marginTop: '8vh' }}>
                <div className="container mx-auto px-4">
                    <div className="flex flex-row flex-wrap justify-center" style={{maxHeight:'440px'}}>
                        <div className="rounded-full" style={{width: '210px', height: '210px'}}>
                            <img src={mentor.image_url} className="rounded-full w-full h-full" />
                        </div>

                        <div className="ml-4">
                            <h1 className="text-black text-2xl font-bold">
                                { mentor.firstname } { mentor.lastname }
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

                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 space-x-2
                    ">
                        <div className="">
                            <p className="text-lg text-gray-600 w-full">
                                { mentor.description }
                            </p>

                            <div className="mt-6">
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
                                        mentor.courses.map( ([ courseName, confidence ], idx) => (
                                            <div key={idx} className={`${ idx > 0 ? 'mt-2' : ''} grid grid-cols-1 sm:grid-cols-2`}>
                                                <h5 className="text-md font-bold text-gray-500">
                                                    { courseName }
                                                </h5>

                                                <div className={`overflow-hidden h-6 rounded-full border-2 border-gray-500`}>
                                                    <div style={{ width: `${confidence}%`}} className={`h-full bg-${ confidence < 25 ? 'red' : ( confidence >= 60 ? 'green' : 'yellow') }-200`}></div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8">
                        <ContactMentorForm mentor={mentor}/>
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
        return {
            props: {
                mentor: data.data
            }
        }
    } else {
        // 500
    }
}
