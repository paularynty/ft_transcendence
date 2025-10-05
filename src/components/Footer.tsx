import "./Header.css";
import { DarkModeIcon } from "../shared/DarkModeIcon";
import { LightModeIcon } from "../shared/LightModeIcon";
import styled from "styled-components";

type Props = {
  isDarkMode: boolean;
  onToggleTheme: () => void;
};

const ThemeIcon = styled.div`
  width: 2rem;
  height: 2rem;
`;

export const Footer = ({ isDarkMode, onToggleTheme }: Props) => {
  return (
    <footer className="header">
      <ThemeIcon
        onClick={onToggleTheme}
        aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
      </ThemeIcon>
    </footer>
  );
};
