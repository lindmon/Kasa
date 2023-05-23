import './home.scss';
import Banner from '../../components/banner/Banner';
import Gallery from '../../components/gallery/Gallery';
//Créer le componsant Home avec tous les composants nécessaire
function Home() {
    return(
        <div>
            <Banner />
            <Gallery />
        </div>
    )
}
export default Home
