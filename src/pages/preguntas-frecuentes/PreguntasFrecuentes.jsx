import { BorderLeft, ButtonContainer, ButtonPrimary, ButtonSecondary, PageLayout, TitleH1 } from "components";
import { GENERAL_UI } from "constants/constants";
import { frequentQuestions } from "data";
import PropTypes from 'prop-types';
import { useState } from "react";
import { FaHome } from "react-icons/fa";
import { FaRegBuilding } from "react-icons/fa6";


const PreguntasFrecuentes = () => {
  return (
    <PageLayout>
      <div className="-mx-4 flex flex-col sm:gap-12">
        {/* Title */}
        <div className="w-full px-4">
          <div className="mx-auto mb-[60px] lg:mb-20 flex  flex-col gap-4">
            <h1 className="mb-2 block text-lg font-semibold text-primary">
              Preguntas Frecuentes
            </h1>
            <BorderLeft>
              <TitleH1 title=" Tienes alguna pregunta?" />
            </BorderLeft>
            <span className="text-2xl w-full">Puedes ver las preguntas más frecuentes:</span>
          </div>
        </div>
        {/* Title */}

        {/* Questions */}
        <ul className="w-full sm:grid grid-cols-2 gap-8 gap-y-2">
          {frequentQuestions.map(freqQuestion => {
            return (
              <li key={freqQuestion.id} id={`question-${freqQuestion.id}`} className="bg-light text-dark">
                <AccordionItem
                  question={freqQuestion.question}
                  answer={freqQuestion.answer}
                />
              </li>
            )
          })}
        </ul>
        {/* Questions */}
      </div>
      <ButtonContainer position={'justify-center'}>
        <ButtonPrimary href={'/sucursales'} title={'Ver Sucursales'} icon={<FaRegBuilding />} width={'w-[240px]'} />
        <ButtonSecondary href={'/'} title={'Regresar a inicio'} icon={<FaHome />} width={'w-[240px]'} />
      </ButtonContainer>
    </PageLayout >
  );
};
export default PreguntasFrecuentes;

const AccordionItem = ({ question, answer }) => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    event.preventDefault();
    setActive(!active);
  };
  return (
    <div className="mb-8 w-full rounded-lg bg-white p-4 shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)] dark:bg-dark-2 dark:shadow-[0px_20px_95px_0px_rgba(0,0,0,0.30)] sm:p-8">
      <button
        className={`faq-btn w-full 2xl:w-[480px] flex text-left`}
        onClick={() => handleToggle()}
      >
        <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary/5 text-primary dark:bg-white/5">
          <svg
            className={`fill-primary stroke-primary duration-200 ease-in-out ${active ? "rotate-180" : ""
              }`}
            width="17"
            height="10"
            viewBox="0 0 17 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
              fill=""
              stroke=""
            />
          </svg>
        </div>

        <div className="w-full pr-4 xl:pr-16">
          <h4 className="mt-1 text-lg xl:text-xl font-semibold text-dark dark:text-white min-h-[100px] 2xl:min-h-[60px]">
            {question}
          </h4>
        </div>
      </button>

      <div
        className={`pl-[62px] duration-200 w-full 2xl:w-[480px] ease-in-out ${active ? "block" : "hidden"
          }`}
      >
        <p className={`${GENERAL_UI.PARAGRAPH} py-6 dark:text-dark-6 w-full pr-8`}>
          {answer}
        </p>
      </div>
    </div>
  );
};
AccordionItem.propTypes = {
  question: PropTypes.string,
  answer: PropTypes.string,
}
