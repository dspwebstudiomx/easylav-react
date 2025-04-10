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
      threshold: 0.6, // Se activa cuando el 60% de la sección es visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id); // Actualiza la sección activa
        }
      });
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
      className="hidden items-center justify-between gap-8 px-6 xl:flex xl:gap-4 2xl:px-0 uppercase text-bolder">
      {navLinksSections.map((navlink) => {
        return (
          <NavHashLink
            key={navlink.id}
            id={`navlink-${navlink.name}`}
            className={`hover:text-secondary_dark cursor-pointer ${
              activeSection === navlink.linkId ? 'text-primary_dark' : ''
            }`}
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
              `hover:text-secondary_dark last:text-secondary_dark last:hover:text-primary_dark cursor-pointer ${
                isActive ? 'text-primary_dark' : ''
              }`
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
