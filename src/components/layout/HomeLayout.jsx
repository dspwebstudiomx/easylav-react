import { Footer, Header, ScrollToTopButton } from 'components';
import PropTypes from 'prop-types';

export default function MainLayout({ id, children }) {
  return (
    <>
      <Header />
      <main id={id} className="w-full h-full dark:bg-dark mt-0">
        {children}
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}
MainLayout.propTypes = {
  id: PropTypes.any,
  children: PropTypes.node.isRequired,
};
