import { motion } from "framer-motion";
import { useState, useRef, useEffect, useMemo } from "react";
import Fireworks from "../components/FireworksEffect";

import Typewriter from "../components/TypeWriter";
import "../styles/FinalSurprise.css";

function FinalSurprise({ onContinue }) {

    const [celebrate, setCelebrate] = useState(false);
    const [showCake, setShowCake] = useState(true);
    const [showLetter, setShowLetter] = useState(false);
    const [countdown, setCountdown] = useState(null);
    const [showFireworks, setShowFireworks] = useState(false);
    const [showHeartBurst, setShowHeartBurst] = useState(false);
    const [flash, setFlash] = useState(false);

    const letterRef = useRef(null);

    const stars = useMemo(
        () =>
            [...Array(80)].map(() => ({
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                delay: `${Math.random() * 5}s`,
                duration: `${2 + Math.random() * 3}s`,
            })),
        []
    );

    const hearts = useMemo(
        () =>
            [...Array(25)].map(() => ({
                left: `${Math.random() * 100}%`,
                delay: `${Math.random() * 8}s`,
                duration: `${6 + Math.random() * 6}s`,
                size: `${18 + Math.random() * 25}px`,
            })),
        []
    );

    const confetti = useMemo(
        () =>
            [...Array(80)].map(() => ({
                left: `${Math.random() * 100}%`,
                delay: `${Math.random() * 0.8}s`,
                duration: `${2 + Math.random() * 2}s`,
                color: [
                    "#ff4d88",
                    "#ffd700",
                    "#00ffff",
                    "#ffffff",
                    "#ff69b4",
                    "#ff9800",
                ][Math.floor(Math.random() * 6)],
            })),
        []
    );

    const handleCelebrate = () => {

        if (celebrate || countdown !== null) return;

        setCountdown(3);

        let count = 3;

        const timer = setInterval(() => {

            count--;

            if (count > 0) {

                setCountdown(count);

            } else {

                clearInterval(timer);

                setCountdown(null);

                setCelebrate(true);

                // Remove flash quickly
                setTimeout(() => {
                    setFlash(false);
                }, 300);

                // Let fireworks continue longer
                setTimeout(() => {
                    setShowFireworks(false);
                    setShowHeartBurst(false);
                }, 5000);

                // Show letter after fireworks finish
                setTimeout(() => {
                    setShowCake(false);
                    setShowLetter(true);
                }, 5200);

            }

        }, 1000);

    };

    useEffect(() => {

        if (showLetter) {

            setTimeout(() => {

                letterRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });

            }, 300);

        }

    }, [showLetter]);

    const letter = `
Dear Ammu ❤️,

Happy Birthday to the most beautiful girl in my life.

Today isn't just your birthday.

It is the day someone incredibly special came into this world.

Every smile of yours brightens my day.

Every laugh of yours becomes one of my favorite memories.

Every moment with you becomes another beautiful chapter in my life.

Thank you for always being yourself.

Thank you for your kindness.

Thank you for your love.

I hope this birthday fills your life with happiness,

success,

good health,

peace,

and countless unforgettable memories.

May your beautiful smile never fade.

Happy Birthday once again,

My Princess ❤️

Forever Yours,

❤️ It's Me, Your Naveen ❤️
`;

    return (

        <div className="final-page">

              {showFireworks && <FireworksEffect />}

            {/* Stars */}

            <div className="stars">
                {stars.map((star, i) => (
                    <span
                        key={i}
                        className="star"
                        style={{
                            left: star.left,
                            top: star.top,
                            animationDelay: star.delay,
                            animationDuration: star.duration,
                        }}
                    />
                ))}
            </div>

            {/* Hearts */}
            {showHeartBurst && (

                <div className="heart-burst">

                    {[...Array(90)].map((_, i) => (

                        <span
                            key={i}
                            className="burst-heart"
                            style={{
                                left: "50%",
                                top: "55%",
                                animationDelay: `${Math.random() * 0.5}s`
                            }}
                        >
                            ❤️
                        </span>

                    ))}

                </div>

            )}

            {showFireworks && (

                <div className="fireworks">

                    {[...Array(70)].map((_, i) => (

                        <span

                            key={i}

                            className="spark"

                            style={{

                                left: `${Math.random() * 100}%`,

                                top: `${Math.random() * 100}%`,

                                animationDelay: `${Math.random() * 2}s`

                            }}

                        />

                    ))}

                </div>

            )}

            {showHeartBurst && (

                <div className="heart-burst">

                    {[...Array(90)].map((_, i) => (

                        <span

                            key={i}

                            className="burst-heart"

                            style={{

                                left: "50%",

                                top: "55%",

                                animationDelay: `${Math.random() * 0.5}s`

                            }}

                        >

                            ❤️

                        </span>

                    ))}

                </div>

            )}

            {flash &&

                <div className="flash"></div>

            }
            <Fireworks start={celebrate} />

            {/* Confetti */}

            {celebrate && !showLetter && (

                <div className="confetti">

                    {confetti.map((piece, i) => (

                        <span
                            key={i}
                            className="piece"
                            style={{
                                left: piece.left,
                                animationDelay: piece.delay,
                                animationDuration: piece.duration,
                                backgroundColor: piece.color,
                            }}
                        />

                    ))}

                </div>

            )}

            {/* Birthday Scene */}

            {showCake && (

                <motion.div

                    className="birthday-scene"

                    initial={{ opacity: 1 }}

                    animate={{

                        opacity: showCake ? 1 : 0

                    }}

                    transition={{

                        duration: 1

                    }}

                >

                    <motion.h1

                        initial={{ opacity: 0, scale: .5 }}

                        animate={{ opacity: 1, scale: 1 }}

                        transition={{ duration: 1 }}

                    >

                        🎂 Happy Birthday Ammu ❤️

                    </motion.h1>

                    <motion.h2

                        initial={{ opacity: 0 }}

                        animate={{ opacity: 1 }}

                        transition={{ delay: 1 }}

                    >

                        Today the world became beautiful...

                        <br />

                        because YOU were born.

                    </motion.h2>

                    <motion.div

                        className="cake"

                        animate={

                            celebrate

                                ? {

                                    rotate: [0, -12, 12, -12, 12, -8, 8, 0],

                                    scale: [1, 1.12, 1]

                                }

                                : {

                                    rotate: [0, -5, 5, -5, 0]

                                }

                        }

                        transition={{

                            duration: 0.9,

                            repeat: Infinity

                        }}

                    >

                        🎂

                    </motion.div>

                    {!countdown && !celebrate && (

                        <motion.button

                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: .9 }}
                            onClick={handleCelebrate}

                        >

                            ❤️ Blow the Candles ❤️

                        </motion.button>

                    )}

                </motion.div>

            )}
            {countdown !== null && (

                <motion.div

                    className="countdown"

                    key={countdown}

                    initial={{
                        scale: 0,
                        opacity: 0
                    }}

                    animate={{
                        scale: 1,
                        opacity: 1
                    }}

                    exit={{
                        opacity: 0
                    }}

                    transition={{
                        duration: 0.4
                    }}

                >

                    {countdown}

                </motion.div>

            )}
            {/* Love Letter */}

            {showLetter && (

                <motion.div

                    ref={letterRef}

                    className="love-message"

                    initial={{
                        opacity: 0,
                        y: 100
                    }}

                    animate={{
                        opacity: 1,
                        y: 0
                    }}

                    transition={{
                        duration: 1.5
                    }}

                >

                    <h1>💌 A Letter For You ❤️</h1>

                    <Typewriter
                        text={letter}
                        speed={35}
                    />

                    <motion.h2

                        animate={{
                            scale: [1, 1.05, 1]
                        }}

                        transition={{
                            repeat: Infinity,
                            duration: 2
                        }}

                    >

                        Forever Yours ❤️

                    </motion.h2>

                    <motion.button

                        className="continue-btn"

                        initial={{ opacity: 0 }}

                        animate={{ opacity: 1 }}

                        transition={{ delay: 10 }}

                        whileHover={{ scale: 1.08 }}

                        whileTap={{ scale: .95 }}

                        onClick={onContinue}

                    >

                        ❤️ One Last Surprise ❤️

                    </motion.button>

                </motion.div>

            )}

        </div>


    );

}

export default FinalSurprise;