/*
  PreguntasFrecuentes - Component - Page
  ========================================
  Creado por : Daniel Pérez
  Fecha: 2024-09-28
*/

// Importaciones
import { Accordion, BorderLeft, ButtonContainer, ButtonPrimary, ButtonSecondary, PageLayout, TitleH1, TitleH3 } from "components";
import { FRANQUICIAS_UI } from "constants/constants";
import { frequentQuestions } from "data";
import { FaHome } from "react-icons/fa";
import { FaRegBuilding } from "react-icons/fa6";

// <Estructura></Estructura>
const PreguntasFrecuentes = () => {

  const styles = `${FRANQUICIAS_UI.TITLEH1.COLOR} ${FRANQUICIAS_UI.TITLEH1.FONT_SIZE} ${FRANQUICIAS_UI.TITLEH1.FONT_WEIGHT} ${FRANQUICIAS_UI.TITLEH1.LETTER_SPACING}`
  return (
    <PageLayout>
      <div className="flex flex-col sm:gap-12">
        {/* Title */}
        <div className="w-full px-4">
          <div className="mx-auto mb-[60px] lg:mb-20 flex  flex-col gap-4">
            <span className="mb-2 block text-lg font-semibold text-primary">
              Preguntas Frecuentes
            </span>
            <BorderLeft>
              <TitleH1 className={styles} textColor="text-dark dark:text-light">
                Tienes alguna duda?
              </TitleH1>
            </BorderLeft>
            <TitleH3>Puedes ver las preguntas más frecuentes:</TitleH3>
          </div>
        </div>
        {/* Title */}

        {/* Questions */}
        <ul className="w-full sm:grid grid-cols-2 gap-8">
          {frequentQuestions.map(question => {
            return (
              <li key={question.id} id={`question-${question.id}`} className="text-dark">
                <Accordion
                  height={'h-auto'}
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
        <ButtonPrimary href={'/sucursales'} title={'Ver Sucursales'} icon={<FaRegBuilding />} width={'w-[240px]'} />
        <ButtonSecondary href={'/'} title={'Inicio'} icon={<FaHome />} width={'w-[240px]'} />
      </ButtonContainer>
    </PageLayout >
  );
};
export default PreguntasFrecuentes;