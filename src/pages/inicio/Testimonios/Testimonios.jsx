/*
Testimonios
=====================================
Creado por : Daniel Pérez
Fecha: 2022-08-25
*/

// Importaciones
import { Container, Section, TitleContainer } from "components";
import { TESTIMONIALS_PROPS, TESTIMONIALS_UI } from "constants/constants";
import TestimonialGenerator from "./TestimonialGenerator";

// Componente
const Testimonios = () => (
  <Section
    id={TESTIMONIALS_PROPS.ID}
    backgroundColor={TESTIMONIALS_UI.BACKGROUND_COLOR}
    height={TESTIMONIALS_UI.HEIGHT}
    className={TESTIMONIALS_UI.SECTION}
  >
    <Container className={TESTIMONIALS_UI.CONTAINER} id={TESTIMONIALS_PROPS.CONTAINER_ID} >
      <TitleContainer title={TESTIMONIALS_PROPS.TITLEH2} />
      <TestimonialGenerator />
    </Container>
  </Section >
);

export default Testimonios;
