import '/styles/globals.css'
import 'tailwindcss/tailwind.css'
import Layout from '../components/global/Layout'
import {motion, AnimatePresence} from "framer-motion"

import '/styles/globalCSS.css'

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence>
      <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" exit="pageExit" variants={
        {
          pageInitial: {
            opacity: 0,
          },
          pageAnimate: {
            opacity: 1,
            transition: { duration: 1.5, ease: 'easeInOut'}
          },
          pageExit: {
            opacity: 0,
            transition: { duration: 0.5, ease: 'easeInOut'}
          }
        }
      }>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </motion.div>
    </AnimatePresence>
  )
}

export default MyApp
