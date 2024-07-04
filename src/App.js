import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState,useEffect } from 'react';
import Footer from './components/global/footer'
import LuzdeInnovacion from './components/landingPages/luzdeInnovacion';
import NebulaGame from './components/landingPages/NebulaGame';
import MegaLoto from './components/NebulaGame/MegaLoto/Express/components/Loto-2';
import NumberGenerator from './components/NebulaGame/MegaLoto/Express/components/NumberGenerator';
import GanadorModal from './components/NebulaGame/MegaLoto/Express/components/Ganador';
import NumerosComponent from './components/prueba';
import './App.css';

function App() {
 return(
  <div className='app'>
    <Router>
      <Routes>
        <Route path='/' element={<LuzdeInnovacion/>}/>
        <Route path='/NebulaGame' element={<NebulaGame/>}/>
        <Route path='/NebulaGame/MegaLotoExpress' element={<MegaLoto/>}/>
        <Route path='/NebulaGame/MegaLotoExpress/control' element={<NumberGenerator/>}/>
        <Route path='/NebulaGame/MegaLotoExpress/Ganador' element={<GanadorModal/>}/>
        <Route path='/NebulaGame/MegaLotoExpress/prueba' element={<NumerosComponent/>}/>



      </Routes>
    </Router>
    <Footer/>
  </div>
 ) 
}

export default App;
