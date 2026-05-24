import { useTranslation } from "react-i18next";
import ProjectCard from "./project-card";
import { projects } from "../data/proyects";
import Button from "./button";

export default function Projects() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col w-full items-center gap-8 min-[900px]:w-[70%] max-w-[900px]">
      <h2 className="text-5xl">{t("projects.title")}</h2>
      {projects.slice(0, 4).map((p) => (
        <ProjectCard key={p.id} project={p} />
      ))}
      <Button text="Ver todos los proyectos" />
    </div>
  );
}
