import './home.scss';
import Banner from '../../components/banner/Banner';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';


function Home() {

    
    return(
        <div className="home">
            <Header />
            <Banner />
            <Footer />
        </div>

    )
}

export default Home
