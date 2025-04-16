import ContactInfo from './components/ContactInfo';
import ContactForm from './ContactForm';

const Contacto = () => {
  return (
    <article className="flex flex-col lg:flex-row gap-20">
      <ContactInfo />
      <ContactForm />
    </article>
  );
};

export default Contacto;
