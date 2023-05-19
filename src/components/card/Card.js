import './card.scss';
import { Link } from 'react-router-dom';
//Créer le composant card comme un lien pour les pages avec logements
function Card({id,title,cover}) {
    return(
            <Link to={`/accommodation/${id}`} className="gallery_card">
                <img className='gallery_card_img' src={cover} alt={title} />
                <p className='gallery_card_title'>{title}</p>
            </Link>
    )
}
export default Card