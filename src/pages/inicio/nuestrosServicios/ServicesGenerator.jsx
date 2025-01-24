/*
  Nuestros Servicios Sección
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2024-09-02
*/

// Importaciones
import { TitleH3 } from 'components';
import { services } from 'data';

// Estilos
const SERVICES_GENERATOR_PROPS = {
  ID: "nuestros-servicios",
};
const SERVICES_GENERATOR_UI = {
  DIV: "w-full",
  UL: "grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8",
  LI: {
    CLASSNAME:
      "flex flex-col gap-8 items-center justify-center shadow-2xl border-2 border-primary rounded-xl bg-light p-8 w-full",
    DIV_VIDEO: "mx-auto w-32 sm:w-24 md:w-40",
    DIV_TITLEH3: "mx-auto text-primary",
  },
  IMAGE: "p-2",
  PARAGRAPH: "text-dark text-[16px]",
};

// Estructura
const ServicesGenerator = () => {
  return (
    <div id={SERVICES_GENERATOR_PROPS.ID} className={SERVICES_GENERATOR_UI.DIV}>
      <ul className={SERVICES_GENERATOR_UI.UL}>
        {services.map((service) => {
          return (
            <li key={service.title} id={service.idLink} className={SERVICES_GENERATOR_UI.LI.CLASSNAME} >
              <div className={SERVICES_GENERATOR_UI.LI.DIV_VIDEO}>
                <img className={SERVICES_GENERATOR_UI.IMAGE} src={service.image} title={service.alt} alt={service.alt} />
              </div>
              <div className={SERVICES_GENERATOR_UI.LI.DIV_TITLEH3}>
                <TitleH3>{service.title}</TitleH3>
              </div>
              <p className={SERVICES_GENERATOR_UI.PARAGRAPH}>
                {service.description}
              </p>
            </li>
          )
        })
        }
      </ul>
    </div >
  )
}

export default ServicesGenerator