import reviewStyles from '../styles/reviews.module.scss';

const reviews = ()=>{
	return(
		<section id="main">
			<div className={reviewStyles.container}>
				<div className={reviewStyles.content}>
					<div className={reviewStyles.box + reviewStyles.box1}>
						<h1 className={reviewStyles.head_title}>See what others<br /> think of pre-IB</h1>
						<div className={reviewStyles.box_inner}>
							<div className={reviewStyles.prof_img}></div>
							<div className={reviewStyles.prof_dsc}>
								<h3>Alex</h3>
								<p style={{color:"#000"}}>I wish i had pre-IB in my freshman year, it would have helped me so
									musch!</p>
							</div>
						</div>
					</div>

					<div className={reviewStyles.box + reviewStyles.box2}>
						<div className={reviewStyles.box_inner} style={{margin:"0px"}}>
							<div className={reviewStyles.prof_img}></div>
							<div className={reviewStyles.prof_dsc}>
								<h3>Vanessa</h3>
								<p>Pre-IBG is the most useful resouce I<br /> have ever used. Thank you so <br />musch!</p>
							</div>
						</div>
					<div className={reviewStyles.box_inner + reviewStyles.box_inner2 + reviewStyles.cc}>
							<div className={reviewStyles.prof_img}></div>
							<div className={reviewStyles.prof_dsc}>
								<h3>Emily</h3>
								<p></p>
							</div>
						</div>
						<div className={reviewStyles.box_inner + reviewStyles.box_inner3}>
							<div className={reviewStyles.prof_img}></div>
							<div className={reviewStyles.prof_dsc}>
								<h3>Maruisz</h3>
								<p></p>
							</div>
						</div>
					</div>

					<div className={reviewStyles.box + reviewStyles.box2 + reviewStyles.box3}>
						<div className={reviewStyles.box_inner + reviewStyles.box_inner1} style={{margin:"0px"}}>
							<div className={reviewStyles.prof_img}></div>
							<div className={reviewStyles.prof_dsc}>
								<h3>Matthew</h3>
								<p></p>
							</div>
						</div>
						<div className={reviewStyles.box_inner + reviewStyles.box_inner2}>
							<div className={reviewStyles.prof_img}></div>
							<div className={reviewStyles.prof_dsc}>
								<h3>Alexia</h3>
								<p></p>
							</div>
						</div>
						<div className={reviewStyles.box_inner + reviewStyles.box_inner3}>
							<div className={reviewStyles.prof_img}></div>
							<div className={reviewStyles.prof_dsc}>
								<h3>Anmol</h3>
								<p></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
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