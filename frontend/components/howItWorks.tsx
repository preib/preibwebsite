// import logo from './logo.svg';
import '../styles/howItWorks.scss';
import {useState} from "react";

function HowItWorks() {
	const [currentlySelected, setCurrentlySelected] = useState(0);
	return (
		<div className="App">
			<div className="container">
				<div className="sidebar">
					<h1>It works simply like</h1>
					<Circle number="1" onClick={() => {setCurrentlySelected(0)}} />
					<Circle number="2" onClick={() => {setCurrentlySelected(1)}} />
					<Circle number="3" onClick={() => {setCurrentlySelected(2)}} />
				</div>
				<div className="content">
					<div className="card" style={currentlySelected === 0 ? {} : {display: "none"}}>
						<div className="cardTitle">Fill out the form</div>
						<div className="cardContent">leaifsduhalif0[waoeinsdl ifaspdoifh aiudshf [aihdsfia; dsfua</div>
					</div>
					<div className="card" style={currentlySelected === 1 ? {} : {display: "none"}}>
						<div className="cardTitle">Fill out the form 1</div>
						<div className="cardContent">leaifsduhalif0[waoeinsdl ifaspdoifh aiudshf [aihdsfia; dsfua</div>
					</div>
					<div className="card" style={currentlySelected === 2 ? {} : {display: "none"}}>
						<div className="cardTitle">Fill out the form 2</div>
						<div className="cardContent">leaifsduhalif0[waoeinsdl ifaspdoifh aiudshf [aihdsfia; dsfua</div>
					</div>
				</div>
			</div>
		</div>
	);
}

function Circle({number, onClick}) {
	return (
		<div className="circle" onClick={onClick}>{number}</div>
	);
}

export default HowItWorks;
