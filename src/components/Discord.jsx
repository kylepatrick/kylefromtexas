import React, { useState } from 'react';

export default function Discord() {  const [hover, setHover] = useState(false);
  return (
    <div className="panel">
      <h1 className="panel-title">Discord</h1>
      {/* Replace this with your real Discord widget/invite embed if you have one */}
      <p className="muted">
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
      </p>
      <div className="embed-wrap">
        {/* Example placeholder tile */}
        <div className="discord-card">
          <div className="discord-dot" />
          <div>
            <div className="discord-title">Kyle’s Discord</div>
            <div className="discord-subtitle">Join the community →</div>
          </div>
        </div>
      </div>
    </div>
  );
}
