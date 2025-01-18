/*
  Nuestros Servicios - Sección
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2024-09-01
*/

// Importaciones
import { ButtonContainer, ButtonSecondary, Container, Section, Spacing, TitleContainer } from 'components';
import ServicesGenerator from './ServicesGenerator';

// Estilos
// Nuestros Servicios
const NUESTROS_SERVICIOS_PROPS = {
  SECTION: {
    ID: "servicios",
  },
  TITLEH2: "Nuestros Servicios",
  CONTAINER: {
    ID: "nuestrosservicios-container",
  },
  BUTTON_SECONDARY: {
    TITLE: "Conoce nuestras sucursales",
    HREF: "/sucursales",
    NAME: "Visita nuestras sucursales",
  },
};
const NUESTROS_SERVICIOS_UI = {
  CONTAINER: {
    CLASSNAME: "mx-auto",
  },
  BUTTON_CONTAINER: {
    DISTANCE: "mt-16",
    POSITION: "justify-center items-center",
  },
};

// Estructura
const NuestrosServicios = () => {
  return (
    <Section id={NUESTROS_SERVICIOS_PROPS.SECTION.ID}    >
      <Container className={NUESTROS_SERVICIOS_UI.CONTAINER.CLASSNAME} id={NUESTROS_SERVICIOS_PROPS.CONTAINER.ID}>
        <TitleContainer title={NUESTROS_SERVICIOS_PROPS.TITLEH2} />
        <Spacing distance='mt-8' />
        <ServicesGenerator />
        <ButtonContainer position={NUESTROS_SERVICIOS_UI.BUTTON_CONTAINER.POSITION} distance={NUESTROS_SERVICIOS_UI.BUTTON_CONTAINER.DISTANCE}>
          <ButtonSecondary
            title={NUESTROS_SERVICIOS_PROPS.BUTTON_SECONDARY.TITLE}
            href={NUESTROS_SERVICIOS_PROPS.BUTTON_SECONDARY.HREF}
            width='min-w-[340px]'
            name={NUESTROS_SERVICIOS_PROPS.BUTTON_SECONDARY.NAME}
          />
        </ButtonContainer>
      </Container>
    </Section>
  );
};
export default NuestrosServicios;
