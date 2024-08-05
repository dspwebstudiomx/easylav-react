export const scrollWithOffset = (element) => {
  const offset = 100;
  const elementPosition = element.offsetTop - offset;
  window.scroll({
    top: elementPosition,
    left: 0,
    behavior: "smooth",
  });
};
