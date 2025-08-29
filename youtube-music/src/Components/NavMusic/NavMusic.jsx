import './NavMusic.css';
import Logomusic from '../../assets/Logomusic.svg';
import { FaUser } from "react-icons/fa";
import { Link } from "react-router";

const NavMusic = () => {
  return (
    <header>
        <div className="nav-container">
            <nav>
                <div className="logo">
                    <img src={Logomusic} alt=""/>
                    
                </div>
                <div className="search">
                    <input id="buscador" type="text" placeholder="Buscar Canciones, Albumes, Artistas" className="search-input" />
                </div>
                <div className="user-container">
                    <div className="user-icons user">
                        <Link to="/LoginUser" aria-label="Ir al login de usuario">
                          <FaUser className="user-icon" />
                        </Link>
                    </div>
                </div>
            </nav>
            <nav>
                <ul>
                    <li><a  href="#">Entrenamiento</a></li>
                    <li><a href="#">Para sentirse bien</a></li>
                    <li><a href="#">Energia</a></li>
                    <li><a href="#">Relajacion</a></li>
                    <li><a href="#">Fiesta</a></li>
                    <li><a href="#">Viaje diario</a></li>
                    <li><a href="#">Romance</a></li>
                    <li><a href="#">Triste</a></li>
                    <li><a href="#">Sueño</a></li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default NavMusic