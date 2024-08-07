import { Footer, Header, ScrollToTopButton } from 'components'
import ScrollToTop from 'functions'
import PropTypes from 'prop-types'
import MyChatBot from '../../appAdicionales/ChatBot/MyChatBot'

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <ScrollToTop />
      <main className='mt-[100px] sm:mt-[0px] lg:mt-0'>
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