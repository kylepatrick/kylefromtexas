import React, { useEffect, useRef, useState } from "react";

/**
 * Simple rotating promo component.
 * - Cycles through promo items every 5 seconds
 * - You can swap images/text/links below as needed
 */
const PROMOS = [
  {
    id: 1,
    title: "Texas Star Tee",
    text: "Classic ‘Kyle from Texas’ star tee.",
    img: "/promos/texas-star-tee.jpg",
    href: "https://www.amazon.com/Official-Supporter-Full-Premium-T-Shirt/dp/B0FHS4GBXV/ref=sr_1_6?crid=2MRTMUHHVPRXY&dib=eyJ2IjoiMSJ9.Oq6BJNFARLwlyYFVdM3uEjx2Q8HeJoJgzeLOsmMTQkK3ep68_athOVdA6ixDFk8bZqS5yzTR1qge3ydZK7rmQBMdetZqAx4jqJYkWFLS_r28KXsAqv66p74xy6I1FknP6OtnSj_eZZcue5HyDY9ANSoNmcAukKd7paO8-Fn5WSGNutV-DCOFBZlUY52qqu5qVrnBmmBi7p6tZtFbPJ_o91wbd3XMlEJNDPjwpI17Dbkbhdscd5q4wFUDPTNV4n0W6zSoMbVtPbgWqWhOLdd0Bzf51tOCmvZCcqNlOr6CHb4.7g68unDsVcPVTYeod2Qvs0wVEbvCP3hbmxxMXwPdOTY&dib_tag=se&keywords=kyle+from+texas&qid=1756123438&sprefix=kyle+from+texas%2Caps%2C97&sr=8-6"
  },
  {
    id: 2,
    title: "Howdy Y’all Hoodie",
    text: "Cozy hoodie for cool nights.",
    img: "/promos/howdy-hoodie.jpg",
    href: "https://www.amazon.com/Official-Supporter-Full-Pullover-Hoodie/dp/B0FJM5TH4B/ref=sr_1_11?dib=eyJ2IjoiMSJ9.-RQCNFd-PLoiP939gSeGwyUBShbMUoCirTR4PE3KdKTYIGVRoo8yLWoU6dGPQZjov9fuz249xm1ed2YuYSF9hde2pjFZbyc-IiSsBAWkhQrEZe6RuXBnA_yZNJRk8E4-oZePerIWl11Z4p4cmDIIhVBymDF_3T34ZBaPQu8SBlVyZXzA14iWYMuSDdeGkJqmJQqU4o4_hNA5e48JtV6DF9APjv4YlNYSy0t66K6FgJWanDzEGGY9u14DaAocd_ys-grZq8bGl9cDhebyZ75dp0j_9SR4g8JdtyOR5uV4sxs.jyRoQSDOaYNfYe1guGF6VXzGXwMe5A-6fiuEkQtTr4A&dib_tag=se&qid=1756123557&refinements=p_4%3AKyle%2BFrom%2BTexas&s=apparel&sr=1-11&customId=B078RXQC7K&customizationToken=MC_Assembly_1%23B078RXQC7K&th=1"
  } 
];

export default function Merchandise() {
  const [idx, setIdx] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setIdx((i) => (i + 1) % PROMOS.length);
    }, 5000);

    return () => clearInterval(timerRef.current);
  }, []);

  const current = PROMOS[idx];

  return (
    <div className="panel">
      <h1 className="panel-title">Merchandise</h1>

      <div className="promo-wrap" role="region" aria-live="polite">
        <a className="promo-card" href={current.href} target="_blank" rel="noreferrer">
          <div className="promo-image-wrap">
            <img src={current.img} alt={current.title} className="promo-image" />
          </div>
          <div className="promo-body">
            <h2 className="promo-title">{current.title}</h2>
            <p className="promo-text">{current.text}</p>
            <span className="promo-link">Shop now</span>
          </div>
        </a>
      </div>

      <div className="promo-dots" aria-label="promo selector">
        {PROMOS.map((p, i) => (
          <button
            key={p.id}
            aria-label={`Show ${p.title}`}
            className={`dot ${i === idx ? "dot-active" : ""}`}
            onClick={() => setIdx(i)}
          />
        ))}
      </div>
    </div>
  );
}
