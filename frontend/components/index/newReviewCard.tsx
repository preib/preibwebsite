import reviewStyles from '/styles/reviews.module.scss'

const NewReviewCard = ({ name, review, imgURL, description}) => {
    return (
        <div className={`${reviewStyles.box} flex flex-col items-center border-2 border-slate-400 rounded-3xl py-5 p-8 gap-x-4 z-10 mx-auto`}>
            <p>{review}</p>
            <div className="text-black flex flex-row items-center w-full my-2 justify-between">
                <div className={`${reviewStyles.prof_img} flex-none border-2 rounded-full overflow-hidden`}>
                    <img src={imgURL} className="h-full w-full object-cover" alt="" />
                </div>
                <div>
                    <h3 className='font-bold text-xl'>{name}</h3>
                    <p className="text-gray-400">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default NewReviewCard;