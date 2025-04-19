/*
  Nuestros Servicios - Sección
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2024-09-01
  Descripcion: 
*/

// Importaciones
import { Button, ButtonContainer, Container, Paragraph, Section, TitleContainer } from 'components';
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
const ButtonSection = () => {
  return (
    <ButtonContainer position="justify-center items-center w-full" distance="mt-28">
      <Button
        title="Sucursales en Morelia"
        href="/sucursales/morelia"
        name="Sucursales en Morelia"
        width={'w-[300px]'}
        onClick={() => scrollToTop()}
        variant="secondary"
      />
      <Button
        title="Sucursales en León"
        href="/sucursales/leon"
        name="Sucursales en León"
        width={'w-[300px]'}
        onClick={() => scrollToTop()}
        variant="primary"
      />
    </ButtonContainer>
  );
};

// Estructura
const NuestrosServicios = () => {
  return (
    <Section id="servicios">
      <Container className="mx-auto" id="nuestrosservicios-container">
        <Titulo />
        <ServicesGenerator />
        <ButtonSection />
      </Container>
    </Section>
  );
};
export default NuestrosServicios;
