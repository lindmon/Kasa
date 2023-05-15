import './home.scss';
import Banner from '../../components/banner/Banner';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Gallery from '../../components/gallery/Gallery';



function Home() {

    
    return(
        <div className="home">
            <Header />
            <Banner />
            <Gallery />
            <Footer />
        </div>

    )
}

export default Home
