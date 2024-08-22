import { Placeholder } from 'assets';
import { BorderLeft, Container, ImageResponsive, Section, TitleH2 } from 'components';
import DescriptionWithBulletPoint from 'components/list/DescriptionWithBulletPoint';
import { porqueElegirnosDescripciones } from 'data';

export default function PorqueElegirnos() {

  const classes = {
    article: 'mx-au,to grid gap-x-20 gap-y-16 sm:grid-cols-2',
    contenedorCaracteristicas: 'grid place-content-center gap-12',
    caracteristica: 'flex flex-col gap-6 text-balance text-2xl',
    contenedorImagen: 'items-center justify-end'
  }
  return (
    <Section id={'porque-elegirnos'} backgroundColor={''} height={'h-auto'} className={''} >
      <Container className={'mx-auto'} id='porque-elegirnos-container'>
        <article className={classes.article}>
          <div id='contenedor-caracteristicas' className={classes.contenedorCaracteristicas}>
            <BorderLeft>
              <TitleH2 title='Por qué Elegirnos' />
            </BorderLeft>
            {porqueElegirnosDescripciones.map(descripcion => {
              return (
                <DescriptionWithBulletPoint key={descripcion.id} id={descripcion.id} titulo={descripcion.titulo} texto={descripcion.texto} />
              )
            })}
          </div>
          <div id='contenedor-imagen' className={classes.contenedorImagen}>
            <ImageResponsive
              src={Placeholder}
              imageAlt={'Placeholder'}
              className={'shadow-image'}
              image_640={Placeholder}
              image_1024={Placeholder}
              image_1920={Placeholder}
            />
          </div>
        </article>
      </Container>
    </Section>
  );
}
