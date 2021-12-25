import { apiUrl } from '../../config';
import Head from 'next/head';
import Image from 'next/image';
import TopReview from '../../components/mentors/TopReview';
import OtherMentorsView from '../../components/mentors/OtherMentorsView';
import ContactMentorForm from '../../components/mentors/ContactMentorForm';
import TopPadding from '../../components/global/topPadding';
import { mentorType, subjectStrengthType } from '../../types/mentor';
import Progress from 'react-progressbar';
import progressStyle from "/styles/Progress.module.scss";

function Chip({ text }) {
    return (
        <div className="m-1 py-1 px-2 rounded-full border-2 bg-white shadow-md">
            <p className="text-sm">{ text }</p>
        </div>
    );
}

type proptype={mentor:mentorType}
export default function MentorByUUID(props: proptype) {
    const mentor = props.mentor as mentorType
    const chips = [ mentor.country, ...mentor.languages ];
    return (
        <div className="pt-16 w-4/5 mx-auto">
            <Head>
                <title>PreIb | {mentor.firstName}</title>
                <meta name="description" content="PreIB is a community of mentors that are interested in guiding prospecting IB students in their IB journey" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* TOP BIT */}
            <div className="rounded-b-xl shadow-lg">
                {/* TOP WITH RED */}
                <div className="bg-red-300 rounded-t-xl h-60 relative p-4 flex items-end justify-end">
                    {/* FLOATING BIT */}
                    <div className="flex flex-row items-center gap-x-4 absolute left-4 bottom-[-27%]">
                        <div className="inline-block rounded-full border-4 border-gray-300 bg-white w-40 h-40">
                            <Image src={mentor.image_url} alt={`Image of ${mentor.firstName}`} width='210' height='210'/>
                        </div>
                        <div>
                            <h1 className="text-black text-3xl font-bold">
                                {mentor.firstName} {mentor.lastName}
                            </h1>
                            {/* Rating Goes Here */}
                            <div className="mt-2 flex flex-row">
                                {[...Array(mentor.rating)].map((a, idx)=>
                                    <svg className="w-10 h-10 fill-yellow-300 stroke-yellow-400" key={idx} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
                                )}
                                {[...Array(5-mentor.rating)].map((a, idx) =>
                                    <svg className="w-10 h-10" fill="none" stroke="rgb(0, 0, 0)" key={idx} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
                                )}
                            </div>
                            <div className="mt-2 mb-4 flex flex-column flex-wrap">
                                {chips.slice(0, 5).map((chip, idx) => <Chip key={idx} text={chip} />)}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-14 flex flex-row">
                    <p className="text-xl w-4/5 p-6">{mentor.description}</p>
                    <div className='w-1/5 flex items-end justify-end px-10'>
                        <button className="font-bold text-xl p-4 flex flex-row gap-x-2 border-b-4 border-green-400">
                            <svg className="w-6 h-6" fill="black" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg>
                            Bookmarked
                        </button>
                    </div>
                </div>
            </div>

            {/* MID SECTION */}
            <div className="grid grid-cols-7 gap-x-12 mb-6 mt-16">
                <div className="col-span-4">
                    <ContactMentorForm mentor={mentor} />
                </div>
                <div className="col-span-3 rounded-xl border-2 py-8 px-10">
                    <h2 className="font-bold text-3xl mb-4">Subjects</h2>
                    <div className="flex flex-col gap-y-1">
                        {mentor.subjectStrength.map((i: subjectStrengthType, idx) => (
                            <div className="flex flex-row items-center justify-between" key={idx}>
                                <p>{i.subject}</p>
                                <Progress className={progressStyle.subjectProgress} completed={i.strength * 10}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CONTACT FORM */}
            <div className="my-12">
                <h2 className="font-bold text-3xl">Top Review</h2>
                <div className="mt-6">
                    <TopReview mentor={mentor} />
                </div>
            </div>
            
            <hr />
            {/* OTHER VIEWED */}
            <div className="mt-8">
                <h1 className="text-4xl font-bold">Other Students also viewed:</h1>
                <OtherMentorsView />
            </div>
        </div>
    )
}

export async function getServerSideProps(context) {
    const { uuid } = context.query;

    // TEST DATA
    const dev = process.env.NODE_ENV !== 'production';
    if (dev) {
        return {
            props: {
                mentor: {
                    firstName: 'Edwin',
                    lastName: 'Z',
                    country: 'Canada',
                    subjectStrength: [
                        { subject: "IB Math HL", strength: 5 },
                        { subject: "IB Computer Science HL", strength: 5 },
                        { subject: "IB Physics HL", strength: 5 },
                        { subject: "IB Chemistry SL", strength: 5 },
                        { subject: "IB English HL", strength: 5 },
                        { subject: "IB French SL", strength: 5 },
                    ] as subjectStrengthType[],
                    languages: [ 'English', 'French' ],
                    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/2048px-User_icon_2.svg.png",
                    description: 'Hi! My name is Edwin Zheng and I am a IB2 Student! In my free time, I do programming, maths, play soccer, and play the piano. I would love to mentor you in the pre-IB Diploma Programme!',
                    rating: 5,
                } as mentorType
            }
        }
    }

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
        return {
            redirect: {
                destination: '/500',
                permanent: false
            }
        }
    }
}
