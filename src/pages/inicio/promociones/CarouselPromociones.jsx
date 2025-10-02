import { VistaLavadorasySecadorasConDosMesas_640 as image_1 } from 'assets';
import { ButtonContainer, Container, TitleH1 } from 'components';
import { GENERAL_UI, HEROINICIO_UI } from 'constants/constants';
import { scrollWithOffset } from 'functions';
import { HashLink } from 'react-router-hash-link/dist/react-router-hash-link.cjs.production';
// ...eliminadas importaciones de Swiper

const CarouselPromociones = () => {
  const styles = {
    height: 'h-[600px] lg:h-[500px]',
    button: `bg-${HEROINICIO_UI.COLOR.BUTTON} px-6 py-4 w-[${HEROINICIO_UI.BUTTON.SIZE}] text-${HEROINICIO_UI.BUTTON.TEXT.SIZE} rounded-lg ${HEROINICIO_UI.DISPLAY.BUTTON}  text-${HEROINICIO_UI.BUTTON.TEXT.SIZE} text-${HEROINICIO_UI.BUTTON.TEXT.COLOR}`,
    paragraph: `text-${HEROINICIO_UI.COLOR.PARAGRAPH} text-lg ${HEROINICIO_UI.DISPLAY.PARAGRAPH}`,
    buttonContainer: 'place-content-center sm:place-content-start',
    titleH1: {
      textColor: `text-${HEROINICIO_UI.COLOR.TITLE}`,
      textTransform: GENERAL_UI.TITLEH1.TRANSFORM,
    },
    image: `relative overflow-hidden object-cover w-full object-center h-[600px] lg:h-[500px]`,
  };
  return (
    <section id="inicio" className={`relative overflow-hidden w-full ${styles.height}`}>
      <img src={image_1} alt="Promoción" className={styles.image} />
      <div className={`absolute inset-0 z-10 w-full bg-dark opacity-60 top-0 left-0 ${styles.height}`}></div>
      <div className="absolute inset-0 top-0 z-20 p-8 py-20 sm:p-20 h-full">
        <Container>
          <div className="w-full sm:w-2/3 flex flex-col gap-12">
            <TitleH1 textColor={styles.titleH1.textColor} textTransform={styles.titleH1.textTransform} align={'center'}>
              En <span className="mx-2 text-primary">LAVANDERÍAS EASYLAV</span> no solo te brindamos soluciones para el
              lavado, secado y doblado de tu ropa, también tenemos servicio de tintorería para que tus prendas luzcan
              siempre de la mejor manera.{' '}
            </TitleH1>
            <p className={styles.paragraph}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus in architecto, quibusdam earum
              placeat officiis ea molestias esse consequuntur aliquam culpa tempora ut dolorum nisi quaerat autem
              quisquam. Asperiores temporibus adipisci fugiat et sed incidunt maiores magnam iste voluptate sunt.
            </p>
            <ButtonContainer position={'items-center'}>
              <HashLink to={HEROINICIO_UI.BUTTON.HREF} scroll={(el) => scrollWithOffset(el)}>
                <button className={styles.button}>{HEROINICIO_UI.BUTTON.TEXT.CONTENT}</button>
              </HashLink>
            </ButtonContainer>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default CarouselPromociones;
