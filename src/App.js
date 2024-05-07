import { Navigation } from './Components/Navigation/Navigation';
import { Home } from './Components/Home/Home';

import { Routes, Route } from 'react-router-dom';
import Portfolio from './Components/Portfolio/Portfolio';
import './App.css';
import './GlobalStyles.scss'

function App() {
  return (
    <div className="App">
      <Navigation />

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path='/portfolio' element={<Portfolio />} />




      </Routes>



    </div>
  );
}

export default App;
