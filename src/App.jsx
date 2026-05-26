import { useEffect } from "react";
import { usePreferencesStore } from "./store/preferences-store";
import i18n from "./i18n";
import Home from "./pages/home";
import ProjectsPage from "./pages/projects-page";
import { Switch } from "wouter";
import { Route } from "wouter";

export default function App() {
  const { language, theme } = usePreferencesStore();

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <Switch>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/projects">
        <ProjectsPage />
      </Route>
    </Switch>
  );
}
