import NavBar from './NavBar';
import Footer from './Footer';

const Layout = ({children})=>{
    return(
        <div>
            <NavBar />
            <div className="container">
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout