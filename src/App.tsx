import { useState, useEffect } from "react";
import { HeroSection } from "./components/HeroSection";
// import { Navigation } from './components/Navigation';
// import { GameOverview } from './components/GameOverview';
// import { PongGame } from './components/PongGame';
// import { ProfilePage } from './components/ProfilePage';
// import { SettingsPage } from './components/SettingsPage';
// import { LoginPage } from './components/LoginPage';
// import { TournamentPage } from './components/TournamentPage';
// import { LanguagePage } from './components/LanguagePage';

type Section =
  | "hero"
  | "overview"
  | "newgame"
  | "profile"
  | "settings"
  | "login"
  | "tournament"
  | "language";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { MainMenu } from "./components/MainMenu";

export default function App() {
  const [currentSection, setCurrentSection] = useState<Section>("hero");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  // Initialize theme and accessibility preferences
  useEffect(() => {
    // Check for saved theme preference or default to system preference
    const savedTheme = localStorage.getItem("pong-theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const shouldUseDark = savedTheme === "dark" || (!savedTheme && prefersDark);

    setIsDarkMode(shouldUseDark);
    updateTheme(shouldUseDark);

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    setReduceMotion(prefersReducedMotion);

    // Listen for system theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem("pong-theme")) {
        setIsDarkMode(e.matches);
        updateTheme(e.matches);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const updateTheme = (isDark: boolean) => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const handleToggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    updateTheme(newTheme);
    localStorage.setItem("pong-theme", newTheme ? "dark" : "light");
  };

  const handleSectionChange = (section: string) => {
    setCurrentSection(section as Section);

    // Announce section change to screen readers
    const announcement = `Navigated to ${section.replace(/([A-Z])/g, " $1").toLowerCase()} section`;
    const announcer = document.createElement("div");
    announcer.setAttribute("aria-live", "polite");
    announcer.setAttribute("aria-atomic", "true");
    announcer.className = "sr-only";
    announcer.textContent = announcement;
    document.body.appendChild(announcer);
    setTimeout(() => document.body.removeChild(announcer), 1000);
  };

  const handleStart = () => {
    setCurrentSection("overview");
  };

  const handleBackToOverview = () => {
    setCurrentSection("overview");
  };

  const renderCurrentSection = () => {
    switch (currentSection) {
      case "hero":
        return (
          <HeroSection onStart={handleStart} reduceMotion={reduceMotion} />
        );
      // case "overview":
      //   return (
      //     <GameOverview
      //       onSectionChange={handleSectionChange}
      //       reduceMotion={reduceMotion}
      //     />
      //   );
      // case "newgame":
      //   return (
      //     <PongGame
      //       onBackToMenu={handleBackToOverview}
      //       reduceMotion={reduceMotion}
      //     />
      //   );
      // case "profile":
      //   return <ProfilePage onBack={handleBackToOverview} />;
      // case "settings":
      //   return (
      //     <SettingsPage
      //       onBack={handleBackToOverview}
      //       reduceMotion={reduceMotion}
      //       onReduceMotionChange={setReduceMotion}
      //       isDarkMode={isDarkMode}
      //       onThemeChange={handleThemeToggle}
      //     />
      //   );
      // case "login":
      //   return <LoginPage onBack={handleBackToOverview} />;
      // case "tournament":
      //   return <TournamentPage onBack={handleBackToOverview} />;
      // case "language":
      //   return <LanguagePage onBack={handleBackToOverview} />;
      default:
        return (
          <HeroSection onStart={handleStart} reduceMotion={reduceMotion} />
        );
    }
  };

  return (
    <Router>
      {/* <div className="size-full min-h-screen bg-background text-foreground"> */}
      {/* Show navigation only after hero section */}
      {/* {currentSection !== "hero" && (
        <Navigation
        currentSection={currentSection}
        onSectionChange={handleSectionChange}
        isDarkMode={isDarkMode}
        onToggleTheme={handleThemeToggle}
        />
        )} */}

      {/* <div id="main-content">{renderCurrentSection()}</div> */}

      {/* Screen reader announcements */}
      {/* <div
          id="announcements"
          aria-live="polite"
          aria-atomic="true"
          className="sr-only"
        /> */}
      {/* </div> */}
      <Routes>
        <Route path="/" element={<HeroSection reduceMotion={reduceMotion} />} />
        <Route
          path="/main"
          element={
            <MainMenu
              isDarkMode={isDarkMode}
              onToggleTheme={handleToggleTheme}
            />
          }
        />
      </Routes>
    </Router>
  );
}
