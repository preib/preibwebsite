import TopPadding from "components/global/topPadding"
import NoteCard from "components/notes/Notecard"

export default function Notes() {
    return(
        <>
            {/* top padder */}
            <TopPadding />
            <div className="px-12 pt-10">
                <div className="flex flex-row items-center justify-between mb-12">
                    <h1 className="font-black font-title text-5xl">Pre-IB Notes for all subjects</h1>
                    <button className="rounded-full bg-pink-500 border-2 px-10 py-3 font-bold">Filter</button>
                </div>
                <div className="grid grid-cols-4 gap-6">
                    <NoteCard title="Grade 9 Mathematics" grade="9" subjects={["Mathematics", "Pre-IB"]}/>
                    <NoteCard title="Grade 10 Biology " grade="10" subjects={["Biology", "Pre-IB"]} />
                    <NoteCard title="Grade 9 Mathematics" grade="9" subjects={["Mathematics", "Pre-IB"]} />
                    <NoteCard title="Grade 9 Mathematics" grade="9" subjects={["Mathematics", "Pre-IB"]} />
                </div>
            </div>
        </>
    )
}