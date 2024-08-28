import {
  BorderBottom,
  BorderLeft,
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
    >
      <Container className={'mx-auto'} id='servicios-container'>
        <div className='sm:hidden'>
          <BorderLeft justify={'mx-auto'}>
            <TitleH2 title='Nuestros Servicios' />
          </BorderLeft>
        </div>
        <div className='hidden sm:block'>
          <BorderBottom justify={'mx-auto'}>
            <TitleH2 title='Nuestros Servicios' />
          </BorderBottom>
        </div>
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
