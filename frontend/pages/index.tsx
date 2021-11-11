import Head from 'next/head'
import CardComponent from '../components/card'

export default function Home() {
    return (
        <div>
            <Head>
                <title>PreIB | Home</title>
                <meta name="description" content="PreIB is a community of mentors that are interested in guiding prospecting IB students in their IB journey" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="h-page grid grid-cols-2">
                <div className="grid place-items-center h-full px-20 relative">
                    <div className="absolute top-10 left-20 text-xl font-bold">
                        preib
                    </div>
                    <div>
                        <h1 className="text-6xl font-bold mb-6">Pre-IB Students are</h1>
                        <h2 className="mb-10 text-5xl">__________________</h2>
                        <p className="mb-8">
                            At pre-ib, we strongly believe that each student has the potential to thrive and succeed in the IB Dipolma programme.
                            Enjoy this free website featuring dozens of resources such as notes and notes and IB mentors for support
                        </p>
                        <div className="flex flex-row gap-x-6">
                            <button
                                className="py-3 px-8 bg-blue-400 rounded-full font-bold border-2 border-blue-600
                                text-white focus:ring focus:outline-none hover:shadow-lg
                                transition-all duration-100 transform hover:scale-105"
                            >
                                Explore Resources
                            </button>
                            <button
                                className="py-3 px-8 bg-white rounded-full font-bold border-2
                                text-black focus:ring focus:outline-none hover:shadow-lg
                                transition-all duration-100 transform hover:scale-105"
                            >
                                Explore Mentors
                            </button>
                        </div>
                    </div>
                </div>
                <div className="grid place-items-center">
                    image here
                </div>
            </div>
            <div className="h-page px-40 flex flex-col justify-center">
                <h1 className="text-4xl font-bold mb-10">What we do</h1>
                <div className="grid grid-cols-2 grid-rows-2 gap-5">
                    <CardComponent cardTitle="Mentorship" description="Over fifty members from 21 different countries ready to assist you" link=""/>
                    <CardComponent cardTitle="Resources" description="Collection of hundreds of resources for Grade 8 and 10 students in pre-IB" link=""/>
                    <CardComponent cardTitle="Blogs & Tips" description="Get Insider Tipstips from the pre-IB blog, allowing you to truely succeed." link=""/>
                    <CardComponent cardTitle="Personalized" description="Personalized long-term planning for pre-IB students and mentees" link=""/>
                </div>
            </div>
        </div>
    )
}