/*
  Nuestros Servicios - Sección
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2024-09-01
*/

// Importaciones
import {
  ButtonContainer,
  ButtonPrimary,
  ButtonSecondary,
  Container,
  Section,
  Spacing,
  TitleContainer,
} from 'components';
import { scrollToTop } from 'functions';
import ServicesGenerator from './ServicesGenerator';

// Constantes Internos
const Titulo = () => {
  return (
    <>
      <TitleContainer title="Nuestros Servicios" />
      <Spacing distance="mt-12" />
    </>
  );
};

// Estructura
const NuestrosServicios = () => {
  return (
    <Section id="servicios">
      <Container className="mx-auto" id="nuestrosservicios-container">
        <Titulo />
        <ServicesGenerator />
        <ButtonContainer position="justify-center items-center" distance="mt-32">
          <ButtonSecondary
            title="Sucursales en Morelia"
            href="/sucursales/morelia"
            name="Sucursales en Morelia"
            width={''}
            onClick={() => scrollToTop()}
          />
          <ButtonPrimary
            title="Sucursales en León"
            href="/sucursales/leon"
            name="Sucursales en León"
            width={''}
            onClick={() => scrollToTop()}
          />
        </ButtonContainer>
      </Container>
    </Section>
  );
};
export default NuestrosServicios;
