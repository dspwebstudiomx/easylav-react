
import { Camisas, canastaderopa_1920 } from 'assets'
import { ButtonContainer, TitleH1 } from "components"
import { scrollWithOffset } from 'functions'
import { HashLink } from 'react-router-hash-link/dist/react-router-hash-link.cjs.production'
import BackgroundImage from "./BackgroundImage"


const Test = () => {

  //! Falta la alineación del titulo
  //! Falta ancho del contenedor
  const theme = 'dark'
  const lg = '210px'
  const imageDisplay = 'block'
  const backgroundOpacity = 'opacity-50'
  const backgroundColor = `bg-${theme}`
  const buttonDisplay = 'block'
  const paragraphDisplay = 'block'
  const titleColor = 'primary'
  const paragraphColor = 'light'
  const buttonColor = 'primary'
  const buttonSize = lg
  const buttonText = 'Ir a Home'
  const textTransform = 'uppercase'
  const href = '/#servicios'

  return (
    <>
      <BackgroundImage height="full" opacity={backgroundOpacity} titleColor='text-primary' textColor='text-dark' image={`${imageDisplay}`} backgroundColor={`${backgroundColor}`} image_1024={canastaderopa_1920} image_1200={canastaderopa_1920} image_576={Camisas} image_1920={Camisas}>

        <div className={`grid md:grid-cols-2 gap-x-8 p-6 md:p-0`}>
          <div className="flex flex-col gap-8">
            <TitleH1 textColor={`text-${titleColor} textTransform={${textTransform}}`} align='start'>HELLO WORLD</TitleH1>
            <p className={`text-${paragraphColor} text-lg ${paragraphDisplay}`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus in architecto, quibusdam earum placeat officiis ea molestias esse consequuntur aliquam culpa tempora ut dolorum nisi quaerat autem quisquam. Asperiores temporibus adipisci fugiat et sed incidunt maiores magnam iste voluptate sunt.</p>
            <ButtonContainer position='place-content-start'>

              <HashLink to={href} scroll={el => scrollWithOffset(el)} >
                <button className={`bg-${buttonColor} px-4 py-4 w-[${buttonSize}] text-${buttonSize} rounded-lg ${buttonDisplay}`}>{buttonText}</button>
              </HashLink>

              {/* <ButtonPrimary title='Hola Mundo' href='/#inicio' /> */}
            </ButtonContainer>
          </div>
        </div>

      </BackgroundImage >
    </>
  )
}

export default Test