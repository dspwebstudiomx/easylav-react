import PropTypes from 'prop-types';

export default function MainLayout({ id, children }) {
  return (
    <main id={id} className="w-full h-full dark:bg-dark mt-0 md:mt-[60px] xl:mt-0">
      {children}
    </main>
  );
}
MainLayout.propTypes = {
  id: PropTypes.any,
  children: PropTypes.node.isRequired,
};
