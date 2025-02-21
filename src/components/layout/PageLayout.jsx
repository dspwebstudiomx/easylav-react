// PageLayout.jsx
import { Container, Footer, Header, ScrollToTopButton, Section } from 'components';
import PropTypes from 'prop-types';

const PageLayout = ({ children, id }) => {
  return (
    <>
      <Header />
      <main className="mt-[160px] sm:mt-[0px] xl:mt-[100px]">
        <Section backgroundColor={'dark:bg-dark bg-light'} height={'min-h-[60vh] md:min-h-[42vh] 2xl:min-h-[49svh]'} className={'dark:text-light flex flex-col gap-6 text-dark'}>
          <Container id={id}>
            {children}
          </Container>
        </Section>
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

PageLayout.propTypes = {
  /**
   * The content of the page.
   */
  children: PropTypes.node,
  id: PropTypes.any,

};

export default PageLayout;