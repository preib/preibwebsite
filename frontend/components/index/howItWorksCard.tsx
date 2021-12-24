import Image from "next/image"
import howItWorksStyle from '/styles/howItWorks.module.scss';
import {motion} from "framer-motion"
import { useContext } from "react"
import { AnimationDirectionContext } from "./howItWorks"

const HowItWorksCard = ({ children, cardNumber, title }) => {
	const imageSizeMap ={
		0: [800,600],
		1: [800,600],
		2: [1098,980],
	}

	const animate = {
		top: {
			y: "-200%",
			opacity:0,
			transition: { duration: 0.7, ease: "easeInOut"}
		},
		visible: {
			y: "-50%",
			opacity:1,
			transition: { duration: 0.7, ease: "easeInOut"}
		},
		bottom: {
			y: "100%",
			opacity:0,
			transition: { duration: 0.7, ease: "easeInOut"}
		}
	}

	const animateUp = useContext(AnimationDirectionContext)
	return(
		<motion.div
			className={`${howItWorksStyle.card}`}
			variants={animate}
			initial={animateUp ? "top" : "bottom"}
			animate="visible"
			exit={animateUp ? "bottom" : "top"}
		>
			<div className="w-3/5">
				<Image src={`/howItWorks/howItWorks (${cardNumber + 1}).png`} layout='intrinsic' width={imageSizeMap[cardNumber][0]} height={imageSizeMap[cardNumber][1]}></Image>
			</div>
			<div className={howItWorksStyle.cardTitle}>
				{title}
			</div>
			<div className={`${howItWorksStyle.cardContent} text-center`}>
				{children}
			</div>
		</motion.div>
	)
}
export default HowItWorksCard;
