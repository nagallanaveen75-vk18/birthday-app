import { Fireworks } from "@fireworks-js/react";

function FireworksEffect() {

    return (

        <Fireworks

            options={{

                rocketsPoint: {

                    min: 20,

                    max: 80

                },

                hue: {

                    min: 0,

                    max: 360

                },

                delay: {

                    min: 20,

                    max: 40

                },

                speed: 4,

                acceleration: 1.05,

                friction: 0.95,

                gravity: 1.5,

                particles: 120,

                traceLength: 3,

                traceSpeed: 8,

                explosion: 6,

                autoresize: true

            }}

            style={{

                position: "fixed",

                inset: 0,

                width: "100%",

                height: "100%",

                zIndex: 999,

                pointerEvents: "none"

            }}

        />

    );

}

export default FireworksEffect;