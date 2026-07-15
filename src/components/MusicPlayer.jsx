import { useEffect, useRef, useState } from "react";
import "../styles/MusicPlayer.css";

function MusicPlayer({ song }) {
  const audioRef = useRef(null);

  const [currentSong, setCurrentSong] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [volume, setVolume] = useState(0.5);

  const playlist = song?.files || [];
  const names = song?.names || [];

  // Reset song when page changes
  useEffect(() => {
    setCurrentSong(0);
  }, [song]);

  // Load & Play current song
  useEffect(() => {
    if (!audioRef.current) return;
    if (playlist.length === 0) return;

    const audio = audioRef.current;

    audio.pause();
    audio.src = playlist[currentSong];
    audio.preload = "auto";
    audio.volume = volume;
    audio.load();

    if (playing) {
      const playPromise = audio.play();

      if (playPromise !== undefined) {
        playPromise.catch(() => {
          console.log("Autoplay blocked. Waiting for user interaction.");
        });
      }
    }
  }, [playlist, currentSong, playing, volume]);

  // Update volume
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  // Preload all songs
  useEffect(() => {
    playlist.forEach((src) => {
      const audio = new Audio();
      audio.src = src;
      audio.preload = "auto";
    });
  }, [playlist]);

  // Play after first user interaction
  useEffect(() => {
    const unlockAudio = () => {
      if (audioRef.current && playing) {
        audioRef.current.play().catch(() => {});
      }

      document.removeEventListener("click", unlockAudio);
      document.removeEventListener("touchstart", unlockAudio);
    };

    document.addEventListener("click", unlockAudio);
    document.addEventListener("touchstart", unlockAudio);

    return () => {
      document.removeEventListener("click", unlockAudio);
      document.removeEventListener("touchstart", unlockAudio);
    };
  }, [playing]);

  const nextSong = () => {
    setCurrentSong((prev) => (prev + 1) % playlist.length);
  };

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play().catch(() => {});
      setPlaying(true);
    }
  };

  return (
    <div className="music-player">

      <audio
        ref={audioRef}
        preload="auto"
        loop={playlist.length === 1}
        onEnded={() => {
          if (playlist.length > 1) {
            nextSong();
          }
        }}
      />
    </div>
  );
}

export default MusicPlayer;