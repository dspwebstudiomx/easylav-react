import PropTypes from 'prop-types';

function Button({ variant, children, ...props }) {
  let className = 'inline-block px-4 py-2 rounded';

  switch (variant) {
    case 'primary':
      className += ' bg-blue-500 hover:bg-blue-700 text-white';
      break;
    case 'secondary':
      className += ' bg-gray-500 hover:bg-gray-700 text-white';
      break;
    case 'danger':
      className += ' bg-red-500 hover:bg-red-700 text-white';
      break;
    default:
      className += ' bg-gray-200 hover:bg-gray-300 text-gray-800';
  }

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}

Button.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Button;



//ejemplo:

<div>
  <Button variant="primary">Primary Button</Button>
  <Button variant="secondary">Secondary Button</Button>
  <Button variant="danger">Danger Button</Button>
  <Button>Default Button</Button>
</div>