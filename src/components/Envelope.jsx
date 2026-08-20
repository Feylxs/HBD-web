import React, { useRef } from "react";
import gsap from "gsap";
import { T } from "../constants/theme";

export const Envelope = ({ onOpen }) => {
  const envelopeRef = useRef(null);

  const openEnvelope = () => {
    gsap.to(envelopeRef.current, {
      scale: 1.1,
      duration: 0.4,
      ease: "power2.in",
      onComplete: () => {
        gsap.to(envelopeRef.current, {
          y: -100,
          opacity: 0,
          duration: 0.6,
          ease: "power3.in",
          onComplete: onOpen
        });
      }
    });
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 50,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: T.bg,
        padding: 20
      }}
    >
      {[280, 200, 130].map((s, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: s,
            height: s,
            border: `1px solid rgba(201,165,104,${0.06 + i * 0.04})`,
            borderRadius: "50%",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            pointerEvents: "none"
          }}
        />
      ))}
      <div className="env-wrap" ref={envelopeRef}>
        <button
          className="env-btn"
          onClick={openEnvelope}
          aria-label="Buka amplop"
          style={{
            position: "relative",
            width: "min(290px,80vw)",
            height: "min(192px,55vw)",
            borderRadius: 6,
            boxShadow:
              "0 30px 70px rgba(0,0,0,0.55), 0 0 50px rgba(201,165,104,0.08)",
            overflow: "hidden"
          }}
        >
          <div
            style={{ position: "absolute", inset: 0, background: "#efe3d6" }}
          />
          <div
            className="env-flap"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "52%",
              background: "#ddc9b3",
              clipPath: "polygon(0 0, 100% 0, 50% 100%)",
              zIndex: 4
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: "12px 18px 8px",
              background: "#fbf6ee",
              borderRadius: 3,
              zIndex: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              paddingTop: 10,
              gap: 6
            }}
          >
            <span
              style={{
                fontSize: "0.6rem",
                fontFamily: "monospace",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: T.faint
              }}
            >
              For You
            </span>
            <div style={{ width: 30, height: 1, background: `${T.gold}60` }} />
          </div>
          <div
            style={{
              position: "absolute",
              zIndex: 5,
              width: 46,
              height: 46,
              borderRadius: "50%",
              background:
                "radial-gradient(circle at 35% 35%, #f0b8d4, #c25c7a)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#5a2c40",
              fontSize: "1.1rem",
              boxShadow: "0 4px 14px rgba(0,0,0,0.4)"
            }}
          >
            ✦
          </div>
        </button>
      </div>
      <p
        className="pulse-gold"
        style={{
          marginTop: 36,
          fontSize: "0.6rem",
          letterSpacing: "0.38em",
          textTransform: "uppercase",
          color: T.muted,
          fontFamily: "monospace"
        }}
      >
        Klik amplop untuk membuka
      </p>
    </div>
  );
};
