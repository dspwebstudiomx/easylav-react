// PageLayout.jsx
import PropTypes from 'prop-types';
import MyChatBot from '../../appAdicionales/ChatBot/MyChatBot';
import { Container, Footer, Header, ScrollToTopButton, Section, Spacing } from '../../components';

const PageLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="mt-[120px] xl:mt-0">
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