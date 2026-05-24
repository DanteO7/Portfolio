import { useTranslation } from "react-i18next";

export default function AboutMe() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col w-full items-center gap-8 min-[900px]:w-[70%] max-w-225 ">
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
