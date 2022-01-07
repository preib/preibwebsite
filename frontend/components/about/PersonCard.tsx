import Link from 'next/link'
import personCardStyles from '/styles/PersonCard.module.scss'
const PersonCard = ({ name, title, label }) => {
    const conv = {
        "Founder": "bg-[#f72585] text-white",
        "Director": "bg-yellow-400 text-white",
        "Intern": "bg-green-500 text-white",
    }
    return(
        <div className="border-2 rounded-3xl relative flex flex-col items-center">
            <span className={conv[label] + " px-2 py-1 font-bold rounded-xl absolute"} style={{ "transform": "translateY(-50%)" }}>
                {label}
            </span>
            <div className="py-12 flex flex-col gap-y-2 items-center">
                <div className={personCardStyles.circle}></div>
                <div className="font-black font-title text-2xl">
                    {name}
                </div>
                <div className="text-gray-600 font-bold text-lg">
                    {title}
                </div>
            </div>
        </div>
    )
}
export default PersonCard;