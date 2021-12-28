import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/card.module.scss';
import { mentorType } from 'types/mentor';

function Chip({ text }) {
    return (
        <div className="m-1 py-1 px-2 rounded-full border-2 border-gray-600 shadow-lg">
            <p className="text-xs">{ text }</p>
        </div>
    );
}

export default function NewMentorCard({ mentor } : { mentor: mentorType }) {
    const chips = [ mentor.country, ...mentor.languages ];
    return (
        <div className="mb-4 h-690 m-2 rounded-2xl shadow-lg flex">
            <div className="relative w-full h-full">
                {/* <Image src='/anon.jpg' width="100%" height="100%" /> */}
                <img src={mentor.imageUrl} className="w-full h-full rounded-2xl" />
            </div>

            <div className="relative w-full h-full -ml-100">
                <div className="absolute h-1/2 flex flex-row flex-wrap w-full bottom-0 p-6 bg-white rounded-b-2xl">
                    <h3 className="text-lg font-bold mt-2">{mentor.firstName} {mentor.lastName}</h3>

                    <div className="mt-3 w-full">
                        <div className="flex flex-column flex-wrap">
                            {
                                chips.slice(0, 5).map( (chip, idx) => <Chip key={idx} text={chip} /> )
                            }
                        </div>
                    </div>
                    
                    <div className="mt-3 flex-auto overflow-hidden">
                        <p>
                            { `${mentor.description.slice(0, 50)}...` }
                        </p>
                    </div>
                    
                    <div className="flex-initial mt-3 flex justify-center w-full">
                        <Link href={`/mentors/${mentor.id}`}>
                            <a className={`${styles.lml} text-sm inline-flex flex-row items-center font-semibold`} style={{marginTop: "auto"}}>
                                { `View ${ mentor.firstName }` }
                                <svg className="w-6 h-6 ml-3 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
