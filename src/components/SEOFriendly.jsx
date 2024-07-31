import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'

const SEOFriendly = ({ title, description, author, keywords, url, ogImage, ogImageAlt, ogType }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <link rel="canonical" href="{url}" />
      <meta name='description' content={description} />
      <meta name="author" content={author} />
      <meta name="keywords" content={keywords} />
      {/* <meta name="robots" content="index" /> */}
      {/* <meta name="robots" content="follow" /> */}
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
    </Helmet>
  )
}
SEOFriendly.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  keywords: PropTypes.string.isRequired,
  ogImage: PropTypes.string.isRequired,
  ogImageAlt: PropTypes.string.isRequired,
  ogType: PropTypes.string.isRequired,
}

export default SEOFriendly