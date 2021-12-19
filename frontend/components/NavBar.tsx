import Link from 'next/link'
import NavStyles from '/styles/navbar.module.scss'
const NavBar = () => {
	return (
		// TODO MAKE NAVBAR MOBILE FRIENDLY
		<div className="fixed w-full py-4 hidden md:flex justify-center gap-x-6 z-10 bg-white">
			<div className="absolute left-20 text-xl font-bold" style={{top:"50%",transform:"translateY(-50%)"}}>
				<Link href="/">
					<a>preib</a>
				</Link>
			</div>
			<div className={NavStyles.dropdown}>
				<Link href="">
					<a>mentorship</a>
				</Link>
				<div className={NavStyles.innerDropdown}>
					<Link href="/mentors">
						<a> Mentor Profiles </a>
					</Link>
					<Link href="">
						<a> Become a Mentor </a>
					</Link>
					<Link href="">
						<a> FAQ </a>
					</Link>
					<Link href="">
						<a> Request a Mentor </a>
					</Link>
				</div>
			</div>
			<Link href="/notes" >
				<a>notes</a>
			</Link>
			<div className={NavStyles.dropdown}>
				<Link href="/resources">
					<a>resources</a>
				</Link>
				<div>
					<div className={NavStyles.innerDropdown}>
						<Link href="">
							<a> Chemistry </a>
						</Link>
						<Link href="">
							<a> Physics </a>
						</Link>
						<Link href="">
							<a> Math </a>
						</Link>
						<Link href="">
							<a> French </a>
						</Link>
						<Link href="">
							<a>English</a>
						</Link>
					</div>
				</div>
			</div>
			<Link href="/board">
				<a>board</a>
			</Link>
			<div className={NavStyles.dropdown}>
				<Link href="/about">
					<a>about us</a>
				</Link>
				<div className={NavStyles.innerDropdown}>
					<Link href="">
						<a>Pre-IB Blog</a>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default NavBar