import { ContactForm, SocialLinks, TitleH2 } from "components"
import { Link } from "react-router-dom"

const Contacto = () => {
  return (
    <div id="contactDescription" className="grid md:grid-cols-2 md:gap-12 xl:gap-24 items-center">
      <div className="grid gap-8">
        <TitleH2 title={'¿Tienes alguna duda en la que te podemos ayudar? No dudes en llenar el formulario.'} />
        <p>Nuestra forma de contacto es fácil y rápida. Puedes llenar el formulario en línea con tus preguntas o sugerencias, y nos pondremos en contacto contigo enseguida. <strong>¡Esperamos saber de ti pronto!</strong>
          <span className="ml-1">
            o si gustas, puedes visitar nuestra sección de
          </span>
          <span className="ml-1 text-secondary font-semibold italic">
            <Link to={'/preguntas-frecuentes'}>Preguntas Frecuentes</Link>
          </span>
          .
        </p>
        <div className="mt-12 mb-24 sm:mb-24 mx-auto md:ml-0 md:mb-0">
          <SocialLinks color={'text-secondary'} size={54} gap={'gap-8'} />
        </div>
      </div>
      <div id="contactForm" className=" w-full mx-auto" >
        <ContactForm />
      </div>
    </div>
  )
}

export default Contacto