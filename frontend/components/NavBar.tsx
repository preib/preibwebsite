import Link from 'next/link'

const NavBar = () => {
    return (
        <div className="fixed w-full h-16 flex justify-center items-center gap-x-6 bg-blue-400 bg-opacity-50 z-10">
            <Link href="/mentorship">
                <a>mentorship</a>
            </Link>
            <Link href="/notes">
                <a>notes</a>
            </Link>
            <Link href="/board">
                <a>board</a>
            </Link>
        </div>
    )
}

export default NavBar