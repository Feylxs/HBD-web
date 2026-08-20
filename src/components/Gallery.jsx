import React, { useState } from "react";
import { SectionHeader } from "./SectionHeader";
import { SpotlightCard } from "./SpotlightCard";
import { T } from "../constants/theme";

export const Gallery = () => {
  const [activeImage, setActiveImage] = useState(null);

  // Array data foto
  const photos = [
    { src: `/images/photo-1.jpg`, rotate: "-2deg", cap: "Foto disekolah" },
    { src: `/images/photo-2.jpg`, rotate: "1.5deg", cap: "Ini apa yaa..." },
    { src: `/images/photo-3.jpg`, rotate: "-1.2deg", cap: "Disaat kamu jogingg katanya." },
    { src: `/images/photo-4.jpg`, rotate: "2.2deg", cap: "Trend mata -_-" },
    { src: `/images/photo-5.jpg`, rotate: "-0.8deg", cap: "ESEMPEH" }
  ];

  return (
    <section
      style={{
        padding: "clamp(60px,10vw,100px) 20px",
        maxWidth: 940,
        margin: "0 auto"
      }}
    >
      <SectionHeader
        eyebrow="A Few Moments I Kept"
        subtitle="foto-foto yang selalu membuatku senyum"
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))",
          gap: 32
        }}
      >
        {photos.map((item, idx) => (
          <SpotlightCard
            key={idx}
            className="reveal-element polaroid"
            style={{
              background: "#f2ede0",
              padding: "11px 11px 44px",
              boxShadow: "0 18px 55px rgba(0,0,0,0.4)",
              transform: `rotate(${item.rotate})`,
              cursor: "pointer",
              position: "relative",
              border: "1px solid rgba(0,0,0,0.1)"
            }}
          >
            {/* Area Foto yang bisa diklik */}
            <div
              onClick={() => setActiveImage(item.src)}
              style={{
                width: "100%",
                paddingBottom: "100%",
                position: "relative",
                overflow: "hidden",
                background: "#1e1728"
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: `linear-gradient(135deg, #1a1421 0%, #2b1e38 50%, #1a1421 100%)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 1
                }}
              >
                <span style={{ color: T.gold, fontSize: "2rem", opacity: 0.2 }}>
                  ✦
                </span>
              </div>
              <img
                src={item.src}
                alt={`Memory ${idx + 1}`}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  zIndex: 2
                }}
                loading="lazy"
              />
            </div>

            <p
              style={{
                textAlign: "center",
                marginTop: 14,
                fontSize: "0.72rem",
                color: "#7a6d63",
                fontStyle: "italic",
                position: "relative",
                zIndex: 3
              }}
            >
              {item.cap}
            </p>
          </SpotlightCard>
        ))}
      </div>

      {/* Lightbox Modal (Muncul saat foto diklik) */}
      {activeImage && (
        <div className="lightbox-overlay" onClick={() => setActiveImage(null)}>
          <span className="lightbox-close" onClick={() => setActiveImage(null)}>
            ×
          </span>
          <img
            src={activeImage}
            alt="Full view"
            className="lightbox-image"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};
