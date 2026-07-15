import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { memories } from "../data/memories";
import "../styles/Gallery.css";

function Gallery({ onContinue }) {

  const [current, setCurrent] = useState(0);

  const memory = memories[current];

  // --------------------------
  // Next Photo
  // --------------------------

  const next = () => {

    if (current < memories.length - 1) {

      setCurrent((prev) => prev + 1);

    } else {

      onContinue();

    }

  };

  // --------------------------
  // Previous Photo
  // --------------------------

  const previous = () => {

    if (current > 0) {

      setCurrent((prev) => prev - 1);

    }

  };

  // --------------------------
  // Keyboard Navigation
  // --------------------------

  useEffect(() => {

    const handleKeyDown = (e) => {

      if (e.key === "ArrowRight") {

        next();

      }

      if (e.key === "ArrowLeft") {

        previous();

      }

    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {

      window.removeEventListener("keydown", handleKeyDown);

    };

  }, [current]);

  // --------------------------
  // No Memories
  // --------------------------

  if (memories.length === 0) {

    return (

      <div className="gallery-page">

        <h1>No Photos Found 😢</h1>

        <p>Please add photos inside:</p>

        <p>src/assets/memories</p>

      </div>

    );

  }

  return (

    <div className="gallery-page">

      <h1 className="gallery-title">

        ❤️ Chapters of Our Story ❤️

      </h1>

      <p className="gallery-subtitle">

        Every memory with you is my favorite...

      </p>

      <AnimatePresence mode="wait">

        <motion.div

          key={current}

          className="memory-card"

          initial={{

            opacity: 0,

            x: 150

          }}

          animate={{

            opacity: 1,

            x: 0

          }}

          exit={{

            opacity: 0,

            x: -150

          }}

          transition={{

            duration: .5

          }}

        >

          <div className="image-container">

            <button

              className="arrow left"

              onClick={previous}

              disabled={current === 0}

            >

              ❮

            </button>

            <motion.img
              key={memory.image}
              src={memory.image}
              alt={memory.title}
              loading="eager"
              decoding="async"
              initial={{
                opacity: 0,
                scale: 0.95
              }}
              animate={{
                opacity: 1,
                scale: 1
              }}
              transition={{
                duration: 0.5
              }}
            />

            <button

              className="arrow right"

              onClick={next}

            >

              {

                current === memories.length - 1

                  ?

                  "❤️"

                  :

                  "❯"

              }

            </button>

          </div>

          <motion.h2

            className="memory-title"

            key={memory.title}

            initial={{

              opacity: 0,

              y: 20

            }}

            animate={{

              opacity: 1,

              y: 0

            }}

          >

            {memory.title}

          </motion.h2>

          <motion.p

            className="memory-description"

            key={memory.description}

            initial={{

              opacity: 0

            }}

            animate={{

              opacity: 1

            }}

            transition={{

              delay: .2

            }}

          >

            {memory.description}

          </motion.p>

          <div className="counter">

            {current + 1} / {memories.length}

          </div>

          <div className="dots">

            {

              memories.map((_, index) => (

                <span

                  key={index}

                  className={

                    index === current

                      ?

                      "dot active"

                      :

                      "dot"

                  }

                />

              ))

            }

          </div>

        </motion.div>

      </AnimatePresence>

    </div>

  );

}

export default Gallery;