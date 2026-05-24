import { useTranslation } from "react-i18next";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="relative z-10">
      <div className="p-8 flex flex-col items-center text-center gap-5">
        <p>&copy;{t("footer.rights")}</p>
        <div className="flex text-3xl gap-4">
          <FaInstagram
            className="cursor-pointer hover:text-black hover:dark:text-[#ccc] transition-all duration-200"
            onClick={() =>
              window.open("https://www.instagram.com/dante_ksx", "_blank")
            }
          />
          <FaWhatsapp
            className="cursor-pointer hover:text-black hover:dark:text-[#ccc] transition-all duration-200"
            onClick={() => window.open("https://wa.me/5493400532514", "_blank")}
          />
          <FaGithub
            className="cursor-pointer hover:text-black hover:dark:text-[#ccc] transition-all duration-200"
            onClick={() => window.open("https://github.com/DanteO7", "_blank")}
          />
          <FaLinkedin
            className="cursor-pointer hover:text-black hover:dark:text-[#ccc] transition-all duration-200"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/dante-orsetti-05a1453b6/",
                "_blank",
              )
            }
          />
        </div>
      </div>
    </footer>
  );
}
