import './footer.scss';
import logo from '../../assets/logo-footer.png';


function Footer() {

    
    return(
        <footer className='footer' >
            <img className='logo' src={logo} alt="logo de KASA, location d'appartemens" />
            <p className='text_copyright'>© 2020 Kasa. All rights reserved</p>

        </footer>

    )
}

export default Footer