import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import img01 from "../assets/final/img01.jpg";
import img02 from "../assets/final/img02.jpg";
import img03 from "../assets/final/img03.jpg";
import img04 from "../assets/final/img04.jpg";
import img05 from "../assets/final/img05.jpg";
import img06 from "../assets/final/img06.jpg";
import img07 from "../assets/final/img07.jpg";

import birthdayVideo from "../assets/final/video.mp4";

import { quotes } from "../data/quotes";

import "../styles/FinalPhoto.css";

const photos = [
  img01,
  img02,
  img03,
  img04,
  img05,
  img06,
  img07,
];

function FinalPhoto({ onContinue }) {

  const [currentQuote, setCurrentQuote] = useState(0);
  const [showFireworks, setShowFireworks] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const [position, setPosition] = useState({
    top: "35%",
    left: "65%",
  });

  // Quotes + Images
  useEffect(() => {

    if (currentQuote === quotes.length - 1) {

      const timer = setTimeout(() => {

        setShowFireworks(true);

      }, 3000);

      return () => clearTimeout(timer);

    }

    const timer = setTimeout(() => {

      setCurrentQuote(prev => prev + 1);

      setPosition({

        top: `${25 + Math.random() * 30}%`,
        left: `${25 + Math.random() * 45}%`,

      });

    }, 5000);

    return () => clearTimeout(timer);

  }, [currentQuote]);

  // Fireworks
  useEffect(() => {

    if (!showFireworks) return;

    const timer = setTimeout(() => {

      setShowFireworks(false);
      setShowCard(true);

    }, 5000);

    return () => clearTimeout(timer);

  }, [showFireworks]);

useEffect(() => {
  const nextIndex = currentQuote + 1;

  if (nextIndex < photos.length) {
    const img = new Image();
    img.src = photos[nextIndex];
  }
}, [currentQuote]);

  return (

    <div className="photo-page">

      {/* Background */}
      <div
        className="photo-bg"
        style={{
          backgroundImage: `url(${photos[currentQuote % photos.length]})`,
        }}
      />

      {/* PHOTO + QUOTES */}
      {!showCard && !showVideo && (

        <div className="photo-content">

          {/* <AnimatePresence mode="wait">

            <motion.div
              key={currentQuote}
              className="photo-frame"
              initial={{
                opacity: 0,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 1.03,
              }}
              transition={{
                duration: 0.8,
              }}
            >

              <img
                src={photos[currentQuote]}
                className="hero-photo"
                alt=""
              />

            </motion.div>

          </AnimatePresence> */}

          {!showFireworks && currentQuote < quotes.length && (

            <AnimatePresence mode="wait">

              {!showFireworks && currentQuote < quotes.length && (

                <AnimatePresence mode="wait">

                  <motion.div
                    key={`quote-${currentQuote}`}
                    className="quote-box"
                    style={{
                      top: position.top,
                      left: position.left,
                    }}
                    initial={{
                      opacity: 0,
                      y: 30,
                      scale: 0.95,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      y: -30,
                      scale: 1.05,
                    }}
                    transition={{
                      duration: 0.8,
                    }}
                  >
                    {quotes[currentQuote].text}
                  </motion.div>

                </AnimatePresence>

              )}

            </AnimatePresence>

          )}

        </div>

      )}

      {/* FIREWORKS */}
      {showFireworks && (

        <div className="fireworks">

          {[...Array(80)].map((_, index) => (

            <span
              key={index}
              className="spark"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                backgroundColor: [
                  "#ff4d88",
                  "#ffd700",
                  "#00ffff",
                  "#ffffff",
                  "#ff9800",
                  "#9c27b0",
                ][Math.floor(Math.random() * 6)],
              }}
            />

          ))}

        </div>

      )}

      {/* LETTER */}
      {showCard && !showVideo && (

        <motion.div
          className="birthday-card"
          initial={{
            opacity: 0,
            y: 80,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 1.2,
          }}
        >

          <h1>❤️ Happy Birthday ❤️</h1>

          <h2>My Princess</h2>

          <p>

            Today is your special day.

            <br /><br />

            I hope your smile always shines brighter than the stars.

            <br /><br />

            May every dream you have come true.

            <br /><br />

            May happiness always stay by your side.

            <br /><br />

            Thank you...

            <br /><br />

            For every smile.

            <br />

            For every laugh.

            <br />

            For every memory.

            <br /><br />

            Thank you for making my life more beautiful.

            <br /><br />

            You deserve all the happiness this world can offer.

            <br /><br />

            ❤️ I Love You ❤️

          </p>

          <h3>

            Forever Yours

            <br />

            ❤️ Naveen ❤️

          </h3>

          <motion.button
            className="continue-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowVideo(true)}
          >

            ❤️ Continue ❤️

          </motion.button>

        </motion.div>

      )}

      {/* VIDEO */}
      {showVideo && (

        <motion.div
          className="video-page"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >

          <video
            className="birthday-video"
            src={birthdayVideo}
            autoPlay
            controls
            playsInline
            onEnded={onContinue}
          />

        </motion.div>

      )}

    </div>

  );

}

export default FinalPhoto;