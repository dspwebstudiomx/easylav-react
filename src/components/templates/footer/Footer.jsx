import {
  Container,
  FooterLinksGenerator,
  FooterNavHashLinksGenerator,
  HeaderLine,
  Section,
  Spacing,
} from "components";
import { linksServicios } from "data";
import {
  linksPoliticas,
  linksTerminos,
  navLinksPages,
  navLinksSections,
} from "data/navlinks";
import FooterLogoWithSocial from "./FooterLogoWithSocial";

export default function Footer() {
  const classes = {
    container:
      "mx-auto grid grid-cols-2 text-light sm:grid-cols-3 lg:grid-cols-4",
    footerSections: "flex flex-col",
    footerSectionsList: "flex flex-col gap-0",
    footerSectionsTitle:
      "text-lg font-medium uppercase leading-6 xl:text-sm text-primary mb-6",
  };

  return (
    <footer id="footer" className="text-base">
      <HeaderLine />
      <Section
        backgroundColor={"bg-secondary_dark dark:bg-secondary_dark"}
        id={"footer-sections"}
        height={"h-auto"}
      >
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
            <Spacing height="h-2" />
            <FooterLinksGenerator links={navLinksPages} />
          </div>
          {/* Footer Sections */}

          {/* Footer Services */}
          <div id="footer-services" className="flex flex-col md:hidden">
            <h3 className={classes.footerSectionsTitle}>
              Servicios
            </h3>
            <FooterNavHashLinksGenerator links={linksServicios} />
          </div>
          {/* Footer Services */}


          <div className="flex flex-col">
            {/* Footer Privacy */}
            <div id="footer-policies" className={classes.footerSections}>
              <h3 className={classes.footerSectionsTitle}>
                Políticas de Privacidad, Política de Cookies
              </h3>
              <FooterLinksGenerator links={linksPoliticas} />
            </div>
            {/* Footer Privacy */}
          </div>

          {/* Footer Terms */}
          <div id="footer-privacy-terms" className={classes.footerSections}>
            <h3 className={classes.footerSectionsTitle}>
              Términos y Condiciones, Preguntas Frecuentes
            </h3>
            <FooterLinksGenerator links={linksTerminos} />
          </div>
          {/* Footer Terms */}

          {/* Footer Logo */}
          <FooterLogoWithSocial />
          {/* Footer Logo */}
        </Container>
      </Section>
      <div className="bg-primary py-6 text-light">
        <div className="mx-auto flex w-[80vw] flex-col justify-center gap-4 text-center text-sm font-semibold sm:w-[65vw] sm:flex-row sm:gap-20 sm:text-left xl:max-w-screen-xl 2xl:max-w-screen-2xl">
          <h3>Derechos Reservados 2024</h3>
          <h3 className="flex flex-col lg:flex-row">
            <span>Diseñado y Desarrollado por:</span>
            <a
              href="https://dspwebstudio.com"
              target="_blank"
              className="ml-2 font-semibold text-light"
            >
              dspwebstudio.com
            </a>
          </h3>
        </div>
      </div>
    </footer>
  );
}
