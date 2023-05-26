import './header.scss';
import logo from '../../assets/logo-header.png';
import Navbar from '../navbar/Navbar';
import { Outlet } from 'react-router-dom';
//Créer le composant Header
function Header() {
    return(
        <>
            <header className="header">
                <div className="logo"><img src={logo} alt="logo de KASA, location d'appartemens" /></div>
                <Navbar/>
            </header>
            <Outlet/>
        </>
    )
}
export default Header

