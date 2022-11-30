export const arrowVariants = {
  closed: {
    rotateZ: "0deg",
  },
  open: {
    rotateZ: "-180deg",
  },
};

export const itemVariants = {
  closed: {
    x: "-50px",
    opacity: 0,
    transition: {
      duration: 0.3,
      opacity: { duration: 0.2 },
    },
  },
  open: {
    x: "0",
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

export const valueVariants = {
  base: {
    backgroundColor: "rgba(240, 240, 240, 0)",
  },
  hovered: {
    backgroundColor: "rgba(240, 240, 240, 1)",
  },
  clicked: {
    margin: ".1rem 0",
  },
};
