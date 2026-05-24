import { useEffect, useRef } from "react";
import { usePreferencesStore } from "../store/preferences-store";

export default function StarsBackground() {
  const { theme } = usePreferencesStore();

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars = Array.from({ length: 160 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 0.5,
      opacity: Math.random(),
      speed: Math.random() * 0.3 + 0.05,
    }));

    let animationId;

    function draw() {
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        0,
        0, // círculo interior: centro x, y, radio
        canvas.width / 2,
        0,
        canvas.height, // círculo exterior: centro x, y, radio
      );
      gradient.addColorStop(0, "#1e293b");
      gradient.addColorStop(1, "#020617");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();

        star.y -= star.speed;
        if (star.y < 0) {
          star.y = canvas.height;
          star.x = Math.random() * canvas.width;
        }
      });

      animationId = requestAnimationFrame(draw);
    }

    draw();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 -z-10 transition-all duration-900 opacity-0 ${theme === "dark" && "opacity-100"}`}
    />
  );
}
