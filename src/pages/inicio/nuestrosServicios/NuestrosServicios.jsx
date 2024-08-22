import {
  BorderBottom,
  ButtonContainer,
  ButtonSecondary,
  Container,
  Section,
  TitleH2,
} from 'components';
import ServicesGenerator from './ServicesGenerator';

const NuestrosServicios = () => {
  return (
    <Section
      id={'servicios'}
      backgroundColor={''}
      height={'h-auto'}
      className={''}
    >
      <Container className={'mx-auto'} id='servicios-container'>
        <BorderBottom justify={'mx-auto'}>
          <TitleH2 title='Nuestros Servicios' />
        </BorderBottom>
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
