import './about.scss';
import Banner from '../../components/banner/Banner';
import Header from '../../components/header/Header';
import Collapse from '../../components/collapse/Collapse';
import dataAbout from '../../data/dataAbout';


function About() {
    return(
        <div className="home">
            <Header/>
            <Banner />
            

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
