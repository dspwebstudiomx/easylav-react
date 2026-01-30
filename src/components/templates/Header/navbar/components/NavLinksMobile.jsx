import { SocialLinks } from 'components';
import { navLinksPages, navLinksSections } from 'data/navlinks';
import { scrollWithOffset } from 'functions';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import { useState } from 'react';
import scrollToTop from 'functions/scrollToTop';

const NavLinksMobile = ({ onLinkClick }) => {
  const [activeSection, setActiveSection] = useState('');

  return (
    <div className="animate__animated animate__fadeInDown absolute left-0 top-[104px] z-10 flex h-[95vh] w-full flex-col items-center justify-start overflow-hidden border-t-4 border-t-primary bg-primary dark:bg-secondary_dark px-8">
      <ul id="navlinks-mobile" className="grid w-full grid-cols-2 gap-3 px-2 py-8 place-content-center">
        {navLinksSections.map((navlink) => {
          const isActive = activeSection === navlink.linkId;
          const colorClass = isActive ? 'text-primary_dark font-bold' : 'text-secondary_dark font-bold';
          return (
            <li
              id={`navlink-${navlink.linkId}`}
              key={navlink.id}
              className="flex h-[140px] items-center justify-center rounded-2xl border-4 border-primary_dark bg-light p-4 shadow-2xl">
              <NavHashLink
                id={`link-${navlink.linkId}`}
                to={navlink.href}
                className={`flex h-full w-full flex-col items-center justify-center gap-4 py-2 ${colorClass}`}
                scroll={scrollWithOffset}
                onClick={
                  navlink.name === 'Inicio'
                    ? onLinkClick
                    : () => {
                        setActiveSection(navlink.linkId);
                        if (onLinkClick) onLinkClick();
                      }
                }
                title={`link-${navlink.linkId}`}>
                <div className="flex items-center justify-center">
                  {navlink.icon && (
                    <navlink.icon size={32} className={isActive ? 'text-primary_dark' : 'text-secondary_dark'} />
                  )}
                </div>
                <span className="text-sm uppercase tracking-wide text-center">{navlink.name}</span>
              </NavHashLink>
            </li>
          );
        })}
        {navLinksPages.map((navlink) => {
          return (
            <li
              id={`navlink-${navlink.linkId}`}
              key={navlink.id}
              className="flex h-[140px] items-center justify-center rounded-2xl border-4 border-primary_dark bg-light p-4 shadow-xl">
              <NavLink
                id={`link-${navlink.linkId}`}
                to={navlink.href}
                className={({ isActive }) => {
                  const colorClass = isActive ? 'text-primary_dark font-bold' : 'text-secondary_dark font-bold';
                  return `flex h-full w-full flex-col items-center justify-center gap-4 py-2 ${colorClass}`;
                }}
                onClick={() => {
                  setActiveSection('');
                  scrollToTop();
                  if (onLinkClick) onLinkClick();
                }}
                title={`link-${navlink.linkId}`}>
                {({ isActive }) => (
                  <>
                    <div className="flex items-center justify-center">
                      {navlink.icon && (
                        <navlink.icon size={32} className={isActive ? 'text-primary_dark' : 'text-secondary_dark'} />
                      )}
                    </div>
                    <span className="text-base uppercase tracking-wide text-center">{navlink.name}</span>
                  </>
                )}
              </NavLink>
            </li>
          );
        })}
      </ul>
      <div className="mt-2">
        <SocialLinks
          position={'justify-center md:0justify-end'}
          color={'text-secondary_dark'}
          size={30}
          circleBorder={'border-2 rounded-[100px] border-primary_dark shadow-xl bg-light p-3'}
          gap={'gap-3'}
          hover={'hover:text-primary hover:border-primary'}
          onClick={onLinkClick}
        />
      </div>
    </div>
  );
};

NavLinksMobile.propTypes = {
  toogleNav: PropTypes.any,
  onLinkClick: PropTypes.any,
};

export default NavLinksMobile;
