import Head from 'next/head'
import CardComponent from '../components/card'
import { useEffect, useState } from 'react';
import Marquees from '../components/marquees';
import indexStyles from '../styles/index.module.scss'

export default function Home() {
	const adjectives = ["Resilient", "Curious", "Creative", "Bold", "Determined", "Intelligent", "Motivated"]
	const adjectiveColours = ["indigo", "blue", "green", "red", "purple", "orange"]
	const getRandomInt = (min:number, max:number):number => {
		return min + Math.floor(Math.random() * (max-min));
	}
	
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
	return (
		<div className={indexStyles.backgroundColourSetter}>
			<Head>
				<title>PreIB | Home</title>
				<meta name="description" content="PreIB is a community of mentors that are interested in guiding prospecting IB students in their IB journey" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="h-page grid grid-cols-2 mb-16">
				{/* LEFT SIDE */}
				<div className="grid place-items-center h-full px-20 relative">
					<div>
						<h1 className="text-6xl font-bold mb-6">Pre-IB Students are</h1>
						<div id="adjectiveHolder" className="relative mb-6">
							{/* Text */}
							<span className="text-5xl font-bold relative leading-none select-none" style={{ color: displayColour }}>
								{displayWord}
								<div className="absolute w-full h-full flex items-center " style={{ backgroundColor:"rgb(227, 236, 253)" ,transition: `left ${cursorMoveTime}ms ease`, top: "5%", left: leftValue.toString() + "%" }}>
									<div className="h-full w-1 rounded-3xl bg-black" style={{ height: "80%" }}></div>
								</div>
							</span>
							{/* Underline */}
							<div className="absolute text-5xl h-1 w-3/4 bg-black" style={{ bottom: "-12px" }}></div>
						</div>

						{/* Blurb Under Title */}
						<p className="mb-8">
							At pre-ib, we strongly believe that each student has the potential to thrive and succeed in the IB Dipolma programme.
							Enjoy this free website featuring dozens of resources such as notes and notes and IB mentors for support
						</p>

						{/* Button Row */}
						<div className="flex flex-row gap-x-6">
							<button
								className="py-2 px-8 bg-blue-400 rounded-full font-bold border-2 border-blue-600
								text-white focus:ring focus:outline-none hover:shadow-lg
								transition-all duration-100 transform hover:scale-105"
							>
								Explore Resources
							</button>
							<button
								className="py-2 px-8 bg-white rounded-full font-bold border-2
								text-black focus:ring focus:outline-none hover:shadow-lg
								transition-all duration-100 transform hover:scale-105"
							>
								Explore Mentors
							</button>
						</div>
					</div>
				</div>

				{/* RIGHT SIDE */}
				<div className="overflow-hidden">
					<img src="/model.png" alt="3D model of world" className="relative" style={{ maxWidth: "110%", top: "5%", right: "-10%" }} />
				</div>
			</div>
			<Marquees />
			<div className="h-page px-40 flex flex-col justify-center">
				<h1 className="text-4xl font-bold mb-10 text-center">What we do</h1>
				<div className="grid grid-cols-2 grid-rows-2 gap-5">
					<CardComponent cardTitle="Mentorship" description="Over fifty members from 21 different countries ready to assist you" link=""/>
					<CardComponent cardTitle="Resources" description="Collection of hundreds of resources for Grade 8 and 10 students in pre-IB" link=""/>
					<CardComponent cardTitle="Blogs & Tips" description="Get Insider Tipstips from the pre-IB blog, allowing you to truely succeed." link=""/>
					<CardComponent cardTitle="Personalized" description="Personalized long-term planning for pre-IB students and mentees" link=""/>
				</div>
			</div>
		</div>
	)
}