import logo from "../../assets/images/logos/horizontal/logo-color.png"
import ButtonContainer from "../../components/containers/ButtonContainer"
import ButtonSecondary from "../../components/buttons/ButtonSecondary"

const NotFound = () => {
  return (
    <section className="grid w-[100vw] h-[100vh] place-content-center gap-20 bg-light">
      <img src={logo} alt="logo" className="mx-auto" />
      <p className="font-bold text-4xl text-center">Error 404: Sitio web no encontrado </p>
      <ButtonContainer position={'justify-center'}>
        <ButtonSecondary
          href={"/"}
          title={'Regresar a inicio'}
          width={'w-[240px]'}
        />
      </ButtonContainer>
    </section>
  )
}

export default NotFound