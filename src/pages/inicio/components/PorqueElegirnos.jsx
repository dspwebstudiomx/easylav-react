/*
  PorqueElegirnos.jsx - Componente de sección "¿Por qué elegirnos?"
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2024-09-02
  Descripción: Componente que representa la sección "¿Por qué elegirnos?" en la página de inicio.
  Incluye una lista de descripciones con viñetas y una imagen representativa.
  -------------------------------------
  Modificado por: Daniel Pérez
  Fecha de modificación: 2025-03-27
  Modificaciones:
  - Se eliminaron las constantes de UI Y PROPS 

*/

// Importaciones
import { woman as img } from 'assets';
import { Container, DescriptionWithBulletPoint, ImageResponsive, Section, TitleContainer } from 'components';
import { porqueElegirnosDescripciones } from 'data';

// Estructura
export default function PorqueElegirnos() {
  return (
    <Section id="porque-elegirnos" backgroundColor="dark:bg-dark" height="h-full" className="">
      <Container className="mx-auto grid gap-12" id="porque-elegirnos-container">
        <TitleContainer title="¿Por qué elegirnos?" />
        <article className="mx-auto grid lg:grid-cols-2 gap-x-20 gap-y-16">
          {/* Listado */}
          <ul className="grid lg:grid-cols-1 gap-8">
            {porqueElegirnosDescripciones.map((descripcion) => {
              return (
                <DescriptionWithBulletPoint
                  key={descripcion.id}
                  id={descripcion.id}
                  titulo={descripcion.titulo}
                  texto={descripcion.texto}
                />
              );
            })}
          </ul>
          {/* Listado */}

          {/* Imagen */}
          <div id="porque-elegirnos-contenedor-imagen" className="w-full h-full flex items-end justify-end">
            <ImageResponsive
              src={img}
              imageAlt={'Mujer señalando hacia las características de la empresa'}
              imageTitle={'Mujer señalando hacia las características de la empresa'}
              image_640={img}
              image_1024={img}
              image_1920={img}
              width="w-full sm:w-1/2 lg:w-full hidden lg:block"
            />
          </div>
          {/* Imagen */}
        </article>
      </Container>
    </Section>
  );
}
