import Header from '../templates/Header'
import Footer from '../templates/Footer'
import PropTypes from 'prop-types'
import Section from '../templates/Section'
import Container from '../containers/Container'
import Spacing from './Spacing'
import ScrollToTopButton from '../buttons/ScrollToTopButton'
import MyChatBot from '../../ChatBot/MyChatBot'


const PageLayout = ({ children, id }) => {
  return (
    <>
      <Header />
      <main id='contenido' className='mt-[100px] sm:mt-[160px]'>
        <Section id={id} className={'flex flex-col gap-6'} height={'h-auto'} backgroundColor={'bg-light'}>
          <Container className={'mx-auto'}>
            {children}
          </Container>
          <Spacing height={'h-24'} />
        </Section>
      </main>
      <Footer />
      <ScrollToTopButton />
      <MyChatBot />
    </>
  )
}
PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string
}

export default PageLayout