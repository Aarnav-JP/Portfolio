import React from "react";
import Particles from "@tsparticles/react"; // Correct import
import { loadFull } from "tsparticles";

const ParticlesBackgroundTest = () => {
    const particlesInit = async (main) => {
        // Initialize particles
        await loadFull(main);
    };

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                fullScreen: {
                    enable: true,
                    zIndex: -1, // Ensure it's behind all content
                },
                particles: {
                    number: {
                        value: 50, // Number of particles
                        density: {
                            enable: true,
                            value_area: 800,
                        },
                    },
                    color: {
                        value: "#ff0000", // Particle color
                    },
                    shape: {
                        type: "circle", // Shape of particles
                    },
                    opacity: {
                        value: 0.5,
                    },
                    size: {
                        value: 5, // Particle size
                    },
                    move: {
                        enable: true, // Enable movement
                        speed: 2, // Speed of movement
                    },
                },
            }}
        />
    );
};

export default ParticlesBackgroundTest;
