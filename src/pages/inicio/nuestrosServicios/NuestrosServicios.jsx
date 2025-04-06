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
  Paragraph,
  Section,
  TitleContainer,
} from 'components';
import { scrollToTop } from 'functions';
import ServicesGenerator from './ServicesGenerator';

// Constantes Internos
const Titulo = () => {
  return (
    <article id="nuestros-servicios-titulo" className="flex flex-col items-start justify-center gap-4 mb-20">
      <TitleContainer title="Nuestros Servicios" />
      <Paragraph>
        Todos nuestros insumos son de calidad y de las mejores marcas para que tus prendas siempre estén impecables.
      </Paragraph>
    </article>
  );
};

// Estructura
const NuestrosServicios = () => {
  return (
    <Section id="servicios">
      <Container className="mx-auto" id="nuestrosservicios-container">
        <Titulo />
        <ServicesGenerator />
        <ButtonContainer position="justify-center items-center w-full" distance="mt-28">
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
