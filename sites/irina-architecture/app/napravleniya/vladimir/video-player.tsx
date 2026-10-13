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
  const [source, setSource] = useState(previewBasePath ? "" : sitePath("/api/vladimir-video"));

  useEffect(() => {
    // GitHub Pages has no server routes. Resolve this public video's temporary
    // download URL in the viewer's browser; the live Site keeps its own proxy.
    if (!previewBasePath || !motionAllowed || source || unavailable) return;
    const controller = new AbortController();
    let cancelled = false;
    const timeout = setTimeout(() => controller.abort(), 15_000);
    void fetch("https://cloud-api.yandex.net/v1/disk/public/resources/download?public_key=https%3A%2F%2Fdisk.yandex.ru%2Fi%2FhWBIq7RIz01WYg", { signal: controller.signal })
      .then(async response => {
        if (!response.ok) throw new Error("Video source unavailable");
        const result: { href?: string } = await response.json();
        if (!result.href?.startsWith("https://")) throw new Error("Video download link unavailable");
        if (!cancelled) setSource(result.href);
      })
      .catch(() => { if (!cancelled) setUnavailable(true); })
      .finally(() => clearTimeout(timeout));
    return () => { cancelled = true; clearTimeout(timeout); controller.abort(); };
  }, [motionAllowed, source, unavailable]);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setMotionAllowed(!preference.matches);
    update();
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!motionAllowed) video.current?.pause();
    else void video.current?.play().catch(() => setPaused(true));
  }, [motionAllowed, source]);

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
      src={motionAllowed && !unavailable && source ? source : undefined}
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
