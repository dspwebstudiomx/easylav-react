import { PageLayout, TitleH1, TitleH2 } from "components"
import { GENERAL_UI } from "constants/constants"

const GuiaEstilos = () => {
  return (
    <PageLayout>
      <div className="mx-auto">
        <TitleH1 title="Guia de Estilos" />
        <div className="border-2 mt-3 border-primary"></div>
      </div>
      <div className="flex flex-col border-2 p-12 border-primary_dark rounded-2xl bg-[#fcfcfc]">
        <div className="flex flex-col gap-12 py-24 w-full">

          <div className="flex sm:flex-col lg:flex-row gap-8 mx-auto">
            {/* Color Primario */}
            <div className="grid gap-6">
              <p className="font-semibold">Color Primario</p>
              <div className="flex gap-4">
                <div className="mx-auto text-center flex flex-col gap-4 items-center">
                  <div className=" bg-primary_light w-32 h-20"></div>
                  <div className="flex flex-col gap-2">
                    <span className="text-center font-semibold">#CCFBF1</span>
                    <span className="text-center font-semibold">primary_light</span>
                  </div>
                </div>
                <div className="mx-auto text-center flex flex-col gap-4 items-center">
                  <div className="bg-primary w-32 h-20"></div>
                  <div className="flex flex-col gap-2">
                    <span className="text-center font-semibold">#55C3B9</span>
                    <span className="text-center font-semibold">primary</span>
                  </div>
                </div>
                <div className="mx-auto text-center flex flex-col gap-4 items-center">
                  <div className="bg-primary_dark w-32 h-20"></div>
                  <div className="flex flex-col gap-2">
                    <span className="text-center font-semibold">#2BAC9F</span>
                    <span className="text-center font-semibold">primary_light</span>
                  </div>
                </div>

              </div>
            </div>
            {/* Color Primario */}

            {/* Color Secundario */}
            <div className="grid items-center justify-center gap-6">
              <p className="font-semibold">Color Secundario</p>
              <div className="flex gap-4">
                <div className="mx-auto text-center flex flex-col gap-4 items-center">
                  <div className=" bg-secondary_light w-32 h-20"></div>
                  <div className="flex flex-col gap-2">
                    <span className="text-center font-semibold">#985DA0</span>
                    <span className="text-center font-semibold">secondary_light</span>
                  </div>
                </div>
                <div className="mx-auto text-center flex flex-col gap-4 items-center">
                  <div className="bg-secondary w-32 h-20"></div>
                  <div className="flex flex-col gap-2">
                    <span className="text-center font-semibold">#622A77</span>
                    <span className="text-center font-semibold">secondary</span>
                  </div>
                </div>
                <div className="mx-auto text-center flex flex-col gap-4 items-center">
                  <div className="bg-secondary_dark w-32 h-20"></div>
                  <div className="flex flex-col gap-2">
                    <span className="text-center font-semibold">#392352</span>
                    <span className="text-center font-semibold">secondary_dark</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Color Secundario */}
          </div>

          <div className="flex gap-8 mx-auto">
            {/* Color Dark */}
            <div className="grid items-center justify-center gap-6">
              <p className="font-semibold">Color Negro</p>
              <div className="flex">
                <div className="mx-auto text-center flex flex-col gap-4 items-center">
                  <div className=" bg-dark w-32 h-20"></div>
                  <div className="flex flex-col gap-2">
                    <span className="text-center font-semibold">#985DA0</span>
                    <span className="text-center font-semibold">dark</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Color Dark */}
            {/* Color Light */}
            <div className="grid items-center justify-center gap-6">
              <p className="font-semibold">Color Light</p>
              <div className="flex">
                <div className="mx-auto text-center flex flex-col gap-4 items-center">
                  <div className=" bg-light w-32 h-20 border-2"></div>
                  <div className="flex flex-col gap-2">
                    <span className="text-center font-semibold">#985DA0</span>
                    <span className="text-center font-semibold">light</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Color Dark */}
          </div>


          <div className="grid sm:grid-cols-2">
            <div className="flex flex-col gap-5">
              <p className="font-semibold">Titulo Principal (36px)</p>
              <TitleH1 title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, et!" />
            </div>
            <div className="flex flex-col gap-5">
              <p className="font-semibold">Titulo Secundario (30px)</p>
              <TitleH2 title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, et!" />
            </div>
          </div>
          <div className="grid sm:grid-cols-2">
            <div className="flex flex-col gap-5">
              <p className="font-semibold">Párrafo (16px)</p>
              <p className={GENERAL_UI.PARAGRAPH}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, et!</p>
            </div>
            <div className="flex flex-col gap-5">
            </div>
          </div>
        </div>
      </div>
    </PageLayout >
  )
}

export default GuiaEstilos