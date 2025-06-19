
import './App.css'
import { Routes,Route } from 'react-router-dom'

import Home from './pages/Home/Home'
import Archive from './pages/Archive/Archive'


function App() {
 
 

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/archive" element={<Archive/>}/>
       

      </Routes>
    

  )
}

export default App
