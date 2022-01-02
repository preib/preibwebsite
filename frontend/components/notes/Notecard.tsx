import noteCardStyle from "../../styles/NoteCard.module.scss";

const NoteCard = ({title, grade, subjects})=>{
    return(
        <div className={`${noteCardStyle.card} rounded-4xl overflow-hidden`}>
            <div className="border-2 h-56"></div>
            <div className="p-5">
                <h1 className=" font-bold text-xl">
                    {title}
                </h1>
                <div className="flex flex-row justify-center gap-x-2 mt-4">
                    {[...subjects, grade].map((subject, idx)=>(
                        <div className="border-2 rounded-full py-1 px-2" key={idx}>
                            <p className="text-md">{subject}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default NoteCard;