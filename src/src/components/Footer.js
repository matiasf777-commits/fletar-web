import React from 'react';

export default function Footer() {
  return (
    <footer style={{ padding: '1rem', background: '#222', color: '#fff', textAlign: 'center' }}>
      <p>© {new Date().getFullYear()} Fletiq. Todos los derechos reservados.</p>
      <p>
        <a href="/legal/fletiq_terminos_y_condiciones.html" style={{ color: '#fff' }}>Términos y Condiciones</a> |{' '}
        <a href="/legal/fletiq_politica_de_privacidad.html" style={{ color: '#fff' }}>Política de Privacidad</a> |{' '}
        <a href="/legal/fletiq_contrato_de_adhesion_transportistas.html" style={{ color: '#fff' }}>Contrato de Adhesión</a>
      </p>
    </footer>
  );
}
