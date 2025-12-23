import { Container, FooterLinksGenerator, FooterNavHashLinksGenerator, ThemeLine } from 'components';
import { linksPoliticas, linksServicios, linksTerminos, navLinksPages, navLinksSections } from 'data';
// import { FaRegCopyright } from 'react-icons/fa6';
import FooterLogoWithSocial from './FooterLogoWithSocial';
import snowboy from '../../../assets/images/snowboy.png';

export default function Footer() {
  const classes = {
    container:
      'mx-auto grid grid-cols-2 text-light sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 bg-secondary_dark gap-8 sm:gap-0',
    footerSections: 'flex flex-col gap-3',
    footerSectionsList: 'flex flex-col gap-0',
    footerSectionsTitle: 'text-lg font-medium uppercase leading-6 xl:text-sm text-light mb-6',
  };

  return (
    <>
      <footer id="footer" className="text-base bg-secondary_dark">
        <ThemeLine />
        <div id={'footer-sections'} className="p-12">
          <Container className={classes.container}>
            {/* Footer Sections */}
            <div id="footer-sections" className={classes.footerSections}>
              <h3 id="footer-sections-title" className={classes.footerSectionsTitle}>
                Secciones
              </h3>
              <FooterNavHashLinksGenerator links={navLinksSections} />
              <FooterLinksGenerator links={navLinksPages} />
            </div>
            {/* Footer Sections */}

            {/* Footer Services */}
            <div id="footer-services" className={classes.footerSections}>
              <h3 className={classes.footerSectionsTitle}>Servicios</h3>
              <FooterNavHashLinksGenerator links={linksServicios} />
            </div>
            {/* Footer Services */}

            {/* Footer Privacy */}
            <div className="flex flex-col">
              <div id="footer-policies" className={classes.footerSections}>
                <h3 className={classes.footerSectionsTitle}>Políticas de Privacidad, Política de Cookies</h3>
                <FooterLinksGenerator links={linksPoliticas} />
              </div>
            </div>
            {/* Footer Privacy */}

            {/* Footer Terms */}
            <div id="footer-privacy-terms" className={classes.footerSections}>
              <h3 className={classes.footerSectionsTitle}>
                Términos y Condiciones, Preguntas Frecuentes y Facturación
              </h3>
              <FooterLinksGenerator links={linksTerminos} />
            </div>
            {/* Footer Terms */}

            {/* Footer Logo */}
            <FooterLogoWithSocial />
            {/* Footer Logo */}
          </Container>
        </div>
        <div className="bg-primary text-light px-12 lg:px-0">
          <Container className="bg-primary text-primary_darkcontrast h-16 w-full">
            <div className="flex items-center justify-center sm:justify-start h-full">
              <span className="text-2xl font-semibold">®</span>
              <h3>Derechos Reservados 2024</h3>
            </div>
          </Container>
        </div>
      </footer>
      <div className="absolute bg-white h-20 w-full flex flex-col items-center justify-center">
        <p className="w-2/3  md:w-full flex md:items-center md:justify-center md:text-xl uppercase font-semibold text-secondary_dark">
          Felices Fiestas les desea la familia EasyLav®
        </p>
        <div className="absolute bottom-[62px] md:bottom-[54px] right-20 md:right-24 rounded-b-xl overflow-hidden">
          <img src={snowboy} alt="Snowboy" className="h-[100px] md:h-[120px] rounded-b-md overflow-hidden" />
        </div>
      </div>
    </>
  );
}
