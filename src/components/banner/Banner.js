import './banner.scss';
import {useLocation} from "react-router-dom";


function Banner() {
    const path = useLocation().pathname;
    console.log(path);

    return(
        <section>
            <div className="banner"></div>
            <p></p>
        </section>
        

    )
}

export default Banner