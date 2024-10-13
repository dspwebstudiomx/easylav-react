// PageLayout.jsx
import { Container, Footer, Header, ScrollToTopButton, Section, Spacing } from 'components';
import scrollToTop from 'functions/scrollToTop';
import PropTypes from 'prop-types';

const PageLayout = ({ children }) => {
  scrollToTop()
  return (
    <>
      <Header />
      <main className="mt-[100px] sm:mt-[0px] xl:mt-[100px]">
        <Section backgroundColor={'dark:bg-dark'} height={'md:min-h-[42vh] 2xl:min-h-[70vh]'} className={'dark:text-light flex flex-col gap-6 place-items-center'}>
          <Container>
            {children}
          </Container>
          <Spacing height="h-24" />
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
};

export default PageLayout;