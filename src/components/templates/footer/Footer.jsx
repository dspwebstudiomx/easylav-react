import { Container, FooterLinksGenerator, FooterNavHashLinksGenerator, HeaderLine } from 'components';
import { linksPoliticas, linksServicios, linksTerminos, navLinksPages, navLinksSections } from 'data';
import { FaRegCopyright } from 'react-icons/fa6';
import FooterLogoWithSocial from './FooterLogoWithSocial';

export default function Footer() {
  const classes = {
    container:
      'mx-auto grid grid-cols-2 text-light sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 bg-secondary_dark gap-8',
    footerSections: 'flex flex-col gap-3',
    footerSectionsList: 'flex flex-col gap-0',
    footerSectionsTitle: 'text-lg font-medium uppercase leading-6 xl:text-sm text-light mb-6',
  };

  return (
    <>
      <HeaderLine />
      <footer id="footer" className="text-base bg-secondary_dark">
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
          <Container className="bg-primary text-primary_darkcontrast h-16">
            <div className="flex justify-center sm:justify-start items-center w-full gap-2">
              <FaRegCopyright />
              <h3>Derechos Reservados 2024</h3>
            </div>
          </Container>
        </div>
      </footer>
    </>
  );
}
