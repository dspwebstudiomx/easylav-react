import PropTypes from 'prop-types';
const OpenGraph = ({ ogType, ogImage, url, title, description, ogImageAlt }) => {
  return (
    <>
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={ogImageAlt} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
    </>
  );
};
export default OpenGraph;

OpenGraph.propTypes = {
  ogType: PropTypes.string.isRequired,
  ogImage: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  ogImageAlt: PropTypes.string.isRequired,
};
