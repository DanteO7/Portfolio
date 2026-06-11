import { useTranslation } from "react-i18next";
import { usePreferencesStore } from "../store/preferences-store";
import { useEffect, useRef, useState } from "react";

export default function LanguageSelect() {
  const { t } = useTranslation();
  const { language, setLanguage } = usePreferencesStore();
  const [open, setOpen] = useState(false);
  const selectRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div ref={selectRef} className="relative justify-self-end w-fit">
      <div className="flex items-center gap-2">
        <p>{t("header.language")}:</p>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setOpen(!open);
          }}
          className="cursor-pointer px-3 py-2 rounded-xl bg-[#c6e7f9] dark:bg-[#21213a]"
        >
          {language.toUpperCase()}
        </button>
      </div>

      {open && (
        <div className="absolute z-50 -right-3 rounded-lg overflow-hidden bg-[#c6e7f9] dark:bg-[#21213a] shadow-lg">
          <button
            onClick={() => {
              setLanguage("es");
              setOpen(false);
            }}
            className="block cursor-pointer px-4 w-full py-2 hover:bg-[#ace1f6] dark:hover:bg-[#131934]"
          >
            ES
          </button>
          <button
            onClick={() => {
              setLanguage("en");
              setOpen(false);
            }}
            className="block cursor-pointer px-4 py-2 hover:bg-[#ace1f6] dark:hover:bg-[#131934]"
          >
            EN
          </button>
        </div>
      )}
    </div>
  );
}
