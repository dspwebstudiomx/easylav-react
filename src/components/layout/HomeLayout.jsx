import Header from '../templates/Header'
import Footer from '../templates/Footer'
import PropTypes from 'prop-types'
import Spacing from './Spacing'
import MyChatBot from '../../ChatBot/MyChatBot'
import ScrollToTopButton from '../buttons/ScrollToTopButton';

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className='md:mt-14 lg:mt-0'>
        {children}
        <Spacing height={'h-24'} />
      </main>
      <Footer />
      <ScrollToTopButton />
      <MyChatBot />
    </>
  )
}
MainLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default MainLayout