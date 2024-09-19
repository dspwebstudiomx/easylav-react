/*
  Nuestros Servicios Sección
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2024-09-01
*/

// Importaciones
import { ButtonContainer, ButtonSecondary, Container, Section, Spacing, TitleContainer } from 'components';
import { NUESTROS_SERVICIOS_PROPS, NUESTROS_SERVICIOS_UI } from 'constants/constants';
import ServicesGenerator from './ServicesGenerator';

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
          />
        </ButtonContainer>
      </Container>
    </Section>
  );
};
export default NuestrosServicios;
