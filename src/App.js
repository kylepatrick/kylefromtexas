import React from "react";
import "./App.css";
import tiktoklogo from "./TikTok_logo.svg";
import DiscordLink from "./DiscordLink";
import AppLogo from "./AppLogo";
import RotatingPromo from "./RotatingPromo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <AppLogo />

          <a
            className="tok-link"
            target="_blank"
            rel="noreferrer"
            href="https://www.tiktok.com/@kylefromtexas"
          >
            <img className="tok-logo" src={tiktoklogo} alt="TikTok logo" />
          </a>
<br></br>
          <DiscordLink />

          <h2 className="section-title">Official T-Shirts</h2>

          <RotatingPromo
            items={[
              {
                href: "https://www.amazon.com/Kyle-From-Texas-Official-Supporter/dp/B0FH5ZWJWW/",
                src: "https://m.media-amazon.com/images/I/A1NbHftLLnL._CLa%7C2140%2C2000%7C51QbgCL19VL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX679_.png",
                alt: "Kyle From Texas T-Shirt Style 1",
                title: "Style 1",
              },
              {
                href: "https://www.amazon.com/Official-Supporter-Full-Premium-T-Shirt/dp/B0FHS4GBXV/ref=sr_1_6?dib=eyJ2IjoiMSJ9.Qinkn8_q9lBX9OF1BtgRDXu5L_JaID3wGJN1aGDsGIsiIVqGTUZ5e9T7Kd_9-BJnUjkuqCgTAc4hAdrVbmWp8yZc6zgjiU7w-6WsBWYhR5r4H0aSSJ29APVR8QHCwCZpTlS5yLNNryESzwoyitPxwhgmqODclpRcgckRw79aS4skHt4s5aQGmdZREKqYwI8A.FdvIgBwbv1sFamyebIumpAMbeccHaNHtLyy0qLzlOro&dib_tag=se&qid=1753143607&refinements=p_4%3AKyle%2BFrom%2BTexas&s=apparel&sr=1-6&customId=B07536XX75&customizationToken=MC_Assembly_1%23B07536XX75&th=1&psc=1",
                src: "https://m.media-amazon.com/images/I/A1VmLhvi6LL._CLa%7C2140%2C2000%7C71wjarNxAiL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX569_.png",
                alt: "Kyle From Texas T-Shirt Style 2",
                title: "Style 2",
              },
            ]}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
