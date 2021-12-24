import { apiUrl } from '../../config';
import Head from 'next/head';
import TopReview from '../../components/TopReview';
import OtherMentorsView from '../../components/OtherMentorsView';
import ContactMentorForm from '../../components/mentors/ContactMentorForm';
import TopPadding from '../../components/global/topPadding';
import { mentorType, subjectStrengthType } from '../../types/mentor';
import Progress from 'react-progressbar';
import progressStyle from "/styles/Progress.module.scss";

function Chip({ text }) {
    return (
        <div className="m-1 py-1 px-2 rounded-full border-2 border-gray-600 shadow-lg">
            <p className="text-xs">{ text }</p>
        </div>
    );
}


export default function MentorByUUID({ props }) {
    const mentor = props.mentor as mentorType
    const chips = [ mentor.country, ...mentor.languages ];
    return (
        <div>
            <Head>
                <title>PreIb | {mentor.firstName}</title>
                <meta name="description" content="PreIB is a community of mentors that are interested in guiding prospecting IB students in their IB journey" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <TopPadding />

            {/* TOP BIT */}
            <div className="bg-red-300 flex flex-row flex-wrap justify-center" style={{ maxHeight: '440px' }}>
                <div className="rounded-full" style={{ width: '210px', height: '210px' }}>
                    <img src={mentor.image_url} alt={`Image of ${mentor.firstName}`} className="rounded-full w-full h-full" />
                </div>

                <div className="ml-4">
                    <h1 className="text-black text-2xl font-bold">
                        {mentor.firstName} {mentor.lastName}
                    </h1>
                    <div className="mt-2">
                        {/* Rating Goes Here */}
                    </div>

                    <div className="mt-2 flex flex-column flex-wrap">
                        { chips.slice(0, 5).map((chip, idx) => <Chip key={idx} text={chip} />) }
                    </div>
                </div>
            </div>

            {/* MID SECTION */}
            <div className="grid grid-cols-7 gap-x-12 mb-6 px-32 mt-16">
                <div className="col-span-4">
                    <p className="text-lg mb-6">{mentor.description}</p>
                    <h2 className="font-bold text-3xl">Top Review</h2>
                    <div className="mt-6">
                        <TopReview mentor={mentor} />
                    </div>
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
            <div className="my-12 px-32">
                <ContactMentorForm mentor={mentor} />
            </div>
            
            <hr />
            {/* OTHER VIEWED */}
            <div className="mt-8 px-32">
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
                    description: 'Hi! My name is Edwin Zheng and I am a IB2 Student! In my free time, I do programming, maths, play soccer, and play the piano. I would love to mentor you in the pre-IB Diploma Programme!',
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
