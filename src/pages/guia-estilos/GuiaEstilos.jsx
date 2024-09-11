import { Button, ButtonContainer, ButtonPrimary, Container, PageLayout, Paragraph, TitleH1, TitleH2 } from "components"
import { GENERAL_UI } from "constants/constants"

const GuiaEstilos = () => {
  return (
    <PageLayout>
      <div className="mx-auto">
        <TitleH1 title="Guia de Estilos" />
        <div className="border-2 mt-3 border-primary"></div>
      </div>
      <Container className="flex flex-col border-2 p-24 border-primary_dark rounded-2xl bg-[#fff] gap-28">


        <div className="grid sm:grid-cols-2 grid gap-8 mx-auto text-dark">
          {/* Color Primario */}
          <div className="grid gap-6">
            <Paragraph className="font-semibold">Color Primario</Paragraph>
            <div className="flex gap-4">
              <div className="mx-auto text-center flex flex-col gap-4 items-center">
                <div className=" bg-primary_light w-28 h-20"></div>
                <div className="flex flex-col gap-0">
                  <span className="text-center font-semibold">#CCFBF1</span>
                  <span className="text-center font-semibold">primary_light</span>
                </div>
              </div>
              <div className="mx-auto text-center flex flex-col gap-4 items-center">
                <div className="bg-primary w-28 h-20"></div>
                <div className="flex flex-col gap-0">
                  <span className="text-center font-semibold">#55C3B9</span>
                  <span className="text-center font-semibold">primary</span>
                </div>
              </div>
              <div className="mx-auto text-center flex flex-col gap-4 items-center">
                <div className="bg-primary_dark w-28 h-20"></div>
                <div className="flex flex-col gap-0">
                  <span className="text-center font-semibold">#2BAC9F</span>
                  <span className="text-center font-semibold">primary_light</span>
                </div>
              </div>

            </div>
          </div>
          {/* Color Primario */}

          {/* Color Secundario */}
          <div className="grid items-center justify-center gap-6 text-dark">
            <Paragraph className="font-semibold">Color Secundario</Paragraph>
            <div className="flex gap-4">
              <div className="mx-auto text-center flex flex-col gap-4 items-center">
                <div className=" bg-secondary_light w-28 h-20"></div>
                <div className="flex flex-col gap-0">
                  <span className="text-center font-semibold">#985DA0</span>
                  <span className="text-center font-semibold">secondary_light</span>
                </div>
              </div>
              <div className="mx-auto text-center flex flex-col gap-4 items-center">
                <div className="bg-secondary w-28 h-20"></div>
                <div className="flex flex-col gap-0">
                  <span className="text-center font-semibold">#622A77</span>
                  <span className="text-center font-semibold">secondary</span>
                </div>
              </div>
              <div className="mx-auto text-center flex flex-col gap-4 items-center">
                <div className="bg-secondary_dark w-28 h-20"></div>
                <div className="flex flex-col gap-0">
                  <span className="text-center font-semibold">#392352</span>
                  <span className="text-center font-semibold">secondary_dark</span>
                </div>
              </div>
            </div>
          </div>
          {/* Color Secundario */}

          {/* Color Dark */}
          <div className="grid items-center justify-center gap-6 text-dark">
            <Paragraph className="font-semibold">Color Negro</Paragraph>
            <div className="flex">
              <div className="mx-auto text-center flex flex-col gap-4 items-center">
                <div className=" bg-dark w-28 h-20"></div>
                <div className="flex flex-col gap-2">
                  <span className="text-center font-semibold">#985DA0</span>
                  <span className="text-center font-semibold">dark</span>
                </div>
              </div>
            </div>
          </div>
          {/* Color Dark */}

          {/* Color Light */}
          <div className="grid items-center justify-center gap-6 text-dark">
            <Paragraph className="font-semibold">Color Light</Paragraph>
            <div className="flex">
              <div className="mx-auto text-center flex flex-col gap-4 items-center">
                <div className=" bg-light w-28 h-20 border-2"></div>
                <div className="flex flex-col gap-2">
                  <span className="text-center font-semibold">#985DA0</span>
                  <span className="text-center font-semibold">light</span>
                </div>
              </div>
            </div>
          </div>
          {/* Color Dark */}
        </div>

        {/* Titulos & Parrafos */}
        <div className="grid sm:grid-cols-2 text-dark">
          <div className="flex flex-col gap-5 text-dark">
            <Paragraph className="font-semibold">Titulo Principal (36px)</Paragraph>
            <TitleH1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima vero quod blanditiis veniam rem sunt laboriosam.
            </TitleH1>
          </div>
          <div className="flex flex-col gap-5">
            <p className="font-semibold">Titulo Secundario (30px)</p>
            <TitleH2 title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, et!" />
          </div>
        </div>
        <div className="grid sm:grid-cols-2">
          <div className="flex flex-col gap-5">
            <Paragraph className="font-semibold">Párrafo (16px)</Paragraph>
            <p className={GENERAL_UI.PARAGRAPH}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, et!</p>
          </div>
          <div className="flex flex-col gap-5">
            <Button border="border-2" title="Boton" />
          </div>
        </div>
        {/* Titulos & Parrafos */}

        <div className="grid">
          <ButtonContainer>
            <ButtonPrimary title='Hola' />
          </ButtonContainer>
        </div>
      </Container>
    </PageLayout >
  )
}

export default GuiaEstilos