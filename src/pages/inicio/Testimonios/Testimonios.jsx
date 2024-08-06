import { BorderBottom, Container, Section, TitleH2 } from 'components';
import TestimonialGenerator from './TestimonialGenerator';

const Testimonios = () => {
  return (
    <Section id={'testimonios'} backgroundColor={'dark:bg-dark'} height={'h-auto'} className={'dark:text-light'}  >
      <Container className={'mx-auto'} id={'testimonios-container'} >
        <BorderBottom justify={'mx-auto'} >
          <TitleH2 title="Testimonios" />
        </BorderBottom>
        <TestimonialGenerator />
      </Container>
    </Section >
  )
}
export default Testimonios
