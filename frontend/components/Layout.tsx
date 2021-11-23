import NavBar from './NavBar';
import Footer from './Footer';

const Layout = ({children})=>{
    return(
        <div style={ { position: 'absolute', width: '100vw'} }>
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