import React, { useMemo } from "react";
import { T } from "../constants/theme";

export const Petals = () => {
  const petals = useMemo(
    () =>
      Array.from({ length: 22 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        duration: `${6 + Math.random() * 10}s`,
        delay: `-${Math.random() * 9}s`,
        drift: `${(Math.random() - 0.5) * 200}px`,
        size: 9 + Math.random() * 9,
        glyph: ["✿", "❀", "✾", "❁"][Math.floor(Math.random() * 4)]
      })),
    []
  );

  return (
    <div
      style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 5 }}
    >
      {petals.map((p) => (
        <span
          key={p.id}
          className="petal"
          style={{
            left: p.left,
            color: `${T.pink}70`,
            fontSize: p.size,
            animationDuration: p.duration,
            animationDelay: p.delay,
            "--drift": p.drift
          }}
        >
          {p.glyph}
        </span>
      ))}
    </div>
  );
};
