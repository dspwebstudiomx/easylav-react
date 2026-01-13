const definitions = [
  {
    term: 'Cuenta',
    definition:
      'se refiere a la tarjeta física otorgada al registro del Usuario al Programa “Tarjeta de Recompensa” de conformidad con los presentes Términos y Condiciones.',
  },
  {
    term: 'Clientes',
    definition:
      'se refiere a las personas físicas que cumplen con los requisitos de participación y llevaron a cabo el registro al Programa “Tarjeta de recompensa” conforme los presentes Términos y Condiciones.',
  },
  {
    term: 'Usuarios',
    definition:
      'se refiere a las personas físicas que cumplen con los requisitos de participación y llevaron a cabo el registro al Programa “Tarjeta de Recompensa” conforme a los presentes Términos y Condiciones.',
  },
  {
    term: 'Derechos',
    definition:
      'son el conjunto de derechos a través de los cuales la Ley Federal de Protección de Datos Personales en Posesión de los Particulares, garantiza a las personas el control sobre sus datos personales.',
  },
  {
    term: 'Puntos',
    definition:
      'se refiere a los Puntos que pueden ganar los Usuarios cuando participen en el Programa “Tarjeta de Recompensa” de conformidad con los presentes Términos y Condiciones. Los Puntos se podrán usar por Productos y/o Servicios que ofrezcan los Sucursales. El valor de los Puntos estará disponible para su consulta en los Términos y Condiciones de cada cliente y son sujetos a cambios sin previo aviso. Los Puntos no pueden intercambiarse por dinero en efectivo.',
  },
  {
    term: 'Productos y/o Servicios',
    definition:
      'se refiere a los Productos y/o Servicios ofrecidos por las distintas Sucursales siempre y cuando estas estén afiliados al programa de “Tarjeta de recompensas” en sus Canales de Venta y que pueden ser adquiridos por los Usuarios mediante el uso de sus Puntos de conformidad con los Términos y Condiciones de cada Cliente. Sólo podrán ser Productos y/o Servicios participantes aquellos que no cuenten con un impedimento legal o regulatorio de carácter local, estatal y/o federal.',
  },
  {
    term: 'Tarjeta de Recompensa',
    definition:
      'se refiere al Programa de lealtad “Tarjeta de Recompensa” que permite que los Usuarios ganen y usen Puntos para adquirir Productos y/o Servicios en las sucursales de Venta de los Clientes conforme a los presentes Términos y Condiciones.',
  },
  {
    term: 'Plataformas',
    definition:
      'se refiere al sitio web oficial www.easylav.mx, así como cualquier otra plataforma digital o física que de tiempo en tiempo sea desarrollada relacionada con el Programa de lealtad',
  },
  {
    term: 'Promociones',
    definition:
      'se refiere a las campañas publicitarias que el Programa “Tarjeta de Recompensa” ofrecerá a los clientes respecto un determinado Producto y/o Servicio durante un tiempo limitado, las cuales estarán sujetas a sus propios términos y condiciones.',
  },
  {
    term: 'Tarjeta Física',
    definition:
      'se refiere a la tarjeta que se les otorga a los Clientes de forma física, a través de los Canales de Venta que permitan el registro al Programa “Tarjeta de Recompensa”. La Tarjeta Física es intransferible, no comercializable y personal para acceder y hacer uso del Programa.',
  },
];

export const Glosario = () => {
  return (
    <article className="text-lg md:text-xl leading-relaxed text-wrap w-full text-dark dark:text-light">
      <span className="font-semibold text-secondary_dark dark:text-secondary_light">1. GLOSARIO.</span> Para efectos de
      los presentes Términos y Condiciones, los siguientes vocablos tendrán los significados aquí atribuidos, mismos que
      podrán utilizarse en singular o plural indistintamente:
      <div className="mt-12">
        <ul className="list-disc pl-4 ml-8 flex flex-col gap-6">
          {definitions.map((item, index) => (
            <li key={index}>
              <span className="font-semibold text-secondary_dark dark:text-secondary_light">{item.term}:</span>{' '}
              {item.definition}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};
