"use client";
import React, { useEffect, useRef, useState } from "react";

type Project = {
  image?: string;
  link?: string;
};

type Props = {
  projects?: Project[];
  autoplayMs?: number;
};

const ProjectHlClient: React.FC<Props> = ({ projects = [], autoplayMs = 5000 }) => {
  const total = projects.length;
  const [index, setIndex] = useState(0);

  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const prev = () => {
    setIndex((i) => (i - 1 + total) % total);
    resetAutoplay();
  };

  const next = () => {
    setIndex((i) => (i + 1) % total);
    resetAutoplay();
  };

  const resetAutoplay = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    if (autoplayMs && total > 1) {
      autoplayRef.current = setInterval(() => setIndex((i) => (i + 1) % total), autoplayMs);
    }
  };

  // Keyboard nav
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, total]);

  // Autoplay
  useEffect(() => {
    if (!autoplayMs || total <= 1) return;
    autoplayRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, autoplayMs);
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [total, autoplayMs]);

  // Touch handlers
  const onTouchStart = (e: React.TouchEvent) => {
    if (!e.touches?.length) return;
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (!e.touches?.length) return;
    touchEndX.current = e.touches[0].clientX;
  };
  const onTouchEnd = () => {
    if (touchStartX.current == null || touchEndX.current == null) return;
    const dx = touchStartX.current - touchEndX.current;
    if (Math.abs(dx) > 30) dx > 0 ? next() : prev();
    touchStartX.current = null;
    touchEndX.current = null;
  };

  if (total === 0) return null;

  return (
    <div className="ph-client-column" role="region" aria-roledescription="carousel">
      <button className="ph-client-arrow ph-client-arrow-left" onClick={prev} aria-label="Previous project">
        ‹
      </button>

      <div
        className="ph-client-track"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        role="list"
        aria-live="polite"
      >
        {projects.map((p, i) => {
          const active = i === index;
          return (
            <a
              key={i}
              href={p.link || "#"}
              className={`ph-client-slide ${active ? "active" : ""}`}
              role="listitem"
              aria-hidden={!active}
            >
              {p.image ? (
                <div className="ph-client-image-wrap">
                  <img
                    src={p.image}
                    alt="Project screenshot"
                    className="ph-client-slide-image"
                    loading={active ? "eager" : "lazy"}
                  />
                </div>
              ) : (
                <div className="ph-client-placeholder">No image</div>
              )}
            </a>
          );
        })}
      </div>

      <button className="ph-client-arrow ph-client-arrow-right" onClick={next} aria-label="Next project">
        ›
      </button>

      <div className="ph-client-dots" role="tablist" aria-label="Project pages">
        {projects.map((_, i) => (
          <button
            key={i}
            className={`ph-client-dot ${i === index ? "active" : ""}`}
            aria-label={`Go to project ${i + 1}`}
            aria-pressed={i === index}
            onClick={() => {
              setIndex(i);
              resetAutoplay();
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectHlClient;
