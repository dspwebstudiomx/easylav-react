import { ContactForm, SocialLinks, TitleH2 } from "components";
import { Link } from "react-router-dom";

const Contacto = () => {
  return (
    <div
      id="contactDescription"
      className="animate__slower grid items-center md:grid-cols-2 md:gap-12 xl:gap-24"
    >
      <div className="animate__animated animate__bounceInLeft grid gap-8">
        <TitleH2
          title={
            "¿Tienes alguna duda en la que te podemos ayudar? No dudes en llenar el formulario."
          }
        />
        <p>
          Nuestra forma de contacto es fácil y rápida. Puedes llenar el
          formulario en línea con tus preguntas o sugerencias, y nos pondremos
          en contacto contigo enseguida.{" "}
          <strong>¡Esperamos saber de ti pronto!</strong>
          <span className="ml-1">
            o si gustas, puedes visitar nuestra sección de
          </span>
          <span className="ml-1 font-semibold italic text-secondary dark:text-primary">
            <Link to={"/preguntas-frecuentes"}>Preguntas Frecuentes</Link>
          </span>
          .
        </p>
        <div className="mx-auto mb-24 mt-12 sm:mb-24 sm:mt-6 md:mb-0 md:ml-0">
          <SocialLinks
            color={"text-secondary dark:text-primary"}
            size={54}
            gap={"gap-8"}
          />
        </div>
      </div>
      <div
        id="contactForm"
        className="animate__animated animate__bounceInRight animate__slower mx-auto w-full"
      >
        <ContactForm />
      </div>
    </div>
  );
};

export default Contacto;
