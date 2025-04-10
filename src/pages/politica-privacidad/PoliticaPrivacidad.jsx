import { Helmet } from 'react-helmet';
import BorderCenter from '../../components/borders/BorderCenter';
import PageLayout from '../../components/layout/PageLayout';
import TitleH1 from '../../components/text/TitleH1';

const PoliticaPrivacidad = () => {
  return (
    <PageLayout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Politica Privacidad | Easylav</title>
        <link rel="canonical" href="https://easylav-react.netlify.app/politica-privacidad" />
      </Helmet>
      <div className="mx-auto mb-20">
        <BorderCenter>
          <TitleH1 title="Politica de Privacidad" />
        </BorderCenter>
      </div>
    </PageLayout>
  );
};

export default PoliticaPrivacidad;
