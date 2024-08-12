import lottieImage from 'assets/images/lottie/Animation.json';
import { BorderLeft, Container, LottieAnimationImage, Section, TitleH2 } from 'components';

const SobreNosotros = () => {
  return (
    <Section
      id={"nosotros"}
      backgroundColor={"dark:bg-dark"}
      height={"h-auto"}
      className={"dark:text-light"}
    >
      <Container className={"mx-auto"} id="nosotros-container">
        <div className="grid gap-x-20 gap-y-16 sm:grid-cols-2">
          <div className="grid place-content-center gap-8">
            <BorderLeft>
              <TitleH2 title={"Sobre Nosotros"} />
            </BorderLeft>
            <p className="text-balance 2xl:text-xl">
              En{" "}
              <span className="font-semibold text-secondary dark:text-primary">
                Easylav
              </span>
              , somos un equipo apasionado por el cuidado de la ropa. Con muchos
              años de experiencia, hemos perfeccionado nuestra técnica para
              asegurarnos de que cada prenda se vea y se sienta como nueva.
              Usamos solo los mejores equipos y productos porque creemos que tu
              ropa merece lo mejor.
            </p>
          </div>
          <div className="items-center justify-end">
            {/* <ImageResponsive
              src={img1}
              className={"shadow-image"}
              imageAlt={"Placeholder"}
              image_640={img1}
              image_1024={img1}
              image_1920={img1}
            /> */}
            <LottieAnimationImage lottieImage={lottieImage} />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default SobreNosotros;
