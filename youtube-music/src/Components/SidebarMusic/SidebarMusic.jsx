import './SidebarMusic.css';
import { FaHome, FaCompass, FaBook, FaRedo } from "react-icons/fa";

const ListMusic = () => {
  return (
    <aside className="sidebar">
      <div className='sidebarContent'>
          <div className='menuSidebar'>
            <nav className="menu">
              <div>
                <FaHome className='icon' />
                <a href="#">Principal</a>
              </div>
              <div>
                <FaCompass className='icon' />
                <a href="#">Explorar</a>
              </div>
              <div>
                <FaBook className='icon' />
                <a href="#">Biblioteca</a>
              </div>
              <div>
                <FaRedo className='icon' />
                <a href="#">Actualizar</a>
              </div>
              
           </nav>
          </div>
      </div>
    </aside>
  )
}

export default ListMusic