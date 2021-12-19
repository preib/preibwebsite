import NavBar from './NavBar';
import Footer from './Footer';

const Layout = ({children})=>{
    return(
        <div>
            <NavBar />
            <main>
                <div>
                    {children}
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Layout