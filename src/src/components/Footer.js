import React from 'react';

export default function Footer() {
  const A = ({ href, children }) => (
    <a href={href} target="_blank" rel="noreferrer" style={{ color: '#1869FF', textDecoration: 'none' }}>
      {children}
    </a>
  );

  return (
    <footer style={{ marginTop: 40, padding: '16px 0', textAlign: 'center', color: '#555', borderTop: '1px solid #eee' }}>
      <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
        <A href="/legal/fletiq_terminos_y_condiciones.html">Términos</A>
        <A href="/legal/fletiq_politica_de_privacidad.html">Privacidad</A>
        <A href="/legal/fletiq_contrato_de_adhesion_transportistas.html">Contrato transportistas</A>
      </div>
      <small style={{ display: 'block', marginTop: 8, opacity: .7 }}>
        © {new Date().getFullYear()} — Marca provisoria “Fletiq”.
      </small>
    </footer>
  );
}
