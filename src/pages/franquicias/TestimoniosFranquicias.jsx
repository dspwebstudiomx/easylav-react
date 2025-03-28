const Testimonios = () => {
  const testimonios = [
    {
      nombre: "Juan Pérez",
      ubicacion: "Morelia, México",
      testimonio: "Desde que me uní a Easylav, he recibido un apoyo increíble. El modelo de negocio es sólido y la capacitación es excelente. ¡Estoy muy contento con mi inversión!",
    },
    {
      nombre: "María García",
      ubicacion: "León, México",
      testimonio: "Easylav me ha dado la oportunidad de tener mi propio negocio con un riesgo mínimo. El soporte continuo es invaluable y siempre están dispuestos a ayudar.",
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Testimonios de Franquiciados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonios.map((testimonio, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-700 italic mb-4">{testimonio.testimonio}</p>
              <div className="flex items-center">
                <div className="ml-4">
                  <p className="text-gray-800 font-semibold">{testimonio.nombre}</p>
                  <p className="text-gray-600">{testimonio.ubicacion}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonios;