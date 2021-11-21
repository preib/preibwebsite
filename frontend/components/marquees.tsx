import Marquee from "react-easy-marquee";
import Circle from "../components/circle"
import marqueeStyle from "../styles/marquees.module.scss"

const getRandomInt = (min: number, max: number): number => {
    return min + Math.floor(Math.random() * (max - min));
}
const marqueees = (props: any) => {
    return(
        <div>
            <Marquee duration={getRandomInt(12000, 18000)} height="50px" className="mb-10 w-full" reverse={false}>
                <div className={marqueeStyle.marquee + " flex flex-row items-center w-full"}>
                    <h1>50+ Mentors</h1>
                    <Circle />
                    <h1>25+ Countries</h1>
                    <Circle />
                    <h1>45+ Schools</h1>
                    <Circle />
                    <h1>5000+ Students</h1>
                    <Circle />
                </div>
            </Marquee>
            <Marquee duration={getRandomInt(12000, 18000)} height="50px" className="w-full" reverse={true}>
                <div className={marqueeStyle.marquee + " flex flex-row items-center w-full"}>
                    <h1>100+ Notes</h1>
                    <Circle />
                    <h1>15+ Textbooks</h1>
                    <Circle />
                    <h1>2 Partnerships</h1>
                    <Circle />
                    <h1>10+ Awards</h1>
                    <Circle />
                </div>
            </Marquee>
        </div>
    )
}

export default marqueees