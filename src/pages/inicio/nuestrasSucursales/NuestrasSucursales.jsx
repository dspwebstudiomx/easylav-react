import {
  BorderBottom,
  ButtonContainer,
  ButtonSecondary,
  Container,
  PaginatedSucursalCards,
  Section,
  TitleH2,
} from 'components';
import { FaEnvelope } from 'react-icons/fa';

const NuestrasSucursales = () => {
  return (
    <Section
      id='nuestras-sucursales'
      backgroundColor={'dark:bg-dark'}
      height={'h-auto'}
      className={'dark:text-light'}
    >
      <Container className='mx-auto w-full sm:w-4/5'>
        <BorderBottom justify='mx-auto'>
          <TitleH2 title='Sucursales' />
        </BorderBottom>
        <PaginatedSucursalCards />
        <ButtonContainer position='justify-center' distance=''>
          <ButtonSecondary
            title='Contáctanos'
            href='/contacto'
            icon={<FaEnvelope />}
          />
        </ButtonContainer>
      </Container>
    </Section>
  );
};

export default NuestrasSucursales;
