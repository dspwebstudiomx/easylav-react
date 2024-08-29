/* 
  Loading
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2022-08-28
*/

// Importaciones
import { LogoHorizontalBlanco } from "assets"
import { LOADING_UI } from "constants/constants"

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