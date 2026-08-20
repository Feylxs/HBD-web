import React from "react";
import { SectionHeader } from "./SectionHeader";
import { T } from "../constants/theme";

export const Cake = ({ candles, toggleCandle }) => {
  const allBlownOut = candles.every((c) => !c);

  return (
    <section
      className="reveal-element"
      style={{
        minHeight: "90vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 20px",
        textAlign: "center"
      }}
    >
      <SectionHeader
        eyebrow="Make a Wish"
        subtitle={
          allBlownOut
            ? "✨ Semoga setiap harapanmu menjadi nyata ✨"
            : "buat harapan, lalu tiup lilinnya"
        }
      />
      <p
        style={{
          maxWidth: 360,
          fontSize: "clamp(0.95rem,2.5vw,1.1rem)",
          color: T.cream,
          lineHeight: 1.75,
          marginBottom: 52
        }}
      >
        {allBlownOut
          ? "Semua lilin sudah padam. Selamat ulang tahun — semoga tahun ini membawa hal-hal yang kamu harapkan."
          : "Klik setiap api untuk meniupnya satu per satu, atau nyalakan kembali jika berubah pikiran."}
      </p>

      <div className="cake-container">
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            gap: "clamp(10px, 3vw, 20px)",
            marginBottom: "-10px",
            zIndex: 3
          }}
        >
          {candles.map((lit, i) => (
            <button
              key={i}
              className="candle-btn"
              onClick={() => toggleCandle(i)}
              aria-label={`Lilin ${i + 1}`}
            >
              {lit ? (
                <>
                  <div
                    style={{
                      position: "absolute",
                      top: -10,
                      width: 52,
                      height: 52,
                      background:
                        "radial-gradient(circle, rgba(234,180,101,0.22), transparent 70%)",
                      borderRadius: "50%",
                      pointerEvents: "none"
                    }}
                  />
                  <div
                    className="flame"
                    style={{
                      width: 12,
                      height: 22,
                      background:
                        "linear-gradient(to top, #f97316, #fbbf24 60%, #fffde7)",
                      borderRadius: "50% 50% 25% 25%",
                      marginBottom: 4,
                      boxShadow:
                        "0 0 10px #eab465, 0 0 22px rgba(234,180,101,0.35)"
                    }}
                  />
                </>
              ) : (
                <div
                  style={{
                    width: 2,
                    height: 12,
                    background: "#4a4039",
                    marginBottom: 4
                  }}
                />
              )}
              <div
                style={{
                  width: "clamp(14px,2.5vw,18px)",
                  height: "clamp(60px,10vw,80px)",
                  background:
                    "linear-gradient(to right, #d6c4a8, #efe3d6 40%, #faf6ee 60%, #dac9b2)",
                  borderRadius: 3,
                  boxShadow:
                    "inset -3px 0 6px rgba(0,0,0,0.12), 0 4px 14px rgba(0,0,0,0.3)",
                  opacity: lit ? 1 : 0.6,
                  transition: "opacity 0.4s ease"
                }}
              />
            </button>
          ))}
        </div>
        <div className="cake-body" style={{ minHeight: "120px" }}>
          <div className="cake-icing"></div>
          <div className="cake-drip"></div>
        </div>
        <div className="cake-plate"></div>
      </div>

      {allBlownOut && (
        <div style={{ marginTop: 40, animation: "wishReveal 0.8s ease both" }}>
          <p style={{ fontSize: "2.2rem", marginBottom: 8 }}>🎂</p>
          <p
            className="reactbits-text"
            style={{
              fontFamily: "monospace",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              fontWeight: "bold"
            }}
          >
            Selamat Ulang Tahun ✦
          </p>
        </div>
      )}
    </section>
  );
};
