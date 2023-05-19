import './rating.scss';
import greyStar from '../../assets/grey-star.png';
import orangeStar from '../../assets/orange-star.png';


function Rating({rating}) {
    const array = [1,2,3,4,5];
   
        return(
            <div className="place_info_host_stars">

               { array.map (number => {
                            return(
                            <img src={(number <= rating)? orangeStar: greyStar } 
                            alt={`cette logement est ${rating} de 5 comme évaluations`} />
                            )
                        })
                }
        
            </div>
        )
    
     
}

export default Rating