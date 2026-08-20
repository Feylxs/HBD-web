import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { T } from "../constants/theme";

export const MessageBottle = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [typedText, setTypedText] = useState("");

  const bottleRef = useRef(null);
  const corkRef = useRef(null);
  const paperRef = useRef(null);
  const intervalRef = useRef(null);

  // 180 WPM = 3 kata per detik. Rata-rata 1 kata = 5 huruf + 1 spasi = 6 huruf.
  // 3 kata * 6 huruf = 18 huruf per detik. (1000ms / 18 = ~55ms per huruf)
  const fullText = `Dear Yayaa,
  Selamat ulang tahunn yaa yayaa yang kee 17/18, akuu lupaa maaff yaa. Nggaa adaa yang bisaa aku ungkapin banyakk sii karena yaa
  disini aku cuma bisaa mintaa maaff dari apaa yang aku lakuin sebelumnyaa. Maafff pesan-pesan kamu yang waktu itu gaa aku
  akhirnya WA akupun aku matiin. Aku mintaa maaff baru bisa show bukaa, disitu posisi akuu uda bener-bener gaa karuan dan yaa
  kamu makin bahagia, dikelilingi orang-orang yang sayang sama up lagi sekarangg. Di umur kamu yang baru ini, aku berdoa semoga
  jadi orang yang baik buat aku. Kamu ngga harus balas pesan ini kamu, dan semua urusan kamu dilancarin. Makasih yaa udah pernah
  Bahagia terus yaa, Yayaa.
  kok, aku cuma mau ngucapin selamat dan minta maaf dengan bener.

"Finn"`;

  const handleOpen = () => {
    if (isOpened) return;
    setIsOpened(true);

    const tl = gsap.timeline();
    // Animasi tutup botol melayang
    tl.to(corkRef.current, {
      y: -40,
      opacity: 0,
      duration: 0.4,
      ease: "power2.out"
    })
      // Botol sedikit bergetar
      .to(
        bottleRef.current,
        { rotation: -5, duration: 0.2, yoyo: true, repeat: 1 },
        "<"
      )
      // Kertas gulir keluar
      .to(
        paperRef.current,
        {
          height: "auto",
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          onComplete: startTyping
        },
        "-=0.2"
      );
  };

  const startTyping = () => {
    let i = 0;
    const speed = 26; // Kecepatan 180 WPM

    intervalRef.current = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(intervalRef.current);
      }
    }, speed);
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {!isOpened && (
        <p
          className="pulse-gold"
          style={{
            marginBottom: 24,
            fontSize: "0.6rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: T.gold,
            fontFamily: "monospace",
            cursor: "pointer"
          }}
          onClick={handleOpen}
        >
          Klik Botol Untuk Membuka
        </p>
      )}

      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "500px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        {/* SVG Botol */}
        <div
          ref={bottleRef}
          onClick={handleOpen}
          style={{
            cursor: isOpened ? "default" : "pointer",
            filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.5))",
            marginBottom: "-20px",
            zIndex: 2
          }}
        >
          <svg
            width="120"
            height="240"
            viewBox="0 0 100 200"
            style={{ overflow: "visible" }}
          >
            <defs>
              <linearGradient id="bottleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(40, 80, 100, 0.4)" />
                <stop offset="30%" stopColor="rgba(150, 200, 220, 0.25)" />
                <stop offset="70%" stopColor="rgba(150, 200, 220, 0.25)" />
                <stop offset="100%" stopColor="rgba(40, 80, 100, 0.4)" />
              </linearGradient>
            </defs>
            {/* Tutup Botol (Cork) */}
            <rect
              ref={corkRef}
              x="38"
              y="5"
              width="24"
              height="25"
              rx="3"
              fill="#a8743c"
              stroke="#7a4f23"
              strokeWidth="1"
            />
            {/* Leher Botol */}
            <path
              d="M40 30 L40 50 Q20 60 20 90 L20 160 Q20 190 50 190 Q80 190 80 160 L80 90 Q80 60 60 50 L60 30 Z"
              fill="url(#bottleGrad)"
              stroke={T.cream}
              strokeWidth="2"
            />
            {/* Kilau Kaca */}
            <path
              d="M30 70 Q25 90 25 120 L25 150"
              fill="none"
              stroke="rgba(255,255,255,0.5)"
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0.6"
            />
          </svg>
        </div>

        {/* Kertas Surat yang bergulir keluar */}
        <div
          ref={paperRef}
          style={{
            width: "100%",
            height: 0,
            opacity: 0,
            overflow: "hidden",
            zIndex: 1
          }}
        >
          <div
            className="letter-paper"
            style={{
              borderRadius: 4,
              padding: "clamp(28px,7vw,56px) clamp(28px,7vw,52px)",
              boxShadow:
                "0 32px 80px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.6)",
              color: "#3d3530",
              lineHeight: 1.95,
              whiteSpace: "pre-wrap",
              fontFamily: 'Georgia, "Times New Roman", serif'
            }}
          >
            {typedText}
            {/* Kursor Berkedip saat mengetik */}
            {isOpened && typedText.length < fullText.length && (
              <span className="typewriter-cursor">|</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
