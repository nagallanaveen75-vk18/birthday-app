import { useEffect, useRef, useState } from "react";
import "../styles/MusicPlayer.css";

function MusicPlayer({ song }) {

    const audioRef = useRef(null);

    const [currentSong, setCurrentSong] = useState(0);

    const [playing, setPlaying] = useState(true);

    const [volume, setVolume] = useState(0.5);

    const playlist = song?.files || [];

    const names = song?.names || [];

    // reset when page changes

    useEffect(() => {

        setCurrentSong(0);

    }, [song]);

    // load song

    useEffect(() => {

        if (!audioRef.current) return;

        if (playlist.length === 0) return;

        const audio = audioRef.current;

        audio.src = playlist[currentSong];

        audio.volume = volume;

        audio.load();

        if (playing) {

            audio.play().catch(() => {});

        }

    }, [currentSong, playlist]);

    // volume

    useEffect(() => {

        if(audioRef.current){

            audioRef.current.volume=volume;

        }

    },[volume]);

    // next song

    const nextSong = () => {

    setCurrentSong((prev) => {

        return (prev + 1) % playlist.length;

    });

};

    // play pause

    const toggleMusic=()=>{

        if(!audioRef.current) return;

        if(playing){

            audioRef.current.pause();

            setPlaying(false);

        }

        else{

            audioRef.current.play();

            setPlaying(true);

        }

    };

    return(

        <div className="music-player">

            <audio
    ref={audioRef}
    loop={playlist.length === 1}
    onEnded={() => {

        if (playlist.length > 1) {

            nextSong();

        }

    }}
/>

            <div className="music-title">

                🎵 {names[currentSong]}

            </div>

            <button onClick={toggleMusic}>

                {playing

                    ? "⏸ Stop Music"

                    : "▶ Resume Music"}

            </button>

            <div className="volume-box">

                🔊

                <input

                    type="range"

                    min="0"

                    max="1"

                    step="0.01"

                    value={volume}

                    onChange={(e)=>

                        setVolume(Number(e.target.value))

                    }

                />

            </div>

        </div>

    );

}

export default MusicPlayer;