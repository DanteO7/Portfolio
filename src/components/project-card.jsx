import { useTranslation } from "react-i18next";
import Button from "./button";
import { FaGithub } from "react-icons/fa6";
import { useReveal } from "../hook/use-reveal";

export default function ProjectCard({ project }) {
  const { t } = useTranslation();

  const { ref, visible, done } = useReveal();

  return (
    <div
      ref={ref}
      className={` ${
        visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
      } ${!done ? "transition-[opacity, transform] duration-700" : ""}`}
    >
      <div className="w-full border shadow-md dark:shadow-white/20 min-[400px]:rounded-4xl rounded-3xl text-sm min-[900px]:text-[19px] flex flex-col items-center h-full">
        {project.img && (
          <img
            src={project.img[0]}
            alt={t(`${project.key}.title`)}
            className="w-full  min-[400px]:rounded-t-4xl rounded-t-3xl"
          />
        )}
        <div className="p-[10%] min-[700px]:p-10 min-[900px]:pt-7 flex flex-col gap-3 min-[900px]:gap-5 justify-between h-full w-full">
          <div className="flex gap-4">
            {project.technologies.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
          <h2 className="font-semibold text-3xl min-[900px]:text-[40px]">
            {t(`${project.key}.title`)}
          </h2>
          <p>{t(`${project.key}.description`)}</p>
          <div className="hidden min-[400px]:grid grid-cols-2 gap-2 min-[900px]:gap-8">
            <Button
              text={t("extras.seeMore")}
              href={`/projects/${project.id}`}
              isLink={!project.inProgress}
              onClick={() => {
                if (project?.inProgress && project?.url) {
                  window.open(project.url, "_blank", "noopener,noreferrer");
                }
              }}
            />
            {project.github && (
              <Button
                onClick={() => window.open(project.github, "_blank")}
                text="Github"
                img={
                  <FaGithub className="min-[900px]:text-[30px] text-[20px]" />
                }
              />
            )}
          </div>
          <div className="min-[400px]:hidden">
            <Button
              text={t("extras.seeMore")}
              href={`/projects/${project.id}`}
              isLink={!project.inProgress}
              onClick={() => {
                if (project?.inProgress && project?.url) {
                  window.open(project.url, "_blank", "noopener,noreferrer");
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
