import personCardStyles from '/styles/PersonCard.module.scss'
import {motion} from "framer-motion"

const PersonCard = ({ name, title, label }) => {
    const conv = { "Founder": "bg-[#f72585] text-white", "Director": "bg-yellow-400 text-white", "Intern": "bg-green-500 text-white", }
    const states = {
        hidden: { opacity: 0, y: 150, x:0, transition: { duration: 0.5, ease: "easeInOut" } },
        visible: { opacity: 1, y: 0, x:0, transition: { duration: 0.5, ease: 'easeInOut', }, },
    };
    return(
        <motion.div
            className="border-2 rounded-3xl relative flex flex-col items-center"
            initial="hidden"
            whileInView="visible"
            variants={states}
            viewport={{ once: true, margin: "100px" }}
        >
            <span className={conv[label] + " px-2 py-1 font-bold rounded-xl absolute"} style={{ "transform": "translateY(-50%)" }}>
                {label}
            </span>
            <div className="py-12 flex flex-col gap-y-2 items-center">
                <div className={personCardStyles.circle + " overflow-hidden"}>
                    <img src="" alt={`Image of ${name}`} />
                </div>
                <div className="font-black font-title text-2xl">{name}</div>
                <div className="text-gray-600 font-bold text-lg"> {title} </div>
            </div>
        </motion.div>
    )
}
export default PersonCard;