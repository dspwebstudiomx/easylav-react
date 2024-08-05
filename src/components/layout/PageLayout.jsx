/**
 * A layout component that wraps the main content of a page.
 * It includes a header, footer, scroll-to-top button, and chatbot.
 */
import PropTypes from 'prop-types';
import MyChatBot from '../../appAdicionales/ChatBot/MyChatBot';
import { Container, Footer, Header, ScrollToTopButton, Section, Spacing } from '../../components';
import ScrollToTop from '../../functions/ScrollToTop';

const PageLayout = ({ children }) => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="mt-[100px]">
        <Section className="flex flex-col gap-6" height="h-auto" backgroundColor="bg-light">
          <Container className="mx-auto">
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