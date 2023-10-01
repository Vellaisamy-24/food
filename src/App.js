
import './App.css';
import Home from './pages/Home';
import Parotta from './pages/Parotta';
import Dhosai from './pages/Dhosai';
import Briyani from './pages/Briyani';
import Idiyappam from './pages/Idiyappam';
import Idly from './pages/Idly';
import Pongal from './pages/Pongal';
import Vadai from './pages/Vadai';
import Price from './Price';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'


function App() {
  return (
    <>
    <Router>
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/parotta" element={<Parotta />} />
      <Route path="/dhosai" element={<Dhosai />} />
      <Route path="/briyani" element={<Briyani />} />
      <Route path="/idly" element={<Idly />} />
      <Route path="/vadai" element={<Vadai />} />
      <Route path="/idiyappam" element={<Idiyappam />} />
      <Route path="/pongal" element={<Pongal />} />
      <Route path="/price/:cost" element={<Price />} />
      </Routes>
    </Router>
    

    </>
  );
}

export default App;
