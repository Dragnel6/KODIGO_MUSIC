import './MainContent.css';
import { FaArrowRight, FaUser } from "react-icons/fa";

import mixart from '../../assets/mixart.jpeg';
import playlist from '../../assets/playlist_creation.png';

const MainContent = () => {
  return (
    <main className="main-content">
      <div className='Welcome-content'>
        <div className="user-icons user">
            <a href="#"><FaUser className="user-icon" /></a>
        </div>
        <div >
          <h1>Te damos la bienvenida, Usuario</h1>
        </div>
      </div>
      <div class="parent">
          <div class="div1">
            <div className='info'>
              <div className='info-content' ><h2>Prueba la playlist perfecta, solo para ti</h2></div>
              <div className='info-content' >
                <a href="#"><FaArrowRight className="user-icon" /></a>
              </div>
            </div>
            <div>
              <img src={mixart} alt="" />
            </div>
          </div>
          <div class="div2">
            <div className='info'>
              <div className='info-content' ><h2>Prueba nuestra playlist de inicio rápido</h2></div>
              <div className='info-content' >
                <a href="#"><FaArrowRight className="user-icon" /></a>
              </div>
            </div>
            <div>
              <img src={playlist} alt="" />
            </div>
          </div>
          <div class="div3">
            <div className='info'>
              <div className='info-content' ><h2>Prueba la playlist perfecta, solo para ti</h2></div>
              <div className='info-content' >
                <a href="#"><FaArrowRight className="user-icon" /></a>
              </div>
            </div>
            <div>
              <img src={mixart} alt="" />
            </div>
          </div>
          
      </div>
    </main>
    
  )
}

export default MainContent