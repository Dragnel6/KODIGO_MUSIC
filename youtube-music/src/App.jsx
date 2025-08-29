import './App.css'
import ListMusic from './Components/SidebarMusic/SidebarMusic'
import NavMusic from './Components/NavMusic/NavMusic'
import MainContent from './Components/MainContent/MainContent'
import Playlist from './Components/playlist/Playlist'
import { BrowserRouter, Route, Routes } from 'react-router'
import LoginUser from './view/login/LoginUser'



function MainLayout() {
  return (
    <>
      <NavMusic />
      <ListMusic />
      <MainContent />
      <Playlist />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta para login */}
        <Route path="/LoginUser" element={<LoginUser />} />

        {/* Ruta para la vista principal */}
        <Route path="/" element={<MainLayout />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
