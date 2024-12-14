// In src/BackgroundAnimation.js
import React from 'react';

const BackgroundAnimation = () => {
    return (
        <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
            <svg
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMinYMin meet"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    pointerEvents: 'none', // Prevents the SVG from blocking interactions
                }}
            >
                <circle
                    cx="50"
                    cy="50"
                    r="20"
                    fill="rgba(255, 255, 255, 0.6)"
                    className="animate-circle"
                />
                <circle
                    cx="20"
                    cy="20"
                    r="10"
                    fill="rgba(0, 255, 255, 0.6)"
                    className="animate-circle"
                />
                <circle
                    cx="80"
                    cy="20"
                    r="15"
                    fill="rgba(255, 0, 255, 0.6)"
                    className="animate-circle"
                />
            </svg>

            {/* CSS for animation */}
            <style>
                {`
          .animate-circle {
            animation: moveCircle 5s linear infinite;
          }

          @keyframes moveCircle {
            0% {
              transform: translate(0, 0);
            }
            25% {
              transform: translate(10vw, 10vh);
            }
            50% {
              transform: translate(20vw, 20vh);
            }
            75% {
              transform: translate(30vw, 10vh);
            }
            100% {
              transform: translate(0, 0);
            }
          }
        `}
            </style>
        </div>
    );
};

export default BackgroundAnimation;
