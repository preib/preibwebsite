const WhyUs = () => {
    return (
        <div>
            <div className="relative bg-[#A3CEEF]">
                <div className="absolute w-full top-[8rem]">
                    <h1 className="text-center font-bold text-[5.5rem] leading-none mb-5">An easier transition</h1>
                    <h2 className="text-center font-bold font-title text-3xl">Learn why pre-IB is a leading support organization, and why you should join</h2>
                </div>
                <img className="mx-auto h-[819.77px]" src="/whyus/landing.png" alt="Landing Image" />
            </div>

            <div className="container">
                <div className="grid grid-cols-5 gap-x-4 my-16">
                    <div className="col-span-3 my-auto">
                        <h1 className="font-bold mb-2 text-5xl">1 on 1 Mentoring</h1>
                        <p className="text-lg">The common ratio of pre-IB students to guidance counsellors is 152: 1. The pre-IB mentoring program strives to provide you with the best experience - thus 1:1 ratio enables students to be heard, and have a personalized mentoring experience.</p>
                    </div>
                    <img className="w-full col-span-2" src="/whyus/1.png" alt="" />
                </div>
                <hr />
                <div className="grid grid-cols-5 gap-x-4 my-16">
                    <img className="w-full col-span-2" src="/whyus/2.png" alt="" />
                    <div className="col-span-3 my-auto">
                        <h1 className="font-bold mb-2 text-5xl">Personalized Planning</h1>
                        <p className="text-lg">
                            All planning is personalized to YOUR needs. Mentors will determine YOUR learning style, and suggest resources accordingly. We understand every student learns differently, and we plan to support you long-term.
                        </p>
                    </div>
                </div>
                <hr />
                <div className="grid grid-cols-5 gap-x-4 my-16">
                    <div className="col-span-3 my-auto">
                        <h1 className="font-bold mb-2 text-5xl">Resources</h1>
                        <p className="text-lg">
                            Explore our library of resources curated just for you, by pre-IB students. From level 7 notes, to helpful links and textbooks, we have you covered.
                        </p>
                    </div>
                    <img className="w-full col-span-2" src="/whyus/3.png" alt="" />
                </div>
            </div>
        </div>
    );
}

export default WhyUs;