import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

export default function Carrousel({ project }) {
  const { t } = useTranslation();

  const [index, setIndex] = useState(0);

  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);

  const startX = useRef(0);

  const handleLeft = () => {
    if (index === 0) {
      setIndex(project.img.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const handleRight = () => {
    if (index === project.img.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  useEffect(() => {
    if (isDragging) return;
    const timer = setTimeout(() => {
      handleRight();
    }, 4000);

    return () => clearTimeout(timer);
  }, [index, isDragging]);

  const handlePointerDown = (e) => {
    setIsDragging(true);
    startX.current = e.clientX;
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;

    const delta = e.clientX - startX.current;
    setDragOffset(delta);
  };

  const handlePointerUp = () => {
    if (!isDragging) return;

    if (dragOffset > 80) {
      handleLeft();
    } else if (dragOffset < -80) {
      handleRight();
    }

    setIsDragging(false);
    setDragOffset(0);
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <h3 className="text-4xl font-semibold">{t("extras.images")}</h3>

      <div className="flex items-center max-[600px]:scale-110 min-[900px]:w-[80%] gap-1 min-[900px]:gap-5">
        <button
          className="hidden min-[900px]:flex h-fit cursor-pointer"
          onClick={handleLeft}
        >
          <FaChevronLeft className="size-5 min-[900px]:size-10" />
        </button>

        <div
          className="overflow-hidden touch-pan-y"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
        >
          <div
            className={`flex ${
              isDragging ? "" : "transition-transform duration-500"
            }`}
            style={{
              transform: `translateX(calc(-${index * 100}% + ${dragOffset}px))`,
            }}
          >
            {project.img.map((img) => (
              <img
                key={img}
                src={img}
                className="w-full shrink-0 rounded-xl select-none"
                draggable={false}
              />
            ))}
          </div>
        </div>

        <button
          className="hidden min-[900px]:flex h-fit cursor-pointer"
          onClick={handleRight}
        >
          <FaChevronRight className="size-5 min-[900px]:size-10" />
        </button>
      </div>
    </div>
  );
}
