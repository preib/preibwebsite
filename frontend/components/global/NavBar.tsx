import Link from 'next/link'
import NavStyles from '/styles/navbar.module.scss'
import { useState, useEffect } from 'react';


const NavBar = () => {
	const [scrollPosition, setScrollPosition] = useState(0);
	const handleScroll = () => {
		const position = window.pageYOffset;
		setScrollPosition(position);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const [mentorDropdownOpen, setMentorDropdownOpen] = useState(false);
	const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
	const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
	const openDropdown = (dropdownID) => {
		closeAllDropdowns()
		switch (dropdownID) {
			case 'mentor':
				setMentorDropdownOpen(true);
				break;
			case 'resources':
				setResourcesDropdownOpen(true);
				break;
			case 'about':
				setAboutDropdownOpen(true);
				break;
			default:
				break;
		}
	};
	const closeAllDropdowns = () => {
		[setMentorDropdownOpen, setResourcesDropdownOpen, setAboutDropdownOpen].forEach(f => {f(false);})
	}
	return (
		// TODO MAKE NAVBAR MOBILE FRIENDLY
		<div onMouseLeave={closeAllDropdowns} className="fixed w-full py-4 hidden md:flex justify-center gap-x-6 z-20">
			{/* BACKGROUND */}
			<div className="left-0 -z-10 absolute bg-white h-full w-full shadow-md" style={{ top: scrollPosition > 100 ? "0" :"-100%", transition:"top 0.3s ease"}}></div>
			<div className="absolute left-20 text-xl font-bold" style={{top:"50%",transform:"translateY(-50%)"}}>
				<Link href="/">
					<a>preib</a>
				</Link>
			</div>
			<div className={NavStyles.dropdown}>
				<Link href="/">
					<a onMouseEnter={() => { openDropdown("mentor") }}>mentorship</a>
				</Link>
				{
					mentorDropdownOpen &&
					<div className={NavStyles.innerDropdown}>
							<Link href="/mentors">
							<a> Mentor Profiles </a>
						</Link>
						<Link href="/">
							<a> Become a Mentor </a>
						</Link>
						<Link href="/">
							<a> FAQ </a>
						</Link>
						<Link href="/">
							<a> Request a Mentor </a>
						</Link>
					</div>
				}
			</div>
			<Link href="/notes" >
				<a onMouseEnter={closeAllDropdowns}>notes</a>
			</Link>
			<div className={NavStyles.dropdown}>
				<Link href="/resources">
					<a onMouseEnter={() => { openDropdown("resources") }}>resources</a>
				</Link>
				<div>
					{
						resourcesDropdownOpen &&
						<div className={NavStyles.innerDropdown}>
							<Link href="/">
								<a> Chemistry </a>
							</Link>
							<Link href="/">
								<a> Physics </a>
							</Link>
							<Link href="/">
								<a> Math </a>
							</Link>
							<Link href="/">
								<a> French </a>
							</Link>
							<Link href="/">
								<a>English</a>
							</Link>
						</div>
					}
				</div>
			</div>
			<Link href="/board">
				<a onMouseEnter={closeAllDropdowns}>board</a>
			</Link>
			<div className={NavStyles.dropdown}>
				<Link href="/about">
					<a onMouseEnter={() => { openDropdown("about") }}>about us</a>
				</Link>
				{
					aboutDropdownOpen &&
					<div className={NavStyles.innerDropdown}>
						<Link href="/">
							<a>Pre-IB Blog</a>
						</Link>
					</div>
				}
			</div>
		</div>
	)
}

export default NavBar