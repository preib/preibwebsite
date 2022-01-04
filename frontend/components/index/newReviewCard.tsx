import reviewStyles from '../../styles/reviews.module.scss'
import { motion } from 'framer-motion';

const NewReviewCard = ({ name, review, imgURL}) => {
    return (
        <div className={`${reviewStyles.box} flex flex-col items-center border-2 border-slate-400 rounded-3xl py-4 p-8 gap-x-4 z-10 mx-auto`}>
            <p>{review}</p>
            <div className="text-black flex flex-row items-center w-3/4 my-2 justify-between">
                <div className={`${reviewStyles.prof_img} flex-none border-2 rounded-full`}>
                    <img src={imgURL} alt="" />
                </div>
                <h3 className='font-bold text-xl'>{name}</h3>
            </div>
        </div>
    )
}

export default NewReviewCard;