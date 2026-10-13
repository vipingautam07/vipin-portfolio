import { stat } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";
import { musicTracks } from "@/config/music";

export const dynamic = "force-dynamic";

export async function GET() {
  const tracks = await Promise.all(musicTracks.map(async (track) => {
    if (track.audioSrc.startsWith("https://")) return track;
    try {
      const file = await stat(path.join(process.cwd(), "public", track.audioSrc.replace(/^\/+/, "")));
      return { ...track, audioSrc: file.isFile() && file.size > 0 ? track.audioSrc : null };
    } catch {
      return { ...track, audioSrc: null };
    }
  }));
  return NextResponse.json(tracks, { headers: { "Cache-Control": "no-store" } });
}
