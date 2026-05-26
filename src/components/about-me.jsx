import { useTranslation } from "react-i18next";
import { useReveal } from "../hook/use-reveal";

export default function AboutMe() {
  const { ref, visible, done } = useReveal();

  const { t } = useTranslation();

  return (
    <div
      id="about"
      ref={ref}
      className={`flex flex-col w-full items-center gap-8 min-[900px]:w-[70%] max-w-225 ${
        visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
      } ${!done ? "transition-[opacity, transform] duration-700" : ""}`}
    >
      <h2 className="text-5xl">{t("about_me.title")}</h2>
      <div className="border shadow-md dark:shadow-white/20 rounded-4xl p-[10%] text-sm min-[900px]:text-[19px] min-[900px]:p-17 flex flex-col items-center gap-7">
        <img
          src="/perfil.jpeg"
          alt="Foto de perfil"
          className="w-40 h-40 rounded-full"
        />
        <p className="">{t("about_me.presentation")}</p>
      </div>
    </div>
  );
}
