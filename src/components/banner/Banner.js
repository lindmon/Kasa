import './banner.scss';
//Rendre le banner en dépendance de la page chargée
function Banner({path}) {
     return(
        <section className={path ==="/" ?"banner":"banner_about"}>
               { (path === "/") && <p className='banner-text'>Chez vous, partout et ailleurs</p>}
            </section>
     )
}
export default Banner