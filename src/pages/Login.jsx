import "../styles/Login.css";

import { useState } from "react";




function Login({ onLoginSuccess })  {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

const handleLogin = () => {
  if (
    name.trim().toLowerCase() === "ammu" &&
    dob === "2004-07-17"
  ) {
    onLoginSuccess();
  } else {
    alert("Oops! This surprise is only for Ammu ❤️");
  }
};

  return (
    <div className="login-page">
      <div className="background-glow"></div>

      <div className="login-card">
        <h3 className="title">❤️ The Story of Us ❤️</h3>

        <h1 className="main-heading">
          A Little Surprise Awaits...
        </h1>

        <p>
          Every beautiful story has a beginning...
        </p>

        <input
          type="text"
          placeholder="Your Cute Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />

        <button
          className="journey-btn"
          onClick={handleLogin}
        >
          ✨ Begin Our Journey →
        </button>
      </div>
    </div>
  );
}

export default Login;