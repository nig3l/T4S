import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
}from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";


function App() {
  return (
    <Router>
   
        <div className="App">
            <ul className="App-header">
                <li>
                    <Link to="/"Home></Link>
                </li>
                <li>
                    <Link to="/about">
                        About Us
                    </Link>
                </li>
                <li>
                    <Link to="/contact">
                        Contact Us
                    </Link>
                </li>
            </ul>
            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                ></Route>
                <Route
                    path="/about"
                    element={<About />}
                ></Route>
                <Route
                    path="/contact"
                    element={<Contact />}
                ></Route>
            </Routes>
        </div>
    </Router>
  );
}

export default App;
