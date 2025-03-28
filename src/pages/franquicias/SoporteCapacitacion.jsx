const SoporteCapacitacion = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Soporte y Capacitación</h2>
        <p className="text-gray-700 mb-4">
          En Easylav, nos comprometemos con el éxito de nuestros franquiciados. Ofrecemos un programa integral de soporte y capacitación para asegurar que tengas todas las herramientas necesarias para triunfar.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Capacitación Inicial</h3>
            <p className="text-gray-700">
              Nuestro programa de capacitación inicial cubre todos los aspectos del negocio, desde la operación diaria hasta la gestión financiera.
            </p>
            <ul className="list-disc pl-5 mt-2 text-gray-700">
              <li>Operación de equipos y procesos</li>
              <li>Gestión de inventario</li>
              <li>Atención al cliente</li>
              <li>Marketing local</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Soporte Continuo</h3>
            <p className="text-gray-700">
              Ofrecemos soporte continuo para ayudarte a resolver cualquier problema y optimizar tu negocio.
            </p>
            <ul className="list-disc pl-5 mt-2 text-gray-700">
              <li>Asistencia técnica</li>
              <li>Asesoramiento en marketing</li>
              <li>Soporte en gestión y operaciones</li>
              <li>Actualizaciones tecnológicas</li>
            </ul>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Herramientas y Recursos</h3>
          <p className="text-gray-700">
            Proporcionamos acceso a una variedad de herramientas y recursos para facilitar la gestión de tu franquicia.
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-700">
              <li>Manuales de operación</li>
              <li>Plantillas de marketing</li>
              <li>Software de gestión</li>
              <li>Acceso a nuestra red de proveedores</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SoporteCapacitacion;