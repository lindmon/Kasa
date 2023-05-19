import './slider.scss';
import rightArrow from '../../assets/right-arrow.png';
import leftArrow from '../../assets/left-arrow.png';
import { useState } from 'react';
//Créer le composant Slider
function Slider({imagesForSlider}) {
    const [currentIndex,setCurrentIndex]= useState(0);
    //Créer le fonction pour changer l'image précédente
    const previousSlide = () => {
        const isFirstSlide = (currentIndex === 0);        
        const newIndex = isFirstSlide ? (imagesForSlider.length - 1): (currentIndex - 1)
        setCurrentIndex(newIndex);
    }
    //Créer le fonction pour changer l'image suivante
    const nextSlide = () => {
        const isLastSlide = currentIndex === (imagesForSlider.length - 1);
        const newIndex = isLastSlide ? 0 : (currentIndex + 1);
        setCurrentIndex(newIndex);
    }
    return(
        <section className="slider" style={{backgroundImage : `url(${imagesForSlider[currentIndex]})`}} >
            {imagesForSlider.length > 1 &&
                <>
                 <img src={leftArrow} alt="flèche gauche" className="arrow arrow_left" onClick={previousSlide}  />
                 <img src={rightArrow} alt="flèche droite" className="arrow arrow_right" onClick={nextSlide}/>
                 <p className="slider_counter">{currentIndex + 1} / {imagesForSlider.length}</p> 
                 </>  
             }
        </section>
    )
}
export default Slider