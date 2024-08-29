/*
Nuestras Sucursales
=====================================
Creado por : Daniel Pérez
Fecha: 2022-08-20
*/

import { BorderBottom, BorderLeft, ButtonContainer, ButtonSecondary, Container, PaginatedSucursalCards, Section, TitleH2 } from 'components';
import { TESTIMONIALS_PROPS, TESTIMONIALS_UI } from 'constants/constants';
import { FaEnvelope } from 'react-icons/fa';


const NuestrasSucursales = () => {
  return (
    <Section id='nuestras-sucursales' >
      <Container className='mx-auto w-full'>
        <div className='sm:hidden'>
          <BorderLeft justify={'mx-auto'}>
            <TitleH2
              title={TESTIMONIALS_PROPS.TITLEH2}
              justify={TESTIMONIALS_UI.TITLEH2_JUSTIFY}
            />
          </BorderLeft>
        </div>
        <div className='hidden sm:block'>
          <BorderBottom justify={'mx-auto'}>
            <TitleH2
              title={TESTIMONIALS_PROPS.TITLEH2}
              justify={TESTIMONIALS_UI.TITLEH2_JUSTIFY}
            />
          </BorderBottom>
        </div>
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
