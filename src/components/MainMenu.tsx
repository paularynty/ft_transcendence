import { StyledButton } from "./HeroSection";
import { Sun, Moon } from "lucide-react";

interface NavigationProps {
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

export const MainMenu = ({ isDarkMode, onToggleTheme }: NavigationProps) => {
  return (
    <div className="flex items-center gap-2">
      <StyledButton
        onClick={onToggleTheme}
        aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        className="bg-background/80 backdrop-blur-sm"
      >
        {isDarkMode ? (
          <Sun className="h-4 w-4" />
        ) : (
          <Moon className="h-4 w-4" />
        )}
      </StyledButton>
    </div>
  );
};
