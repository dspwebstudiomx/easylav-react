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
  LIST: "flex flex-wrap gap-12 items-center justify-center",
}

// Estilos
const SERVICES_PROPS = {
  ID: "nuestros-servicios",
};
8
// Estructura
const ServicesGenerator = () => {
  return (
    <div id={SERVICES_PROPS.ID} className={SERVICES_UI.DIV}>
      <ul className={SERVICES_UI.LIST}>
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