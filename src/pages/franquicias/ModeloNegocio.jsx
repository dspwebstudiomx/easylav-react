/* eslint-disable react-refresh/only-export-components */
/*
  ModeloNegocio.jsx - Componente de Sección en Franquicias
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2024-09-28
  Descripción: Este componente presenta el modelo de negocio de Easylav, destacando la inversión inicial, costos operativos, márgenes de ganancia y soporte ofrecido a los franquiciados.
  Este componente es parte de la sección de franquicias del sitio web de Easylav, diseñado para atraer a potenciales franquiciados y proporcionarles información clara y concisa sobre el modelo de negocio.
  Modificado por: Daniel Pérez
  Fecha de modificación: 2025-03-31
*/

// Importaciones
import {
  BorderLeft,
  Container,
  Paragraph,
  ParagraphContainer,
  Section,
  TitleH2,
  TwoColumnsContainer,
} from 'components';
import { memo } from 'react';
import { FaCheck } from 'react-icons/fa';
import { LuKeyRound } from 'react-icons/lu';
import { MdOutlineLock } from 'react-icons/md';
import { IoCloudUploadOutline } from 'react-icons/io5';
import { GrMap } from 'react-icons/gr';
import { BsPersonWorkspace } from 'react-icons/bs';
import { LiaCogSolid } from 'react-icons/lia';
import PropTypes from 'prop-types';

const recomendaciones = [
  {
    id: 1,
    title: 'Sucursal llave en mano',
    description:
      'Te entregamos tu negocio completamente listo para operar, incluyendo el apoyo en el reclutamiento y la capacitación constante del personal.',
  },
  {
    id: 2,
    title: 'Sistema automatizado y seguro',
    description:
      'Nuestras máquinas están programadas para que solo se activen cuando la venta ha sido registrada en el software, asegurando un control total de los ingresos.',
  },
  {
    id: 3,
    title: 'Monitoreo en la nube ',
    description:
      'Si lo deseas, los cortes de caja por turno o diarios pueden subirse a la nube, permitiéndote supervisar el rendimiento de tu negocio en cualquier momento y desde cualquier lugar.',
  },
];

const factores_clave = [
  {
    id: 1,
    title: 'Ubicación estratégica',
    description:
      'La ubicación es el factor más importante, ya que representa el 60% del éxito de la franquicia. Un lugar bien seleccionado garantiza que el negocio sea autosuficiente y rentable.',
  },
  {
    id: 2,
    title: 'Capacitación del personal',
    description:
      'EASYLAV® brinda una capacitación inicial a tu equipo para garantizar un servicio de calidad y una excelente atención al cliente.',
  },
  {
    id: 3,
    title: 'Control eficiente del negocio ',
    description:
      'Nuestro sistema domótico exclusivo integra tecnología avanzada para optimizar la operación de la sucursal. Esto permite un control total del negocio, asegurando eficiencia energética y brindando al inversionista acceso remoto para la administración y supervisión en todo momento.',
  },
];

// Componente para cada recomendación
const getIconByTitle = (title) => {
  if (title.includes('llave en mano')) return LuKeyRound;
  if (title.includes('automatizado')) return MdOutlineLock;
  if (title.includes('nube')) return IoCloudUploadOutline;
  if (title.includes('Ubicación')) return GrMap;
  if (title.includes('Capacitación')) return BsPersonWorkspace;
  if (title.includes('Control eficiente')) return LiaCogSolid;
  return FaCheck;
};

const Recomendacion = ({ title, description }) => {
  const Icon = getIconByTitle(title);
  return (
    <li>
      <TwoColumnsContainer gridOrder="md:grid-cols-2 items-start justify-start gap-6">
        <div className="flex flex-col md:flex-row gap-6 w-full items-center justify-start text-dark dark:text-light">
          <Icon size={48} className="text-primary" />
          <span className="font-semibold block text-xl md:text-2xl">{title}</span>
        </div>
        <Paragraph>{description}</Paragraph>
      </TwoColumnsContainer>
    </li>
  );
};

// Estructura
const ModeloNegocio = () => {
  return (
    <Section id="ModeloNegocio">
      <Container className="grid gap-20 mb-20">
        <BorderLeft>
          <TitleH2>
            Franquicias
            <br />
            <span className="text-primary text-2xl">Modelo de Negocio rentable</span>
          </TitleH2>
        </BorderLeft>
        <ParagraphContainer className="">
          <Paragraph>
            <span className="font-bold text-secondary_dark dark:text-secondary_light">EASYLAV®</span> maneja varios
            modelos de negocio donde podemos ajustarnos a tus necesidades.
          </Paragraph>
          <Paragraph>
            Las franquicias de{' '}
            <span className="font-bold text-secondary_dark dark:text-secondary_light">EASYLAV®</span>, están dirigidos
            a aquellas personas que desean invertir en un modelo probado y noble, ya que no se tiene productos
            perecederos lo cual evita mermas por expiración.
          </Paragraph>

          <article className="grid gap-12">
            <h3 className="text-2xl uppercase text-secondary_dark dark:text-secondary_light mt-12 font-semibold">
              Invierte en una franquicia rentable y automatizada.
            </h3>
            <Paragraph>
              Nuestras sucursales están diseñadas para alcanzar el{' '}
              <span className="text-secondary_dark dark:text-secondary_light font-semibold">
                punto de equilibrio a partir del sexto mes
              </span>{' '}
              (según nuestra experiencia), siempre que se lleve una administración eficiente y un buen manejo del
              negocio.
            </Paragraph>
            <Paragraph>
              Al adquirir una franquicia, obtienes un{' '}
              <span className="text-secondary_dark dark:text-secondary_light font-semibold">
                modelo de negocio probado
              </span>
              , ideal para quienes buscan invertir a{' '}
              <span className="text-secondary_dark dark:text-secondary_light font-semibold">
                corto, mediano o largo plazo
              </span>
              , sin la necesidad de estar presentes diariamente.
            </Paragraph>
            <ul
              id="listado-de-recomendaciones"
              className="flex flex-col gap-12 items-start justify-start w-5/6 mx-auto py-9">
              {recomendaciones.map((recomendacion) => (
                <Recomendacion
                  key={recomendacion.id}
                  title={recomendacion.title}
                  description={recomendacion.description}
                />
              ))}
            </ul>
          </article>

          <article className="grid gap-12">
            <h3 className="text-2xl uppercase text-secondary_dark dark:text-secondary_light mt-12 font-semibold">
              Factores clave al invertir en una franquicia EASYLAV
            </h3>
            <Paragraph>
              Al adquirir una franquicia{' '}
              <span className="font-bold text-secondary_dark dark:text-secondary_light">EASYLAV®</span>, es importante
              considerar los siguientes aspectos para asegurar el éxito de tu negocio:
            </Paragraph>

            <ul
              id="listado-de-recomendaciones"
              className="flex flex-col gap-12 items-start justify-start w-5/6 mx-auto py-9">
              {factores_clave.map((factor) => (
                <Recomendacion key={factor.id} title={factor.title} description={factor.description} />
              ))}
            </ul>
          </article>

          <Paragraph>
            Con <span className="font-bold text-secondary_dark dark:text-secondary_light">EASYLAV®</span>, tu inversión
            está respaldada por un modelo de negocio sólido, automatizado y fácil de gestionar. ¡Haz crecer tu futuro
            con nosotros!
          </Paragraph>
        </ParagraphContainer>
        <span className="text-2xl md:text-3xl  mx-auto font-semibold text-secondary_dark dark:text-secondary_light text-center my-8">
          <blockquote className="md:w-2/3 mx-auto mt-12">
            Invierte con confianza en un negocio rentable, automatizado y fácil de administrar.
          </blockquote>
        </span>
      </Container>
    </Section>
  );
};

const memorizedModeloNegocio = memo(ModeloNegocio, (prevProps, nextProps) => {
  return prevProps.children === nextProps.children;
});
export default memorizedModeloNegocio;

Recomendacion.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
