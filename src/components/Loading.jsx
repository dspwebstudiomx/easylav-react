/* 
  Loading.jsx - Componente de carga
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2022-08-28
  Descripción: Este componente se utiliza para mostrar una pantalla de carga mientras se cargan los datos de la aplicación.
  Se utiliza un logo y un spinner para indicar que la aplicación está en proceso de carga.
*/

// Importaciones
import { LogoHorizontalBlanco } from 'assets';

// Estilos
const LOADING_UI = {
  CONTAINER: 'flex flex-col justify-center items-center h-[100svh] w-full sm:justify-center sm:pt-0',
  BACKGROUND_COLOR: 'bg-dark opacity-90',
  SPINNER: 'loader mx-auto mt-8',
};
const styles = `${LOADING_UI.CONTAINER} ${LOADING_UI.BACKGROUND_COLOR}`;

// Estructura
const Loading = () => {
  return (
    <div className={styles}>
      <img src={LogoHorizontalBlanco} alt="imagen" width={240} loading="lazy" />
      <span className={LOADING_UI.SPINNER}></span>
    </div>
  );
};

export default Loading;
