/*
  PreguntasFrecuentes - Component - Page
  ========================================
  Creado por : Daniel Pérez
  Fecha: 2024-09-28
  Modificado: 2024-11-28
*/

// Importaciones
import { Accordion, BorderLeft, ButtonContainer, ButtonPrimary, ButtonSecondary, PageLayout, TitleH1, TitleH3 } from "components";
import { frequentQuestions } from "data";
import { FaHome } from "react-icons/fa";
import { FaRegBuilding } from "react-icons/fa6";

// <Estructura></Estructura>
const PreguntasFrecuentes = () => {

  const styles = ``
  return (
    <PageLayout>
      <div className="flex flex-col sm:gap-0">
        {/* Title */}
        <div className="w-full px-4">
          <div className="mx-auto mb-[60px] lg:mb-20 flex  flex-col gap-4">
            <span className="mb-2 block text-lg font-semibold text-primary">
              Preguntas Frecuentes
            </span>
            <BorderLeft>
              <TitleH1 className={styles} textColor="text-dark dark:text-light" align="items-left">
                Tienes alguna duda?
              </TitleH1>
            </BorderLeft>
            <TitleH3>Puedes ver las preguntas más frecuentes</TitleH3>
          </div>
        </div>
        {/* Title */}

        {/* Questions */}
        <ul className="w-full grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {frequentQuestions.map(question => {
            return (
              <li key={question.id} id={`question-${question.id}`} className="text-dark">
                <Accordion
                  height={'h-[210px] sm:h-[140px]'}
                  title={question.question}
                  description={question.answer}
                />
              </li>
            )
          })}
        </ul>
        {/* Questions */}
      </div>
      <ButtonContainer position={'items-center justify-center'} distance='mt-20'>
        <ButtonPrimary href={'/sucursales'} title={'Ver Sucursales'} icon={<FaRegBuilding />} width={'w-[240px]'} name='Ver Sucursales' />
        <ButtonSecondary href={'/'} title={'Inicio'} icon={<FaHome />} width={'w-[240px]'} name='Ir a inicio' />
      </ButtonContainer>
    </PageLayout >
  );
};
export default PreguntasFrecuentes;