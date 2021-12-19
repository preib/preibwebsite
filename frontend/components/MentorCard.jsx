import Image from 'next/image';
import Link from 'next/link';
import styles from '/styles/card.module.scss'

function Chip({ text }) {
    return (
        <div className="m-1 py-1 px-2 rounded-full border-2 border-gray-600 shadow-lg">
            <p className="text-xs">{ text }</p>
        </div>
    );
}

export default function MentorCard({ mentor }) {
    const chips = [ mentor.country, ...mentor.languages, ...mentor.courses.map( (item) => item[0] ) ];
    return (
        <div className="m-2 border-2 p-6 rounded-3xl transition-shadow duration-300 shadow-lg">
            <div className="flex flex-row flex-wrap h-full">
                <div className="flex justify-center w-full">
                    <Image src="/anon.jpg" width="100%" height="100%" />
                </div>
                <h3 className="text-lg font-bold mt-2">{ `${mentor.firstname} ${mentor.lastname}` }</h3>
                <div className="flex flex-column flex-wrap">
                    {
                        chips.slice(0, 5).map( (chip, idx) => <Chip key={idx} text={chip} /> )
                    }
                </div>
                <div className="flex-auto">
                    <p>
                        { `${mentor.description.slice(0, 100)}...` }
                    </p>
                </div>
                <div className="flex justify-center w-full mt-auto">
                    <Link href={ `/mentors/${mentor.id}` }>
                        <a className={`${styles.lml} text-sm inline-flex flex-row items-center font-semibold`} style={{marginTop: "auto"}}>
                            View { mentor.firstname }
                            <svg className="w-6 h-6 ml-3 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                            </svg>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
};
