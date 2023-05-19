import './gallery.scss';
import Card from '../card/Card';
import data from '../../data/data';
//Créer le composant Gallery
function Gallery() {
    return(
       <section className="gallery">
            {data.map( data => {
                return(
                    <Card
                        key={data.id}
                        id={data.id}
                        title = {data.title}
                        cover = {data.cover}
                    />
                )            
            })}
       </section>
    )
}
export default Gallery