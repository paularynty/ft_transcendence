import { motion } from "motion/react";
import styled from "styled-components";
import { useNavigate } from "react-router";
import React from "react";

type Props = {
  reduceMotion: boolean;
};

const Root = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    to bottom right,
    var(--background),
    var(--background),
    rgba(var(--muted), 0.2)
  );
  position: relative;
`;

const Centered = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
`;

const Title = styled.h1`
  font-size: 3.75rem; /* 6xl */
  font-weight: bold;
  background: linear-gradient(
    to right,
    var(--primary),
    var(--primary),
    var(--muted-foreground)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  @media (min-width: 768px) {
    font-size: 6rem; /* 8xl */
  }
  padding: 0.75rem;
`;

export const StyledButton = styled.button`
  padding: 2rem;
  font-size: 1.125rem;
  height: auto;
  transition: transform 0.15s;
  &:hover {
    transform: scale(1.05);
  }
  &:active {
    transform: scale(0.95);
  }
  & + & {
    margin-left: 1rem;
  }
  border-radius: 0.375rem;
  border-color: red;
`;

export const HeroSection: React.FC<Props> = ({ reduceMotion }) => {
  const handleClick = (route: string) => {
    const navigate = useNavigate();
    console.log("Navigating to:", route);
    navigate(route);
  };

  const animationProps = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
      };

  const buttonAnimationProps = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, delay: 0.3 },
      };

  return (
    <Root>
      {reduceMotion ? (
        <Centered>
          <Title>Welcome to Pong</Title>
          <StyledButton onClick={() => handleClick("/login")}>
            Log in
          </StyledButton>
          <StyledButton onClick={() => handleClick("/register")}>
            Register
          </StyledButton>
        </Centered>
      ) : (
        <motion.div {...animationProps}>
          <Centered>
            <motion.h1
              style={{ margin: 0 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Title>Welcome to Pong</Title>
            </motion.h1>
            <motion.div {...buttonAnimationProps}>
              <StyledButton onClick={() => handleClick("/login")}>
                Log in
              </StyledButton>
              <StyledButton onClick={() => handleClick("/register")}>
                Register
              </StyledButton>
            </motion.div>
          </Centered>
        </motion.div>
      )}
      {!reduceMotion && (
        <>
          <motion.div
            className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full"
            animate={{
              x: [0, -300, 0],
              y: [0, -50, 0],
            }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 4,
            }}
          />
          <motion.div
            className="absolute top-3/4 right-1/4 w-2 h-2 bg-primary/30 rounded-full"
            animate={{
              x: [50, -200, 0],
              y: [0, 50, 0],
            }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 4,
            }}
          />
        </>
      )}
    </Root>
  );
};
