import { useTranslation } from "react-i18next";
import Button from "./button";
import { RiMailSendLine } from "react-icons/ri";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col w-full items-center gap-8 min-[900px]:w-[70%] max-w-[900px]">
      <h2 className="text-5xl">{t("contact.title")}</h2>
      <h3 className="text-4xl font-semibold min-[900px]:text-6xl text-center">
        {t("contact.message")}
      </h3>
      <Button
        text="Mandar correo"
        img={<RiMailSendLine className="text-[30px]" />}
        onClick={() =>
          window.open(
            "https://mail.google.com/mail/?view=cm&to=dante.orsetti@gmail.com",
            "_blank",
          )
        }
      />
    </div>
  );
}
