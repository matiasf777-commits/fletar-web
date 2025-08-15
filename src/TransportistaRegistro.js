import React from 'react';

const TransportistaRegistro = () => (
  <div className="container">
    <h2>Registro de Transportista</h2>
    <form className="form">
      <input type="text" placeholder="Nombre y apellido" required />
      <input type="email" placeholder="Email" required />
      <input type="tel" placeholder="Teléfono" required />
      <input type="text" placeholder="Tipo de vehículo" required />
      <input type="text" placeholder="Rubro de mercadería" required />
      <label>¿Tenés habilitación especial?</label>
      <select required>
        <option value="">Seleccionar...</option>
        <option value="si">Sí</option>
        <option value="no">No</option>
      </select>
      <label>Subí la documentación (PDF o imagen)</label>
      <input type="file" accept=".pdf,.jpg,.jpeg,.png" />
      <input type="password" placeholder="Contraseña" required />
      <button type="submit" className="btn">Registrarme</button>
    </form>
  </div>
);

export default TransportistaRegistro;
<div style={{ marginTop: '1rem' }}>
  <input type="checkbox" required />{' '}
  Acepto los{' '}
  <a href="/legal/fletiq_terminos_y_condiciones.html" target="_blank">Términos y Condiciones</a>,{' '}
  <a href="/legal/fletiq_politica_de_privacidad.html" target="_blank">Política de Privacidad</a> y{' '}
  <a href="/legal/fletiq_contrato_de_adhesion_transportistas.html" target="_blank">Contrato de Adhesión</a>.
</div>
