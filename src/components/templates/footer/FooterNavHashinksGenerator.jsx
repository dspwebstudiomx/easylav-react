import { scrollWithOffset } from 'functions';
import PropTypes from 'prop-types';
import { TbPoint } from 'react-icons/tb';
import { NavHashLink } from 'react-router-hash-link';

export default function FooterNavHashLinksGenerator({ links }) {
  const classes = {
    footerSectionsList: 'grid gap-3 text-lg xl:text-sm text-light',
  };
  return (
    <ul className={classes.footerSectionsList}>
      {links.map((link) => {
        return (
          <li key={link.id} id={`footer-navlink-${link.linkId}`}>
            <NavHashLink
              id={`footer-link-${link.linkId}`}
              to={link.href}
              className="text-white flex items-center hover:text-primary"
              scroll={(el) => scrollWithOffset(el)}
              title={`Visita ${link.name}`}>
              <TbPoint className="text-2xl text-primary" size={20} />
              <span className="ml-2">{link.name}</span>
            </NavHashLink>
          </li>
        );
      })}
    </ul>
  );
}
FooterNavHashLinksGenerator.propTypes = {
  links: PropTypes.array,
};
