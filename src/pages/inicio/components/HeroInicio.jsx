import { canastaderopa_1920, canastaderopa_2400, canastaderopa_640 } from "assets";
import { ButtonContainer, ButtonSecondary, Container, Hero } from "components";
import { scrollWithOffset } from "functions";

export default function HeroInicio() {
  return (
    <Hero
      textColor="text-light"
      opacity="opacity-45"
      opacityColor="bg-[#000]"
      height="h-[60vh]"
      titleSection="inicio"
      imageAlt="canasta de ropa verde con ropa sucia de color con fondo blanco"
      backgroundImage_640={canastaderopa_640}
      backgroundImage_1024={canastaderopa_1920}
      backgroundImage_1920={canastaderopa_2400}
    >
      <Container className="w-[80vw] items-start">
        <h1 className="sr-only">
          en Easylav tu Ropa es Nuestra Pasión: Limpieza Impecable, Planchado
          Perfecto
        </h1>
        <p className="text-border text-[32px] font-semibold leading-[45px] sm:w-2/3 sm:text-4xl">
          Tu Ropa es Nuestra Pasión: Limpieza Impecable, Planchado Perfecto
        </p>
        <ButtonContainer>
          <ButtonSecondary
            title="Nuestros Servicios"
            href="/#servicios"
            border="border-l-secondary_dark border-l-4 border-t-secondary_light border-t-4 hover:border-t-secondary hover:border-l-secondary_dark"
            onClick={(el) => scrollWithOffset(el)} />
        </ButtonContainer>
      </Container>
    </Hero>
  )
}

