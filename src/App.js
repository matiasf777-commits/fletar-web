import React from 'react';
import Footer from './components/Footer'; // Importa el Footer

function App() {
  return (
    <div className="App">
      <header>
        <h1>Bienvenido a Fletiq</h1>
      </header>

      <main>
        <p>Contenido principal de la aplicación...</p>
      </main>

      <Footer /> {/* Footer con enlaces legales */}
    </div>
  );
}

export default App;

