import styled from "styled-components";
import { Moon } from "lucide-react";

const StyledMoon = styled(Moon)`
  width: 24px;
  height: 24px;
`;

export const DarkModeIcon = () => {
  return <StyledMoon />;
};
