import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Dot = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 6px;
  height: 6px;
  background: #ff8c00;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  transition: opacity 0.3s ease;
  box-shadow: 0 0 6px rgba(255, 140, 0, 0.6);
  mix-blend-mode: screen;
`;

const Ring = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 32px;
  height: 32px;
  border: 1.5px solid rgba(255, 140, 0, 0.35);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9998;
  transition: width 0.2s ease, height 0.2s ease, border-color 0.3s ease, opacity 0.3s ease;
  mix-blend-mode: screen;

  &.hovering {
    width: 48px;
    height: 48px;
    border-color: rgba(255, 140, 0, 0.6);
  }
`;

const CursorEffect = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = -100, mouseY = -100;
    let ringX = -100, ringY = -100;
    let animationId;
    let visible = false;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!visible) {
        visible = true;
        dot.style.opacity = '1';
        ring.style.opacity = '1';
      }
    };

    const onMouseLeave = () => {
      visible = false;
      dot.style.opacity = '0';
      ring.style.opacity = '0';
    };

    const onMouseOver = (e) => {
      const target = e.target;
      const isInteractive =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.style?.cursor === 'pointer' ||
        window.getComputedStyle(target).cursor === 'pointer';

      if (isInteractive) {
        ring.classList.add('hovering');
      } else {
        ring.classList.remove('hovering');
      }
    };

    // Smooth follow for the ring
    const animate = () => {
      // Ring follows with ease (lerp)
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;

      // Dot follows instantly
      dot.style.transform = `translate(${mouseX - 3}px, ${mouseY - 3}px)`;

      const ringSize = ring.classList.contains('hovering') ? 48 : 32;
      ring.style.transform = `translate(${ringX - ringSize / 2}px, ${ringY - ringSize / 2}px)`;

      animationId = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseover', onMouseOver);
    animate();

    // Hide default cursor globally
    document.body.style.cursor = 'none';
    const style = document.createElement('style');
    style.textContent = '*, *::before, *::after { cursor: none !important; }';
    document.head.appendChild(style);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseover', onMouseOver);
      cancelAnimationFrame(animationId);
      document.body.style.cursor = '';
      style.remove();
    };
  }, []);

  return (
    <>
      <Dot ref={dotRef} style={{ opacity: 0 }} />
      <Ring ref={ringRef} style={{ opacity: 0 }} />
    </>
  );
};

export default CursorEffect;
