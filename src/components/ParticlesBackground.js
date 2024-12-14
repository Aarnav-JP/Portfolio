// src/components/ParticlesBackground.js
import React from "react";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = async (main) => {
    // Initialize the particles settings
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 }, // Full-screen particles, behind other content
        particles: {
          number: {
            value: 80,
            density: { enable: true, value_area: 800 }, // Number and density of particles
          },
          color: {
            value: "#ff0000", // Particle color (can change to your desired color)
          },
          shape: {
            type: "circle", // Shape of the particles
            stroke: {
              width: 0,
              color: "#000000", // Border color of the particles
            },
          },
          opacity: {
            value: 0.5,
            random: true,
            anim: { enable: true, speed: 0.5, opacity_min: 0.1, sync: false },
          },
          size: {
            value: 4, // Size of the particles
            random: true,
            anim: { enable: true, speed: 3, size_min: 0.1, sync: false },
          },
          line_linked: {
            enable: true,
            distance: 150, // Distance at which particles will be connected
            color: "#ffffff", // Line color
            opacity: 0.4, // Line opacity
            width: 1, // Line width
          },
          move: {
            enable: true,
            speed: 3, // Speed of particle movement
            direction: "none", // No fixed direction
            random: true, // Random movement
            straight: false, // No straight movement
            out_mode: "out", // When particles go out of bounds, they exit
            bounce: false,
            attract: { enable: false, rotateX: 600, rotateY: 1200 },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "repulse" }, // Repel particles on hover
            onclick: { enable: true, mode: "push" }, // Add more particles on click
            resize: true, // Resize particles on window resize
          },
          modes: {
            grab: { distance: 400, line_linked: { opacity: 1 } },
            bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
            repulse: { distance: 100, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 },
          },
        },
        retina_detect: true,
      }}
    />
  );
};

export default ParticlesBackground;
