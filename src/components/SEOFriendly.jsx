import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

const SEOFriendly = ({
  title,
  description,
  author,
  keywords,
  url,
  ogImage,
  ogImageAlt,
  ogType,
  publisher,
}) => {
  return (
    <Helmet>
      <meta charset="UTF-8" />
      <title>{title}</title>
      <link rel="canonical" href={url} />
      <meta name="description" content={description} />
      <meta name="author" content={author} />
      <meta name="publisher" content={publisher} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="400" />
      <meta property="og:image:height" content="300" />
      <meta property="og:image:alt" content={ogImageAlt} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="theme-color" content="#fff" />
      <link name="theme-color" content="#fff" />
      <link rel="apple-touch-icon" sizes="180x180" href="/src/assets/images/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/src/assets/images/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/src/assets/images/favicon/favicon-16x16.png" />
      {/* <link rel="manifest" href="/site.webmanifest" /> */}
      <link rel="icon" type="image/x-icon" href="/src/assets/images/favicon/favicon.ico" />
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
