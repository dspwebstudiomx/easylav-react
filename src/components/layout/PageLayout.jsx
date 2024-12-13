// PageLayout.jsx
import { Container, Footer, Header, ScrollToTopButton, Section } from 'components';
import PropTypes from 'prop-types';

const PageLayout = ({ children, id }) => {
  return (
    <>
      <Header />
      <main className="mt-[100px] sm:mt-[60px] xl:mt-[100px]">
        <Section backgroundColor={'dark:bg-dark bg-light'} height={'md:min-h-[42vh] 2xl:min-h-[70vh]'} className={'dark:text-light flex flex-col gap-6 items-center justify-center'}>
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