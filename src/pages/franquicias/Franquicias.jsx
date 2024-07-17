import { TbPoint } from "react-icons/tb"
import PageLayout from "../../components/layout/PageLayout"
import TitleH1 from "../../components/title/TitleH1"
import BorderLeft from "../../components/borders/BorderLeft"
import Image_1 from "../../assets/images/images/annie-spratt-5TfCI4nj6B4-unsplash-640.jpg"
import Image_2 from "../../assets/images/images/Placeholder.webp"

const Franquicias = () => {
  return (
    <PageLayout>
      <div className="grid lg:grid-cols-2 gap-0">

        {/* Columna 1 */}
        <div id="columma-1" className="flex flex-col gap-12 items-start">
          <BorderLeft>
            <TitleH1 title="¿Quieres una Franquícia?" />
          </BorderLeft>
          <ul className='flex flex-col gap-8 text-xl'>
            <li className="flex w-full">
              <div className="w-[32px]">
                <TbPoint className='text-primary text-4xl' />
              </div>
              <span className='ml-2'>
                Lavanderías Easylav se encuentra en un sector en expansión constante. Con el aumento de la población urbana y la creciente falta de tiempo de las personas, la demanda de servicios de lavandería está en aumento. Esto representa una oportunidad significativa para capitalizar un mercado en crecimiento estable y seguro.
              </span>
            </li>
            <li className="flex w-full">
              <div className="w-[32px]">
                <TbPoint className='text-primary text-4xl' />
              </div>
              <span className='ml-2'>
                Lavanderías Easylav ha demostrado su éxito con un modelo de negocio probado y establecido. La franquicia ofrece un sistema operativo estructurado que ha sido refinado para maximizar la eficiencia y rentabilidad. Esto reduce significativamente el riesgo asociado con la inversión, al contar con una base sólida y experiencias exitosas previas.
              </span>
            </li>
            <li className="flex w-full">
              <div className="w-[32px]">
                <TbPoint className='text-primary text-4xl' />
              </div>
              <span className='ml-2'>
                La marca Easylav ya tiene un reconocimiento establecido en el mercado. Esto no solo facilita la captación de clientes potenciales, sino que también construye una base de confianza y lealtad en los consumidores. Los inversionistas se beneficiarán de asociarse con una marca fuerte que ya tiene una reputación positiva.
              </span>
            </li>
            <li className="flex w-full">
              <div className="w-[32px]">
                <TbPoint className='text-primary text-4xl' />
              </div>
              <span className='ml-2'>
                Al adquirir una franquicia de Lavanderías Easylav, los inversionistas reciben un soporte continuo que incluye formación inicial, asistencia operativa y marketing. Este respaldo asegura que los franquiciados puedan optimizar sus operaciones y enfrentar desafíos con mayor confianza, maximizando así el retorno de la inversión.
              </span>
            </li>
            <li className="flex w-full">
              <div className="w-[32px]">
                <TbPoint className='text-primary text-4xl' />
              </div>
              <span className='ml-2'>
                El modelo de negocio de Lavanderías Easylav está diseñado para ser rentable a corto plazo, con múltiples fuentes de ingresos como servicios de lavandería tradicional, lavado en seco, planchado, y más. Los bajos costos operativos y la gestión eficiente de recursos aumentan las posibilidades de obtener un retorno de la inversión rápido y sostenido.
              </span>
            </li>
            <li className="flex w-full">
              <div className="w-[32px]">
                <TbPoint className='text-primary text-4xl' />
              </div>
              <span className='ml-2'>
                La estructura de franquicia de Lavanderías Easylav permite a los inversionistas escalar su inversión según sus objetivos financieros y personales. Con la posibilidad de abrir múltiples ubicaciones y expandirse geográficamente, los franquiciados pueden aprovechar las oportunidades de crecimiento en diferentes mercados y comunidades.
              </span>
            </li>
            <li className="flex w-full">
              <div className="w-[32px]">
                <TbPoint className='text-primary text-4xl' />
              </div>
              <span className='ml-2'>
                El equipo directivo de Lavanderías Easylav cuenta con experiencia en el sector y está comprometido con el éxito de sus franquiciados. Esto se traduce en una gestión estratégica sólida, adaptación a las tendencias del mercado y capacidad para enfrentar cambios económicos con flexibilidad y eficacia.
              </span>
            </li>
          </ul>
          <p className="bg-primary_light text-2xl p-8 rounded-xl text-dark border-2 border-secondary">En resumen, invertir en la franquicia de Lavanderías Easylav representa una oportunidad estratégica y rentable en un mercado en crecimiento, respaldada por un modelo de negocio comprobado, una marca reconocida y un soporte integral.</p>
        </div>
        {/* Columna 2 */}

        {/* Columna 2 */}
        <div id="columma-2" className="grid sm:grid-cols-2 lg:grid-cols-1 bg-red-100 gap-20 sm:gap-32 mt-24 md:p-12 lg:p-0 place-items-end sm:mr-9 mx-auto">
          <div className="rotate-[25deg] bg-secondary h-auto w-[250px] md:w-[280px] lg:w-[320px] xl:w-[380px]">
            <img src={Image_1} alt="image" width={320} className="w-[250px] md:w-[280px] lg:w-[320px] xl:w-[380px] h-auto shadow-2xl" />
          </div>
          <div className="rotate-[15deg] bg-secondary h-auto w-[250px] md:w-[280px] lg:w-[320px] xl:w-[380px]">
            <img src={Image_2} alt="image" width={320} className="w-[250px] md:w-[280px] lg:w-[320px] xl:w-[380px] h-auto shadow-2xl" />
          </div>
          <div className="rotate-[-20deg] bg-secondary h-auto w-[250px] md:w-[280px] lg:w-[320px] xl:w-[380px]">
            <img src={Image_1} alt="image" width={320} className="w-[250px] md:w-[280px] lg:w-[320px] xl:w-[380px] h-auto shadow-2xl" />
          </div>
          <div className="rotate-[-35deg] bg-secondary h-auto w-[250px] md:w-[280px] lg:w-[320px] xl:w-[380px]">
            <img src={Image_2} alt="image" width={320} className="w-[250px] md:w-[280px] lg:w-[320px] xl:w-[380px] h-auto shadow-2xl" />
          </div>
        </div>
        {/* Columna 2 */}

      </div>
    </PageLayout>
  )
}

export default Franquicias