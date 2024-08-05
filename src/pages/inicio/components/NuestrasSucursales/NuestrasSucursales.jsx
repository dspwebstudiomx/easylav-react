import { FaEnvelope } from 'react-icons/fa6';
import { BorderBottom, ButtonSecondary, PaginatedSucursalCards, ButtonContainer, Container, Section, TitleH2 } from '../../../../components';

const NuestrasSucursales = () => {
  return (
    <Section id="nuestras-sucursales">
      <Container className="mx-auto w-4/5">
        <BorderBottom justify="mx-auto">
          <TitleH2 title="Sucursales" />
        </BorderBottom>
        <PaginatedSucursalCards />
        <ButtonContainer position="justify-center" distance="mt-16">
          <ButtonSecondary title="Contáctanos" href="/contacto" icon={<FaEnvelope />} />
        </ButtonContainer>
      </Container>
    </Section>
  );
};

export default NuestrasSucursales;