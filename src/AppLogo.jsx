import React from "react";

export default function AppLogo() {
  return (
    <div style={{ display: "grid", placeItems: "center", gap: "0.5rem" }}>
      <img
        src={require("./TikTok_logo.svg.png")}
        alt="Logo"
        style={{ width: "clamp(140px, 22vw, 280px)", height: "auto" }}
      />
      <h1 style={{ margin: 0, fontSize: "clamp(1.4rem, 3vw, 2.2rem)" }}>
        Kyle From Texas
      </h1>
    </div>
  );
}
