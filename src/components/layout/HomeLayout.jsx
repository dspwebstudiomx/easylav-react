import PropTypes from 'prop-types'
import MyChatBot from '../../appAdicionales/ChatBot/MyChatBot'
import { Footer, Header, ScrollToTopButton } from '../../components'
import ScrollToTop from '../../functions/ScrollToTop'

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <ScrollToTop />
      <main className='mt-[100px] sm:mt-[160px] lg:mt-[100px]'>
        {children}
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