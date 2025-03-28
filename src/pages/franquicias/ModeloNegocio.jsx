const ModeloNegocio = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Modelo de Negocio Detallado</h2>
        <p className="text-gray-700 mb-4">
          El modelo de franquicia de Easylav está diseñado para ofrecer una alta rentabilidad y sostenibilidad. Aquí te explicamos cómo funciona:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Inversión Inicial</h3>
            <p className="text-gray-700">
              La inversión inicial incluye el canon de entrada, adecuación del local, equipamiento y stock inicial.
            </p>
            <ul className="list-disc pl-5 mt-2 text-gray-700">
              <li>Canon de entrada: $XX,XXX</li>
              <li>Adecuación del local: $YY,YYY</li>
              <li>Equipamiento: $ZZ,ZZZ</li>
              <li>Stock inicial: $AA,AAA</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Costos Operativos</h3>
            <p className="text-gray-700">
              Los costos operativos mensuales incluyen alquiler, servicios, personal, marketing y otros gastos.
            </p>
            <ul className="list-disc pl-5 mt-2 text-gray-700">
              <li>Alquiler: $BB,BBB</li>
              <li>Servicios: $CC,CCC</li>
              <li>Personal: $DD,DDD</li>
              <li>Marketing: $EE,EEE</li>
            </ul>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Márgenes de Ganancia</h3>
          <p className="text-gray-700">
            Easylav ofrece márgenes de ganancia atractivos gracias a su modelo de negocio eficiente y alta demanda de servicios.
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-700">
            <li>Margen bruto promedio: XX%</li>
            <li>Retorno de inversión estimado: XX años</li>
          </ul>
        </div>
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Soporte de Easylav</h3>
          <p className="text-gray-700">
            Easylav apoya a sus franquiciados con capacitación, marketing, tecnología y gestión.
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-700">
            <li>Capacitación inicial y continua</li>
            <li>Soporte de marketing y publicidad</li>
            <li>Plataforma tecnológica avanzada</li>
            <li>Asesoramiento en gestión y operaciones</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ModeloNegocio;