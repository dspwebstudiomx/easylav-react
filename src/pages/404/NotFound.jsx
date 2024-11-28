import { LogoHorizontalColor as logo } from "assets"
import { ButtonContainer, ButtonSecondary } from "components"
import { Link } from "react-router-dom"


const NotFound = () => {
  return (
    <section className="grid w-[100vw] h-[100vh] place-content-center gap-20 bg-light">
      <img src={logo} alt="logo" className="mx-auto" />
      <p className="font-bold text-3xl sm:text-4xl text-center text-secondary_dark w-4/5 mx-auto">Error 404: Sitio web no encontrado </p>
      <ButtonContainer position={'justify-center items-center'}>
        <Link to="/">
          <ButtonSecondary
            title={'Inicio'}
            width={'w-[240px]'}
            href="/#inicio"
          />
        </Link>
      </ButtonContainer>
    </section>
  )
}

export default NotFound