import Header from '../templates/Header'
import Footer from '../templates/Footer'
import PropTypes from 'prop-types'
import Section from '../templates/Section'
import Container from '../containers/Container'
import Spacing from './Spacing'
import ScrollToTopButton from '../buttons/ScrollToTopButton'

const PageLayout = ({ children, id }) => {
  return (
    <>
      <Header />
      <main id='contenido' className='sm:mt-12 md:mt-0 xl:mt-12'>
        <Section id={id} className={'flex flex-col gap-6'} height={'h-auto'} backgroundColor={'bg-light'}>
          <Container className={'mx-auto'}>
            {children}
          </Container>
          <Spacing height={'h-24'} />
        </Section>
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  )
}
PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string
}

export default PageLayout