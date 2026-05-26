import { useTranslation } from "react-i18next";
import ProjectCard from "./project-card";
import { projects } from "../data/projects";
import Button from "./button";
import { Link } from "wouter";
import { useReveal } from "../hook/use-reveal";

export default function Projects() {
  const { ref, visible, done } = useReveal();

  const { t } = useTranslation();

  return (
    <div
      id="projects"
      ref={ref}
      className={`flex flex-col w-full items-center gap-8 min-[900px]:w-[80%] ${
        visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
      } ${!done ? "transition-[opacity, transform] duration-700" : ""}`}
    >
      <h2 className="text-5xl">{t("projects.title")}</h2>
      <div className="flex flex-col gap-5 min-[1400px]:grid min-[1400px]:grid-cols-2 min-[1400px]:gap-15 min-[1400px]:w-full items-stretch">
        {projects.slice(0, 4).map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
      <Link href="/projects">
        <Button text="Ver todos los proyectos" />
      </Link>
    </div>
  );
}
