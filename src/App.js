import logo from './Logo.svg';
import tiktoklogo from "./TikTok_logo.svg.png";
import React from 'react';
import './App.css';
import EmailLink from './EmailLink';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img height="200px" src={logo} className="App-logo" alt="logo" />
        <a target="_blank" rel="noreferrer" href="https://www.tiktok.com/@kylefromtexas">
          <img height="100px" src={tiktoklogo} alt="TikTok logo" />
        </a>

        <EmailLink />

        <br /><br />
        Official T-Shirt<br />
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.amazon.com/Kyle-From-Texas-Official-Supporter/dp/B0FH5ZWJWW/"
        >
          <img
            height="400px"
            alt="Kyle From Texas T-Shirt"
            src="https://m.media-amazon.com/images/I/A1NbHftLLnL._CLa%7C2140%2C2000%7C51QbgCL19VL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX679_.png"
          />
        </a>
      </header>
    </div>
  );
}

export default App;
