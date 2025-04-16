/*
  Navbar.jsx - 
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2024-08-12
  Descripción: Componente de navegación principal del sitio web. Contiene enlaces de navegación, un botón de modo oscuro y un logotipo. Se adapta a diferentes tamaños de pantalla.
  Utiliza un estado para manejar la visibilidad de los enlaces de navegación en dispositivos móviles.
  Dependencias: React, componentes personalizados (Container, DarkModeButton, HeaderLine, Logo, MenuButton, NavLinksDesktop, NavLinksMobile, NavLinksTablet).
  Estilos: Utiliza Tailwind CSS para el diseño y la responsividad.
  Responsividad: Se adapta a diferentes tamaños de pantalla utilizando clases de Tailwind CSS. El menú de navegación se oculta en pantallas más pequeñas y se muestra en pantallas más grandes. El botón de modo oscuro es accesible en todas las pantallas.
  Funcionalidad: Permite a los usuarios navegar por el sitio web y cambiar entre el modo claro y oscuro. El menú de navegación se puede abrir y cerrar en dispositivos móviles.
  Mejora de Accesibilidad: Se asegura de que los enlaces de navegación sean accesibles y fáciles de usar en todos los dispositivos.
  Mejora de SEO: Utiliza etiquetas semánticas y una estructura clara para mejorar la indexación en motores de búsqueda.
  =====================================
  Modificaciones: 
*/

// Importaciones
import {
  DarkModeButton,
  Logo,
  MenuButton,
  NavLinksDesktop,
  NavLinksMobile,
  NavLinksTablet,
  ThemeLine,
  Container,
} from 'components';
import { useState } from 'react';

// Estructura
const Navbar = () => {
  const [navigationLinks, setNavigationLinks] = useState(false);
  const toggleNav = () => {
    setNavigationLinks(!navigationLinks);
  };

  const handleLinkClick = () => {
    toggleNav();
  };

  return (
    <>
      <nav id="nav" className={`fixed sm:relative xl:fixed top-0 left-0 w-full z-20 bg-light shadow-md`}>
        <Container className="flex items-center justify-center gap-4">
          <div className={`flex flex-row items-center justify-between w-full gap-6  h-[100px]`}>
            <Logo />
            <NavLinksDesktop />
            <DarkModeButton />
            <MenuButton toggleNav={toggleNav} navigationLinks={navigationLinks} className="flex lg:hidden" />
            {navigationLinks && <NavLinksMobile onLinkClick={handleLinkClick} />}
          </div>
          <NavLinksTablet />
        </Container>
      </nav>
      <ThemeLine className="fixed sm:relative top-[100px] sm:top-[0px] xl:top-[100px] xl:fixed" />
    </>
  );
};

export default Navbar;
