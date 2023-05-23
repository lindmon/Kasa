import './navbar.scss';
import { Link } from 'react-router-dom';
//Créer le composant Navbar
function Navbar() {
        const path = window.location.pathname;
        return(
            <nav className="navbar">
                <ul className='nav_list'>
                    <li className={ path === '/' ? 'nav_list_active':'nav_list'}>
                        <Link to='/'>
                        Accueil
                        </Link>
                    </li>
                    <li className={ path === '/about' ? 'nav_list_active':'nav_list'}>
                        <Link to="/about">
                            A Propos
                        </Link>
                    </li>
                </ul>
            </nav>
        )
    
    
    // useEffect( () => {
    //    let path = window.location.pathname;
        
    //     console.log(path);
    
    
    
    // },[Link]);


    
}
export default Navbar