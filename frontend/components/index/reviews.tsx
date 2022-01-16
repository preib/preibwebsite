import reviewStyles from '/styles/reviews.module.scss';
import ReviewCard from './newReviewCard';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

const reviews = ()=>{
	const reviews = [
		{
			imgURL:"/index/reviews/1.png",
			name:"Alex",
			review: "I wish I had access to a resource like pre-IB when I was doing the IB Diploma Program. Personalized mentors, hundreds of notes - it is truly a valuable resource for those either starting their journey in the IB diploma program, or needing guidance during their journey. Highly recommend!",
			description:"Anasthesiologist, IB alumni",
		},
		{
			imgURL: "",
			name: "Melissa H.",
			review: "Pre-IB has helped me tremendously as a struggling student. Thanks to my mentor Ocean, I was able to go from barely passing, to getting level 6 and 7s predicted :). I’m really happy - he gave me tips on procrastination, made a study schedule, and we had weekly checkins. Thank you so much pre-IB!",
			description: "Pre-IB Student",
		},
		{	
			imgURL: "/index/reviews/2.png",
			name: "Mark Hooley",
			review: "As a teacher teaching pre-IB students, I often see them struggling, but too timid to reach out for healf. Through the pre-IB mentorship, students will recieve the support that they deserve, and I am very glad. Keep up the great work, and looking forward to seeing this grow as a global organization.",
			description: "IB Coordinator & Teacher",
		},
	]
	return(
		// <section id="main">
		// 	<div className={`${reviewStyles.container} mt-12 mx-auto`}>
		// 		<div className={`${reviewStyles.content} relative overflow-visible hidden md:block`}>
		// 			<h1 className="text-4xl font-black font-title">See what others<br /> think of pre-IB</h1>
		// 			<ReviewCard top="63.03" left="5.17" name="Alex" review="I wish I had pre-IB in my freshman year, it would have helped me so much!"/>
		// 			<ReviewCard top="19.71" left="38.64" name="Vanessa" review="Pre-IB is the most useful resouce I have ever used. Thank you so much!" />
		// 			<ReviewCard top="0.54" left="21.83" name="Vanessa" review="Pre-IB is the most useful resouce I have ever used. Thank you so much!" />
		// 			<ReviewCard top="32.69" left="2.35" name="Vanessa" review="Pre-IB is the most useful resouce I have ever used. Thank you so much!" />
		// 			<ReviewCard top="25.84" left="70.34" name="Emily" review="" />
		// 			<ReviewCard top="46.75" left="34.84" name="Maruisz" review="" />
		// 			<ReviewCard top="74.51" left="42.50" name="Matthew" review="" />
		// 			<ReviewCard top="52.34" left="65.00" name="Alexia" review="" />
		// 			<ReviewCard top="1.62" left="64.17" name="Anmol" review="" />
		// 		</div>
		// 	</div>
		// </section>
		<div>
			<h1 className="font-bold text-4xl ml-20 mb-10">See Why Students Love Us</h1>
			<Swiper
				modules={[Autoplay]}
				spaceBetween={50}
				slidesPerView={3}
				loop={true}
				autoplay={{
					"delay": 4000,
					"disableOnInteraction": false
				}}
			>
				{reviews.map((review, index)=>{
					return(
						<SwiperSlide key={index}>
							<ReviewCard imgURL={review.imgURL} name={review.name} review={review.review} description={review.description}/>
						</SwiperSlide>
					)
				})}
			</Swiper>
		</div>
	)
}
{/* <head>
	<!--- Meta Tags --->
	<meta charset="UTF-8">
	<meta name="description" content="freelancer.com/u/RIRabbi">
	<meta name="keywords" content="HTML, CSS, JavaScript">
	<meta name="author" content="Al-Amin">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<!--- Font Awesome Link --->
	<script src="https://kit.fontawesome.com/1c57f88cd5.js" crossorigin="anonymous"></script>

	<!--- Custom CSS Files --->
	<link type="text/css" rel="stylesheet" href="assets/css/style.css">
</head>
<body>
	<!--- Custom JS Files --->
	<script type=" text/JavaScript" src="assets/js/java.js"></script>
</body> */}

export default reviews;