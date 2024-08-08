import { Link } from "react-router-dom"
import logo from "../../assets/images/logos/horizontal/logo-color.png"
import ButtonSecondary from "../../components/buttons/ButtonSecondary"
import ButtonContainer from "../../components/containers/ButtonContainer"

const NotFound = () => {
  return (
    <section className="grid w-[100vw] h-[100vh] place-content-center gap-20 bg-light">
      <img src={logo} alt="logo" className="mx-auto" />
      <p className="font-bold text-4xl text-center">Error 404: Sitio web no encontrado </p>
      <ButtonContainer position={'justify-center'}>
        <Link to="/">
          <ButtonSecondary
            title={'Regresar a inicio'}
            width={'w-[240px]'}
          />
        </Link>
      </ButtonContainer>
    </section>
  )
}

export default NotFound