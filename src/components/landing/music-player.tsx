"use client";

import Image from "next/image";
import { CaretLeft, CaretRight, Pause, Play } from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";
import { LiquidGlassCard } from "@/components/ui/liquid-glass";
import { musicTracks } from "@/config/music";
import { cn } from "@/lib/utils";

type PlaybackTrack = Omit<(typeof musicTracks)[number], "audioSrc"> & { audioSrc: string | null };
const waveformHeights = [28, 44, 56, 40, 24, 36, 22, 30, 58, 20, 26, 42, 48, 24, 34, 52, 38, 26, 30, 46, 54, 28, 40, 32, 22, 48, 18, 50, 56, 30, 22];

function formatTime(seconds: number) {
  return `${Math.floor(seconds / 60)}:${String(Math.floor(seconds % 60)).padStart(2, "0")}`;
}

export function MusicPlayer() {
  const [tracks, setTracks] = useState<PlaybackTrack[]>(musicTracks.map(track => ({ ...track, audioSrc: null })));
  const [trackIndex, setTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [duration, setDuration] = useState(0);
  const [failedTrack, setFailedTrack] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const resumeOnLoad = useRef(false);
  const track = tracks[trackIndex];
  const playable = Boolean(track.audioSrc) && failedTrack !== track.id;

  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/music/tracks", { signal: controller.signal, cache: "no-store" })
      .then(response => { if (!response.ok) throw new Error("Music unavailable"); return response.json(); })
      .then((data: PlaybackTrack[]) => { if (data.length === musicTracks.length) setTracks(data); })
      .catch(() => {})
      .finally(() => { if (!controller.signal.aborted) setLoaded(true); });
    return () => controller.abort();
  }, []);

  async function togglePlayback() {
    const audio = audioRef.current;
    if (!audio || !playable) return;
    if (audio.paused) {
      try { await audio.play(); } catch { setIsPlaying(false); }
    } else {
      audio.pause();
    }
  }

  function selectTrack(index: number, continuePlaying = false) {
    const nextIndex = (index + tracks.length) % tracks.length;
    if (nextIndex === trackIndex) return;
    resumeOnLoad.current = continuePlaying || Boolean(audioRef.current && !audioRef.current.paused);
    audioRef.current?.pause();
    setIsPlaying(false);
    setElapsed(0);
    setDuration(0);
    setFailedTrack(null);
    setTrackIndex(nextIndex);
  }

  return (
    <LiquidGlassCard glowIntensity="sm" shadowIntensity="sm" borderRadius="14px" blurIntensity="sm" className="w-full p-3" contentClassName="relative z-10">
      <audio
        key={track.id}
        ref={audioRef}
        src={track.audioSrc ?? undefined}
        preload="metadata"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onTimeUpdate={event => setElapsed(event.currentTarget.currentTime)}
        onDurationChange={event => setDuration(Number.isFinite(event.currentTarget.duration) ? event.currentTarget.duration : 0)}
        onCanPlay={event => {
          if (resumeOnLoad.current) {
            resumeOnLoad.current = false;
            void event.currentTarget.play().catch(() => setIsPlaying(false));
          }
        }}
        onEnded={() => selectTrack(trackIndex + 1, true)}
        onError={() => { setIsPlaying(false); setFailedTrack(track.id); }}
      />
      <div className="pointer-events-none absolute -inset-3 -z-10 overflow-hidden rounded-[14px]" aria-hidden="true">
        <Image key={track.id} src={track.albumArt} alt="" fill sizes="(max-width: 640px) 100vw, 720px" className="object-cover opacity-50 blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/35" />
      </div>
      <div className="music-card-row flex items-center gap-3">
        <div className="relative flex h-[84px] w-[108px] shrink-0 items-center">
          <button type="button" onClick={() => void togglePlayback()} disabled={!playable} className={cn("vinyl-disc group relative z-20 size-20 overflow-hidden rounded-full shadow-[0_10px_24px_rgba(0,0,0,0.18)] ring-1 ring-black/15 transition-transform hover:scale-[1.02] disabled:cursor-not-allowed", isPlaying && "animate-vinyl-spin")} aria-label={`${isPlaying ? "Pause" : "Play"} ${track.title}`}>
            <span className="absolute inset-[24px] overflow-hidden rounded-full ring-1 ring-white/20"><Image src={track.albumArt} alt={`${track.title} record cover`} fill sizes="32px" className="object-cover" /></span>
            <span className="absolute left-1/2 top-1/2 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black ring-1 ring-white/20" />
          </button>
          <div className={cn("pointer-events-none absolute right-1 top-2 z-30 h-4 w-10 origin-right transition-transform duration-700 ease-out", isPlaying ? "rotate-0" : "rotate-[18deg]")}>
            <span className="absolute right-0 top-1/2 size-4 -translate-y-1/2 rounded-full bg-neutral-500 shadow-sm" />
            <span className="absolute right-2 top-1/2 h-1 w-9 -translate-y-1/2 rounded-full bg-neutral-500 shadow-sm" />
            <span className="absolute -left-0.5 top-1/2 size-2.5 -translate-y-1/2 rounded-full bg-[#1DB954] shadow-sm" />
          </div>
        </div>
        <div className="min-w-0 flex-1">
          <p className="flex items-center gap-1.5 text-[10px] font-medium text-secondary"><span className="size-1.5 rounded-full bg-emerald-500" />On repeat · {trackIndex + 1}/{tracks.length}</p>
          <p className="mt-0.5 truncate text-sm font-semibold text-foreground">{track.title}</p>
          <p className="truncate text-xs text-secondary">{track.artist}</p>
          <div className="mt-2 flex items-center gap-1">
            <button type="button" aria-label="Previous song" onClick={() => selectTrack(trackIndex - 1)} className="rounded-full p-1 text-secondary transition-colors hover:bg-muted hover:text-foreground"><CaretLeft className="size-3" /></button>
            {tracks.map((song, index) => <button type="button" key={song.id} onClick={() => selectTrack(index)} aria-label={`Select ${song.title}`} aria-pressed={trackIndex === index} className={cn("rounded-full border px-2 py-1 text-[10px] font-medium transition-colors", trackIndex === index ? "border-foreground/20 bg-foreground text-background" : "border-border bg-background/60 text-secondary hover:text-foreground")}>{song.title}</button>)}
            <button type="button" aria-label="Next song" onClick={() => selectTrack(trackIndex + 1)} className="rounded-full p-1 text-secondary transition-colors hover:bg-muted hover:text-foreground"><CaretRight className="size-3" /></button>
          </div>
        </div>
        <div className={cn("music-player", isPlaying && "music-player--playing")}>
          <button type="button" onClick={() => void togglePlayback()} disabled={!playable} className="music-player-toggle" aria-label={`${isPlaying ? "Pause" : "Play"} ${track.title}`} aria-pressed={isPlaying}>
            {isPlaying ? <Pause className="size-4" weight="fill" /> : <Play className="ml-0.5 size-4" weight="fill" />}
          </button>
          <div className="music-player-waveform" aria-hidden="true">{waveformHeights.map((height, index) => <span key={index} style={{ height: `${height}%`, animationDelay: `${index * -0.13}s`, animationDuration: `${0.65 + (index % 5) * 0.12}s` }} />)}</div>
          <span className="music-player-time" aria-hidden="true">{formatTime(elapsed)}</span>
        </div>
      </div>
      {playable && duration > 0 && (
        <div className="mt-2 flex items-center gap-2 text-[10px] text-secondary">
          <span>{formatTime(elapsed)}</span>
          <input type="range" aria-label={`Seek ${track.title}`} min={0} max={duration} step={0.1} value={elapsed} onChange={event => { const time = Number(event.target.value); if (audioRef.current) audioRef.current.currentTime = time; setElapsed(time); }} className="h-1 min-w-0 flex-1 accent-[#1DB954]" />
          <span>{formatTime(duration)}</span>
        </div>
      )}
      {loaded && !playable && <p className="mt-2 text-[10px] text-secondary">{failedTrack === track.id ? "Audio unavailable" : "Audio coming soon"}</p>}
    </LiquidGlassCard>
  );
}
