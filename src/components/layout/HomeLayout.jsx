import { Footer, Header, ScrollToTopButton } from 'components';
import PropTypes from 'prop-types';

export default function MainLayout({ children }) {

  const classes = {
    main: 'mt-[80px] sm:mt-[0px] xl:mt-[80px]'
  }

  return (
    <>
      <Header />
      <main className={classes.main}>{children}</main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}
MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}
