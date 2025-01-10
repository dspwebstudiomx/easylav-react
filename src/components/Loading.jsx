/* 
  Loading
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2022-08-28
*/

// Importaciones
import { LogoHorizontalBlanco } from "assets";

// Estilos
const LOADING_UI = {
  CONTAINER:
    "flex flex-col justify-start items-center h-screen pt-60 sm:justify-center sm:pt-0",
  BACKGROUND_COLOR: "bg-secondary_dark",
  SPINNER: "loader mx-auto mt-8",
};
const styles = `${LOADING_UI.CONTAINER} ${LOADING_UI.BACKGROUND_COLOR}`

// Estructura
const Loading = () => {
  return (
    <div className={styles}>
      <img src={LogoHorizontalBlanco} alt="imagen" width={240} />
      <span className={LOADING_UI.SPINNER}></span>
    </div>
  )
}

export default Loading