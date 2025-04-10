import {
  BorderLeft,
  Button,
  ButtonContainer,
  Container,
  FourColumnnsContainer,
  Paragraph,
  ParagraphContainer,
  Section,
  TitleContainer,
  TitleH3,
  TwoColumnsContainer,
} from 'components';
import PropTypes from 'prop-types';
import { VistaLavanderiaDesdeEntrada_2_640 as image } from 'assets';
import {
  FaRegListAlt,
  FaSoap,
  FaHandshake,
  FaBalanceScale,
  FaShieldAlt,
  FaCouch,
  FaUserCheck,
  FaHandsHelping,
} from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa6';
import { useEffect } from 'react';

// Biblioteca de datos
const valores = [
  { id: 1, icon: <FaRegListAlt size={36} className="text-secondary" />, title: 'Orden', alt: 'Orden' },
  { id: 2, icon: <FaSoap size={36} className="text-secondary" />, title: 'Limpieza', alt: 'Limpieza' },
  { id: 3, icon: <FaHandshake size={36} className="text-secondary" />, title: 'Confianza', alt: 'Confianza' },
  { id: 4, icon: <FaBalanceScale size={36} className="text-secondary" />, title: 'Honestidad', alt: 'Honestidad' },
  { id: 5, icon: <FaShieldAlt size={36} className="text-secondary" />, title: 'Seguridad', alt: 'Seguridad' },
  { id: 6, icon: <FaCouch size={36} className="text-secondary" />, title: 'Comodidad', alt: 'Comodidad' },
  { id: 7, icon: <FaUserCheck size={36} className="text-secondary" />, title: 'Honradez', alt: 'Honradez' },
  {
    id: 8,
    icon: <FaHandsHelping size={36} className="text-secondary" />,
    title: 'Gratitud y Servicio',
    alt: 'Gratitud y Servicio ',
  },
];
const serviciosOfrecidos = [
  { id: 1, title: 'Autoservicio de lavado y secado.', href: '/#autoservicio' },
  { id: 2, title: 'Servicio de lavado y secado por encargo.', href: '/#encargo' },
  { id: 3, title: 'Tintorería.', href: '/#tintoreria' },
];

// Componentes Internos

const Card = ({ children }) => {
  return (
    <div className="flex flex-col justify-center p-8 py-12 sm:p-12 shadow-2xl rounded-2xl bg-light text-dark dark:text-light gap-8 w-full">
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

const ValorTarjeta = ({ valor }) => {
  return (
    <article
      id={`valor-${valor.id}`}
      className="flex flex-col items-center justify-center text-center p-6 py-12 shadow-xl rounded-2xl bg-light text-dark gap-4">
      {valor.icon}
      <TitleH3 color="text-dark" textTransform="uppercase">
        {valor.title}
      </TitleH3>
    </article>
  );
};

ValorTarjeta.propTypes = {
  valor: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
  }).isRequired,
};

const NuestrosValoresGeneradorTarjetas = () => {
  return (
    <article id="tarjetas-valores" className="mt-6">
      <FourColumnnsContainer>
        {valores.map((valor) => {
          return <ValorTarjeta key={valor.id} valor={valor} />;
        })}
      </FourColumnnsContainer>
    </article>
  );
};

// Estructura
const QuienesSomos = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6, // Se activa cuando el 60% de la sección es visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const activeSection = entry.target.id;
          const navLink = document.querySelector(`[href="#${activeSection}"]`);
          if (navLink) {
            document.querySelectorAll('.active').forEach((link) => link.classList.remove('active'));
            navLink.classList.add('active');
          }
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <Section id="quienes-somos" className="bg-light dark:bg-dark h-auto">
      <Container className="mx-auto flex-col gap-20" id="quienes-somos-contenedor">
        <TitleContainer id="quienes-somos-titulo" title="Quienes somos" />

        {/* Párrafos */}
        <ParagraphContainer>
          <Paragraph>
            Somos una empresa de lavanderías y Tintorería, comprometida en darte las mejores soluciones para la limpieza
            y cuidado de tu ropa.
          </Paragraph>
          <Paragraph>
            Comprometidos en brindarte el mejor servicio en cuanto al lavado de tus prendas, contamos con un servicio
            personalizado en nuestras sucursales con modernas instalaciones e imagen fresca, así como servicios que se
            adaptan a tus necesidades, sea lavado y secado por encargo o autoservicio y el cuidado de tu ropa de
            tintorería. Al entender tu dinámica cotidiana, uno de nuestros objetivos fundamentales es{' '}
            <span className="text-secondary_dark dark:text-secondary_light font-bold">ahorrarte tiempo</span> y
            contribuir a tu calidad de vida.
          </Paragraph>
          <Paragraph>
            Nuestra Visión de negocio nos exige seguir desarrollando e implementando nuevos y mejores procedimientos con
            tecnología de punta, con la cual ofrecemos costos bajos de operación brindándote el servicio que necesitas y
            contribuyendo al planeta en el cuidado del agua y optimización de recursos.{' '}
          </Paragraph>
        </ParagraphContainer>
        {/* Párrafos */}

        {/* Misión & Visión */}
        <TwoColumnsContainer>
          {/* Misión */}
          <Card>
            <BorderLeft>
              <h3 className="text-2xl font-semibold uppercase text-dark">Misión</h3>
            </BorderLeft>
            <p className="text-lg text-dark">
              En Lavanderías <span className="text-lg font-bold text-secondary_dark">EASYLAV</span>, nuestra misión es
              ser los aliados perfectos de tu tiempo, ofreciéndote un servicio de lavandería y tintorería de excelencia.
              Nos dedicamos a cuidar cada prenda como si fuera nuestra, utilizando tecnología de vanguardia y procesos
              especializados para garantizar resultados impecables. Con sucursales diseñadas para tu comodidad y
              atención personalizada, transformamos el cuidado de tu ropa en una experiencia práctica y confiable, para
              que puedas dedicar tu tiempo a lo que realmente importa.
            </p>
          </Card>
          {/* Misión */}

          {/* Visión */}
          <Card>
            <BorderLeft>
              <h3 className="text-2xl font-semibold uppercase text-dark">Visión</h3>
            </BorderLeft>
            <p className="text-lg text-dark">
              Consolidar una red de franquicias de lavanderías a nivel nacional, respaldada por un modelo operativo
              eficiente, capacitación continua y un enfoque en la mejora constante de procesos. Nos distinguimos por la
              innovación tecnológica, la excelencia en el servicio y la optimización de costos, garantizando un negocio
              escalable, confiable y altamente rentable para nuestros franquiciatarios.
            </p>
          </Card>
          {/* Visión */}
        </TwoColumnsContainer>
        {/* Misión & Visión */}

        {/* Nuestros Valores */}
        <Card>
          <BorderLeft>
            <h3 className="text-2xl font-semibold uppercase text-dark">Nuestros Valores</h3>
          </BorderLeft>
          <NuestrosValoresGeneradorTarjetas />
        </Card>
        {/* Nuestros Valores */}

        {/* Servicios */}
        <Card>
          <TwoColumnsContainer>
            <div className="flex flex-col gap-12 items-start justify-center text-dark">
              <BorderLeft>
                <h3 className="text-2xl font-semibold uppercase">Servicios</h3>
              </BorderLeft>
              <div className="grid gap-3">
                {serviciosOfrecidos.map((servicio) => {
                  return (
                    <article
                      key={servicio.id}
                      id={`servicio-${servicio.id}`}
                      className="flex gap-4 items-center justify-start">
                      <div className="w-8 h-8">
                        <FaCheck className="text-secondary" size={28} />
                      </div>
                      <span className="text-lg">{servicio.title}</span>
                    </article>
                  );
                })}
              </div>
              <ButtonContainer position="items-center justify-start" distance="h-20">
                <Button
                  title="Contáctanos"
                  href="/contacto"
                  width="w-full sm:w-[260px] scale-[0.8]"
                  variant="secondary"
                />
              </ButtonContainer>
            </div>
            <img src={image} alt="lavandería Easylav" className="shadow-image" loading="lazy" />
          </TwoColumnsContainer>
        </Card>
        {/* Servicios */}
      </Container>
    </Section>
  );
};

export default QuienesSomos;
