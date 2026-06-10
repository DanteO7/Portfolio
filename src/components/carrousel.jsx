import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Carrousel({ project }) {
  const { t } = useTranslation();

  const [index, setIndex] = useState(0);

  const handleLeft = () => {
    if (index == 0) {
      setIndex(project.img.length - 1);
    } else {
      setIndex(index - 1);
    }
  };
  const handleRight = () => {
    if (index == project.img.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleRight();
    }, 4000);

    return () => clearTimeout(timer);
  }, [index]);
  return (
    <div className="flex flex-col items-center gap-6">
      <h3 className="text-4xl font-semibold">{t("extras.images")}</h3>
      <div className="flex items-center max-[900px]:scale-115 min-[900px]:w-[75%] gap-1 min-[900px]:gap-5">
        <button className="h-fit cursor-pointer" onClick={handleLeft}>
          <FaChevronLeft className="size-5 min-[900px]:size-10" />
        </button>
        <div className="overflow-hidden">
          <div
            className="flex  transition-transform duration-500"
            style={{
              transform: `translateX(-${index * 100}%)`,
            }}
          >
            {project.img.map((img) => (
              <img src={img} className="w-full shrink-0 rounded-xl" />
            ))}
          </div>
        </div>
        <button className="h-fit cursor-pointer" onClick={handleRight}>
          <FaChevronRight className="size-5 min-[900px]:size-10" />
        </button>
      </div>
    </div>
  );
}
