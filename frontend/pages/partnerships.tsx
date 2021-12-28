import TopPadding from "components/global/topPadding";
import Image from "next/image"

const partnerships = () => {
    const scroll = ()=>{
        const footerContactForm = document.getElementById("footerContactForm")
        footerContactForm.scrollIntoView({behavior: "smooth"})
    }
    return (
        <div className="px-32">
            <TopPadding />
            <div className="grid grid-cols-2">
                <div className="p-10 grid place-items-center">
                    <div>
                        <h1 className="text-6xl font-black font-title mb-2">Partnerships</h1>
                        <h2 className="text-4xl font-black font-title mb-6">Become a pre-IB partner </h2>
                        <p className="text-lg mb-4">If you want to work with pre-IB, to provide high-quality access to students in the IB Diploma program, feel free to reach out. We value our technological partners immensely, and would love to work with you!</p>
                        <button onClick={scroll} className="rounded-full px-5 py-3 border-2 hover:scale-105 focus:ring focus:outline-none transition-all">Become a partner</button>
                    </div>
                </div>
                <div className="p-10">
                    <Image src="/partnership.png" height="770" width="1027"></Image>
                </div>
            </div>
            <div>
                <h1 className="text-center font-title font-black text-4xl mb-8">Who we work with</h1>
                <div className="flex flex-col">
                    <div className="grid grid-cols-5 items-center gap-x-4">
                        <div className="col-span-2">
                            <Image src="/flyp.png" width="816" height="224"/>
                        </div>
                        <p className="col-span-3 text-xl">If you want to get started on IB subjects ahead of time, explore FLYP ACADEMY resources. With a comprehensive syllabus of tough subjects such as IB Chemistry and History, you are in good</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default partnerships;