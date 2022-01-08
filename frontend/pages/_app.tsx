import 'tailwindcss/tailwind.css'
import '/styles/globals.scss'
import '/styles/globalsButIllegal.css'
import 'swiper/css/bundle'
import 'swiper/css/autoplay'

import Layout from 'components/global/Layout'
import {motion, AnimatePresence} from "framer-motion"

function MyApp({ Component, pageProps, router }) {
	return (
		<AnimatePresence>
			<motion.div className="root" key={router.route} initial="pageInitial" animate="pageAnimate" exit="pageExit" variants={{
					pageInitial: {
						opacity: 0,
					},
					pageAnimate: {
						opacity: 1,
						transition: { duration: 0.8, ease: 'easeInOut'}
					},
					pageExit: {
						opacity: 0,
						transition: { duration: 0.5, ease: 'easeInOut'}
					}
				}
			}>
				{/* Add navbar and footer */}
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</motion.div>
		</AnimatePresence>
	)
}

export default MyApp
