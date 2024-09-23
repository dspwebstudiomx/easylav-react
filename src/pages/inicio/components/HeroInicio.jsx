/*
Hero Inicio
=====================================
Creado por : Daniel Pérez
Fecha: 2022-08-25
*/

// Importaciones
import { Camisas, canastaderopa_1920 } from 'assets'
import { BackgroundImageSection, ButtonContainer, TitleH1 } from "components"
import { scrollWithOffset } from 'functions'
import { HashLink } from 'react-router-hash-link/dist/react-router-hash-link.cjs.production'



const HeroInicio = () => {

  //! Falta la alineación del titulo

  const theme = 'dark'
  const backgroundOpacity = 'opacity-50'
  const backgroundColor = `bg-${theme}`
  const xl = '210px'
  const imageDisplay = 'block'
  const buttonDisplay = 'block'
  const paragraphDisplay = 'hidden'
  const titleColor = 'light'
  const paragraphColor = 'light'
  const buttonColor = 'primary'
  const buttonSize = xl
  const buttonText = 'Nuestros Servicios'
  const textTransform = 'uppercase'
  const textSize = '2xl'
  const href = '/#servicios'

  return (
    <div className='mt-[100px] sm:mt-0 xl:mt-[100px]' id='inicio'>
      <BackgroundImageSection height="full" opacity={backgroundOpacity} titleColor='text-primary' textColor='text-dark' image={`${imageDisplay}`} backgroundColor={`${backgroundColor}`} image_1024={canastaderopa_1920} image_1200={canastaderopa_1920} image_576={Camisas} image_1920={Camisas}>
        <div className={`grid md:grid-cols-1 gap-x-8 p-6 md:p-0`}>
          <div className="flex flex-col gap-8 sm:w-2/3">
            <TitleH1 textColor={`text-${titleColor} textTransform={${textTransform}}`} align='center'>En <span className='mx-2 text-primary'>LAVANDERÍAS EASYLAV</span> no solo te brindamos soluciones para el lavado, secado y doblado de tu ropa, también tenemos servicio de tintorería para que tus prendas luzcan siempre de la mejor manera. </TitleH1>
            <p className={`text-${paragraphColor} text-lg ${paragraphDisplay}`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus in architecto, quibusdam earum placeat officiis ea molestias esse consequuntur aliquam culpa tempora ut dolorum nisi quaerat autem quisquam. Asperiores temporibus adipisci fugiat et sed incidunt maiores magnam iste voluptate sunt.</p>
            <ButtonContainer position='place-content-center sm:place-content-start' >
              <HashLink to={href} scroll={el => scrollWithOffset(el)} >
                <button className={`bg-${buttonColor} px-6 py-4 w-[${buttonSize}] text-${textSize} rounded-lg ${buttonDisplay}`}>{buttonText}</button>
              </HashLink>
            </ButtonContainer>
          </div>
        </div>
      </BackgroundImageSection >
    </div>
  )
}

export default HeroInicio