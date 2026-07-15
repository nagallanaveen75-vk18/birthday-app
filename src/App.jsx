import { useState } from "react";

import Login from "./pages/Login";
import Welcome from "./pages/Welcome";
import Letter from "./pages/Letter";
import Gallery from "./pages/Gallery";
import FinalSurprise from "./pages/FinalSurprise";
import FinalPhoto from "./pages/FinalPhoto";
import MusicPlayer from "./components/MusicPlayer";
import { songs } from "./data/music";
import Timeline from "./pages/Timeline";
import Forever from "./pages/Forever";

function App() {

  const [page, setPage] = useState("login");

  return (
    <>

      <MusicPlayer
    song={songs[page]}
/>

      {/* Login */}
      {page === "login" && (
        <Login
          onLoginSuccess={() => setPage("welcome")}
        />
      )}

      {/* Welcome */}
      {page === "welcome" && (
        <Welcome
          onContinue={() => setPage("letter")}
        />
      )}

      {/* Love Letter */}
      {page === "letter" && (
        <Letter
          onContinue={() => setPage("gallery")}
        />
      )}

      {/* Gallery */}
      {page === "gallery" && (
        <Gallery
          onContinue={() => setPage("final")}
        />
      )}

      {/* Birthday Cake + Typewriter */}
      {page === "final" && (
        <FinalSurprise
          onContinue={() => setPage("photo")}
        />
      )}

      {/* Final Photo */}
      {page === "photo" && (
        <FinalPhoto
          onContinue={() => setPage("timeline")}
        />
      )}

      {page === "timeline" && (
        <Timeline
          onContinue={() => setPage("forever")}
        />
      )}
      {page === "forever" && (
        <Forever />
      )}
    </>
  );
}

export default App;