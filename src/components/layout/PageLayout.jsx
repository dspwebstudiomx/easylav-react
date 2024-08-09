// PageLayout.jsx
import { Container, Footer, Header, ScrollToTopButton, Section, Spacing } from 'components';
import scrollToTop from 'functions/scrollToTop';
import PropTypes from 'prop-types';
import MyChatBot from '../../appAdicionales/ChatBot/MyChatBot';

const PageLayout = ({ children }) => {
  scrollToTop()
  return (
    <>
      <Header />
      <main className="mt-[100px] sm:mt-[0px] xl:mt-[100px]">
        <Section backgroundColor={'dark:bg-secondary_dark'} height={'h-auto'} className={'dark:text-light flex flex-col gap-6'}>
          <Container className="mx-auto py-0">
            {children}
          </Container>
          <Spacing height="h-24" />
        </Section>
      </main>
      <Footer />
      <ScrollToTopButton />
      <MyChatBot />
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