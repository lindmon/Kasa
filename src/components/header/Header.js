import './header.scss';
import logo from '../../assets/logo-header.png';
import Navbar from '../navbar/Navbar';


function Header() {
    return(
        <header className="header">
            <div className="logo"><img src={logo} alt="logo de KASA, location d'appartemens" /></div>
            <Navbar/>
        
        </header>

    )
}

export default Header

