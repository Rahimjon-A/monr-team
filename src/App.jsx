
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Rahimjon from './pages/Rahimjon'

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Rahimjon/>} /> 
      </Routes>
    </Router>
  )
}

export default App
