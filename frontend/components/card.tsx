import Link from 'next/link'
import styles from '../styles/index.module.scss'
const cardComponent = (props) => {
    return (
        <div className="border-2 grid grid-cols-3 p-6 rounded-xl transition-shadow duration-300 hover:shadow-lg">
            {/* TEXT SIDE */}
            <div className="col-span-2">
                <h2 className="text-3xl font-bold mb-8">{props.cardTitle}</h2>
                <p className="text-lg mb-8">{props.description}</p>
                <Link href={props.link}>
                    <a className={`${styles.lml} text-lg inline-flex flex-row items-center text-blue-400 font-semibold`}>
                        Learn More
                        <svg className="w-6 h-6 ml-3 hover:ml-5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                    </a>
                </Link>
            </div>

            {/* IMAGE SIDE */}
            <div className="col-span-1">Image Here</div>
        </div>
    );
}

export default cardComponent;