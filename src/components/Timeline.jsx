import React from "react";
import { SectionHeader } from "./SectionHeader";
import { T } from "../constants/theme";

export const Timeline = () => (
  <section
    style={{
      padding: "clamp(60px,10vw,100px) 20px",
      maxWidth: 700,
      margin: "0 auto"
    }}
  >
    <SectionHeader
      eyebrow="Our Story"
      subtitle="perjalanan kita, satu momen demi satu momen"
    />
    <div
      className="timeline-container"
      style={{ position: "relative", paddingLeft: 28 }}
    >
      <div
        style={{
          position: "absolute",
          left: 8,
          top: 0,
          bottom: 0,
          width: 2,
          background: "rgba(255,255,255,0.1)",
          borderRadius: 2
        }}
      >
        <div
          className="timeline-progress"
          style={{
            width: "100%",
            height: "0%",
            background: `linear-gradient(to bottom, ${T.gold}, ${T.pink})`,
            borderRadius: 2,
            boxShadow: `0 0 8px ${T.gold}`
          }}
        ></div>
      </div>
      {[
        {
          era: "Permulaan",
          title: "Awal yang Tak Terduga",
          mood: "☁️ gugup, tapi penasaran",
          body: "Semuanya berawal dari discord, awalnya aku kaya biasa aja cuman setelah voice cukup lama, ntah kenapa aku punya feeling lebih tersenderi kan, terus aku add dan chat kamu.",
          pull: null
        },
        {
          era: "Peralihan",
          title: "Ketika Semua Mulai Terasa Berbeda",
          mood: "🌸 hangat, sedikit berdebar",
          body: "Semuanya mulai terasa berbeda di saat kita udah mulai pindah ke IG dan yaa kita disitu maen api dan air, masih inget gaa??hehe, dan yaa kita call an tiap hari.",
          pull: '"Ada momen yang diam-diam mengubah segalanya."'
        },
        {
          era: "Hari-hari Biasa",
          title: "Hal Kecil yang Paling Kurindukan",
          mood: "🌤️ damai dan penuh warna",
          body: "Yang paling aku rinduin di masa kita di saat bener bener belum tau siapa dari diri kita masing masing, dan yaa dimasa kita masih sering ngasih kabar juga(sampe aku pengen pake pap kabarnya).",
          pull: null
        },
        {
          era: "Kini & Nanti",
          title: "Halaman yang Masih Bisa Kita Tulis",
          mood: "✨ bersyukur, dan siap",
          body: "Meski kita udah gaa barengg lagii seenggaknya kita pernah punya cerita indah yang pernah kita rangkai bersama.",
          pull: '"Cerita ini pernah jadi bagian terbaik buat aku."'
        }
      ].map((item, idx) => (
        <div
          key={idx}
          className="reveal-element"
          style={{ position: "relative", paddingLeft: 30, paddingBottom: 52 }}
        >
          <div
            className="timeline-node"
            style={{
              position: "absolute",
              left: -4,
              top: 5,
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: T.bg,
              border: `2px solid ${T.gold}`,
              boxShadow: `0 0 8px rgba(201,165,104,0.3)`
            }}
          />
          <p
            style={{
              fontSize: "0.58rem",
              fontFamily: "monospace",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: T.gold,
              opacity: 0.65,
              marginBottom: 5
            }}
          >
            {item.era}
          </p>
          <h3
            style={{
              fontSize: "clamp(1rem,3vw,1.18rem)",
              color: T.cream,
              lineHeight: 1.3,
              marginBottom: 10
            }}
          >
            {item.title}
          </h3>
          <span
            style={{
              display: "inline-block",
              fontSize: "0.68rem",
              color: T.muted,
              fontFamily: "monospace",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.09)",
              borderRadius: 20,
              padding: "3px 11px",
              marginBottom: 16
            }}
          >
            {item.mood}
          </span>
          <p
            style={{
              color: T.muted,
              fontSize: "0.9rem",
              lineHeight: 1.88,
              marginBottom: item.pull ? 18 : 0
            }}
          >
            {item.body}
          </p>
          {item.pull && (
            <blockquote
              style={{
                borderLeft: `2px solid ${T.gold}`,
                paddingLeft: 16,
                marginTop: 4,
                fontStyle: "italic",
                color: T.gold,
                fontSize: "0.83rem",
                opacity: 0.75,
                lineHeight: 1.7
              }}
            >
              {item.pull}
            </blockquote>
          )}
        </div>
      ))}
    </div>
  </section>
);
