import './home.scss';
import Header from '../../components/header/Header';
import Banner from '../../components/banner/Banner';
import Gallery from '../../components/gallery/Gallery';
//Créer le componsant Home avec tous les composants nécessaire
function Home() {
    return(
        <div className="home">
            < Header/>
            <Banner />
            <Gallery />
        </div>
    )
}
export default Home
