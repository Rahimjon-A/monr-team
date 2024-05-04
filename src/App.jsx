import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react';
import Aktsiyalar from './pages/Aktsiyalar';
import Banners from './pages/Banners';
import Otzivi from './pages/Otzivi';


function App() {

  
  const [expand, setExpand] = useState(true);

    const Expander = () => {
        setExpand(!expand)
    }
  


  return (
    <Router>
      <Routes>
        <Route path='/' element={<Aktsiyalar expand={expand} Expander={Expander}/>} /> 
        <Route path='/banners' element={<Banners expand={expand} Expander={Expander}/>} />
        <Route path='/otzivi' element={<Otzivi expand={expand} Expander={Expander}/>} />
        <Route path='/rassilka' element={<Banners expand={expand} Expander={Expander}/>} />
      </Routes>
    </Router>
  )
}

export default App
