import aboutStyle from 'styles/about.module.scss';
import PersonCard from 'components/about/PersonCard';
import TopPadding from 'components/global/topPadding';
import CountUp from 'react-countup';
import Head from 'next/head';

export default function About() {
	const [colour1, colour2] = ['blue-100', 'red-100'];
	const [colour1Fill, colour1BG, colour2Fill, colour2BG] = ["fill-" + colour1, "bg-" + colour1, "fill-" + colour2, "bg-"+colour2];
	return (
		<>
			<Head>
				<title>PreIb | About</title>
				<meta name="description" content="PreIB is a community of mentors that are interested in guiding prospecting IB students in their IB journey" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<TopPadding />
			<div className="grid grid-cols-2 gap-x-6 place-items-center h-[31rem] container mx-auto">
				<div>
					<h1 className="font-black leading-none text-[5rem] mb-8 font-title">The pre-IB team</h1>
					<p className="text-2xl"> Behind our mentors, there is a team of supportive and dedicated team. Time to meet ours.</p>
				</div>
				<div>
					<img src="/about/landing.png" alt="Landing Image" />
				</div>
			</div>
			<div className="relative">
				<svg className="h-[6vw]" preserveAspectRatio="none" version="1.1" viewBox="0 0 100 100" width="100%" xmlns="http://www.w3.org/2000/svg">
					<path className={colour1Fill} d="M0,0 C6.83050094,50 15.1638343,75 25,75 C41.4957514,75 62.4956597,0 81.2456597,0 C93.7456597,0 99.9971065,0 100,0 L100,100 L0,100"></path>
				</svg>
			</div>
			<div className={colour1BG + " py-28"}>
				<div className="flex flex-row my-8 justify-around px-20 container mx-auto overflow-hidden">
					{
						[["63", "Student mentors", false], ["50", "Student notes", true], ["582", "pre-IB Students mentored", false], ["1300", "Monthly users", true]].map((item,i) => {
							const [count, title, addPlus] = item as [string, string, boolean];
							return (
								<div className="flex flex-col items-center" key={i}>
									<h2 className="text-[4.5rem] text-[#f72585] font-title font-bold leading-none mb-2">
										<CountUp
											duration={4}
											useEasing={true}
											easingFn={(t, b, c, d)=>{
												return c * ((t = t / d - 1) * t * t + 1) + b;
											}}
											end={parseInt(count)}
										/>
										{addPlus ? "+" : ""}
									</h2>
									<p className="text-xl font-bold">{title}</p>
								</div>
							)
						})
					}
				</div>
			</div>

			<div className="relative">
				<svg className={colour1BG + " h-[6vw]"} preserveAspectRatio="none" version="1.1" viewBox="0 0 100 100" width="100%" xmlns="http://www.w3.org/2000/svg">
					<path className={colour2Fill} d="M0,0 C6.83050094,50 15.1638343,75 25,75 C41.4957514,75 62.4956597,0 81.2456597,0 C93.7456597,0 99.9971065,0 100,0 L100,100 L0,100"></path>
				</svg>
			</div>

			<div className={colour2BG  + " py-8"}>
				<div className="grid grid-cols-2 gap-x-8 my-20 container mx-auto">
					<div>
						<img src="about/mission.png" alt="Mission Image" />
					</div>
					<div className="flex flex-col justify-center pr-36">
						<h1 className="text-5xl font-bold text-center mb-8">Our Mission</h1>
						<p className="text-2xl mb-4">
							Pre-IB is a full spectrum platform that allows supports pre-IB students. Our mission is to provide high-quality, and accessible support globally.
						</p>
						<p className="text-2xl">
							Through our program, students gain access to insider secrets for success, help with schoolwork, and top educational resources. Join pre-IB today.
						</p>
					</div>
				</div>
			</div>

			<div className="relative">
				<svg className={colour2BG + " h-[6vw]"} preserveAspectRatio="none" version="1.1" viewBox="0 0 100 100" width="100%" xmlns="http://www.w3.org/2000/svg">
					<path fill="white" d="M0,0 C6.83050094,50 15.1638343,75 25,75 C41.4957514,75 62.4956597,0 81.2456597,0 C93.7456597,0 99.9971065,0 100,0 L100,100 L0,100"></path>
				</svg>
			</div>

			<div className="container mx-auto mt-8">
				<h1 className="text-5xl font-bold mb-10">Excecutive Team</h1>
				<div className="grid grid-cols-4 gap-x-10 gap-y-8">
					<PersonCard name="Nicole Pardal" label="Founder" title="CTO"/>
					<PersonCard name="Shabicha Sureskumar" label="Director" title="Operations"/>
					<PersonCard name="Edwin Zheng" label="Intern" title="Engineering" />
					<PersonCard name="Kam Singh" label="Intern" title="Engineering" />
					<PersonCard name="Panos Messinis" label="Intern" title="Finance"/>
					<PersonCard name="Yash Dhaundiyal" label="Intern" title="Outreach"/>
					<PersonCard name="Arshnur Ahulwalia" label="Intern" title="Administration" />
					<PersonCard name="Hetvi Chaniyara" label="Intern" title="Designer" />
				</div>
			</div>
		</>
	)
}
