import Head from 'next/head';
import { apiUrl } from '../../config';

import Progress from 'react-progressbar';
import TopPadding from '../../components/topPadding';

import { mentorType, subjectStrengthType } from "../../types/mentor";
import progressStyle from "../../styles/Progress.module.scss";
import mentorStyle from "../../styles/Mentors.module.scss"

export default function MentorByUUID({ mentor }) {
    return (
        <div className="px-32">
            <Head>
                <title>PreIb | {mentor.firstname}</title>
                <meta name="description" content="PreIB is a community of mentors that are interested in guiding prospecting IB students in their IB journey" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <TopPadding />
            {/* TOP BIT */}
            <div className="h-20">
                <h1>{mentor.firstname} {mentor.lastname}.</h1>
            </div>

            {/* Middle Bits */}
            <div className="grid grid-cols-7 gap-x-12 mb-6">
                <div className="col-span-4">
                    <p className="text-lg mb-6">{mentor.description}</p>
                    <h2 className="font-bold text-3xl">Top Review</h2>
                    {/* TODO REVIEW HERE */}
                </div>
                <div className="col-span-3 rounded-xl border-2 py-8 px-10">
                    <h2 className="font-bold text-3xl mb-4">Subjects</h2>
                    <div className="flex flex-col gap-y-1">
                    {mentor.subjectStrength.map((i: subjectStrengthType) => (
                        <div className="flex flex-row items-center justify-between">
                            <p>{i.subject}</p>
                            <Progress className={progressStyle.subjectProgress} completed={i.strength*10} />
                        </div>
                    ))}
                    </div>
                </div>
            </div>
            
            {/* WANT FORM */}
            <form className="mb-16">
                <h1 className="text-4xl font-bold mb-4">Want {mentor.firstName} {mentor.lastName}.?</h1>
                <h2 className="text-xl font-semibold mb-6">Fill out this form and you will be paired with your mentor within 2 buisness days</h2>
                <div className={mentorStyle.form + " grid grid-cols-6 gap-y-2 gap-x-2"}>
                    <input type="text" className="col-span-2" placeholder="Full Name"/>
                    <input type="text" className="col-span-2" placeholder="Grade/Year"/>
                    <input type="text" className="col-span-2" placeholder="Country"/>
                    <input type="text" className="col-span-3" placeholder=""/>
                    <input type="email" className="col-span-3" placeholder="Email Address"/>
                    <input type="text" className="col-span-2" placeholder="Name of Mentor"/>
                    <input type="text" className="col-span-4" placeholder="Why do you need Tutoring"/>
                </div>
            </form>

            <div>
                <h1 className="text-4xl font-bold">Other Students also viewed:</h1>
            </div>
        </div>
    )
}

export async function getServerSideProps(context) {
    const { uuid } = context.query;
    
    // TEST DATA
    const dev = process.env.NODE_ENV !== 'production';
    if(dev){
        return {
            props: {
                mentor: {
                    firstName: 'Edwin',
                    lastName: 'Z',
                    country: 'Canada',
                    subjectStrength:[
                        { subject: "IB Math HL", strength:5},
                        { subject: "IB Computer Science HL", strength:5},
                        { subject: "IB Physics HL", strength:5},
                        { subject: "IB Chemistry SL", strength:5},
                        { subject: "IB English HL", strength:5},
                        { subject: "IB French SL", strength:5},
                    ] as subjectStrengthType[],
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
        // TODO 500
        return {
            redirect: {
                destination: '/500',
                permanent: false
            }
        }
    }
}
