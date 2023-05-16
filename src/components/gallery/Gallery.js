import './gallery.scss';
import Card from '../card/Card';
import data from '../../data/data';


function Gallery() {

// const [accommodationData, setAccommodationData] = useState({});
//  //Recuperer les données
//  useEffect(() => {
//     async function fetchAccommodation() {
//         try{
//             const response = await fetch('../../data/logements.json')
//             const {accommodationData} = await response.json()
//             setAccommodationData(accommodationData)
//         }
//         catch(err){

//         }
        

//     }
//     fetchAccommodation()
//  }, []);
//  console.log(accommodationData);
    
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