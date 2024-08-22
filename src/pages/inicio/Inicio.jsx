import { canastaderopa_640, LaundryLady } from 'assets';
import {
  Container,
  HomeLayout,
  Loading,
  Section,
  SEOFriendly,
} from 'components';
import { lazy, Suspense } from 'react';
const HeroInicio = lazy(() => import('./components/HeroInicio'));
const SobreNosotros = lazy(() => import('./components/SobreNosotros'));
const NuestrosServicios = lazy(
  () => import('./nuestrosServicios/NuestrosServicios'),
);
const PorqueElegirnos = lazy(() => import('./components/PorqueElegirnos'));
const NuestrasSucursales = lazy(
  () => import('./nuestrasSucursales/NuestrasSucursales'),
);
const Testimonios = lazy(() => import('./Testimonios/Testimonios'));
const Contacto = lazy(() => import('../../components/contacto/Contacto'));

const Inicio = () => {
  return (
    <Suspense fallback={<Loading />}>
      <HomeLayout>
        <SEOFriendly
          title='Inicio | Easylav: Tu lavandería ideal'
          url='easylav-react.netlify.app'
          description='En easylav tu ropa es nuestra pasión: limpieza impecable, planchado perfecto'
          author='dspwebstudio'
          keywords='lavandería Morelia, planchado Morelia'
          ogImage={canastaderopa_640}
          ogImageAlt='canasta verde con ropa sucia'
          ogType='website'
        />
        <HeroInicio />
        <Section>
          <Container className='grid grid-cols-2 mx-auto'>
            <div className=''>
              <h2 className='text-3xl'>Lorem, ipsum dolor.</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda consequuntur hic quod ipsam corrupti laudantium maxime natus cupiditate voluptates minima.</p>
            </div>
            <div className={`bg-cover bg-${LaundryLady}`}></div>
          </Container>
        </Section>
        <SobreNosotros />
        <NuestrosServicios />
        <PorqueElegirnos />
        <NuestrasSucursales />
        <Testimonios />
        <Section backgroundColor={'dark:bg-dark'} className={'dark:text-light'}>
          <Container className={'mx-auto'}>
            <Contacto />
          </Container>
        </Section>
      </HomeLayout>
    </Suspense>
  );
};

export default Inicio;
