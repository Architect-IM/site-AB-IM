"use client";

import { useEffect, useRef, useState } from "react";
import { previewBasePath, sitePath } from "@/lib/site-path";
import styles from "./vladimir.module.css";

export function VladimirVideo() {
  const video = useRef<HTMLVideoElement>(null);
  const [motionAllowed, setMotionAllowed] = useState(false);
  const [ready, setReady] = useState(false);
  const [paused, setPaused] = useState(true);
  const [unavailable, setUnavailable] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    // Static review copies have no video proxy; keep the poster there.
    const update = () => setMotionAllowed(!previewBasePath && !preference.matches);
    update();
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!motionAllowed) video.current?.pause();
    else void video.current?.play().catch(() => setPaused(true));
  }, [motionAllowed]);

  const toggleMotion = () => {
    const media = video.current;
    if (!media) return;
    if (media.paused) void media.play().catch(() => setPaused(true));
    else media.pause();
  };

  return <div className={styles.heroMedia}>
    <img className={styles.heroPoster} src={sitePath("/assets/vladimir-assumption-context.jpg")} alt="Успенский собор и панорама Владимира" fetchPriority="high" />
    <video
      ref={video}
      className={styles.heroVideo}
      hidden={!motionAllowed || unavailable}
      autoPlay={motionAllowed}
      muted
      loop
      playsInline
      disablePictureInPicture
      disableRemotePlayback
      preload={motionAllowed ? "auto" : "none"}
      src={motionAllowed && !unavailable ? sitePath("/api/vladimir-video") : undefined}
      poster={sitePath("/assets/vladimir-assumption-context.jpg")}
      aria-hidden="true"
      onError={() => setUnavailable(true)}
      onCanPlay={() => setReady(true)}
      onPlay={() => setPaused(false)}
      onPause={() => setPaused(true)}
    />
    {ready && motionAllowed && !unavailable && <button
      className={styles.motionControl}
      type="button"
      onClick={toggleMotion}
      aria-label={paused ? "Продолжить движение" : "Остановить движение"}
      title={paused ? "Продолжить движение" : "Остановить движение"}
    >
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d={paused ? "M9 6l9 6-9 6V6Z" : "M8 6v12M16 6v12"} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>}
  </div>;
}
