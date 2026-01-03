import { Container, FooterLinksGenerator, FooterNavHashLinksGenerator, ThemeLine } from 'components';
import { linksPoliticas, linksServicios, linksTerminos, navLinksPages, navLinksSections } from 'data';
import FooterLogoWithSocial from './FooterLogoWithSocial';
import FooterHolidays from './FooterHolidays';

export default function Footer() {
  const classes = {
    container: 'grid gap-y-12 md:grid-cols-3',
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
            <div className="grid grid-cols-2 gap-4">
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
            </div>

            <div className="w-full flex flex-col gap-12">
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
            </div>

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
      {
        <FooterHolidays /> //Solo se muestra en temporada festiva
      }
    </>
  );
}
