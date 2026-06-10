import { useTranslation } from "react-i18next";
import MainLayout from "../layout/main-layout";
import { projects } from "../data/projects";
import Carrousel from "../components/carrousel";
import Button from "../components/button";
import { FaGithub } from "react-icons/fa";
import { useEffect } from "react";

export default function PointOfSale() {
  const { t } = useTranslation();
  const project = projects[1];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <MainLayout>
      <div className="flex flex-col gap-14 items-center">
        <h1 className="text-[34px] font-semibold min-[900px]:text-5xl">
          {t("pos.title")}
        </h1>
        <div className="font-semibold flex gap-6 min-[900px]:text-xl flex-wrap justify-center">
          {project.technologies.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        <div className="flex flex-col gap-8 min-[900px]:w-[75%]">
          <p className="">{t("pos.longDescription")}</p>
          <p className="">{t("pos.roleDescription")}</p>
          <p className="">{t("pos.backendDescription")}</p>
          <p className="">{t("pos.frontendDescription")}</p>
        </div>
        <div className="flex max-[900px]:flex-col gap-5">
          {project.github && (
            <Button
              onClick={() => window.open(project.github, "_blank")}
              text="Github"
              img={<FaGithub className="text-[30px]" />}
            />
          )}
          {project.demo && (
            <Button
              onClick={() => window.open(project.demo, "_blank")}
              text={t("extras.demo")}
            />
          )}
        </div>
        <Carrousel project={project} />
      </div>
    </MainLayout>
  );
}
