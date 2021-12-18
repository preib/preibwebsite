// import logo from './logo.svg';
import howItWorksStyle from '../styles/howItWorks.module.scss';
import {useState} from "react";

function HowItWorks() {
	const [currentlySelected, setCurrentlySelected] = useState(0);
	return (
		<div className={howItWorksStyle.App}>
			<div className={howItWorksStyle.container}>
				<div className={howItWorksStyle.sidebar}>
					<h1>It works simply like</h1>
					<Circle number="1" onClick={() => {setCurrentlySelected(0)}} />
					<Circle number="2" onClick={() => {setCurrentlySelected(1)}} />
					<Circle number="3" onClick={() => {setCurrentlySelected(2)}} />
				</div>
				<div className={howItWorksStyle.content}>
					<div className={howItWorksStyle.card} style={currentlySelected === 0 ? {} : {display: "none"}}>
						<div className={howItWorksStyle.cardTitle}>Fill out the form</div>
						<div className={howItWorksStyle.cardContent}>leaifsduhalif0[waoeinsdl ifaspdoifh aiudshf [aihdsfia; dsfua</div>
					</div>
					<div className={howItWorksStyle.card} style={currentlySelected === 1 ? {} : {display: "none"}}>
						<div className={howItWorksStyle.cardTitle}>Fill out the form 1</div>
						<div className={howItWorksStyle.cardContent}>leaifsduhalif0[waoeinsdl ifaspdoifh aiudshf [aihdsfia; dsfua</div>
					</div>
					<div className={howItWorksStyle.card} style={currentlySelected === 2 ? {} : {display: "none"}}>
						<div className={howItWorksStyle.cardTitle}>Fill out the form 2</div>
						<div className={howItWorksStyle.cardContent}>leaifsduhalif0[waoeinsdl ifaspdoifh aiudshf [aihdsfia; dsfua</div>
					</div>
				</div>
			</div>
		</div>
	);
}

function Circle({number, onClick}) {
	return (
		<div className={howItWorksStyle.circle} onClick={onClick}>{number}</div>
	);
}

export default HowItWorks;
