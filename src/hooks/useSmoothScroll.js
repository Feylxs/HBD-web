import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import { T } from "../constants/theme";

gsap.registerPlugin(ScrollTrigger);

export const useSmoothScroll = (isActive) => {
  useEffect(() => {
    if (!isActive) return;

    // Setup Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    });
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    // 1. Scroll Progress Bar Animation
    gsap.to(".scroll-progress", {
      width: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.3
      }
    });

    // 2. Timeline Line Animation
    gsap.to(".timeline-progress", {
      height: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: ".timeline-container",
        start: "top 70%",
        end: "bottom 70%",
        scrub: 0.5
      }
    });

    // 3. Timeline Node "Light Up" Animation
    gsap.utils.toArray(".timeline-node").forEach((node) => {
      gsap.to(node, {
        backgroundColor: T.gold,
        borderColor: "#f0c97f",
        boxShadow: `0 0 12px ${T.gold}, 0 0 24px rgba(201,165,104,0.8)`,
        scale: 1.4,
        duration: 0.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: node,
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      });
    });

    // 4. GSAP ScrollTrigger Reveals
    gsap.utils.toArray(".reveal-element").forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        y: 60,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      });
    });

    // === SOLUSI: Paksa ScrollTrigger menghitung ulang posisi setelah render selesai ===
    // Karena kita pakai setTimeout 100ms, ada delay sedikit tapi pasti work!
    const refreshTimeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(refreshTimeout);
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, [isActive]);
};
