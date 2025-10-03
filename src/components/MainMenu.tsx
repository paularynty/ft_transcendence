import { StyledButton } from "./HeroSection";
import { Play, User, Trophy, Settings, LogIn, Globe } from "lucide-react";
import { DarkModeIcon } from "../shared/DarkModeIcon";
import { LightModeIcon } from "../shared/LightModeIcon";
import { motion } from "motion/react";
import { HorizontalCard } from "../shared/HorizontalCard";

interface NavigationProps {
  isDarkMode: boolean;
  reduceMotion: boolean;
  onToggleTheme: () => void;
}

export const MainMenu = ({
  isDarkMode,
  onToggleTheme,
  reduceMotion,
}: NavigationProps) => {
  const menuItems = [
    {
      id: "newgame",
      title: "New Game",
      description: "Start new Pong game against AI",
      icon: Play,
      primary: true,
    },
    {
      id: "profile",
      title: "Profile",
      description: "View and edit your player profile",
      icon: User,
    },
    {
      id: "tournament",
      title: "Tournament",
      description: "Compete in tournaments and challenges",
      icon: Trophy,
    },
    {
      id: "settings",
      title: "Settings",
      description: "Game preferences and accessibility options",
      icon: Settings,
    },
    {
      id: "login",
      title: "Login / Sign up",
      description: "Access your account or create a new one",
      icon: LogIn,
    },
    {
      id: "language",
      title: "Language",
      description: "Change language preferences",
      icon: Globe,
    },
  ];

  return (
    <>
      {reduceMotion ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item) => (
            <HorizontalCard item={item}></HorizontalCard>
          ))}
        </div>
      ) : (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
        >
          {menuItems.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <HorizontalCard item={item}></HorizontalCard>
            </motion.div>
          ))}
        </motion.div>
      )}
      <StyledButton
        onClick={onToggleTheme}
        aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
      </StyledButton>
    </>
  );
};
