import React, { useState } from 'react';

function EmailLink() {
  const [hover, setHover] = useState(false);

  return (
    <a
      href="mailto:Kyle@KyleFromTexas.com"
      style={{
        padding: '10px 20px',
        backgroundColor: hover ? '#555' : '#222',
        color: hover ? '#fff' : '#ccc',
        border: '2px solid #ccc',
        borderRadius: '8px',
        fontSize: '1.1rem',
        fontWeight: 'bold',
        textDecoration: 'none',
        transition: 'all 0.3s ease',
        boxShadow: hover ? '0 4px 12px rgba(255,255,255,0.2)' : 'none',
        transform: hover ? 'scale(1.05)' : 'scale(1.0)',
        display: 'inline-block',
        marginTop: '1rem'
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      Email Kyle
    </a>
  );
}

export default EmailLink;
