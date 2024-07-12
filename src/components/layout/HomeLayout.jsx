import Header from '../templates/Header'
import Footer from '../templates/Footer'
import PropTypes from 'prop-types'
import Spacing from './Spacing'

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className='md:mt-14 lg:mt-0'>
        {children}
        <Spacing height={'h-24'} />
      </main>
      <Footer />
    </>
  )
}
MainLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default MainLayout