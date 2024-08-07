/**
 * A layout component that wraps the main content of a page.
 * It includes a header, footer, scroll-to-top button, and chatbot.
 */
import PropTypes from 'prop-types';
import MyChatBot from '../../appAdicionales/ChatBot/MyChatBot';
import { Container, Footer, Header, ScrollToTopButton, Section, Spacing } from '../../components';
import ScrollToTop from '../../functions/scrollToTop';

const PageLayout = ({ children }) => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="mt-[60px] xl:mt-0">
        <Section backgroundColor={'dark:bg-dark'} height={'h-auto'} className={'dark:text-light flex flex-col gap-6'}>
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