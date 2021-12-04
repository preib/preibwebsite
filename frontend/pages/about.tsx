import aboutStyle from '../styles/about.module.scss';
import PersonCard from '../components/PersonCard';
export default function Home() {
    return (
        <div className="px-20">
            {/* top padder */}
            <div style={{ "height":"56px"}}></div>


            <div className="grid grid-cols-4 place-items-center mb-24" style={{height:"38rem"}}>
                <h1 className="font-black leading-none" style={{fontSize:"150px"}}>Meet the Team</h1>
                <div className="col-span-3">
                    <img src="" alt="" />
                </div>
            </div>

            {/* Nicole */}
            <div className="grid grid-cols-5 mb-32">
                <div className="col-span-2">
                    <img className={aboutStyle.circle} src="../public/model.png" alt="" />
                </div>
                <div className="col-span-3">
                    <h1 className="font-bold text-6xl mb-5">Nicole Pardal</h1>
                    <h2 className="font-bold text-4xl mb-8">Founder and CEO</h2>
                    <p className="text-xl">
                        Nicole Pardal is a computer science student who did the IB diploma program, and formed pre-iB in her junior year of high school. In her free time, she is a competitive tennis player, dndneijncjenefndijkff fill this space up
                    </p>
                </div>
            </div>
            {/* Shabicha */}
            <div className="grid grid-cols-5 mb-20">
                <div className="col-span-2">
                    <img className={aboutStyle.circle} src="../public/model.png" alt="" />
                </div>
                <div className="col-span-3">
                    <h1 className="font-bold text-6xl mb-5">Shabicha Sureskumar</h1>
                    <h2 className="font-bold text-4xl mb-8">Co-president</h2>
                    <p className="text-xl">
                        Nicole Pardal is a computer science student who did the IB diploma program, and formed pre-iB in her junior year of high school. In her free time, she is a competitive tennis player, dndneijncjenefndijkff fill this space up
                    </p>
                </div>
            </div>

            <div>
                <h1 className="text-5xl font-bold mb-10">Excecutive Team</h1>
                <div className="grid grid-cols-4 gap-x-10 gap-y-2">
                    <PersonCard name="Edwin Zheng" title="Software Developer"/>
                    <PersonCard name="Ronniel Gandhe" title="Software Developer"/>
                    <PersonCard name="Kamalpreet Singh" title="Software Developer"/>
                    <PersonCard name="Anna Kawaguchi" title="Software Developer"/>
                    <PersonCard name="Edwin Zheng" title="Software Developer" />
                    <PersonCard name="Ronniel Gandhe" title="Software Developer" />
                    <PersonCard name="Kamalpreet Singh" title="Software Developer" />
                    <PersonCard name="Anna Kawaguchi" title="Software Developer" />
                </div>
            </div>
        </div>
    )
}