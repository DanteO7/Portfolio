import { useEffect, useRef } from "react";
import { usePreferencesStore } from "../store/preferences-store";

export default function CloudsBackground() {
  const { theme } = usePreferencesStore();

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = document.documentElement.scrollHeight;

    let quantity = 8;
    if (canvas.width < 900) {
      quantity = 4;
    }

    const clouds = Array.from({ length: quantity }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * window.innerHeight,
      radius: Math.random() * 250 + 150,
      opacity: Math.random() * 0.3 + 0.2,
      speed: Math.random() * 0.3 + 0.6,
    }));

    let animationId;

    function draw() {
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        -600,
        0, // círculo interior: centro x, y, radio
        canvas.width / 2,
        0,
        window.innerHeight, // círculo exterior: centro x, y, radio
      );
      gradient.addColorStop(0, "#efefef");
      gradient.addColorStop(1, "#73caef");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      clouds.forEach((cloud) => {
        const gradient = ctx.createRadialGradient(
          cloud.x,
          cloud.y,
          0,
          cloud.x,
          cloud.y,
          cloud.radius,
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${cloud.opacity})`);
        gradient.addColorStop(1, `rgba(255, 255, 255, 0)`);

        ctx.beginPath();
        ctx.arc(cloud.x, cloud.y, cloud.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        cloud.x += cloud.speed;
        if (cloud.x - cloud.radius > canvas.width) {
          cloud.x = -cloud.radius;
          cloud.y = Math.random() * window.innerHeight;
        }
      });

      animationId = requestAnimationFrame(draw);
    }

    draw();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
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
      className={`fixed inset-0 -z-10 transition-all duration-900 ${theme === "dark" && "opacity-0"}`}
    />
  );
}
