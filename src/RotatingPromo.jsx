import React, { useEffect, useRef, useState } from "react";

export default function RotatingPromo({
  items,
  intervalMs = 4000,
  ariaLabel = "Featured merchandise",
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    const delay = reduced ? intervalMs * 2 : intervalMs;

    timerRef.current = setInterval(() => {
      if (!paused) setIndex((i) => (i + 1) % items.length);
    }, delay);

    return () => clearInterval(timerRef.current);
  }, [items.length, intervalMs, paused]);

  const goNext = () => setIndex((i) => (i + 1) % items.length);
  const goPrev = () => setIndex((i) => (i - 1 + items.length) % items.length);

  const current = items[index];

  return (
    <div
      className="promo-rotator"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label={ariaLabel}
    >
      <a
        className="promo-card"
        href={current.href}
        target="_blank"
        rel="noreferrer"
      >
        <img className="promo-img" src={current.src} alt={current.alt} />
        {current.title && (
          <div className="promo-caption">
            <h3>{current.title}</h3>
          </div>
        )}
      </a>

      <div className="promo-controls">
        <button type="button" onClick={goPrev} aria-label="Previous item">‹</button>
        <div className="promo-dots" role="tablist" aria-label="Select item">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === index}
              className={i === index ? "active" : ""}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
        <button type="button" onClick={goNext} aria-label="Next item">›</button>
      </div>
    </div>
  );
}
