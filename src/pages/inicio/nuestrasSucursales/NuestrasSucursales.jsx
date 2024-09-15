/*
  Nuestras Sucursales
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2022-08-20
*/

import { ButtonContainer, ButtonSecondary, PaginatedSucursalCards, Section, TitleContainer } from 'components';
import { SUCURSAL_SECTION_PROPS } from 'constants/constants';


const NuestrasSucursales = () => {
  return (
    <Section id='nuestras-sucursales' >
      <div className='mx-auto'>
        <TitleContainer title={SUCURSAL_SECTION_PROPS.TITLEH2} />
        <div className='my-12 mt-24'>
          <PaginatedSucursalCards />
        </div>
        <ButtonContainer position='justify-center' distance=''>
          <ButtonSecondary
            title='Contáctanos'
            href='/contacto'
            distance=''
            type='button'
          />
        </ButtonContainer>
      </div>
    </Section>
  );
};

export default NuestrasSucursales;
