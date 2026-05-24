import { useTranslation } from "react-i18next";
import { useState } from "react";
import ThemeToggle from "./theme-toggle";
import LanguageSelect from "./language-select";
import { useEffect } from "react";

export default function Header() {
  const { t } = useTranslation();
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`z-20 p-2 min-[900px]:py-4 min-[900px]:text-[18px] sticky top-0 transition-all duration-300  ${
          scrolled
            ? "bg-linear-to-r from-[#73caef] via-[#c5e2ee] to-[#73caef] dark:from-[#020617] dark:via-[#1e293b] dark:to-[#020617] shadow-md"
            : "bg-[#51b2db]/0 dark:bg-[#020617]/0 border-transparent"
        }`}
      >
        <div className="grid grid-cols-[1fr_2fr_1fr] place-items-center items-center">
          <div className="min-[900px]:hidden">
            <button
              className="flex flex-col gap-1.25 z-50 mx-1.5 mr-5"
              onClick={() => {
                setMenu(true);
              }}
            >
              <span className="w-6 h-0.75 rounded-4xl bg-black dark:bg-white"></span>
              <span className="w-6 h-0.75 rounded-4xl bg-black dark:bg-white"></span>
              <span className="w-6 h-0.75 rounded-4xl bg-black dark:bg-white"></span>
            </button>
          </div>

          <div>Dante</div>
          <nav className="hidden min-[900px]:flex">
            <ul className="flex gap-12">
              <li>{t("header.home")}</li>
              <li>{t("header.about_me")}</li>
              <li>{t("header.projects")}</li>
              <li>{t("header.contact")}</li>
            </ul>
          </nav>
          <div className="flex gap-8">
            <ThemeToggle />
            <div className="hidden min-[900px]:flex relative">
              <LanguageSelect />
            </div>
          </div>
        </div>
      </header>

      <div
        onClick={() => setMenu(false)}
        className={`fixed inset-0 z-40 bg-black transition-opacity duration-300 min-[900px]:hidden ${
          menu
            ? "opacity-50 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      <div
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-[#6acaf3] dark:bg-[#1a1a2e] flex flex-col p-6 gap-6 transition-transform duration-300 ease-in-out min-[900px]:hidden ${
          menu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={() => setMenu(false)}
          className="cursor-pointer self-end text-2xl leading-none"
        >
          ✕
        </button>

        <nav>
          <ul className="flex flex-col gap-4">
            <li onClick={() => setMenu(false)}>{t("header.home")}</li>
            <li onClick={() => setMenu(false)}>{t("header.about_me")}</li>
            <li onClick={() => setMenu(false)}>{t("header.projects")}</li>
            <li onClick={() => setMenu(false)}>{t("header.contact")}</li>
          </ul>
        </nav>
        <LanguageSelect />
      </div>
    </>
  );
}
