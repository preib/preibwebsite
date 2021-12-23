import Marquee from "react-fast-marquee";
import Gear from "../components/gear"
import marqueeStyle from "/styles/marquees.module.scss"
const marqueees = (props: any) => {
    const [tickOneSpeed, tickTwoSpeed] = [110, 60]
    return(
        <>
            <div className="my-10">
                <Marquee gradient={false} speed={tickOneSpeed} style={{overflow:"hidden"}}>
                    <div className={marqueeStyle.marquee + " flex flex-row items-center w-full"}>
                        <h1>50+ Mentors</h1>
                        <Gear />
                        <h1>25+ Countries</h1>
                        <Gear />
                        <h1>45+ Schools</h1>
                        <Gear />
                        <h1>5000+ Students</h1>
                        <Gear />
                    </div>
                </Marquee>
            </div>
            <div className="my-10">
                <Marquee gradient={false} speed={tickTwoSpeed} style={{overflow:"hidden"}}>
                    <div className={marqueeStyle.marquee + " flex flex-row items-center w-full"}>
                        <h1>100+ Notes</h1>
                        <Gear />
                        <h1>15+ Textbooks</h1>
                        <Gear />
                        <h1>2 Partnerships</h1>
                        <Gear />
                        <h1>10+ Awards</h1>
                        <Gear />
                    </div>
                </Marquee>
            </div>
        </>
    )
}

export default marqueees