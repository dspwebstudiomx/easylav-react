//Testimonios.jsx
import { BorderBottom, Container, Section, TitleH2 } from 'components';
import TestimonialGenerator from './TestimonialGenerator';

const Testimonios = () => {

  //Estilos TailwindCSS
  const classes = {
    sectionBackgroundColor: '',
    sectionHeight: '',
    sectionClassName: '',
    container: 'mx-auto',
    borderBottomJustify: 'mx-auto'
  }

  //Estructura
  return (
    <Section id={'testimonios'} backgroundColor={classes.sectionBackgroundColor} height={classes.sectionHeight} className={classes.sectionClassName}  >
      <Container className={classes.container} id={'testimonios-container'} >
        <BorderBottom justify={classes.borderBottomJustify} >
          <TitleH2 title="Testimonios" />
        </BorderBottom>
        <TestimonialGenerator />
      </Container>
    </Section >
  )
}
export default Testimonios
