import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Typewriter from "../components/Typewriter";
import Fireworks from "../components/FireworksEffect";
import "../styles/Forever.css";

function Forever() {

    const [showFireworks, setShowFireworks] = useState(false);

    /* ==========================
       Fade Out Music
    ========================== */

    // useEffect(() => {

    //     const audio = document.querySelector("audio");

    //     if (!audio) return;

    //     let volume = audio.volume;

    //     const fade = setInterval(() => {

    //         volume = Math.max(0, volume - 0.02);

    //         audio.volume = volume;

    //         if (volume <= 0) {

    //             clearInterval(fade);

    //         }

    //     }, 300);

    //     return () => clearInterval(fade);

    // }, []);

    /* ==========================
       Fireworks Delay
    ========================== */

    useEffect(() => {

        const timer = setTimeout(() => {

            setShowFireworks(true);

        }, 4000);

        return () => clearTimeout(timer);

    }, []);

    useEffect(() => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}, []);

    return (

        <div className="forever-page">

            {/* Stars */}

            <div className="stars">

                {[...Array(120)].map((_, i) => (

                    <span

                        key={i}

                        className="star"

                        style={{

                            left: `${Math.random() * 100}%`,

                            top: `${Math.random() * 100}%`,

                            animationDelay: `${Math.random() * 4}s`,

                            animationDuration: `${2 + Math.random() * 3}s`

                        }}

                    />

                ))}

            </div>

            {/* Moon */}

            <motion.div

                className="moon"

                initial={{ opacity: 0, scale: .5 }}

                animate={{ opacity: 1, scale: 1 }}

                transition={{ duration: 2 }}

            />

            {/* Shooting Stars */}

            <div className="shooting-stars">

                {[...Array(6)].map((_, index) => (

                    <span

                        key={index}

                        className="shooting-star"

                        style={{

                            top: `${Math.random() * 60}%`,

                            animationDelay: `${index * 3}s`

                        }}

                    />

                ))}

            </div>

            {/* Sparkles */}

            <div className="sparkles">

                {[...Array(50)].map((_, index) => (

                    <span

                        key={index}

                        className="sparkle"

                        style={{

                            left: `${Math.random() * 100}%`,

                            top: `${Math.random() * 100}%`,

                            animationDelay: `${Math.random() * 5}s`

                        }}

                    >

                        ✨

                    </span>

                ))}

            </div>

            {/* Rose Petals */}

            <div className="petals">

                {[...Array(30)].map((_, index) => (

                    <span

                        key={index}

                        className="petal"

                        style={{

                            left: `${Math.random() * 100}%`,

                            animationDelay: `${Math.random() * 8}s`,

                            animationDuration: `${8 + Math.random() * 8}s`

                        }}

                    >

                        🌹

                    </span>

                ))}

            </div>
            {/* <Fireworks start={true} /> */}

            {/* Fireworks */}

            {

                showFireworks && (

                    <div className="grand-fireworks">

                        {[...Array(120)].map((_, index) => (

                            <span

                                key={index}

                                className="fire"

                                style={{

                                    left: `${Math.random() * 100}%`,

                                    top: `${Math.random() * 100}%`,

                                    animationDelay: `${Math.random() * 4}s`,

                                    backgroundColor: [

                                        "#ff4d88",

                                        "#ffd700",

                                        "#00ffff",

                                        "#ffffff",

                                        "#ff9800",

                                        "#9c27b0"

                                    ][Math.floor(Math.random() * 6)]

                                }}

                            />

                        ))}

                    </div>

                )

            }

            {/* Hearts */}

            <motion.div className="heart-row">

                <motion.div

                    className="big-heart"

                    initial={{ x: -180 }}

                    animate={{

                        x: 0,

                        scale: [1, 1.12, 1]

                    }}

                    transition={{

                        x: {

                            duration: 3,

                            ease: "easeInOut"

                        },

                        scale: {

                            repeat: Infinity,

                            duration: 1.5

                        }

                    }}

                >

                    ❤️

                </motion.div>

                <motion.div

                    className="big-heart"

                    initial={{ x: 180 }}

                    animate={{

                        x: 0,

                        scale: [1, 1.12, 1]

                    }}

                    transition={{

                        x: {

                            duration: 3,

                            ease: "easeInOut"

                        },

                        scale: {

                            repeat: Infinity,

                            duration: 1.5,

                            delay: .3

                        }

                    }}

                >

                    ❤️

                </motion.div>

            </motion.div>

            {/* Title */}

            <motion.h1

                initial={{ opacity: 0, y: 60 }}

                animate={{ opacity: 1, y: 0 }}

                transition={{ delay: 1 }}

            >

                Our Story Never Ends...

            </motion.h1>

            <motion.h2

                initial={{ opacity: 0 }}

                animate={{ opacity: 1 }}

                transition={{ delay: 2 }}

            >

                Every Birthday With You

                <br />

                Is Another Beautiful Chapter ❤️

            </motion.h2>

            {/* Infinity */}

            <motion.div

                className="infinity"

                animate={{

                    rotate: [0, 360],

                    scale: [1, 1.15, 1]

                }}

                transition={{

                    rotate: {

                        repeat: Infinity,

                        duration: 12,

                        ease: "linear"

                    },

                    scale: {

                        repeat: Infinity,

                        duration: 2

                    }

                }}

            >

                ♾️

            </motion.div>

            <motion.h3

                initial={{ opacity: 0 }}

                animate={{ opacity: 1 }}

                transition={{ delay: 3 }}

            >

                Happy Birthday Ammu ❤️

            </motion.h3>

            <motion.p

                initial={{ opacity: 0 }}

                animate={{ opacity: 1 }}

                transition={{ delay: 4 }}

            >

                Thank you for every smile,

                every memory,

                and every moment.

                <br /><br />

                You will always have

                a special place in my heart. ❤️

            </motion.p>

            {/* Typewriter */}

            <motion.div
                 className="typewriter-wrapper"
                initial={{ opacity: 0 }}

                animate={{ opacity: 1 }}

                transition={{ delay: 5 }}

            >

                <Typewriter

                    text={`
                                                                      The End...

                    No...😍
                    This is only the beginning of our beautiful journey together.

                     Every memory we made, every smile we shared, every laugh, every moment... will stay in my heart forever.

                    Happy Birthday, My Princess ❤️

                    I Love You Forever ❤️`}

                    speed={55}

                />

            </motion.div>

            {/* Signature */}

            <motion.div

                className="signature"

                initial={{ opacity: 0 }}

                animate={{ opacity: 1 }}

                transition={{ delay: 12 }}

            >

                Made with ❤️ by Naveen

            </motion.div>

        </div>

    );

}

export default Forever;