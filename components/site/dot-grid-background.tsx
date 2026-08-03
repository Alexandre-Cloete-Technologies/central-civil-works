"use client";

import { useEffect, useRef } from "react";

/**
 * Animated dot-grid canvas that sits fixed behind all content.
 * Ported from the design project's dot-grid-bg.js. Reads the on-screen
 * .light / .dark sections to invert the grid colour per band, reacts to the
 * pointer, and emits click ripples.
 */
export function DotGridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const mouse = { x: -9999, y: -9999 };
    const spacing = 36;
    const dotBase = 2.5;
    const dotHot = 5;
    const radius = 170;
    const hotColor = "254,209,7";
    const rippleSpeed = 0.7;
    const rippleWidth = 70;
    const rippleDuration = 1400;
    let ripples: { x: number; y: number; start: number }[] = [];
    const startTime = performance.now();
    let frame = 0;
    let sections: { top: number; bottom: number; light: boolean }[] = [];
    let w = 0;
    let h = 0;
    let raf = 0;

    const hash = (x: number, y: number) => {
      const s = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453;
      return s - Math.floor(s);
    };

    const computeSections = () => {
      sections = Array.prototype.map.call(
        document.querySelectorAll(".light,.dark"),
        (el: Element) => {
          const r = el.getBoundingClientRect();
          return { top: r.top, bottom: r.bottom, light: el.classList.contains("light") };
        }
      ) as typeof sections;
    };

    const isLightAt = (y: number) => {
      for (let i = 0; i < sections.length; i++) {
        if (y >= sections[i].top && y < sections[i].bottom) return sections[i].light;
      }
      return false;
    };

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      computeSections();
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "#010101";
      ctx.fillRect(0, 0, w, h);
      sections.forEach((s) => {
        if (s.light) {
          ctx.fillStyle = "#ffffff";
          ctx.fillRect(0, s.top, w, s.bottom - s.top);
        }
      });
      const now = performance.now();
      const t0 = (now - startTime) / 1000;
      if (ripples.length) ripples = ripples.filter((rp) => now - rp.start < rippleDuration);
      frame++;
      if (frame % 15 === 0) computeSections();
      for (let y = spacing / 2; y < h; y += spacing) {
        const light = isLightAt(y);
        const baseColor = light ? "1,1,1" : "255,255,255";
        const baseOpacity = light ? 0.09 : 0.1;
        for (let x = spacing / 2; x < w; x += spacing) {
          const dx = x - mouse.x;
          const dy = y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          let t = Math.max(0, 1 - dist / radius);
          for (let i = 0; i < ripples.length; i++) {
            const rp = ripples[i];
            const elapsed = now - rp.start;
            const waveR = elapsed * rippleSpeed;
            const rdx = x - rp.x;
            const rdy = y - rp.y;
            const rdist = Math.sqrt(rdx * rdx + rdy * rdy);
            const diff = Math.abs(rdist - waveR);
            if (diff < rippleWidth) {
              const strength = (1 - diff / rippleWidth) * (1 - elapsed / rippleDuration);
              if (strength > t) t = strength;
            }
          }
          const seed = hash(x, y);
          const twinkle = Math.sin(t0 * (0.4 + seed * 1.1) + seed * 6.283) * 0.5 + 0.5;
          const sparkle = twinkle * twinkle * 0.16;
          const size = dotBase + (dotHot - dotBase) * t + sparkle * 1.5;
          const opacity = Math.min(1, baseOpacity + (1 - baseOpacity) * t + sparkle);
          const color = t > 0.02 ? hotColor : sparkle > 0.09 ? hotColor : baseColor;
          ctx.strokeStyle = "rgba(" + color + "," + opacity + ")";
          ctx.lineWidth = Math.max(1, size * 0.4);
          ctx.beginPath();
          ctx.moveTo(x - size, y);
          ctx.lineTo(x + size, y);
          ctx.moveTo(x, y - size);
          ctx.lineTo(x, y + size);
          ctx.stroke();
        }
      }
      raf = requestAnimationFrame(draw);
    };

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };
    const onClick = (e: MouseEvent) => {
      ripples.push({ x: e.clientX, y: e.clientY, start: performance.now() });
    };

    resize();
    draw();
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("click", onClick);
    window.addEventListener("resize", resize);
    window.addEventListener("scroll", computeSections, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("click", onClick);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", computeSections);
    };
  }, []);

  return (
    <div id="bg-fixed" aria-hidden="true">
      <canvas id="dot-grid-canvas" ref={canvasRef} />
    </div>
  );
}
