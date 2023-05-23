import './rating.scss';
import greyStar from '../../assets/grey-star.png';
import orangeStar from '../../assets/orange-star.png';
//Créer le composant Rating 
function Rating({rating}) {
    const array = [1,2,3,4,5];
        return(
            <div className="place_info_host_stars">
               { array.map ((number, index) => {
                            return(
                            <img key={index} src={(number <= rating)? orangeStar: greyStar } 
                            alt={`cette logement est ${rating} de 5 comme évaluations`} />
                            )
                        })
                }
            </div>
        )
}
export default Rating