import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const GalaxyBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({
            canvas: canvasRef.current,
            alpha: true, // Transparent background
        });

        // Use 100dvh for better mobile support if available, otherwise fallback handles duplicates via resize
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Perf optimization

        // Galaxy Geometry
        const geometry = new THREE.BufferGeometry();
        const starsCount = 10000;
        const positions = new Float32Array(starsCount * 3);

        for (let i = 0; i < starsCount; i++) {
            positions[i * 3] = Math.random() * 2000 - 1000;      // X
            positions[i * 3 + 1] = Math.random() * 2000 - 1000;  // Y
            positions[i * 3 + 2] = Math.random() * 2000 - 1000;  // Z
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        const material = new THREE.PointsMaterial({
            color: "#FFFAFA",
            size: 1,
            sizeAttenuation: true
        });

        const stars = new THREE.Points(geometry, material);
        scene.add(stars);

        camera.position.z = 1000;

        // Animation Loop
        const clock = new THREE.Clock();
        let animationFrameId;

        const animate = () => {
            const delta = clock.getDelta(); // Time-based animation for consistency
            animationFrameId = requestAnimationFrame(animate);

            // Rotate constantly regardless of frame rate
            // 0.0005 per frame at 60fps is approx 0.03 per second
            // Using delta ensures consistent speed on 60hz vs 120hz screens
            stars.rotation.x += 0.05 * delta;
            stars.rotation.y += 0.05 * delta;

            renderer.render(scene, camera);
        };

        animate();

        // Responsive Handling
        const handleResize = () => {
            // Update dimensions
            const width = window.innerWidth;
            const height = window.innerHeight;

            // Update camera
            camera.aspect = width / height;
            camera.updateProjectionMatrix();

            // Update renderer
            renderer.setSize(width, height);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        };

        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
            geometry.dispose();
            material.dispose();
            renderer.dispose();
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100dvh', // Dynamic viewport height for mobile browsers
                zIndex: -1,       // Behind everything
                backgroundColor: '#000000',
                pointerEvents: 'none'
            }}
        />
    );
};

export default GalaxyBackground;
