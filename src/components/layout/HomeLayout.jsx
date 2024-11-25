import { Footer, Header } from 'components';
import PropTypes from 'prop-types';

export default function MainLayout({ children }) {

  const classes = {
    main: 'mt-[100px] sm:mt-[60px] lg:mt-[100px]'
  }

  return (
    <>
      <Header />
      <main className={classes.main}>{children}</main>
      <Footer />
    </>
  );
}
MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}
