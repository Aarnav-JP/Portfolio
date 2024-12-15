import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import * as THREE from 'three';

const EducationSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #ffffff;
  padding: 0 5%;
  position: relative;
  overflow: hidden;
  
`;

const Heading = styled.h1`
  font-size: 3rem;
  margin: 20px 0;
  background: linear-gradient(to right, #ff8c00, #e01e37);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  z-index: 1;
`;

const Timeline = styled.div`
  position: relative;
  width: 80%;
  margin: 40px 0;
  padding-left: 20px;
  border-left: 2px solid rgba(255, 255, 255, 0.3);
  z-index: 1;
`;

const TimelineItem = styled.div`
  position: relative;
  margin-bottom: 40px;
  padding-left: 20px;
  z-index: 1;
`;

const TimelineNode = styled.div`
  position: absolute;
  top: 0;
  left: -10px;
  width: 20px;
  height: 20px;
  background: linear-gradient(to right, #ff8c00, #e01e37);
  border-radius: 50%;
  box-shadow: 0 0 10px #ff8c00, 0 0 20px #e01e37;
  z-index: 1;
`;

const Card = styled.div`
  background: rgba(0, 0, 0, 0.5); /* Translucent background */
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  transform: translateY(10px);
  transition: all 0.3s ease;
  z-index: 1;
  &:hover {
    transform: translateY(0);
    box-shadow: 0 4px 20px rgba(255, 140, 0, 0.7);
  }
`;

const CardHeader = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
  background: linear-gradient(to right, #ff8c00, #e01e37);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const CardDetails = styled.p`
  font-size: 1rem;
  margin: 5px 0;
  line-height: 1.5;
  color: #ffffff;
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  animation: fadeIn 2s ease-out forwards infinite alternate;
  z-index: 1;
`;

const createGalaxyEffect = (canvasRef) => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const geometry = new THREE.BufferGeometry();
    const material = new THREE.PointsMaterial({ color: "#FFFAFA", size: 1, sizeAttenuation: true });
    const starsCount = 10000;

    const positions = new Float32Array(starsCount * 3);
    for (let i = 0; i < starsCount; i++) {
        positions[i * 3] = Math.random() * 2000 - 1000;
        positions[i * 3 + 1] = Math.random() * 2000 - 1000;
        positions[i * 3 + 2] = Math.random() * 2000 - 1000;
    }
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const stars = new THREE.Points(geometry, material);
    scene.add(stars);

    camera.position.z = 1000;

    const animate = () => {
        requestAnimationFrame(animate);

        stars.rotation.x += 0.0005;
        stars.rotation.y += 0.0005;

        renderer.render(scene, camera);
    };

    animate();
};

const Education = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        createGalaxyEffect(canvasRef);

        return () => { };
    }, []);

    return (
        <EducationSection id="education">
            <Heading>Education</Heading>
            <Timeline>
                <TimelineItem>
                    <TimelineNode />
                    <Card>
                        <CardHeader>Birla Institute of Science and Technology (BITS) - Pilani</CardHeader>
                        <CardDetails>
                            Masters of Engineering in Computer Science<br />
                            Aug 2024 – June 2026 | Pilani, Rajasthan
                        </CardDetails>
                    </Card>
                </TimelineItem>
                <TimelineItem>
                    <TimelineNode />
                    <Card>
                        <CardHeader>Bharati Vidyapeeth’s College of Engineering (GGSIPU), New Delhi</CardHeader>
                        <CardDetails>
                            Bachelors of Technology in Computer Science and Engineering (8.94 CGPA)<br />
                            Aug 2020 – June 2024 | New Delhi
                        </CardDetails>
                    </Card>
                </TimelineItem>
                <TimelineItem>
                    <TimelineNode />
                    <Card>
                        <CardHeader>St. Andrews Scots Sr Sec School, IP Extension</CardHeader>
                        <CardDetails>
                            12th Standard in PCM with Computer Science (CBSE Board - 95%)<br />
                            April 2019 – March 2020 | New Delhi
                        </CardDetails>
                    </Card>
                </TimelineItem>
            </Timeline>
            <ScrollIndicator>↓</ScrollIndicator>

            <canvas
                ref={canvasRef}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: 0,
                }}
            />
        </EducationSection>
    );
};

export default Education;
