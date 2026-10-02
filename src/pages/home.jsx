import { useEffect } from "react";
import AboutMe from "../components/about-me";
import Contact from "../components/contact";
import Hero from "../components/hero";
import PageTransition from "../components/page-transition";
import Projects from "../components/projects";
import Technologies from "../components/technologies";
import MainLayout from "../layout/main-layout";
import { useLocation } from "wouter";

export default function Home() {
  const [location] = useLocation();

  useEffect(() => {
    if (location !== "/") return;

    const frame = requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: "instant" });
    });

    return () => cancelAnimationFrame(frame);
  }, [location]);

  return (
    <PageTransition>
      <MainLayout>
        <Hero />
        <Technologies />
        <AboutMe />
        <Projects />
        <Contact />
      </MainLayout>
    </PageTransition>
  );
}
