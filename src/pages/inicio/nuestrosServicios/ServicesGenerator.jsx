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
  UL: "grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-12",
}

// Estilos
const SERVICES_PROPS = {
  ID: "nuestros-servicios",
};

// Estructura
const ServicesGenerator = () => {
  return (
    <div id={SERVICES_PROPS.ID} className={SERVICES_UI.DIV}>
      <ul className={SERVICES_UI.UL}>
        {services.map((service, key) => {
          return (
            <Service key={key} service={service} />
          )
        })
        }
      </ul>
    </div >
  )
}

export default ServicesGenerator