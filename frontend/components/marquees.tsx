import Ticker from 'react-ticker'
import Circle from "../components/circle"
import marqueeStyle from "../styles/marquees.module.scss"

const getRandomInt = (min: number, max: number): number => {
    return min + Math.floor(Math.random() * (max - min));
}
const marqueees = (props: any) => {
    const [tickOneSpeed, tickTwoSpeed] = [getRandomInt(6,15), getRandomInt(6,15)]
    return(
        <div>
            <div className="my-10">
                <Ticker speed={tickOneSpeed}>
                    {({ index }) => (
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
                    )}
                </Ticker>
            </div>
            <div className="my-10">
                <Ticker speed={tickTwoSpeed}>
                    {({ index }) => (
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
                    )}
                </Ticker>
            </div>
        </div>
    )
}

export default marqueees