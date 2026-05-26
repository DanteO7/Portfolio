import { useTranslation } from "react-i18next";
import Button from "./button";
import { FaGithub } from "react-icons/fa6";

export default function ProjectCard({ project }) {
  const { t } = useTranslation();

  return (
    <div>
      <div className="w-full border shadow-md dark:shadow-white/20 rounded-4xl text-sm min-[900px]:text-[19px] flex flex-col items-center h-full">
        {project.img && (
          <img
            src={project.img}
            alt={t(`${project.key}.title`)}
            className="w-full rounded-t-4xl"
          />
        )}
        <div className="p-[10%] min-[900px]:p-10 flex flex-col gap-3 min-[900px]:gap-6 justify-between h-full w-full">
          <div className="flex gap-4">
            {project.technologies.map((t) => (
              <h2>{t}</h2>
            ))}
          </div>
          <h2 className="font-semibold text-3xl min-[900px]:text-[40px]">
            {t(`${project.key}.title`)}
          </h2>
          <p>{t(`${project.key}.description`)}</p>
          <div className="flex flex-col  gap-2 min-[1200px]:flex-row ">
            <Button text="Ver mas" />
            {project.github && (
              <Button
                onClick={() => window.open(project.github, "_blank")}
                text="Github"
                img={<FaGithub className="text-[30px]" />}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
