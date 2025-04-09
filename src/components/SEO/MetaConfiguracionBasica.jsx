import PropTypes from 'prop-types';

const MetaConfiguracionBasica = ({ title, description, author, publisher, keywords, url }) => {
  return (
    <>
      <meta charSet="UTF-8" />
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={description} />
      <meta name="author" content={author} />
      <meta name="publisher" content={publisher} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />
    </>
  );
};
export default MetaConfiguracionBasica;

MetaConfiguracionBasica.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  publisher: PropTypes.string.isRequired,
  keywords: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
