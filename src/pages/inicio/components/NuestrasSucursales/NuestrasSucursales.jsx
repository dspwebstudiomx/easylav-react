import { FaEnvelope } from 'react-icons/fa6';
import BorderBottom from "../../../../components/borders/BorderBottom";
import ButtonSecondary from '../../../../components/buttons/ButtonSecondary';
import PaginatedSucursalCards from '../../../../components/cards/PaginatedSucursalCards';
import ButtonContainer from '../../../../components/containers/ButtonContainer';
import Container from '../../../../components/containers/Container';
import Section from '../../../../components/templates/Section';
import TitleH2 from '../../../../components/title/TitleH2';


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