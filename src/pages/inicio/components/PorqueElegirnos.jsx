import { Placeholder } from "assets";
import {
  BorderLeft,
  Container,
  Section,
  TitleH2
} from "components";
import { TbPoint } from "react-icons/tb";

const PorqueElegirnos = () => {
  return (
    <Section
      id={"porque-elegirnos"}
      backgroundColor={"dark:bg-dark"}
      height={"h-auto"}
      className={"dark:text-light"}
    >
      <Container className={"mx-auto"} id="porque-elegirnos-container">
        <article className="mx-auto grid gap-x-20 gap-y-16 sm:grid-cols-2">
          <div className="grid place-content-center gap-12">
            <BorderLeft>
              <TitleH2 title="Por qué Elegirnos" />
            </BorderLeft>
            <div className="flex flex-col gap-6 text-balance text-2xl">
              <div className="flex gap-2">
                <span className="text-3xl text-primary">
                  <TbPoint />
                </span>
                <span className="font-semibold">Compromiso con la Calidad</span>
              </div>
              <div className="ml-8 text-xl">
                Utilizamos solo productos y técnicas de lavado <br></br> de
                primera categoría.
              </div>
            </div>
            <div className="flex flex-col gap-6 text-balance text-2xl">
              <div className="flex gap-2">
                <span className="text-3xl text-primary">
                  <TbPoint />
                </span>
                <span className="font-semibold">
                  Experiencia y Profesionalismo
                </span>
              </div>
              <div className="ml-8 text-xl">
                Nuestro equipo está altamente capacitado y comprometido con tu
                satisfacción.
              </div>
            </div>
          </div>
          <div className="items-center justify-end">
            <img
              src={Placeholder}
              alt="placeholder imagen"
              width={520}
              className="shadow-image rounded"
              title="placeholder imagen"
            />
          </div>
        </article>
      </Container>
    </Section>
  );
};
export default PorqueElegirnos;
