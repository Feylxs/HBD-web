import React, { useMemo } from "react";
import { T } from "../constants/theme";

export const Petals = () => {
  const petals = useMemo(() => Array.from({ length: 18 }, (_, i) => ({
    id: i, 
    left: `${Math.random() * 100}%`, 
    duration: `${7 + Math.random() * 10}s`,
    delay: `-${Math.random() * 9}s`, 
    drift: `${(Math.random() - 0.5) * 250}px`,
    // Ukuran diperbesar dari sebelumnya (9 + 9) menjadi (16 + 14)
    size: 16 + Math.random() * 14, 
    glyph: ["✿", "❀", "✾", "❁"][Math.floor(Math.random() * 4)]
  })), []);

  return (
    <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 5 }}>
      {petals.map((p) => (
        <span key={p.id} className="petal" style={{
          left: p.left, 
          // Warna lebih jelas (alpha 90)
          color: `${T.pink}90`, 
          fontSize: p.size,
          animationDuration: p.duration, 
          animationDelay: p.delay, 
          "--drift": p.drift
        }}>{p.glyph}</span>
      ))}
    </div>
  );
};