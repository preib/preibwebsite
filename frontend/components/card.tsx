import Link from 'next/link'
import Image from 'next/image'
import cardStyles from '/styles/card.module.scss'

const cardComponent = ({cardTitle, description, link, cardNumber}) => {
    return (
        <div className="border-0 bg-white grid grid-cols-3 gap-y-6 p-10 rounded-3xl transition-shadow duration-300 hover:shadow-lg">
            {/* TEXT SIDE */}
            <div className="col-span-2 flex flex-col">
                <h2 className="text-3xl font-bold mb-8">{cardTitle}</h2>
                <p className="text-lg mb-8">{description}</p>
                <Link href={link}>
                    <a className={`${cardStyles.lml} text-lg inline-flex flex-row items-center text-blue-400 font-semibold`} style={{marginTop: "auto"}}>
                        Learn More
                        <svg className="w-6 h-6 ml-3 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                    </a>
                </Link>
            </div>

            {/* IMAGE SIDE */}
            <div className="col-span-3 order-first sm:order-last sm:col-span-1 grid place-items-center">
                <Image src={`/cardIcon/cardIcon (${cardNumber}).png`} layout="intrinsic" width="264" height="186" alt="Card Image"></Image>
            </div>
        </div>
    );
}

export default cardComponent;