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
      <button type="button" className="lead-play" onClick={togglePlay}>Смотреть</button>
      <button type="button" className="lead-sound" onClick={toggleSound} aria-pressed={!muted}>
        {muted ? "Включить звук" : "Выключить звук"}
      </button>
    </div>
  );
}
