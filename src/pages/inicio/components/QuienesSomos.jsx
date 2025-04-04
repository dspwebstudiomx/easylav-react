import { BorderLeft, Container, Paragraph, ParagraphContainer, Section, TitleContainer, TitleH3 } from 'components';
import { Placeholder } from 'assets';
import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa6';
import { VistaLavanderiaDesdeEntrada_2_640 as image } from 'assets';

//Biblioteca de datos
const valores = [
  {
    id: 1,
    image: Placeholder,
    title: 'Orden',
    alt: 'Orden',
  },
  {
    id: 2,
    image: Placeholder,
    title: 'Limpieza',
    alt: 'Limpieza',
  },
  {
    id: 3,
    image: Placeholder,
    title: 'Confianza',
    alt: 'Confianza',
  },
  {
    id: 4,
    image: Placeholder,
    title: 'Honestidad',
    alt: 'Honestidad',
  },
  {
    id: 5,
    image: Placeholder,
    title: 'Seguridad',
    alt: 'Seguridad',
  },
  {
    id: 6,
    image: Placeholder,
    title: 'Comodidad',
    alt: 'Comodidad',
  },
  {
    id: 7,
    image: Placeholder,
    title: 'Honradez',
    alt: 'Honradez',
  },
  {
    id: 8,
    image: Placeholder,
    title: 'Gratitud y Servicio',
    alt: 'Gratitud y Servicio',
  },
];
const serviciosOfrecidos = [
  { id: 1, title: 'Autoservicio de lavado y secado.', href: '/#autoservicio' },
  { id: 2, title: 'Servicio de lavado y secado por encargo.', href: '/#encargo' },
  { id: 3, title: 'Tintorería.', href: '/#tintoreria' },
];

// Componentes Internos
const TwoColumnsContainer = ({ children }) => {
  return <div className="grid sm:grid-cols-2 gap-8">{children}</div>;
};
const ThreeColumnsContainer = ({ children }) => {
  return <div className="grid sm:grid-cols-3 sm:gap-0 items-center justify-center">{children}</div>;
};
const FourColumnsContainer = ({ children }) => {
  return <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-20">{children}</div>;
};
const Card = ({ children }) => {
  return (
    <div className="flex flex-col justify-start p-12 shadow-2xl rounded-2xl bg-light text-dark gap-8 ">{children}</div>
  );
};

const ValorTarjeta = ({ valor }) => {
  return (
    <article id="nuestros-valores" className="flex flex-col gap-4 items-center justify-start text-center">
      <img width={64} src={valor.image} title={valor.title} alt={valor.alt} />
      <TitleH3 color="text-dark" textTransform="uppercase">
        {valor.title}
      </TitleH3>
    </article>
  );
};
const NuestrosValoresGeneradorTarjetas = () => {
  return (
    <article id="tarjetas-valores" className="mt-12">
      <FourColumnsContainer>
        {valores.map((valor, key) => {
          return <ValorTarjeta key={key} valor={valor} />;
        })}
      </FourColumnsContainer>
    </article>
  );
};

// Estructura
const QuienesSomos = () => {
  return (
    <Section id="quienes-somos" className="bg-light dark:bg-dark h-auto">
      <Container className="mx-auto flex-col gap-20" id="quienes-somos-contenedor">
        <TitleContainer title="Quienes somos" />
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
            <span className="text-secondary_dark font-bold">ahorrarte tiempo</span> y contribuir a tu calidad de vida.
          </Paragraph>
          <Paragraph>
            {' '}
            Nuestra Visión de negocio nos exige seguir desarrollando e implementando nuevos y mejores procedimientos con
            tecnología de punta, con la cual ofrecemos costos bajos de operación brindándote el servicio que necesitas y
            contribuyendo al planeta en el cuidado del agua y optimización de recursos.{' '}
          </Paragraph>
        </ParagraphContainer>
        <TwoColumnsContainer>
          <Card>
            <BorderLeft>
              <h3 className="text-2xl font-semibold uppercase">Misión</h3>
            </BorderLeft>
            <p className="text-base">
              En Lavanderías <span className="text-lg font-bold text-secondary_dark">EASYLAV</span>, nuestra misión es
              ser los aliados perfectos de tu tiempo, ofreciéndote un servicio de lavandería y tintorería de excelencia.
              Nos dedicamos a cuidar cada prenda como si fuera nuestra, utilizando tecnología de vanguardia y procesos
              especializados para garantizar resultados impecables. Con sucursales diseñadas para tu comodidad y
              atención personalizada, transformamos el cuidado de tu ropa en una experiencia práctica y confiable, para
              que puedas dedicar tu tiempo a lo que realmente importa.
            </p>
          </Card>
          <Card>
            <BorderLeft>
              <h3 className="text-2xl font-semibold uppercase">Visión</h3>
            </BorderLeft>
            <p className="text-base">
              Consolidar una red de franquicias de lavanderías a nivel nacional, respaldada por un modelo operativo
              eficiente, capacitación continua y un enfoque en la mejora constante de procesos. Nos distinguimos por la
              innovación tecnológica, la excelencia en el servicio y la optimización de costos, garantizando un negocio
              escalable, confiable y altamente rentable para nuestros franquiciatarios.
            </p>
          </Card>
        </TwoColumnsContainer>
        <Card>
          <BorderLeft>
            <h3 className="text-2xl font-semibold uppercase">Nuestros Valores</h3>
          </BorderLeft>
          <NuestrosValoresGeneradorTarjetas />
        </Card>
        <Card>
          <TwoColumnsContainer>
            <div className="flex flex-col gap-12 items-start justify-center">
              <BorderLeft>
                <h3 className="text-2xl font-semibold uppercase">Servicios</h3>
              </BorderLeft>
              <div className="grid gap-3">
                {serviciosOfrecidos.map((servicio, key) => {
                  return (
                    <article key={key} className="flex gap-4 items-center justify-start">
                      <div className="w-8 h-8">
                        <FaStar className="text-secondary" size={24} />
                      </div>
                      <h3 className="text-xl">{servicio.title}</h3>
                    </article>
                  );
                })}
              </div>
            </div>
            <img src={image} alt="lavandería Easylav" className="shadow-2xl" />
          </TwoColumnsContainer>
        </Card>
      </Container>
    </Section>
  );
};

// PropTypes
TwoColumnsContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
ThreeColumnsContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
FourColumnsContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
Card.propTypes = {
  children: PropTypes.node.isRequired,
};
ValorTarjeta.propTypes = {
  valor: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
};
NuestrosValoresGeneradorTarjetas.propTypes = {
  valor: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
};

export default QuienesSomos;
