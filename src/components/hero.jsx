import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa6";
import Button from "./button";
import { useTranslation } from "react-i18next";
import { useReveal } from "../hook/use-reveal";

export default function Hero() {
  const { ref, visible, done } = useReveal();
  const { t } = useTranslation();

  return (
    <div id="home" ref={ref}>
      <div
        className={`flex flex-col items-center gap-15 ${
          visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
        } ${!done ? "transition-[opacity, transform] duration-700" : ""}`}
      >
        <div className="shadow-md w-fit dark:shadow-white/20 duration-250 transition-all border min-[900px]:text-[20px] justify-center text-center flex items-center gap-2 h-13 px-5 rounded-[50px]">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white dark:bg-[#6acaf3] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white dark:bg-[#6acaf3]"></span>
          </span>
          <p>{t("hero.available")}</p>
        </div>
        <div className="text-center">
          <h2 className="text-4xl min-[900px]:text-6xl mb-2">Dante Orsetti</h2>
          <h2 className="text-5xl font-semibold min-[900px]:text-8xl">
            {t("hero.title")}
          </h2>
        </div>
        <div className="flex flex-col min-[900px]:flex-row gap-4">
          <Button
            onClick={() => window.open("https://github.com/DanteO7", "_blank")}
            text="Github"
            img={<FaGithub className="text-[30px]" />}
          />
          <Button
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/dante-orsetti-05a1453b6/",
                "_blank",
              )
            }
            text="LinkedIn"
            img={<FaLinkedin className="text-[30px]" />}
          />
          <Button
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/cv.pdf";
              link.download = "cv.pdf";
              link.click();
            }}
            text="Curriculum"
            img={<FaDownload className="text-2xl" />}
          />
        </div>
      </div>
    </div>
  );
}
