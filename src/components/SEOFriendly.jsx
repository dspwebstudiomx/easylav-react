import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const SEOFriendly = ({ title, description, author, keywords, url, ogImage, ogImageAlt, ogType, publisher }) => {
  return (
    <Helmet>
      {/* Configuración básica */}
      <meta charSet="UTF-8" />
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={description} />
      <meta name="author" content={author} />
      <meta name="publisher" content={publisher} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Open Graph (OG) para redes sociales */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={ogImageAlt} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Favicon y tema */}
      <link rel="icon" type="image/x-icon" href="/assets/images/favicon/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/favicon/favicon-16x16.png" />
      <meta name="theme-color" content="#ffffff" />
    </Helmet>
  );
};

SEOFriendly.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  publisher: PropTypes.string.isRequired,
  keywords: PropTypes.string.isRequired,
  ogImage: PropTypes.string.isRequired,
  ogImageAlt: PropTypes.string.isRequired,
  ogType: PropTypes.string.isRequired,
};

export default SEOFriendly;
