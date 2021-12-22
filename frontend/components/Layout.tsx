import NavBar from './NavBar';
import Footer from './Footer';

const Layout = ({children})=>{
    return(
        <div>
            <NavBar />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout