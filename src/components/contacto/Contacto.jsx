import TitleH2 from "../title/TitleH2"
import ContactForm from "../contacto/ContactForm"
import SocialLinks from "../links/SocialLinks"

const Contacto = () => {
  return (
    <div id="contactDescription" className="grid md:grid-cols-2 md:gap-12 xl:gap-24 items-center">
      <div className="grid gap-8">
        <TitleH2 title={'¿Tienes alguna duda en la que te podemos ayudar? No dudes en llenar el formulario.'} />
        <p>Nuestra forma de contacto es fácil y rápida. Puedes llenar el formulario en línea con tus preguntas o sugerencias, y nos pondremos en contacto contigo enseguida. <strong>¡Esperamos saber de ti pronto!</strong></p>
        <div className="mb-20 sm:mb-8 md:mb-0 md:mt-0 mr-0">
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