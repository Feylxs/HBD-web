import React from "react";
import { T } from "../constants/theme";

export const SectionHeader = ({ eyebrow, subtitle }) => (
  <div
    className="reveal-element"
    style={{ textAlign: "center", marginBottom: "3.5rem" }}
  >
    <p
      className="reactbits-text"
      style={{
        fontSize: "0.6rem",
        letterSpacing: "0.35em",
        textTransform: "uppercase",
        fontFamily: "monospace",
        marginBottom: "14px",
        fontWeight: "bold"
      }}
    >
      {eyebrow}
    </p>
    {subtitle && (
      <p
        style={{
          fontSize: "0.82rem",
          fontStyle: "italic",
          color: T.muted,
          marginBottom: "18px"
        }}
      >
        {subtitle}
      </p>
    )}
    <div className="rule">
      <span
        className="shimmer-gold"
        style={{ fontSize: "0.65rem", color: T.gold }}
      >
        ✦
      </span>
    </div>
  </div>
);
