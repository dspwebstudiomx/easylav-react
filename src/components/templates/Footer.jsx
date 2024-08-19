import { Container, Section, SocialLinks } from "components";
import {
  linksPoliticas,
  linksServicios,
  linksTerminos,
  navLinksPages,
  navLinksSections,
} from "data/navlinks";
import { scrollToTop, scrollWithOffset } from "functions";
import { TbPoint } from "react-icons/tb";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <footer id="footer" className="text-base">
      <div className="h-2 bg-gradient-to-r from-primary to-secondary"></div>
      <Section
        backgroundColor={"bg-secondary_dark"}
        id={"footer-sections"}
        className={"py-24"}
        height={"h-auto"}
      >
        <Container className="mx-auto grid grid-cols-2 text-light xl:grid-cols-4">
          {/* Footer Sections */}
          <div id="footer-sections" className="flex w-full flex-col gap-6">
            <h3 className="text-lg font-medium uppercase leading-6 text-primary">
              Secciones
            </h3>
            <ul className="flex flex-col gap-0">
              {navLinksSections.map((navlink) => {
                return (
                  <li key={navlink.id} id={`footer-navlink-${navlink.linkId}`}>
                    <NavHashLink
                      id={`footer-link-${navlink.linkId}`}
                      to={navlink.href}
                      className="text-white flex items-center hover:text-primary"
                      scroll={(el) => scrollWithOffset(el)}
                    >
                      <TbPoint className="text-2xl text-primary" size={32} />
                      <span className="ml-2">{navlink.name}</span>
                    </NavHashLink>
                  </li>
                );
              })}
              {navLinksPages.map((navlink) => {
                return (
                  <li key={navlink.id} id={`footer-navlink-${navlink.linkId}`}>
                    <NavHashLink
                      id={`footer-link-${navlink.linkId}`}
                      to={navlink.href}
                      className="text-white flex items-center hover:text-primary"
                      scroll={(el) => scrollWithOffset(el)}
                    >
                      <TbPoint className="text-2xl text-primary" size={32} />
                      <span className="ml-2">{navlink.name}</span>
                    </NavHashLink>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* Footer Sections */}

          {/* Footer Services */}
          <div id="footer-services" className="flex w-full flex-col gap-6">
            <h3 className="font-base text-lg uppercase leading-6 text-primary">
              Servicios
            </h3>
            <ul className="flex flex-col gap-0">
              {linksServicios.map((linkServicio) => {
                return (
                  <li
                    key={linkServicio.id}
                    id={`footer-navlink-${linkServicio.linkId}`}
                  >
                    <NavHashLink
                      id={`footer-link-${linkServicio.linkId}`}
                      to={linkServicio.href}
                      className="text-white flex items-center hover:text-primary"
                      scroll={(el) => scrollWithOffset(el)}
                    >
                      <TbPoint className="text-2xl text-primary" size={32} />
                      <span className="ml-0">{linkServicio.name}</span>
                    </NavHashLink>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* Footer Services */}

          {/* Footer Privacy */}
          <div id="footer-policies" className="flex w-full flex-col gap-8">
            <h3 className="text-base font-medium uppercase leading-6 text-primary">
              Políticas de Privacidad, Política de Cookies
            </h3>
            <ul className="flex flex-col gap-0">
              {linksPoliticas.map((link) => {
                return (
                  <li key={link.id} id={`footer-navlink-${link.linkId}`}>
                    <Link
                      id={`footer-link-${link.linkId}`}
                      to={link.href}
                      className="text-white flex items-center hover:text-primary"
                    >
                      <TbPoint
                        className="text-2xl text-primary"
                        size={32}
                        title={`Visita ${link.name}`}
                        onClick={scrollToTop}
                      />
                      <span className="ml-2">{link.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* Footer Privacy */}

          {/* Footer Terms */}
          <div className="grid gap-12">
            <div
              id="footer-privacy-terms"
              className="flex w-full flex-col gap-8"
            >
              <h3 className="text-base font-medium uppercase leading-6 text-primary">
                Términos y Condiciones, Preguntas Frecuentes
              </h3>
              <ul className="flex flex-col gap-0">
                {linksTerminos.map((link) => {
                  return (
                    <li key={link.id} id={`footer-navlink-${link.linkId}`}>
                      <Link
                        id={`footer-link-${link.linkId}`}
                        to={link.href}
                        className="text-white flex items-center hover:text-primary"
                      >
                        <TbPoint
                          className="text-2xl text-primary"
                          size={32}
                          title={`Visita ${link.name}`}
                          onClick={scrollToTop}
                        />
                        <span className="ml-2">{link.name}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          {/* Footer Terms */}

          {/* Footer Logo */}
          <div className="flex gap-8 items-center justify-center mx-auto w-[66vw]">
            <SocialLinks
              position={"justify-center md:justify-end"}
              color={"text-light"}
              size={26}
              circleBorder={"border-2 rounded-[100px] border-light p-3"}
              gap={"gap-4"}
              hover={"hover:text-primary hover:border-primary"}
            />
          </div>
          {/* Footer Logo */}
        </Container>
      </Section>
      <div className="bg-primary py-6 text-light">
        <div className="mx-auto flex w-[80vw] sm:w-[65vw] flex-col justify-center gap-20 text-center text-sm font-semibold sm:flex-row sm:text-left xl:max-w-screen-xl 2xl:max-w-screen-2xl">
          <h3>Derechos Reservados 2024</h3>
          <h3>
            Diseñado y Desarrollado por:{" "}
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
};
export default Footer;
