import { useState, useEffect, useRef } from "react";

function Typewriter({ text, speed = 20 }) {

    const [displayText, setDisplayText] = useState("");

    const boxRef = useRef(null);

    useEffect(() => {

        let index = 0;

        const interval = setInterval(() => {

            index++;

            setDisplayText(text.slice(0, index));



            if (index > text.length) {

                clearInterval(interval);

            }

        }, speed);

        return () => clearInterval(interval);

    }, [text, speed]);

    // useEffect(() => {

    //     if(boxRef.current){

    //         boxRef.current.scrollTop = boxRef.current.scrollHeight;

    //     }

    // }, [displayText]);


    return (

        <div ref={boxRef} className="typewriter-box">

            <p className="typing-text">
                {displayText}
            </p>

        </div>

    );

}

export default Typewriter;