import { Play, User, Trophy, Settings, LogIn, Globe } from "lucide-react";
import { HorizontalCardGrid } from "../shared/HorizontalCardGrid";

export const MainMenu = () => {
  const menuItems = [
    {
      id: "newgame",
      title: "New game",
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
      <HorizontalCardGrid menuItems={menuItems}></HorizontalCardGrid>
    </>
  );
};
