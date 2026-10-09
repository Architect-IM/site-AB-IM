"use client";

import { useRef, useState } from "react";

export function LeadVideo({ src, poster }: { src: string; poster: string }) {
  const video = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);

  function togglePlay() {
    const node = video.current;
    if (!node) return;
    if (node.paused) void node.play();
    else node.pause();
  }

  function toggleSound() {
    const node = video.current;
    if (!node) return;
    node.muted = !node.muted;
    setMuted(node.muted);
  }

  return (
    <div className={`lead-video${playing ? " is-playing" : ""}`}>
      <video
        ref={video}
        src={src}
        poster={poster}
        preload="auto"
        playsInline
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
        onClick={togglePlay}
      />
      <button type="button" className="lead-play" onClick={togglePlay} aria-label="Смотреть">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6.8v10.4L18.2 12z" /></svg>
      </button>
      <button type="button" className="lead-sound" onClick={toggleSound} aria-label={muted ? "Включить звук" : "Выключить звук"} aria-pressed={!muted}>
        {muted ? (
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 9h3.2L11 5.8v12.4L7.2 15H4z" />
            <path d="M15 10l4 4M19 10l-4 4" fill="none" stroke="currentColor" strokeWidth="1.7" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 9h3.2L11 5.8v12.4L7.2 15H4z" />
            <path d="M14.5 9.2a3.2 3.2 0 010 5.6M16.8 7a6 6 0 010 10" fill="none" stroke="currentColor" strokeWidth="1.7" />
          </svg>
        )}
      </button>
    </div>
  );
}
