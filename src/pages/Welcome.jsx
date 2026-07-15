import "../styles/Welcome.css";

function Welcome({ onContinue }) {
  return (
    <div className="welcome-page" onClick={onContinue}>
      <div className="welcome-content">

        <h1>❤️ The Story of Us ❤️</h1>

        <h2>Every love story is beautiful...</h2>

        <h3>But ours is my favorite.</h3>

        <p>✨ Click anywhere to continue ✨</p>

      </div>
    </div>
  );
}

export default Welcome;