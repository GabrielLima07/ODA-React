import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Homepage from "./pages/Homepage";
import History from "./pages/History";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="nav-bar">
      <ul>
        <li>
          <Link to="/">Homepage</Link>
        </li>
        <li>
          <Link to="/history">Our history</Link>
        </li>
        <li>
          <Link to="/contact">Contact us</Link>
        </li>
      </ul>
      </div>
      <Routes>
        <Route exact path='/' element={<Homepage />} />     
        <Route path='/history' element={<History />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;