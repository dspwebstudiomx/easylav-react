import PropTypes from 'prop-types';

export default function MainLayout({ id, children }) {
  return (
    <main id={id} className="w-full h-full dark:bg-dark mt-[100px] md:mt-[60px] lg:mt-[160px] xl:mt-[100px]">
      {children}
    </main>
  );
}
MainLayout.propTypes = {
  id: PropTypes.any,
  children: PropTypes.node.isRequired,
};
