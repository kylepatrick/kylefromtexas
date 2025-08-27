import React, { useState } from "react";
import "./App.css";

// ⬇️ Replace with your actual import path for the logo image/component
import appLogo from "./assets/appLogo.svg";

// Content Components
import Discord from "./components/Discord";
import Spotify from "./components/Spotify";
import Merchandise from "./components/Merchandise";

export default function App() {
  const [active, setActive] = useState("home");

  const renderContent = () => {
    switch (active) {
      case "home":
        return (
          <div className="home-wrap">
            <img src={appLogo} alt="App Logo" className="home-logo" />
          </div>
        );
      case "discord":
        return <Discord />;
      case "spotify":
        return <Spotify />;
      case "merch":
        return <Merchandise />;
      default:
        return null;
    }
  };

  return (
    <div className="layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <button className="logo-btn" onClick={() => setActive("home")} title="Home">
          <img src={appLogo} alt="App Logo" className="sidebar-logo" />
        </button>

        <nav className="menu">
          <button
            className={`menu-item ${active === "discord" ? "active" : ""}`}
            onClick={() => setActive("discord")}
            aria-current={active === "discord" ? "page" : undefined}
          >
            Discord
          </button>
          <button
            className={`menu-item ${active === "spotify" ? "active" : ""}`}
            onClick={() => setActive("spotify")}
            aria-current={active === "spotify" ? "page" : undefined}
          >
            Spotify
          </button>
          <button
            className={`menu-item ${active === "merch" ? "active" : ""}`}
            onClick={() => setActive("merch")}
            aria-current={active === "merch" ? "page" : undefined}
          >
            Merchandise
          </button>
        </nav>
      </aside>

      {/* Content */}
      <main className="content">{renderContent()}</main>
    </div>
  );
}
