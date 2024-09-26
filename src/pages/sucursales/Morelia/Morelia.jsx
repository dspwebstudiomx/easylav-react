import { Placeholder as image } from 'assets'
import { Container, Footer, Header, Hero, ScrollToTopButton, Section, Spacing } from "components"
import PropTypes from 'prop-types'

const Morelia = () => {

  const images = {
    backgroundImage_640: image,
    backgroundImage_1024: image,
    backgroundImage_1920: image,
  }

  return (
    <>
      <Header />
      <main id='sucursal-morelia' className='sm:mt-24 xl:mt-12'>
        <Hero backgroundImage_640={images.backgroundImage_640} backgroundImage_1024={images.backgroundImage_1024} backgroundImage_1920={images.backgroundImage_1920} opacity='opacity-60' backgroundColor='bg-dark' height='h-50' opacityColor='bg-dark'>

        </Hero>
        <Section id='sucursales-morelia' className={'flex flex-col gap-6'} height={'h-auto'} backgroundColor={'bg-light'}>
          <Container className={''}>

          </Container>
          <Spacing height={'h-24'} />
        </Section>
      </main >
      <Footer />
      <ScrollToTopButton />
    </>
  )
}
Morelia.propTypes = {
  image: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  children: PropTypes.node
}

export default Morelia