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
      <meta name="referrer" content="no-referrer-when-downgrade" />
      {/* SEO adicional */}
      <meta name="language" content="es" />
      <meta name="geo.region" content="MX" />
      <meta name="geo.placename" content="México" />
      <meta name="copyright" content="© 2025 Easylav. Todos los derechos reservados." />
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="dns-prefetch" href="//cdn.jsdelivr.net" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      {/* Preconnect */}
      <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      {/* Open Graph (OG) para redes sociales */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={ogImageAlt} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      |<meta property="og:site_name" content="Easylav" />
      <meta property="og:locale" content="es_MX" />
      <meta property="og:locale:alternate" content="en_US" />
      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@easylav" />
      <meta name="twitter:creator" content="@easylav" />
      <meta name="twitter:image:alt" content={ogImageAlt} />
      <meta name="twitter:image:width" content="1200" />
      <meta name="twitter:image:height" content="630" />
      <meta name="twitter:label1" content="Precio" />
      <meta name="twitter:data1" content="Desde $40.00 el kilo" />
      {/* Favicon y tema */}
      <link rel="icon" type="image/x-icon" href="/assets/images/favicon/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/favicon/favicon-16x16.png" />
      <meta name="theme-color" content="#AF4DFA" />
      <link rel="manifest" href="/assets/images/favicon/site.webmanifest" />
      {/* Seguridad*/}
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="X-Permitted-Cross-Domain-Policies" content="none" />
      <meta httpEquiv="X-Download-Options" content="noopen" />
      <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'; style-src 'self';" />
      <meta httpEquiv="Strict-Transport-Security" content="max-age=31536000; includeSubDomains; preload" />
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="Referrer-Policy" content="no-referrer" />
      <meta httpEquiv="Permissions-Policy" content="geolocation=(self), microphone=()" />
      <meta httpEquiv="Cross-Origin-Embedder-Policy" content="require-corp" />
      <meta httpEquiv="Cross-Origin-Opener-Policy" content="same-origin" />
      <meta httpEquiv="Cross-Origin-Resource-Policy" content="same-origin" />
      <meta
        httpEquiv="Content-Security-Policy"
        content="
          default-src 'self'; 
          script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net https://www.google-analytics.com https://www.googletagmanager.com https://www.google.com https://www.gstatic.com; 
          style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdn.jsdelivr.net; 
          font-src 'self' https://fonts.gstatic.com; 
          img-src 'self' data: https://easylav.mx https://cdn.jsdelivr.net https://www.google-analytics.com https://www.googletagmanager.com https://www.google.com https://www.gstatic.com; 
          connect-src 'self' https://api.easylav.mx https://www.google-analytics.com https://www.googletagmanager.com https://www.googleapis.com; 
          media-src 'self'; 
          frame-src 'self' https://www.google.com; 
          object-src 'none';
        "
      />
      {/* Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: title,
          description: description,
          url: url,
          telephone: '+524435200593',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Av Francisco I. Madero Ote 2162, Isaac Arriaga, 58210 Morelia, Mich.',
            addressLocality: 'Morelia',
            addressRegion: 'Michoacán',
            addressCountry: 'México',
          },
          image: ogImage,
          openingHours: 'Mo-Su 07:00-21:30',
          priceRange: '$$',
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 19.70764,
            longitude: -101.17192,
          },
          sameAs: [
            'https://www.facebook.com/profile.php?id=61562871132158',
            'https://www.instagram.com/lavanderiaseasylav/',
          ],
        })}
      </script>
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
