/*
Testimonios
=====================================
Creado por : Daniel Pérez
Fecha: 2022-08-25
*/

// Importaciones
import { BorderBottom, BorderLeft, Container, Section, TitleH2 } from "components";
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
      <div className='sm:hidden'>
        <BorderLeft justify={'mx-auto'}>
          <TitleH2
            title={TESTIMONIALS_PROPS.TITLEH2}
            justify={TESTIMONIALS_UI.TITLEH2_JUSTIFY}
          />
        </BorderLeft>
      </div>
      <div className='hidden sm:block'>
        <BorderBottom justify={'mx-auto'}>
          <TitleH2
            title={TESTIMONIALS_PROPS.TITLEH2}
            justify={TESTIMONIALS_UI.TITLEH2_JUSTIFY}
          />
        </BorderBottom>
      </div>
      <TestimonialGenerator />
    </Container>
  </Section >
);

export default Testimonios;
