export default function scrollWithOffset(el) {
  const yCoordinate = el.getBoundingClientRect().top + window.scrollY;
  const yOffset = 0;

  // Agregamos un ajuste para dispositivos móviles, tabletas y desktop
  const isMobile = window.innerWidth < 768;
  const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
  const isDesktop = window.innerWidth >= 1024;

  const offsetMobile = isMobile ? -100 : 0; // ajusta el offset para móviles
  const offsetTablet = isTablet ? 0 : 0; // ajusta el offset para tabletas
  const offsetDesktop = isDesktop ? -100 : 0; // ajusta el offset para desktop

  const totalOffset =
    yOffset +
    (isMobile ? offsetMobile : isTablet ? offsetTablet : offsetDesktop);

  window.scrollTo({
    top: yCoordinate + totalOffset,
    behavior: "smooth",
  });
}
