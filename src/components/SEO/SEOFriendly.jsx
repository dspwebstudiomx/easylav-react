import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

// Acceso a las variables de entorno
const googleAnalyticsId = import.meta.env.VITE_GOOGLE_ANALYTICS_ID || '';
const googleAdsId = import.meta.env.VITE_GOOGLE_ADS_ID || '';
const googleTagManagerId = import.meta.env.VITE_GOOGLE_TAG_MANAGER_ID || '';

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
      <link rel="manifest" href="/manifest.json"></link>

      {/* Open Graph (OG) para redes sociales */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={ogImageAlt} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Easylav" />
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

      {/* Favicon y tema */}
      <link rel="icon" type="image/x-icon" href="/assets/images/favicon/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/favicon/favicon-16x16.png" />
      <meta name="theme-color" content="#AF4DFA" />
      <link rel="manifest" href="/assets/images/favicon/site.webmanifest" />

      {/* Google Analytics */}
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${googleAnalyticsId}');
        `}
      </script>

      {/* Google Tag Manager */}
      <script>
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${googleTagManagerId}');    
        `}
      </script>

      {/* Google Ads Conversion Tracking */}
      <script>
        {`
          gtag('event', 'conversion', {
            'send_to': '${googleAdsId}'
          });
        `}
      </script>

      {/* Content-Security-Policy */}
      <meta
        httpEquiv="Content-Security-Policy"
        content="
          default-src 'self';
          script-src 'self' 'unsafe-inline' 'unsafe-eval' https://connect.facebook.net https://www.googletagmanager.com https://www.google-analytics.com https://www.google.com https://www.gstatic.com;
          style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
          font-src 'self' https://fonts.gstatic.com;
          img-src 'self' data: https://www.google-analytics.com https://www.googletagmanager.com https://connect.facebook.net https://www.google.com https://www.gstatic.com https://www.facebook.com https://i.ytimg.com;
          connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com https://connect.facebook.net https://www.googleapis.com https://api.emailjs.com;
          frame-src 'self' https://www.google.com https://www.googletagmanager.com https://www.youtube.com;
          object-src 'none';
        "
      />

      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'Lavanderías Easylav',
          description: description,
          url: url,
          logo: ogImage,
          image: ogImage,
          telephone: '+52 443 520 0593',
          email: 'contacto@easylav.mx',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Av Francisco I. Madero Ote 2162, Isaac Arriaga, 58210 Morelia, Mich.',
            addressLocality: 'Morelia',
            addressRegion: 'Michoacán',
            postalCode: '58210',
            addressCountry: 'MX',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 19.70764,
            longitude: -101.17192,
          },
          openingHours: ['Mo-Su 07:00-21:30'],
          sameAs: [
            'https://www.facebook.com/profile.php?id=61562871132158',
            'https://https://instagram.com/lavanderiaseasylav/',
          ],
          hasMap: 'https://maps.app.goo.gl/uP2dnX8Rfjt53UQP6',
          service: [
            {
              '@type': 'Service',
              name: 'Autoservicio de lavandería',
              description:
                'Donde tú mismo realizas el proceso de lavado y/o secado con ayuda de nuestro personal capacitado, el cual siempre está para servirte y ayudarte en la cantidad de ropa y producto a utilizar.',
            },
            {
              '@type': 'Service',
              name: 'Secado de ropa',
              description:
                'Cuando solo requieren este servicio la ropa puede llegar más húmeda o mojada que lo normal evitando que se seque por completo. ',
            },
            {
              '@type': 'Service',
              name: 'Por encargo',
              description:
                'El personal en la sucursal se encarga del proceso de lavado, secado y plegado (Doblado) de tu ropa.',
            },
            {
              '@type': 'Service',
              name: 'Plegado de ropa',
              description:
                'El servicio de plegado es un servicio adicional que ofrecemos para que tu ropa esté lista para usar. Este servicio es ideal para quienes buscan una solución rápida y conveniente para mantener su ropa organizada y lista para usar.',
            },
            {
              '@type': 'Service',
              name: 'Tintorería',
              description:
                'Además de nuestro servicio de lavandería, contamos con tintorería profesional para el cuidado de tus prendas más delicadas. Ya sea un traje, vestido, abrigo o cualquier prenda especial, nuestro servicio garantiza limpieza profunda, protección de las telas y un acabado impecable.',
            },
          ],
          areaServed: [
            {
              '@type': 'Place',
              name: 'Morelia',
            },
            {
              '@type': 'Place',
              name: 'León',
            },
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
