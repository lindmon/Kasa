import './about.scss';
import Banner from '../../components/banner/Banner';
import Collapse from '../../components/collapse/Collapse';
import dataAbout from '../../data/dataAbout';
// Créer le composant About avec tous les composants nécessaires
function About() {
    const path = window.location.pathname;
    return(
        <div className="home">
            <Banner path = {path} />
            <main className="about_main">
                {dataAbout.map( data => {
                    return(
                        <div className="about_collapse" key={data.id}>
                            <Collapse title={data.title} content={data.content} />
                        </div>
                    )
                })}
            </main>
        </div>
    )
}
export default About
