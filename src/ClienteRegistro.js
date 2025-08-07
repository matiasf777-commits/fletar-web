import React from 'react';

const ClienteRegistro = () => (
  <div className="container">
    <h2>Registro de Cliente</h2>
    <form className="form">
      <input type="text" placeholder="Nombre y apellido" required />
      <input type="email" placeholder="Email" required />
      <input type="tel" placeholder="Teléfono" required />
      <input type="password" placeholder="Contraseña" required />
      <button type="submit" className="btn">Registrarme</button>
    </form>
  </div>
);

export default ClienteRegistro;
