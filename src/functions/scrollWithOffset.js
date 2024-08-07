export default function scrollWithOffset(el) {
  const yCoordinate = el.getBoundingClientRect().top + window.scrollY;
  const yOffset = -120;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
}
