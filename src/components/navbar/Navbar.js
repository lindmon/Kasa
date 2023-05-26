import './navbar.scss';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
//Créer le composant Navbar
function Navbar() {
        const home = '/';
        const about ='/about';
        const [activeLink, setActiveLink]= useState('activeLink');
        //Recuperer le path pour changer le style des liens dans une Nav
        useEffect(()=>{
            let path = window.location.pathname;
            setActiveLink(path);
        }, []);
        //Changer le lien après le clique
        const handleClick = (link) => {
            setActiveLink(link);
        };
        return(
            <nav className="navbar">
                <ul className='nav_list'>
                    <li onClick={()=> handleClick(home)} className={activeLink === home ? 'nav_list_active':'nav_list'}>
                        <Link to='/'>
                        Accueil
                        </Link>
                    </li>
                    <li onClick={()=> handleClick(about)} className={ activeLink === about ? 'nav_list_active':'nav_list'}>
                        <Link to="/about">
                            A Propos
                        </Link>
                    </li>
                </ul>
            </nav>
        )
}
export default Navbar