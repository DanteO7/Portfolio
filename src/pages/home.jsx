import AboutMe from "../components/about-me";
import Contact from "../components/contact";
import Hero from "../components/hero";
import Projects from "../components/projects";
import Technologies from "../components/technologies";
import MainLayout from "../layout/main-layout";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <Technologies />
      <AboutMe />
      <Projects />
      <Contact />
    </MainLayout>
  );
}
