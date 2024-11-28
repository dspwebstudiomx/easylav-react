import { Helmet } from 'react-helmet'
import PageLayout from '../../components/layout/PageLayout'

const PoliticaCookies = () => {
  return (
    <>

      <Helmet>
        <meta charSet="utf-8" />
        <title>Politica de Cookies | Easylav</title>
        <link rel="canonical" href="https://easylav-react.netlify.app/politica-privacidad" />
      </Helmet>
      <PageLayout>
        <h1>Politica de Cookies</h1>
      </PageLayout>
    </>

  )
}

export default PoliticaCookies