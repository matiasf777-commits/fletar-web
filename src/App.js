import Footer from './components/Footer';

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ClienteRegistro from './ClienteRegistro';
import TransportistaRegistro from './TransportistaRegistro';
import Login from './Login';

const Home = () => (
  <div className="container">
    <h1>FLETAR</h1>
    <p>¿Qué sos?</p>
    <div className="buttons">
      <Link to="/cliente" className="btn">Soy Cliente</Link>
      <Link to="/transportista" className="btn">Soy Transportista</Link>
      <Link to="/login" className="btn outline">Ya tengo cuenta</Link>
    </div>
  </div>
);

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cliente" element={<ClienteRegistro />} />
      <Route path="/transportista" element={<TransportistaRegistro />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </Router>
);

export default App;
<Footer />

