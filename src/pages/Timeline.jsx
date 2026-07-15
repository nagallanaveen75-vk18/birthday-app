import { motion } from "framer-motion";
import { timeline } from "../data/timeline";
import "../styles/Timeline.css";

function Timeline({ onContinue }) {

    return (

        <div className="timeline-page">

            <h1>✨ Our Journey ✨</h1>

            <div className="timeline">

                {timeline.map((item, index) => (

                    <motion.div

                        className="timeline-item"

                        key={index}

                        initial={{
                            opacity:0,
                            x:index % 2 === 0 ? -150 : 150
                        }}

                        whileInView={{
                            opacity:1,
                            x:0
                        }}

                        viewport={{
                            once:true
                        }}

                        transition={{
                            duration:.8
                        }}

                    >

                        <div className="circle"></div>

                        <div className="card">

                            <h2>{item.year}</h2>

                            <h3>{item.title}</h3>

                            <p>{item.description}</p>

                        </div>

                    </motion.div>

                ))}

            </div>
<div className="timeline-btn-container">
    <motion.button
        className="continue-btn"
        onClick={onContinue}
    >
        ❤️ Final Surprise ❤️
    </motion.button>
</div>

        </div>

    );

}

export default Timeline;