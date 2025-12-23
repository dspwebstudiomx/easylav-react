import { navLinksPages, navLinksSections } from 'data/navlinks';
import { scrollWithOffset, scrollToTop } from 'functions';
import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import { useEffect, useState } from 'react';

const NavLinksDesktop = () => {
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
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

      // Siempre permite que el observer actualice la sección activa
      if (mostVisibleSection) {
        setActiveSection(mostVisibleSection);
      }
    }, observerOptions);

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ul
      id="navlinks-desktop"
      className="hidden items-center justify-end gap-8 px-6 xl:flex xl:gap-4 2xl:px-0 uppercase font-semibold">
      {navLinksSections.map((navlink) => {
        const isActive = activeSection === navlink.linkId;
        const colorClass =
          isActive && scrolled ? 'text-primary font-bold' : isActive ? 'text-secondary font-bold' : 'text-dark';
        return (
          <NavHashLink
            key={navlink.id}
            id={`navlink-${navlink.name}`}
            className={`hover:text-secondary_dark ${colorClass}`}
            to={navlink.href}
            scroll={scrollWithOffset}
            title={`Ir a ${navlink.linkId}`}
            alt={navlink.alt}
            onClick={navlink.name === 'Inicio' ? scrollToTop : () => setActiveSection(navlink.linkId)}>
            {navlink.name}
          </NavHashLink>
        );
      })}
      {navLinksPages.map((navlink) => {
        return (
          <NavLink
            key={navlink.id}
            id={`navlink-${navlink.name}`}
            className={({ isActive }) => {
              const colorClass =
                isActive && scrolled ? 'text-primary font-bold' : isActive ? 'text-secondary font-bold' : 'text-dark';
              return `hover:text-secondary_dark ${colorClass}`;
            }}
            to={navlink.href}
            title={`Ir a ${navlink.linkId}`}
            alt={navlink.alt}
            onClick={() => {
              setActiveSection('');
              scrollToTop(); // Solo desactiva temporalmente, el observer lo volverá a activar si corresponde
              if (navlink.name === 'Inicio') scrollToTop();
            }}>
            {navlink.name}
          </NavLink>
        );
      })}
    </ul>
  );
};

export default NavLinksDesktop;
