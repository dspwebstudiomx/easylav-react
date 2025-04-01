import { Container, ImageResponsive } from 'components';
import { franquiciasImagenes } from 'data';

const FRANQUICIAS_UI = {
  IMAGE: {
    WIDTH: 'w-[280px] lg:w-[360px]',
  },
  COLUMNA_2: {
    DISPLAY: 'grid justify-items-center sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-12',
    HEIGHT: 'lg:h-auto md:h-[500px]',
    MARGIN: 'mx-auto mt-24 sm:mt-8 2xl:mt-40 mx-auto',
    PADDING: 'p-0',
    WIDTH: 'w-full',
  },
};

const ImagenesFranquicias = () => {
  return (
    <Container>
      <div
        id="franquicias-columma-2"
        className={`${FRANQUICIAS_UI.COLUMNA_2.DISPLAY} ${FRANQUICIAS_UI.COLUMNA_2.HEIGHT} ${FRANQUICIAS_UI.COLUMNA_2.MARGIN} ${FRANQUICIAS_UI.COLUMNA_2.PADDING} ${FRANQUICIAS_UI.COLUMNA_2.WIDTH}`}
      >
        {franquiciasImagenes
          .sort(() => Math.random() - 0.5)
          .map((imagen) => (
            <div key={imagen.id} className="h-auto rotate-[0deg]">
              <ImageResponsive
                src={imagen.image_640}
                className={`${FRANQUICIAS_UI.IMAGE.WIDTH} shadow-2xl`}
                imageAlt={imagen.alt}
                imageTitle={imagen.title}
                image_640={imagen.image_640}
                image_1024={imagen.image_640}
                image_1920={imagen.image_640}
                width={380}
              />
            </div>
          ))}
      </div>
    </Container>
  );
};

export default ImagenesFranquicias;
