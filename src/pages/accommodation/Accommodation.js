import './accommodation.scss';
import Header from '../../components/header/Header';
import Slider from '../../components/slider/Slider';
import Rating from '../../components/rating/Rating';
import Collapse from '../../components/collapse/Collapse';
import { useParams } from 'react-router-dom';
import data from '../../data/data';

import { useEffect, useState } from 'react';



function Accommodation() {
    const id = useParams('id').id;
    const placeInfo = data.filter(data => data.id === id)[0];
    const rating = placeInfo.rating;
    // const array = [1,2,3,4,5];
    const description = placeInfo.description;
    const equipments = placeInfo.equipments;    

    //Recupere les images pour carrousel
    const [imageSlider, setImageSlider] = useState([]);

    useEffect(() => {
        const placeInfo = data.filter(data => data.id === id)[0];
        setImageSlider(placeInfo.pictures);

    }, [id]);   

    
        return(
            <div>
                <Header/>
                <Slider imagesForSlider={imageSlider}/>
                <main className='place_section'>
                    <div className="place_info">
                        <div>
                        <h1 className='place_info_title'>{placeInfo.title}</h1>
                        <p className='place_info_location'>{placeInfo.location}</p>
                        </div>
                        <div className="place_info_tags">
                            {placeInfo.tags.map((tag,index) => {
                                return(
                                    <p key={index} >{tag}</p>
                                )
                            })}
                        </div>
                    </div>
                    <div className="place_info_host">
                            <div className="place_info_host_container">
                                <div className="place_info_host_name">
                                {placeInfo.host.name}
                                </div>
                                <div className="place_info_host_img">
                                <img src={placeInfo.host.picture} alt={`${placeInfo.host.name}`} /> 
                                </div>
                                    
                                
                            </div>
                           
                            <Rating rating={rating}/>
                            
                    </div>

                    
                
                    


                </main>
                <section className="accomodation_collapse">
                <Collapse title={'Description'} content={description}/>
                <Collapse title={'Équipements'} content={equipments}/>
                </section>

            </div>

        )

}

export default Accommodation