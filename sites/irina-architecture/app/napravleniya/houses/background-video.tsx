"use client";

import { useEffect, useRef, useState } from "react";
import { sitePath } from "@/lib/site-path";
import styles from "./houses.module.css";

export function ImplementationVideo({
  source = "/assets/houses-implementation-10-28.mp4",
  posterSource = "/assets/houses-implementation-10-poster.jpg",
}: { source?: string; posterSource?: string }) {
  const frame = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const [motionAllowed, setMotionAllowed] = useState(false);
  const [near, setNear] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setMotionAllowed(!preference.matches);
    update();
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!frame.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      setNear(entry.isIntersecting);
      if (entry.isIntersecting) setLoaded(true);
    }, { rootMargin: "300px 0px" });
    observer.observe(frame.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const media = video.current;
    if (!media) return;
    media.muted = true;
    if (motionAllowed && near && !userPaused && !failed) void media.play().catch(() => setPlaying(false));
    else media.pause();
  }, [motionAllowed, near, userPaused, failed, loaded]);

  const toggle = () => {
    const media = video.current;
    if (!media) return;
    if (media.paused) {
      setUserPaused(false);
      void media.play().catch(() => setPlaying(false));
    } else {
      setUserPaused(true);
      media.pause();
    }
  };

  const poster = sitePath(posterSource);
  return <>
    <div ref={frame} className={styles.motionBackdrop} aria-hidden="true">
      <img className={styles.motionPoster} src={poster} alt="" loading="lazy" />
      <video
        ref={video}
        className={`${styles.motionVideo}${ready && !failed ? ` ${styles.motionReady}` : ""}`}
        src={motionAllowed && loaded && !failed ? sitePath(source) : undefined}
        poster={poster}
        autoPlay={motionAllowed}
        muted
        loop
        playsInline
        disablePictureInPicture
        disableRemotePlayback
        preload={loaded ? "auto" : "none"}
        onCanPlay={() => setReady(true)}
        onError={() => setFailed(true)}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
    </div>
    {ready && motionAllowed && !failed && <button className={styles.motionToggle} type="button" onClick={toggle} aria-label={playing ? "Остановить движение фона" : "Продолжить движение фона"}>
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d={playing ? "M8 6v12M16 6v12" : "M9 6l9 6-9 6V6Z"} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
    </button>}
  </>;
}
