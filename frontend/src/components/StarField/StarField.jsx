import { useEffect, useRef } from 'react';
import './StarField.css';

const StarField = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    // Generate stars
    const STAR_COUNT = 300;
    const stars = Array.from({ length: STAR_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5 + 0.2,
      opacity: Math.random(),
      speed: Math.random() * 0.3 + 0.05,
      twinkleSpeed: Math.random() * 0.02 + 0.005,
      twinkleDir: Math.random() > 0.5 ? 1 : -1,
    }));

    // Shooting stars
    const shootingStars = [];
    const addShootingStar = () => {
      shootingStars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * (canvas.height / 2),
        len: Math.random() * 120 + 60,
        speed: Math.random() * 8 + 5,
        opacity: 1,
        angle: Math.PI / 6 + Math.random() * 0.2,
      });
    };

    let shootingInterval = setInterval(addShootingStar, 3000);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw twinkling stars
      stars.forEach(star => {
        star.opacity += star.twinkleSpeed * star.twinkleDir;
        if (star.opacity >= 1 || star.opacity <= 0.1) star.twinkleDir *= -1;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 220, 255, ${star.opacity})`;
        ctx.fill();
      });

      // Draw shooting stars
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const s = shootingStars[i];
        const grad = ctx.createLinearGradient(
          s.x, s.y,
          s.x - Math.cos(s.angle) * s.len,
          s.y - Math.sin(s.angle) * s.len
        );
        grad.addColorStop(0, `rgba(150,200,255,${s.opacity})`);
        grad.addColorStop(1, 'rgba(150,200,255,0)');

        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(
          s.x - Math.cos(s.angle) * s.len,
          s.y - Math.sin(s.angle) * s.len
        );
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        s.x += Math.cos(s.angle) * s.speed;
        s.y += Math.sin(s.angle) * s.speed;
        s.opacity -= 0.015;

        if (s.opacity <= 0) shootingStars.splice(i, 1);
      }

      animId = requestAnimationFrame(draw);
    };

    draw();
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animId);
      clearInterval(shootingInterval);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="starfield-canvas" />;
};

export default StarField;
