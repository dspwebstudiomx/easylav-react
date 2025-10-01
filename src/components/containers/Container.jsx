/*
  Container.jsx - Componente contenedor para la aplicación
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2024-08-28
  Modificado: 2025-01-24
  Descripción: Este componente se utiliza como un contenedor principal para la aplicación, proporcionando un diseño responsivo y centrado. Se puede utilizar para envolver otros componentes o elementos de la interfaz de usuario. El contenedor tiene un ancho máximo definido para diferentes tamaños de pantalla, lo que garantiza que el contenido se vea bien en dispositivos móviles y de escritorio.
  Uso: Este componente se puede importar y utilizar en cualquier parte de la aplicación donde se necesite un contenedor. Se puede personalizar el ID y la clase del contenedor según sea necesario. El contenido se pasa como hijos (children) del componente.
*/

// Importaciones
import PropTypes from 'prop-types';

// Estructura
export default function Container({ id, children, className }) {
  return (
    <article
      id={`container-${id}`}
      className={`container xl:max-w-screen-lg 2xl:max-w-screen-xl mx-auto grid gap-8 py-12 ${className}`}>
      {children}
    </article>
  );
}

// Propiedades del Componente
Container.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};
