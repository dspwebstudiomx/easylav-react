import { scrollToTop } from 'functions';
import { canastaderopa_640 as image } from 'assets';
import Contacto from '../../components/contacto/Contacto';
import PageLayout from '../../components/layout/PageLayout';
import { Container, Section, SEOFriendly } from 'components';

const ContactoPagina = () => {
  scrollToTop();
  return (
    <>
      <SEOFriendly
        title="Franquicias de Lavandería | Easylav - Tu Oportunidad de Negocio Ideal"
        url="easylav-react.netlify.app/franquicias"
        description="En Easylav, ofrecemos franquicias de lavandería con limpieza impecable y planchado perfecto. Descubre cómo puedes ser parte de nuestro éxito."
        author="dspwebstudio"
        publisher="dspwebstudio.com"
        keywords="franquicias de lavandería, negocio de lavandería, Easylav, planchado, limpieza"
        ogImage={image}
        ogImageAlt="Canasta verde con ropa sucia"
        ogType="website"
      />
      <PageLayout>
        <Section>
          <Container>
            <Contacto />
          </Container>
        </Section>
      </PageLayout>
    </>
  );
};

export default ContactoPagina;
