import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

// Acceso a las variables de entorno
const facebookPixelId = import.meta.env.VITE_FACEBOOK_PIXEL_ID || '';
const googleAnalyticsId = import.meta.env.VITE_GOOGLE_ANALYTICS_ID || '';
const googleTagManagerId = import.meta.env.VITE_GOOGLE_TAG_MANAGER_ID || '';
const googleAdsId = import.meta.env.VITE_GOOGLE_ADS_ID || '';

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

      {/* Facebook Pixel */}
      <script>
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${facebookPixelId}');
          fbq('track', 'PageView');
        `}
      </script>
      <noscript>
        {`
          <img
            height="1"
            width="1"
            style="display:none"
            src="https://www.facebook.com/tr?id=${facebookPixelId}&ev=PageView&noscript=1"
          />
        `}
      </noscript>

      {/* Google Tag Manager */}
      <script>
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id=${googleTagManagerId}';f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${googleTagManagerId}');
        `}
      </script>
      <noscript>
        {`
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=${googleTagManagerId}"
            height="0"
            width="0"
            style="display:none;visibility:hidden"
          ></iframe>
        `}
      </noscript>

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
          connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com https://connect.facebook.net https://www.googleapis.com;
          frame-src 'self' https://www.google.com https://www.googletagmanager.com https://www.youtube.com;
          object-src 'none';
        "
      />
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
