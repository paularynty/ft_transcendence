import { motion } from "motion/react";

type HeroSectionProps = {
  onStart: () => void;
  reduceMotion: boolean;
};

export const HeroSection = ({ onStart, reduceMotion }: HeroSectionProps) => {
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
    <main
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-background via-background to-muted/20"
      role="main"
      aria-labelledby="hero-title"
    >
      {reduceMotion ? (
        <div className="text-center space-y-8 px-4">
          <h1
            id="hero-title"
            className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-primary via-primary to-muted-foreground bg-clip-text text-transparent"
          >
            Welcome to Pong
          </h1>
          <button
            onClick={onStart}
            className="h-10 rounded-md px-6 has-[>svg]:px-4 text-lg px-8 py-6 h-auto"
            aria-label="Start the Pong game"
          >
            Log in
          </button>
          <button
            onClick={onStart}
            className="h-10 rounded-md px-6 has-[>svg]:px-4 text-lg px-8 py-6 h-auto"
            aria-label="Start the Pong game"
          >
            Register
          </button>
        </div>
      ) : (
        <motion.div className="text-center space-y-8 px-4" {...animationProps}>
          <motion.h1
            id="hero-title"
            className="p-3 text-6xl md:text-8xl font-bold bg-gradient-to-r from-primary via-primary to-muted-foreground bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            Welcome to Pong
          </motion.h1>
          <motion.div {...buttonAnimationProps}>
            <button
              onClick={onStart}
              className="h-10 rounded-md px-6 has-[>svg]:px-4 text-lg px-8 py-6 h-auto hover:scale-105 active:scale-95 transition-transform"
              aria-label="Start the Pong game"
            >
              Log in
            </button>
            <button
              onClick={onStart}
              className="h-10 rounded-md px-6 has-[>svg]:px-4 text-lg px-8 py-6 h-auto hover:scale-105 active:scale-95 transition-transform"
              aria-label="Start the Pong game"
            >
              Register
            </button>
          </motion.div>
        </motion.div>
      )}

      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {!reduceMotion && (
          <>
            <motion.div
              className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full"
              animate={{
                x: [0, 100, 0],
                y: [0, -50, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <motion.div
              className="absolute top-3/4 right-1/4 w-2 h-2 bg-primary/30 rounded-full"
              animate={{
                x: [0, -100, 0],
                y: [0, 50, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
                delay: 2,
              }}
            />
          </>
        )}
      </div>
    </main>
  );
};
