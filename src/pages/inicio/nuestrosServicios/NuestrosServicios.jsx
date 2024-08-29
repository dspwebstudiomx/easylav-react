import { ButtonContainer, ButtonSecondary, Container, Section, TitleContainer } from 'components';
import ServicesGenerator from './ServicesGenerator';

const NuestrosServicios = () => {
  return (
    <Section id={'servicios'}    >
      <Container className={'mx-auto'} id='servicios-container'>
        <TitleContainer title='Nuestros Servicios' />
        <ServicesGenerator />
        <ButtonContainer position={'justify-center'} distance={'mt-16'}>
          <ButtonSecondary
            title={'Conoce nuestras Sucursales'}
            href={'/sucursales'}
          />
        </ButtonContainer>
      </Container>
    </Section>
  );
};
export default NuestrosServicios;
