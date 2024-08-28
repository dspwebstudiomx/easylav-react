import {
  BorderBottom,
  ButtonContainer,
  ButtonSecondary,
  Container,
  PaginatedSucursalCards,
  Section,
  TitleH2
} from 'components';

import { FaEnvelope } from 'react-icons/fa';


const NuestrasSucursales = () => {

  return (
    <Section id='nuestras-sucursales' >
      <Container className='mx-auto w-full'>
        <BorderBottom justify='mx-auto'>
          <TitleH2 title='Sucursales' />
        </BorderBottom>
        <div className='grid gap-6'>
          <PaginatedSucursalCards />
        </div>
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
