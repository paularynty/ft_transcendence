import styled from "styled-components";
import { Sun } from "lucide-react";

const StyledSun = styled(Sun)`
  width: 24px;
  height: 24px;
`;

export const LightModeIcon = () => {
  return <StyledSun />;
};
