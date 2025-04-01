import { VistaLavanderiaDesdeEntrada_1_640 as image } from 'assets';
import ContactInfo from './components/ContactInfo';
import { Container, Section, SEOFriendly } from 'components';
import ContactForm from './ContactForm';

const Contacto = () => {
  return (
    <>
      <SEOFriendly
        title="Contacto | Easylav - Envíanos tus dudas y sugerencias"
        url="easylav-react.netlify.app/contacto"
        description="Contáctanos fácilmente a través de nuestro formulario en línea. En Easylav estamos aquí para resolver tus dudas, recibir sugerencias y atender tus necesidades."
        author="dspwebstudio"
        publisher="dspwebstudio.com"
        keywords="contacto Easylav, dudas Easylav, sugerencias Easylav, formulario de contacto, atención al cliente Easylav"
        ogImage={image}
        ogImageAlt="Formulario de contacto de Easylav"
        ogType="website"
      />
      <Section>
        <Container>
          <div className="flex gap-6">
            <ContactInfo />
            <ContactForm />
          </div>
        </Container>
      </Section>
    </>
  );
};

export default Contacto;
