import { Footer, Header, ScrollToTopButton } from 'components';
import PropTypes from 'prop-types';

export default function MainLayout({ id, children }) {
  return (
    <>
      <Header />
      <main id={id} className="absolute top-[80px] left-0 w-full h-full dark:bg-dark">
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
