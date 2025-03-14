/*
  Nuestros Servicios Sección
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2024-09-02
*/

// Importaciones

import { Service } from 'components';
import { services } from 'data';

const SERVICES_UI = {
  DIV: "w-full",
  LIST: "grid md:grid-cols-3 lg:grid-cols-5 gap-y-8 items-center justify-center",
}

// Estilos
const SERVICES_PROPS = {
  ID: "nuestros-servicios",
};
8
// Estructura
const ServicesGenerator = () => {
  return (
    <article id={SERVICES_PROPS.ID} className={SERVICES_UI.DIV}>
      <ul className={SERVICES_UI.LIST}>
        {services.map((service, key) => {
          return (
            <Service key={key} service={service} />
          )
        })
        }
      </ul>
    </article>
  )
}

export default ServicesGenerator