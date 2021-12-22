import Image from "next/image"
import howItWorksStyle from '/styles/howItWorks.module.scss';
import {motion} from "framer-motion"

const howItWorksCard = (props) => {
	const { cardNumber, title } = props;
	const imageSizeMap ={
		0: [800,600],
		1: [800,600],
		2: [1098,980],
	}

	const animate = {
		hidden: {
			y: "-100%",
			opacity:1,
			transition: { duration: 0.3, ease: "linear"}
		},
		visible: {
			y: 0,
			opacity:1,
			transition: { duration: 0.3, ease: "linear"}
		},
		exit: {
			y: "100%",
			opacity:1,
			transition: { duration: 0.3, ease: "linear"}
		}
	}
	return(
		<motion.div
			className={howItWorksStyle.card}
			variants={animate}
			initial="hidden"
			animate="visible"
			exit="exit"
		>
			<div className="w-3/4">
				<Image src={`/howItWorks/howItWorks (${cardNumber + 1}).png`} layout='intrinsic' width={imageSizeMap[cardNumber][0]} height={imageSizeMap[cardNumber][1]}></Image>
			</div>
			<div className={howItWorksStyle.cardTitle}>
				{title}
			</div>
			<div className={howItWorksStyle.cardContent}>
				{props.children}
			</div>
		</motion.div>
	)
}
export default howItWorksCard;
