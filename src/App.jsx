import { Analytics } from "@vercel/analytics/react";
import React, { useState, useRef } from "react";
import { useSmoothScroll } from "./hooks/useSmoothScroll";
import { Petals } from "./components/Petals";
import { ScrollProgress } from "./components/ScrollProgress";
import { Envelope } from "./components/Envelope";
import { PasswordGate } from "./components/PasswordGate"; // <-- Impor komponen password
import { SectionHeader } from "./components/SectionHeader";
import { Timeline } from "./components/Timeline";
import { Gallery } from "./components/Gallery";
import { Cake } from "./components/Cake";
import { T } from "./constants/theme";
import "./styles/GlobalStyles.css";

export default function App() {
  const [isAuth, setIsAuth] = useState(false); // <-- State Autentikasi
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [candles, setCandles] = useState([true, true, true, true, true]);
  const audioRef = useRef(null);

  // Init GSAP + Lenis
  useSmoothScroll(isOpen);

  const toggleCandle = (i) =>
    setCandles((prev) => {
      const n = [...prev];
      n[i] = !n[i];
      return n;
    });

  const toggleAudio = () => {
    if (!audioRef.current) return;
    isPlaying
      ? audioRef.current.pause()
      : audioRef.current.play().catch(() => {});
    setIsPlaying((p) => !p);
  };

  const section = (extra = {}) => ({
    padding: "clamp(60px,10vw,100px) 20px",
    maxWidth: 720,
    margin: "0 auto",
    ...extra
  });

  // Jika belum login (belum masukkan password), tampilkan halaman PasswordGate
  if (!isAuth) {
    return <PasswordGate onSuccess={() => setIsAuth(true)} />;
  }

  // Jika sudah login, tampilkan webnya seperti biasa
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: T.bg,
        color: T.text,
        fontFamily: 'Georgia, "Times New Roman", serif',
        overflowX: "hidden",
        position: "relative"
      }}
    >
      <ScrollProgress />
      <Petals />
      <audio ref={audioRef} loop src="/audio/no-one.mp3" />

      {isOpen && (
        <button
          className="audio-btn"
          onClick={toggleAudio}
          aria-label={isPlaying ? "Pause music" : "Play music"}
          style={{
            position: "fixed",
            bottom: 24,
            right: 24,
            width: 44,
            height: 44,
            borderRadius: "50%"
          }}
        >
          {isPlaying ? (
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 5h4v14H6zM14 5h4v14h-4z" />
            </svg>
          ) : (
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>
      )}

      {!isOpen ? (
        <Envelope onOpen={() => setIsOpen(true)} />
      ) : (
        <main>
          {/* HERO */}
          <section
            style={{
              minHeight: "100vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              padding: "0 20px",
              position: "relative"
            }}
          >
            <div>
              <p
                className="reveal-element"
                style={{
                  fontSize: "0.6rem",
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  color: T.gold,
                  fontFamily: "monospace",
                  marginBottom: 20
                }}
              >
                — sebuah persembahan kecil —
              </p>
              <h1
                className="reveal-element"
                style={{
                  fontSize: "clamp(2.4rem,9vw,5.2rem)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1
                }}
              >
                Happy Birthday, <br />
                <span
                  className="reactbits-text"
                  style={{ fontStyle: "italic" }}
                >
                  Nadia Putri Ramadhani
                </span>
              </h1>
              <p
                className="reveal-element"
                style={{
                  marginTop: 18,
                  color: T.muted,
                  fontSize: "0.88rem",
                  letterSpacing: "0.08em"
                }}
              >
                a few words, written slowly and with care
              </p>
            </div>
            <div
              className="reveal-element"
              style={{
                marginTop: 52,
                display: "flex",
                alignItems: "center",
                gap: 14,
                opacity: 0.35
              }}
            >
              <div style={{ width: 50, height: 1, background: T.gold }} />
              <span style={{ color: T.gold, fontSize: "0.75rem" }}>✦</span>
              <div style={{ width: 50, height: 1, background: T.gold }} />
            </div>
          </section>

          {/* SURAT */}
          <section style={section()}>
            <SectionHeader
              eyebrow="Sebuah Surat"
              subtitle="ditulis dengan tangan yang sedikit gemetar"
            />
            <div
              className="reveal-element letter-paper"
              style={{
                borderRadius: 4,
                padding: "clamp(28px,7vw,56px) clamp(28px,7vw,52px)",
                boxShadow:
                  "0 32px 80px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.6)",
                color: "#3d3530",
                lineHeight: 1.95
              }}
            >
              <p
                style={{
                  fontSize: "0.7rem",
                  color: "#9c9585",
                  marginBottom: 28,
                  fontFamily: "monospace",
                  letterSpacing: "0.05em"
                }}
              >
                [ Bogor ], [ 17/08/2026 ]
              </p>
              <p
                style={{
                  marginBottom: 24,
                  fontSize: "clamp(0.92rem,2.5vw,1.02rem)"
                }}
              >
                Dear <em>Yayaa</em>,
              </p>
              <p
                style={{
                  marginBottom: 20,
                  color: "#4a4039",
                  fontSize: "clamp(0.88rem,2.3vw,0.97rem)"
                }}
              >
                Selamat ulang tahunn yaa yayaa yang kee 17/18, akuu lupaa maaff
                yaa. Nggaa adaa yang bisaa aku ungkapin banyakk sii karena yaa
                disini aku cuma bisaa mintaa maaff dari apaa yang aku lakuin
                sebelumnyaa. Maafff pesan-pesan kamu yang waktu itu gaa aku
                bukaa, disitu posisi akuu uda bener-bener gaa karuan dan yaa
                akhirnya WA akupun aku matiin. Aku mintaa maaff baru bisa show
                up lagi sekarangg. Di umur kamu yang baru ini, aku berdoa semoga
                kamu makin bahagia, dikelilingi orang-orang yang sayang sama
                kamu, dan semua urusan kamu dilancarin. Makasih yaa udah pernah
                jadi orang yang baik buat aku. Kamu ngga harus balas pesan ini
                kok, aku cuma mau ngucapin selamat dan minta maaf dengan bener.
                Bahagia terus yaa, Yayaa.
              </p>
              <p
                style={{
                  fontStyle: "italic",
                  color: "#3d3530",
                  fontSize: "clamp(0.9rem,2.3vw,1rem)"
                }}
              >
                Dengan sepenuh hati,
                <br />
                <span
                  style={{
                    display: "block",
                    marginTop: 10,
                    fontSize: "1.2rem"
                  }}
                >
                  [ Finn ]
                </span>
              </p>
            </div>
          </section>

          {/* TIMELINE */}
          <Timeline />

          {/* GALLERY */}
          <Gallery />

          {/* ALASAN */}
          <section style={section({ maxWidth: 800 })}>
            <SectionHeader
              eyebrow="Hal-Hal yang Kusuka Darimu"
              subtitle="daftar kecil yang bisa terus bertambah"
            />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(210px,1fr))",
                gap: 14
              }}
            >
              {[
                "Cara kamu tertawa",
                "Kejujuranmu",
                "Perhatian kecilmu",
                "Semangatmu",
                "Ego kamu yang selalu mengalah",
                "Yang selalu yakinin aku kalau aku bisa"
              ].map((text, idx) => (
                <div
                  key={idx}
                  className="reveal-element spotlight-card"
                  style={{
                    padding: "22px 18px",
                    border: `1px solid rgba(201,165,104,0.14)`,
                    borderRadius: 4,
                    background: "rgba(255,255,255,0.02)",
                    cursor: "default"
                  }}
                >
                  <span
                    style={{
                      display: "block",
                      fontSize: "0.56rem",
                      fontFamily: "monospace",
                      letterSpacing: "0.18em",
                      color: T.gold,
                      opacity: 0.55,
                      marginBottom: 12,
                      position: "relative",
                      zIndex: 2
                    }}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <p
                    style={{
                      color: T.muted,
                      fontSize: "0.86rem",
                      lineHeight: 1.75,
                      position: "relative",
                      zIndex: 2
                    }}
                  >
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* KUTIPAN */}
          <section
            className="reveal-element"
            style={{ ...section({ maxWidth: 580 }), textAlign: "center" }}
          >
            <div
              style={{
                fontSize: "6rem",
                lineHeight: 0.7,
                color: T.gold,
                opacity: 0.15,
                marginBottom: 24,
                userSelect: "none"
              }}
            >
              "
            </div>
            <p
              style={{
                fontSize: "clamp(1.05rem,3.2vw,1.35rem)",
                fontStyle: "italic",
                color: T.cream,
                lineHeight: 1.85,
                marginBottom: 26
              }}
            >
              "Rasa hormat adalah jalan dua arah, jika kamu ingin
              mendapatkannya, kamu harus memberikannya."
            </p>
            <p
              style={{
                fontSize: "0.65rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: T.faint,
                fontFamily: "monospace"
              }}
            >
              — R.G. Risch
            </p>
          </section>

          {/* KUE & LILIN */}
          <Cake candles={candles} toggleCandle={toggleCandle} />

          {/* PENUTUP */}
          <section
            className="reveal-element"
            style={{
              padding: "clamp(80px,12vw,120px) 20px clamp(80px,14vw,140px)",
              textAlign: "center",
              maxWidth: 520,
              margin: "0 auto"
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 16,
                marginBottom: 56
              }}
            >
              <div
                style={{
                  width: 64,
                  height: 1,
                  background: `linear-gradient(to right, transparent, ${T.gold})`
                }}
              />
              <span
                className="shimmer-gold"
                style={{ fontSize: "1.1rem", color: T.gold }}
              >
                ✦
              </span>
              <div
                style={{
                  width: 64,
                  height: 1,
                  background: `linear-gradient(to left, transparent, ${T.gold})`
                }}
              />
            </div>
            <div style={{ marginBottom: 60, lineHeight: 1 }}>
              <p
                style={{
                  fontStyle: "italic",
                  fontSize: "clamp(0.9rem,2.6vw,1.08rem)",
                  color: T.cream,
                  lineHeight: 1.9
                }}
              >
                Selamat ulang tahun.
              </p>
              <p
                style={{
                  fontStyle: "italic",
                  fontSize: "clamp(0.9rem,2.6vw,1.08rem)",
                  color: T.gold,
                  lineHeight: 1.9
                }}
              >
                Terima kasih sudah ada.
              </p>
            </div>
            <p
              style={{
                marginTop: 64,
                color: `${T.gold}40`,
                fontSize: "0.8rem",
                letterSpacing: "0.5em"
              }}
            >
              ✦ ✦ ✦
            </p>
          </section>
        </main>
      )}
      <Analytics />
    </div>
  );
}
