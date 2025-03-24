/*
  Nuestros Servicios - Sección
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2024-09-01
*/

// Importaciones
import { ButtonContainer, ButtonPrimary, ButtonSecondary, Container, Section, Spacing, TitleContainer } from 'components';
import { scrollToTop } from 'functions';
import ServicesGenerator from './ServicesGenerator';

// Estilos
const NUESTROS_SERVICIOS_PROPS = {
  SECTION: {
    ID: "servicios",
  },
  TITLEH2: "Nuestros Servicios",
  CONTAINER: {
    ID: "nuestrosservicios-container",
  },
  BUTTON_SECONDARY: {
    TITLE: "Sucursales en Morelia",
    HREF: "/sucursales/morelia",
    NAME: "Sucursales en Morelia",
  },
  BUTTON_PRIMARY: {
    TITLE: "Sucursales en León",
    HREF: "/sucursales/leon",
    NAME: "Sucursales en León",
  },
};
const NUESTROS_SERVICIOS_UI = {
  CONTAINER: {
    CLASSNAME: "mx-auto",
  },
  BUTTON_CONTAINER: {
    DISTANCE: "mt-32",
    POSITION: "justify-center items-center",
  },
};

// Estructura
const NuestrosServicios = () => {
  return (
    <Section id={NUESTROS_SERVICIOS_PROPS.SECTION.ID}    >
      <Container className={NUESTROS_SERVICIOS_UI.CONTAINER.CLASSNAME} id={NUESTROS_SERVICIOS_PROPS.CONTAINER.ID}>
        <TitleContainer title={NUESTROS_SERVICIOS_PROPS.TITLEH2} />
        <Spacing distance='mt-12' />
        <ServicesGenerator />
        <ButtonContainer position={NUESTROS_SERVICIOS_UI.BUTTON_CONTAINER.POSITION} distance={NUESTROS_SERVICIOS_UI.BUTTON_CONTAINER.DISTANCE}>
          <ButtonSecondary
            title={NUESTROS_SERVICIOS_PROPS.BUTTON_SECONDARY.TITLE}
            href={NUESTROS_SERVICIOS_PROPS.BUTTON_SECONDARY.HREF}
            width={''}
            name={NUESTROS_SERVICIOS_PROPS.BUTTON_SECONDARY.NAME}
            onClick={() => scrollToTop()}
          />
          <ButtonPrimary
            title={NUESTROS_SERVICIOS_PROPS.BUTTON_PRIMARY.TITLE}
            href={NUESTROS_SERVICIOS_PROPS.BUTTON_PRIMARY.HREF}
            width={''}
            name={NUESTROS_SERVICIOS_PROPS.BUTTON_PRIMARY.NAME}
            onClick={() => scrollToTop()}
          />
        </ButtonContainer>
      </Container>
    </Section>
  );
};
export default NuestrosServicios;
