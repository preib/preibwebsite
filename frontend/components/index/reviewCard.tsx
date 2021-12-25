import reviewStyles from '../../styles/reviews.module.scss'
import { motion } from 'framer-motion';

const ReviewCard = ({ name, review, top, left }) => {
    const states = {
        hidden: {
            opacity: 0,
            y: 300,
            transition: {
                duration: 0.5,
                ease: "easeInOut"
            }
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.5,
                duration: 0.5,
                ease: 'easeInOut',
            },
        },
    };
    return (
        <motion.div
            className={`${reviewStyles.box} absolute flex flex-row items-center border-2 rounded-3xl py-4 p-8 gap-x-4 z-10`}
            style={{ top: `${top}%`, left:`${left}%` }}

            initial="hidden"
            whileInView="visible"
            variants={states}
            viewport={{ once: false, margin:"100px" }}
        >
            <div className={`${reviewStyles.prof_img} flex-none`}></div>
            <div className={reviewStyles.prof_dsc}>
                <p>{review}</p>
                <h3 className='font-bold text-xl'> - {name}</h3>
            </div>
        </motion.div>
    )
}

export default ReviewCard;