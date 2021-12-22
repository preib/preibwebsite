// import logo from './logo.svg';
import howItWorksStyle from '/styles/howItWorks.module.scss';
import HowItWorksCard from './index/howItWorksCard';
import {AnimatePresence} from 'framer-motion';
import {useState} from "react";

function HowItWorks() {
	const [selectedPage, setSelectedPage] = useState(0);
	return (
		<div className={howItWorksStyle.App}>
			<div className={howItWorksStyle.container}>
				<div className={howItWorksStyle.sidebar}>
					<h1 className="text-5xl font-bold mb-10 text-center leading-normal">
						It works
						<br />simply like
					</h1>
					<Circle number="1" onClick={() => {setSelectedPage(0)}} />
					<Circle number="2" onClick={() => {setSelectedPage(1)}} />
					<Circle number="3" onClick={() => {setSelectedPage(2)}} />
				</div>
				<div className={howItWorksStyle.content}>
					<AnimatePresence
						exitBeforeEnter={true}
					>
						{/* CARD 1 */}
						{
							selectedPage == 0 &&
							<HowItWorksCard key={0} cardNumber={0} title="[TITLE 1]">
								1) Click on the mentorship tab, and browse the wide variety of available mentors in your school or location. Once you have found a good fit, simply click &quot;select mentor&quot;, and fill out your contact information. Instead, if you wish to be paired by a pre-IB representative, fill out this form.
							</HowItWorksCard>
						}

						{/* CARD 2 */}
						{
							selectedPage === 1 && 
							<HowItWorksCard key={1} cardNumber={1} title="[TITLE 2]">
								2) Once your request has been sent, your selected mentor will reach out within two to five business days. Sit tight, and they will get back to you as soon as possible! Meanwhile, feel free to explore our library of resources, and if you have any questions or concerns, please let us know and we will do our best to accomodate you!
							</HowItWorksCard>
						}
						

						{/* CARD 3 */}
						{
							selectedPage === 2 &&
							<HowItWorksCard key={2} cardNumber={2} title="[TITLE 3]">
								3) Once your mentor has reached out, the mentorship begins! Sessions will take place over zoom, skype, or google meets: whichever method works best for you, and communication will happen over Gmail. Your mentor will answer any of your &quot;burning questions&quot;, aid in course selection, give you insider tips on how to do well in the IB Diploma program; anything you want!
							</HowItWorksCard>
						}
					</AnimatePresence>
				</div>
			</div>
		</div>
	);
}

function Circle({number, onClick}) {
	return (
		<div className={howItWorksStyle.circle + " font-semibold font-lato"} onClick={onClick}>{number}</div>
	);
}

export default HowItWorks;
