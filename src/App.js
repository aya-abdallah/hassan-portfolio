import { Navigation } from './Components/Navigation/Navigation';
import { Home } from './Components/Home/Home';

import { Routes, Route, HashRouter } from 'react-router-dom';
import Portfolio from './Components/Portfolio/Portfolio';
import './App.css';
import './GlobalStyles.scss'

function App() {
  return (
    <div className="App">
      <Navigation />
      <HashRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path='/portfolio' element={<Portfolio />} />
        </Routes>
      </HashRouter>

    </div>
  );
}

export default App;
