import { navLinksPages, navLinksSections } from 'data/navlinks';
import { scrollWithOffset, scrollToTop } from 'functions';
import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import { useEffect, useState } from 'react';

const NavLinksDesktop = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observerOptions = {
      root: null, // Usa el viewport como contenedor
      rootMargin: '0px',
      threshold: 0.5, // Se activa cuando el 50% de la sección es visible
    };

    const observer = new IntersectionObserver((entries) => {
      let mostVisibleSection = null;
      let maxIntersectionRatio = 0;

      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > maxIntersectionRatio) {
          mostVisibleSection = entry.target.id;
          maxIntersectionRatio = entry.intersectionRatio;
        }
      });

      if (mostVisibleSection) {
        setActiveSection(mostVisibleSection); // Actualiza la sección activa
      }
    }, observerOptions);

    // Observa cada sección
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    // Limpia el observer al desmontar el componente
    return () => observer.disconnect();
  }, []);

  return (
    <ul
      id="navlinks-desktop"
      className="hidden items-center justify-end gap-8 px-6 xl:flex xl:gap-4 2xl:px-0 uppercase font-semibold">
      {navLinksSections.map((navlink) => {
        const isActive = activeSection === navlink.linkId;
        return (
          <NavHashLink
            key={navlink.id}
            id={`navlink-${navlink.name}`}
            className={`hover:text-secondary_dark ${isActive ? 'text-primary_dark font-bold' : 'text-dark'}`}
            to={navlink.href}
            scroll={scrollWithOffset}
            title={`Ir a ${navlink.linkId}`}>
            {navlink.name}
          </NavHashLink>
        );
      })}
      {navLinksPages.map((navlink) => {
        return (
          <NavLink
            key={navlink.id}
            id={`navlink-${navlink.name}`}
            className={({ isActive }) =>
              `hover:text-secondary_dark ${isActive ? 'text-primary_dark font-bold' : 'text-dark'}`
            }
            to={navlink.href}
            title={`Ir a ${navlink.linkId}`}
            onClick={() => {
              scrollToTop();
            }}>
            {navlink.name}
          </NavLink>
        );
      })}
    </ul>
  );
};

export default NavLinksDesktop;
