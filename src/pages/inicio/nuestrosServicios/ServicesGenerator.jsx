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
  ARTICLE: '',
  LIST: 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 items-center justify-center mx-auto',
};

// Estilos
const SERVICES_PROPS = {
  ID: 'nuestros-servicios',
};
8;
// Estructura
const ServicesGenerator = () => {
  return (
    <article id={SERVICES_PROPS.ID} className={SERVICES_UI.ARTICLE}>
      <ul className={SERVICES_UI.LIST}>
        {services.map((service, key) => {
          return <Service key={key} service={service} />;
        })}
      </ul>
    </article>
  );
};

export default ServicesGenerator;
