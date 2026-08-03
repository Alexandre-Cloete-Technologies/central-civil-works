"use client";

import Image from "next/image";
import { PointerEvent } from "react";

const ITEMS: { src: string; label: string }[] = [
  { src: "/images/site-trenching.jpg", label: "Trenching & Ducting" },
  { src: "/images/fibre-splicing.jpg", label: "Fibre Splicing" },
  { src: "/images/tower-1.jpg", label: "Tower Foundation" },
  { src: "/images/site-photo-1.jpg", label: "Site Operations" },
  { src: "/images/site-photo-2.jpg", label: "Crew On Site" },
  { src: "/images/site-photo-4.jpg", label: "Field Works" },
  { src: "/images/site-photo-5.jpg", label: "Safety First" },
  { src: "/images/site-photo-6.jpg", label: "Infrastructure Build" },
];

export function Gallery() {
  function startDrag(e: PointerEvent<HTMLDivElement>, it: { src: string; label: string }) {
    if (e.button !== undefined && e.button !== 0) return;
    e.preventDefault();
    const cell = e.currentTarget;
    const rect = cell.getBoundingClientRect();
    const startX = e.clientX;
    const startY = e.clientY;

    const float = document.createElement("div");
    float.className = "gallery-float";
    float.style.left = rect.left + "px";
    float.style.top = rect.top + "px";
    float.style.width = rect.width + "px";
    float.style.height = rect.height + "px";
    const img = document.createElement("img");
    img.src = it.src;
    img.alt = it.label;
    float.appendChild(img);
    document.body.appendChild(float);
    cell.classList.add("is-lifted");
    document.body.classList.add("gallery-dragging");

    const move = (ev: globalThis.PointerEvent) => {
      const dx = ev.clientX - startX;
      const dy = ev.clientY - startY;
      const dist = Math.hypot(dx, dy);
      const scale = 1 + Math.min(dist / 260, 1.5);
      float.style.transform = `translate(${dx}px,${dy}px) scale(${scale})`;
    };
    const up = () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
      float.style.transition = "transform .45s var(--ease-standard)";
      float.style.transform = "translate(0,0) scale(1)";
      document.body.classList.remove("gallery-dragging");
      const done = () => {
        float.remove();
        cell.classList.remove("is-lifted");
      };
      float.addEventListener("transitionend", done, { once: true });
      setTimeout(done, 600);
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
  }

  return (
    <section id="gallery" className="section dark">
      <div className="section-inner">
        <div className="gallery-grid">
          {ITEMS.map((it) => (
            <div key={it.src} className="gallery-item" onPointerDown={(e) => startDrag(e, it)}>
              <Image src={it.src} alt={it.label} fill sizes="(max-width: 900px) 50vw, 25vw" draggable={false} style={{ objectFit: "cover" }} />
              <div className="gallery-caption">{it.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
