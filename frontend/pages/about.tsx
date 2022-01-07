import aboutStyle from 'styles/about.module.scss';
import PersonCard from 'components/about/PersonCard';
import TopPadding from 'components/global/topPadding';

export default function Home() {
    return (
        <div>
            <TopPadding />
            <div className="grid grid-cols-2 gap-x-6 place-items-center h-[31rem] container mx-auto">
                <div>
                    <h1 className="font-black leading-none text-[5rem] mb-8 font-title">The pre-IB team</h1>
                    <p className="text-2xl"> Behind our mentors, there is a team of supportive and dedicated team. Time to meet ours.</p>
                </div>
                <div>
                    <img src="/about/landing.png" alt="Landing Image" />
                </div>
            </div>
            <div className="relative">
                <svg className="h-[6vw]" preserveAspectRatio="none" version="1.1" viewBox="0 0 100 100" width="100%" xmlns="http://www.w3.org/2000/svg">
                    <path className="fill-blue-100" d="M0,0 C6.83050094,50 15.1638343,75 25,75 C41.4957514,75 62.4956597,0 81.2456597,0 C93.7456597,0 99.9971065,0 100,0 L100,100 L0,100"></path>
                </svg>
            </div>
            <div className="bg-blue-100 py-28">
                <div className="flex flex-row my-8 justify-around px-20 container mx-auto">
                    {
                        [["63", "Student mentors"], ["50+", "Student notes"], ["582", "pre-IB Students mentored"], ["1300+", "Monthly users"]].map((item) => {
                            return (
                                <div className="flex flex-col items-center">
                                    <h2 className="text-[4.5rem] text-[#f72585] font-title font-bold leading-none mb-2">{item[0]}</h2>
                                    <p className="text-xl font-bold">{item[1]}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className="relative">
                <svg className="h-[6vw] bg-blue-100" preserveAspectRatio="none" version="1.1" viewBox="0 0 100 100" width="100%" xmlns="http://www.w3.org/2000/svg">
                    <path className="fill-red-100" d="M0,0 C6.83050094,50 15.1638343,75 25,75 C41.4957514,75 62.4956597,0 81.2456597,0 C93.7456597,0 99.9971065,0 100,0 L100,100 L0,100"></path>
                </svg>
            </div>

            <div className="bg-red-100 py-8">
                <div className="grid grid-cols-2 gap-x-8 my-20 container mx-auto">
                    <div>
                        <img src="about/mission.png" alt="Mission Image" />
                    </div>
                    <div className="flex flex-col justify-center pr-36">
                        <h1 className="text-5xl font-bold text-center mb-8">Our Mission</h1>
                        <p className="text-2xl mb-4">
                            Pre-IB is a full spectrum platform that allows supports pre-IB students. Our mission is to provide high-quality, and accessible support globally.
                        </p>
                        <p className="text-2xl">
                            Through our program, students gain access to insider secrets for success, help with schoolwork, and top educational resources. Join pre-IB today.
                        </p>
                    </div>
                </div>
            </div>

            <div className="relative">
                <svg className="h-[6vw] bg-red-100" preserveAspectRatio="none" version="1.1" viewBox="0 0 100 100" width="100%" xmlns="http://www.w3.org/2000/svg">
                    <path fill="white" d="M0,0 C6.83050094,50 15.1638343,75 25,75 C41.4957514,75 62.4956597,0 81.2456597,0 C93.7456597,0 99.9971065,0 100,0 L100,100 L0,100"></path>
                </svg>
            </div>

            <div className="container mx-auto mt-8">
                <h1 className="text-5xl font-bold mb-10">Excecutive Team</h1>
                <div className="grid grid-cols-4 gap-x-10 gap-y-8">
                    <PersonCard name="Nicole Pardal" label="Founder" title="CTO"/>
                    <PersonCard name="Shabicha Sureskumar" label="Director" title="Operations"/>
                    <PersonCard name="Edwin Zheng" label="Intern" title="Engineering" />
                    <PersonCard name="Kam Singh" label="Intern" title="Engineering" />
                    <PersonCard name="Ronniel Gandhe" label="Intern" title="finance" />
                    <PersonCard name="Panos Messinis" label="Intern" title="administration"/>
                    <PersonCard name="Yash Dhaundiyal" label="Intern" title="outreach"/>
                    <PersonCard name="Arshnur Ahulwalia" label="Intern" title="Administration" />
                    <PersonCard name="Hetvi Chaniyara" label="Intern" title="Designer" />
                </div>
            </div>
        </div>
    )
}