import React from 'react';

export default function Footer() {
  return (
    <footer style={{ padding: '20px', textAlign: 'center', borderTop: '1px solid #ccc' }}>
      <p>
        <a href="/legal/fletiq_terminos_y_condiciones.html" target="_blank" rel="noopener noreferrer">
          Términos y Condiciones
        </a> |{' '}
        <a href="/legal/fletiq_politica_de_privacidad.html" target="_blank" rel="noopener noreferrer">
          Política de Privacidad
        </a>
      </p>
      <p>© {new Date().getFullYear()} Fletiq. Todos los derechos reservados.</p>
    </footer>
  );
}
