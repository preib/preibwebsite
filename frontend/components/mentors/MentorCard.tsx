import Link from 'next/link';
import styles from '/styles/card.module.scss';
import { mentorType } from 'types/mentor';

function Chip({ text }) {
    return (
        <div className="m-1 py-1 px-2 rounded-full border-2 border-gray-600">
            <p className="text-xs">{ text }</p>
        </div>
    );
}

export default function NewMentorCard({ mentor, previewMentor } : { mentor: mentorType, previewMentor: Function }) {
    const chips = [ mentor.country, ...mentor.languages ];
    return (
        <div className="mb-4 min-h-[450px] m-2 rounded-2xl shadow-lg flex flex-col" onClick={() => previewMentor(mentor)}>
            <img src={mentor.imageUrl} className="w-full max-h-[250px] overflow-hidden rounded-t-2xl object-cover" />
            <div className="flex flex-col flex-auto items-center w-full p-6 bg-white rounded-b-2xl">
                <h3 className="text-2xl font-bold mb-4">{mentor.firstName} {mentor.lastName}</h3>

                <div className="flex flex-column flex-wrap justify-center">
                    {
                        chips.slice(0, 5).map((chip, idx) => <Chip key={idx} text={chip} />)
                    }
                </div>
                
                <div className="mt-3 flex-auto overflow-hidden">
                    <p>
                        { mentor.description.slice(0, 50)  + (mentor.description.length > 50 ? '...' : '') }
                    </p>
                </div>
                
                <div className="flex-initial mt-3 flex justify-center w-full">
                    <Link href={"#"}>
                    {/* <Link href={`/mentors/${mentor.id}`}> */}
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
    )
}
