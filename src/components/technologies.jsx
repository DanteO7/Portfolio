import { useTranslation } from "react-i18next";
import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiVite,
  SiDotnet,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { useReveal } from "../hook/use-reveal";

export default function Technologies() {
  const { ref, visible, done } = useReveal();

  const { t } = useTranslation();

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center gap-10 ${
        visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
      } ${!done ? "transition-[opacity, transform] duration-700" : ""}`}
    >
      <div className="flex justify-center items-center w-full gap-8">
        <h2 className="text-5xl">{t("technologies")}</h2>
      </div>
      <div className="flex flex-wrap justify-center gap-8 min-[900px]:gap-13 text-5xl">
        <div title="React">
          <SiReact />
        </div>

        <div title="JavaScript">
          <SiJavascript />
        </div>

        <div title="Tailwind CSS">
          <SiTailwindcss />
        </div>

        <div title="Vite">
          <SiVite />
        </div>

        <div title=".NET">
          <SiDotnet />
        </div>

        <div title="C#">
          <TbBrandCSharp />
        </div>

        <div title="PostgreSQL">
          <SiPostgresql />
        </div>
      </div>
    </div>
  );
}
