// PageLayout.jsx
import { Container, Footer, Header, ScrollToTopButton, Section, Spacing } from 'components';
import scrollToTop from 'functions/scrollToTop';
import PropTypes from 'prop-types';

const PageLayout = ({ children }) => {
  scrollToTop()
  return (
    <>
      <Header />
      <main className="mt-[100px] sm:mt-[0px] xl:mt-[90px]">
        <Section backgroundColor={'dark:bg-dark'} height={'h-full'} className={'dark:text-light flex flex-col gap-6'}>
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