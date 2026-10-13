export type MusicTrack = {
  id: string;
  title: string;
  artist: string;
  albumArt: string;
  audioSrc: string;
};

export const musicTracks: MusicTrack[] = [
  {
    id: "winning-speech",
    title: "Winning Speech",
    artist: "Karan Aujla · Mxrci · Seshnolan",
    albumArt: "/assets/winning-speech.jpg",
    audioSrc: "/assets/winning_speech.mp4",
  },
  {
    id: "lose-yourself",
    title: "Lose Yourself",
    artist: "Eminem",
    albumArt: "/assets/lose-yourself.jpg",
    audioSrc: "/assets/lose_yourself.mp4",
  },
];
