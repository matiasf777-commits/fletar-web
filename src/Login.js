import React from 'react';

const Login = () => (
  <div className="container">
    <h2>Iniciar sesión</h2>
    <form className="form">
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Contraseña" required />
      <button type="submit" className="btn">Entrar</button>
    </form>
  </div>
);

export default Login;
