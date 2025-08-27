import React from "react";

export default function Spotify() {
  return (
    <div className="panel">
      <h1 className="panel-title">Spotify</h1>
      <div className="embed-wrap">
        <iframe
          data-testid="embed-iframe"
          style={{ borderRadius: 12 }}
          src="https://open.spotify.com/embed/playlist/6oIrnmx28BEiE6ZZCIv1Tp?utm_source=generator"
          width="100%"
          height="380"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="Spotify Embed"
        />
      </div>
    </div>
  );
}
