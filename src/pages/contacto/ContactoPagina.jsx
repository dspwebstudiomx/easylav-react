import { scrollToTop } from 'functions';
import { canastaderopa_640 as image } from 'assets';
import Contacto from '../../components/contacto/Contacto';
import PageLayout from '../../components/layout/PageLayout';
import { SEOFriendly } from 'components';

const ContactoPagina = () => {
  scrollToTop();
  return (
    <>
      <SEOFriendly
        title="Contacto | Easylav - Envíanos tus dudas y sugerencias"
        url="easylav.mx/contacto"
        description="Contáctanos fácilmente a través de nuestro formulario en línea. En Easylav estamos aquí para resolver tus dudas, recibir sugerencias y atender tus necesidades."
        author="dspwebstudio"
        publisher="dspwebstudio.com"
        keywords="contacto Easylav, dudas Easylav, sugerencias Easylav, formulario de contacto, atención al cliente Easylav"
        ogImage={image}
        ogImageAlt="Formulario de contacto de Easylav"
        ogType="website"
      />
      <PageLayout>
        <Contacto />
      </PageLayout>
    </>
  );
};

export default ContactoPagina;
