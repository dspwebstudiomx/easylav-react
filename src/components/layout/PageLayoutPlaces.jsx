import Header from '../templates/Header'
import Footer from '../templates/Footer'
import PropTypes from 'prop-types'
import Section from '../templates/Section'
import Container from '../containers/Container'
import Spacing from './Spacing'
import ScrollToTopButton from '../buttons/ScrollToTopButton'
import Hero from '../hero/Hero'

const PageLayoutPlaces = ({ children, id, image }) => {
  return (
    <>
      <Header />
      <main id='contenido' className='sm:mt-24 xl:mt-12'>
        <Hero backgroundImage={image} opacity={'opacity-25'} height={'h-20'}>
          <h1>Morelia</h1>
        </Hero>
        <Section id={id} className={'flex flex-col gap-6'} height={'h-auto'} backgroundColor={'bg-light'}>
          <Container className={''}>
            {children}
          </Container>
          <Spacing height={'h-24'} />
        </Section>
      </main >
      <Footer />
      <ScrollToTopButton />
    </>
  )
}
PageLayoutPlaces.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
  image: PropTypes.string,
}

export default PageLayoutPlaces