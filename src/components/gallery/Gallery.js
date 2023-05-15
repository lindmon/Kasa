import './gallery.scss';
import Card from '../card/Card';
import data from '../../data/data';


function Gallery() {

// const [accomodationData, setAccomodationData] = useState({});
//  //Recuperer les données
//  useEffect(() => {
//     async function fetchAccomodation() {
//         try{
//             const response = await fetch('../../data/logements.json')
//             const {accomodationData} = await response.json()
//             setAccomodationData(accomodationData)
//         }
//         catch(err){

//         }
        

//     }
//     fetchAccomodation()
//  }, []);
//  console.log(accomodationData);
    
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