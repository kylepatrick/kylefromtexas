import React, { useState } from 'react';

function DiscordLink() {
  const [hover, setHover] = useState(false);

  return (
    <a
      href="https://discord.gg/byfQbwJyqC"
      target="_blank"
      rel="noopener noreferrer"
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
     Join Me On Discord
    </a>
  );
}

export default DiscordLink;
