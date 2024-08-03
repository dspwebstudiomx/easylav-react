/**
 * A layout component that wraps the main content of a page.
 * It includes a header, footer, scroll-to-top button, and chatbot.
 */
import PropTypes from 'prop-types'
import Header from '../templates/Header';
import Footer from '../templates/Footer';
import Section from '../templates/Section';
import ScrollToTopButton from '../buttons/ScrollToTopButton';
import MyChatBot from '../../appAdicionales/ChatBot/MyChatBot';
import ScrollToTop from '../../functions/ScrollToTop';
import Container from '../containers/Container';
import Spacing from './Spacing';

const PageLayout = ({ children }) => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="mt-[100px] sm:mt-[160px]">
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