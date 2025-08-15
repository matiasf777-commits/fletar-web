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
<div style={{ marginTop: '1rem' }}>
  <input type="checkbox" required />{' '}
  Acepto los{' '}
  <a href="/legal/fletiq_terminos_y_condiciones.html" target="_blank">Términos y Condiciones</a>,{' '}
  <a href="/legal/fletiq_politica_de_privacidad.html" target="_blank">Política de Privacidad</a> y{' '}
  <a href="/legal/fletiq_contrato_de_adhesion_transportistas.html" target="_blank">Contrato de Adhesión</a>.
</div>
