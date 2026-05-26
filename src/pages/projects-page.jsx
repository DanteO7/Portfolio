import { useTranslation } from "react-i18next";
import ProjectCard from "../components/project-card";
import { projects } from "../data/projects";
import MainLayout from "../layout/main-layout";
import { useEffect } from "react";
import PageTransition from "../components/page-transition";

export default function ProjectsPage() {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <PageTransition>
      <MainLayout>
        <div className="min-[900px]:w-[80%]">
          <h2 className=" text-center text-5xl mb-15">
            {t("projects.all_title")}
          </h2>
          <div className="flex flex-col gap-5 min-[1400px]:grid min-[1400px]:grid-cols-2 min-[1400px]:gap-15 min-[1400px]:w-full items-stretch">
            {projects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      </MainLayout>
    </PageTransition>
  );
}
