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
