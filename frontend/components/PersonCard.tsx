import Link from 'next/link'
import personCardStyles from '../styles/PersonCard.module.scss'
const PersonCard = ({ name, title }) => {
    return(
        <div className="p-4 py-10 border-2 rounded-3xl flex flex-col gap-y-2 items-center relative mt-24">
            <div className={personCardStyles.circle}></div>
            <div className={personCardStyles.circlePlaceholder}></div>
            <div className="font-bold text-2xl">
                {name}
            </div>
            <div className=" text-2xl">
                {title}
            </div>
            <Link href="">
                <a className={`${personCardStyles.lml} text-lg inline-flex flex-row items-center text-blue-400 font-semibold`} style={{ marginTop: "auto" }}>
                    Learn More
                    <svg className="w-6 h-6 ml-3 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                </a>
            </Link>
        </div>
    )
}
export default PersonCard;