import { ButtonPrimary } from 'components';

const BannerFranquicias = () => {
  return (
    <section className="bg-secondary_dark text-light px-8 dark:bg-primary_dark">
      <article className="mx-auto max-w-screen-md px-4 py-32 lg:flex lg:h-2xl lg:items-center">
        <div className="mx-auto text-center">
          {/* Title */}
          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            <span className="sm:block">¿Estás interesado en adquirir una franquicia?</span>
          </h1>
          {/* Title */}
          {/* Paragraph */}
          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!
          </p>
          {/* Paragraph */}
          {/* Button */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <ButtonPrimary title="Conoce lo que ofrecemos" href="#sobre-nuestras-franquicias" width={'w-full'} />
          </div>
        </div>
        {/* Button */}
      </article>
    </section>
  );
};

export default BannerFranquicias;
