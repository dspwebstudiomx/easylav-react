/*
  Nuestros Servicios Sección
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2024-09-02
*/

// Importaciones
import { TitleH3 } from 'components'
import { SERVICES_GENERATOR_PROPS, SERVICES_GENERATOR_UI } from 'constants/constants'
import { services } from 'data'

// Estructura
const ServicesGenerator = () => {
  return (
    <div id={SERVICES_GENERATOR_PROPS.ID} className={SERVICES_GENERATOR_UI.DIV}>
      <ul className={SERVICES_GENERATOR_UI.UL}>
        {services.map((service) => {
          return (
            <li key={service.title} id={service.idLink} className={SERVICES_GENERATOR_UI.LI.CLASSNAME} >
              <div className={SERVICES_GENERATOR_UI.LI.DIV_VIDEO}>
                <img className={SERVICES_GENERATOR_UI.IMAGE} src={service.image} title={service.alt} />
              </div>
              <div className={SERVICES_GENERATOR_UI.DIV_TITLEH3}>
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