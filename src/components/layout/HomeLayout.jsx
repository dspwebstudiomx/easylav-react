import PropTypes from 'prop-types'
import MyChatBot from '../../appAdicionales/ChatBot/MyChatBot'
import ScrollToTop from '../../functions/ScrollToTop'
import ScrollToTopButton from '../buttons/ScrollToTopButton'
import Footer from '../templates/Footer'
import Header from '../templates/Header'
import Spacing from './Spacing'

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <ScrollToTop />
      <main className='mt-[100px] sm:mt-[160px] lg:mt-[100px]'>
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