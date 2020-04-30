export const headlinePoses = {
  exit: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
    // delay: ({ wordIndex }) => wordIndex * 100,
    transition: {
      opacity: { ease: "easeInOut", duration: 500 },
      duration: 1000,
      ease: [0.24, 0.89, 0.24, 1],
    },
  },
};

export const bodyPoses = {
  exit: { opacity: 0, y: 0 },
  enter: {
    opacity: 1,
    y: 0,
    delay: 2000,
    transition: {
      duration: 500,
      ease: "easeIn",
    },
  },
};
