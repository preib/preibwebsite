// react
import Head from 'next/head'
import { useEffect, useState } from 'react';

// Index
import indexStyles from 'styles/index.module.scss'
import TopPadding from 'components/global/topPadding';

// COMPONENTS
import CardComponent from 'components/index/card'
import HowItWorks from 'components/index/howItWorks';
import Reviews from 'components/index/reviews';
import WorldElement from 'components/index/WorldElement';

// Marquee stuff
import Marquee from "react-fast-marquee";
import Gear from 'components/index/gear';
import marqueeStyle from "/styles/marquees.module.scss"


export default function Home() {
	const adjectives = ["Resilient", "Curious", "Creative", "Bold", "Determined", "Intelligent", "Motivated"]
	const adjectiveColours = ["#F72585", "#2822FD", "#20D3FF", "#17D4A2"]
	const getRandomInt = (min: number, max: number): number => min + Math.floor(Math.random() * (max - min));
	
	let [leftValue, setLeftValue] = useState(0)
	let [displayWord, setDisplayWord] = useState(adjectives[getRandomInt(0, adjectives.length)]);
	let [displayColour, setDisplayColour] = useState(adjectiveColours[getRandomInt(0, adjectiveColours.length)]);
	
	const cursorMoveTime = 1500;
	const totalCycleTime = 5000;
	const waitTime= 100;
	const loop = ()=>{
		setDisplayWord(adjectives[getRandomInt(0, adjectives.length)])
		setDisplayColour(adjectiveColours[getRandomInt(0, adjectiveColours.length)])

		setLeftValue(103)
		// wait
		setTimeout(() => {
			setLeftValue(0)
		}, totalCycleTime - cursorMoveTime - waitTime)
	}
	useEffect(() => {
		loop()
		const timeout = setInterval(loop, totalCycleTime);
		return () => clearInterval(timeout);
	}, []);

	// Marquee data
	const [tickOneSpeed, tickTwoSpeed] = [110, 60]
	return (
		<div className={indexStyles.backgroundColourSetter}>
			<Head>
				<title>PreIB | Home</title>
				<meta name="description" content="PreIB is a community of mentors that are interested in guiding prospecting IB students in their IB journey" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<TopPadding />
			<div className="sm:h-page flex flex-col gap-y-4 md:grid md:grid-rows-1 md:grid-cols-2 md:mb-24">
				{/* LEFT SIDE */}
				<div className="grid place-items-center h-full px-4 md:px-20 relative">
					<div>
						<h1 className="text-7xl font-black mb-6">Pre-IB Students are</h1>
						<div id="adjectiveHolder" className="relative mb-6 overflow-hidden">
							{/* Text */}
							<span className="text-6xl font-bold relative leading-none select-none" style={{ color: displayColour }}>
								{displayWord}
								<div className="absolute w-full h-full flex items-center " style={{ backgroundColor:"rgb(227, 236, 253)" ,transition: `left ${cursorMoveTime}ms ease`, top: "5%", left: leftValue.toString() + "%" }}>
									<div className="h-full w-1 rounded-3xl bg-black" style={{ height: "80%" }}></div>
								</div>
							</span>
							{/* Underline */}
							<div className="text-5xl h-1 w-3/4 bg-black mt-4"></div>
						</div>

						{/* Blurb Under Title */}
						<p className="mb-8">
							At pre-ib, we strongly believe that each student has the potential to thrive and succeed in the IB Dipolma programme.
							Enjoy this free website featuring dozens of resources such as notes and notes and IB mentors for support
						</p>

						{/* Button Row */}
						<div className="flex flex-row gap-x-6">
							<button
								className="py-2 px-8 rounded-full font-bold
								text-white focus:ring focus:outline-none hover:shadow-lg
								transition-all duration-100 hover:scale-105"
								style={{backgroundColor:"#F72585"}}
							>
								Explore Resources
							</button>
							<button
								className="py-2 px-8 bg-white rounded-full font-bold border-2
								text-black focus:ring focus:outline-none hover:shadow-lg
								transition-all duration-100 hover:scale-105"
							>
								Explore Mentors
							</button>
						</div>
					</div>
				</div>

				{/* RIGHT SIDE */}
				<div className="w-full h-full">
					<WorldElement className="sm:relative"/>
					{/* <img src="/model.png" alt="3D model of world" className="relative" style={{ maxWidth: "110%", top: "5%", right: "-10%" }} /> */}
				</div>
			</div>
			<div className="min-h-page px-10 md:px-40 mt-16 pb-4 flex flex-col justify-center">
				<h1 className="text-4xl font-bold mb-10 text-center">What we do</h1>
				<div className="grid md:grid-cols-1 lg:grid-cols-2 grid-rows-2 gap-5">
					<CardComponent cardNumber={1} cardTitle="Mentorship" link="/mentors" description="Over fifty members from 21 different countries ready to assist you"/>
					<CardComponent cardNumber={2} cardTitle="Resources" link="/notes" description="Collection of hundreds of resources for Grade 9 and 10 students in pre-IB"/>
					<CardComponent cardNumber={3} cardTitle="Blogs & Tips" link="/blog" description="Get Insider Tipstips from the pre-IB blog, allowing you to truely succeed."/>
					{/* TODO What link do you even put here 🔽 */}
					<CardComponent cardNumber={4} cardTitle="Personalized" link="/" description="Personalized long-term planning for pre-IB students and mentees"/>
				</div>
			</div>

			{/* MARQUEES */}
			<div className="mt-20 mb-10">
				<Marquee gradient={false} speed={tickOneSpeed} style={{ overflow: "hidden" }}>
					<div className={marqueeStyle.marquee + " flex flex-row items-center w-full"}>
						<h1>Mentors</h1>
						<Gear />
						<h1>International Organization</h1>
						<Gear />
						<h1>International Schools</h1>
						<Gear />
						<h1>Many Students</h1>
						<Gear />
					</div>
				</Marquee>
			</div>
			<div className="my-10">
				<Marquee gradient={false} speed={tickTwoSpeed} style={{ overflow: "hidden" }}>
					<div className={marqueeStyle.marquee + " flex flex-row items-center w-full"}>
						<h1>Notes</h1>
						<Gear />
						<h1>Textbooks</h1>
						<Gear />
						<h1>2 Partnerships</h1>
						<Gear />
						<h1>Awards</h1>
						<Gear />
					</div>
				</Marquee>
			</div>


			<HowItWorks />
			<Reviews />
		</div>
	)
}