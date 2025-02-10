import { Container, FooterLinksGenerator, FooterNavHashLinksGenerator, HeaderLine, Spacing } from "components";
import { linksPoliticas, linksServicios, linksTerminos, navLinksPages, navLinksSections } from "data";
import { FaRegCopyright } from "react-icons/fa6";
import FooterLogoWithSocial from "./FooterLogoWithSocial";

export default function Footer() {
  const classes = {
    container:
      "mx-auto grid grid-cols-2 text-light sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 bg-secondary_dark gap-8",
    footerSections: "flex flex-col",
    footerSectionsList: "flex flex-col gap-0",
    footerSectionsTitle:
      "text-lg font-medium uppercase leading-6 xl:text-sm text-primary mb-6",
  };

  return (
    <>
      <HeaderLine />
      <footer id="footer" className="text-base bg-secondary_dark">
        <div id={"footer-sections"} className="bg-secondary_dark p-12">
          <Container className={classes.container}>
            {/* Footer Sections */}
            <div id="footer-sections" className={classes.footerSections}>
              <h3
                id="footer-sections-title"
                className={classes.footerSectionsTitle}
              >
                Secciones
              </h3>
              <FooterNavHashLinksGenerator links={navLinksSections} />
              <Spacing distance="h-2" />
              <FooterLinksGenerator links={navLinksPages} />
            </div>
            {/* Footer Sections */}

            {/* Footer Services */}
            <div id="footer-services" className="flex flex-col">
              <h3 className={classes.footerSectionsTitle}>
                Servicios
              </h3>
              <FooterNavHashLinksGenerator links={linksServicios} />
            </div>
            {/* Footer Services */}

            {/* Footer Privacy */}
            <div className="flex flex-col">
              <div id="footer-policies" className={classes.footerSections}>
                <h3 className={classes.footerSectionsTitle}>
                  Políticas de Privacidad, Política de Cookies
                </h3>
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
        <div className='bg-primary text-light'>
          <Container className="flex flex-col sm:flex-row gap-4 justify-between items-center mx-auto xl:w-[65vw] h-16">
            <div className="flex gap-2 items-center justify-center">
              <FaRegCopyright />
              <h3>Derechos Reservados 2024</h3>
            </div>
            <h3 className="flex text-xs sm:text-sm">
              <span>Diseño y Desarrollo por:</span>
              <a
                href="https://dspwebstudio.com"
                target="_blank"
                className="ml-2 font-semibold text-secondary_dark"
              >
                dspwebstudio.com
              </a>
            </h3>
          </Container>
        </div>
      </footer>
    </>
  );
}
