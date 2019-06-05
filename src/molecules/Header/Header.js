import React, { useState } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import Nav from './Nav';
import Logo from '../../svg/Logo';
import { navItems } from './test/data/navItems';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerClasses = classNames('header', {
    'is-open': menuOpen,
    'is-closed': !menuOpen
  });

  const toggleMenu = () => {
    if (menuOpen) {
      setMenuOpen(false);
    } else {
      setMenuOpen(true);
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={headerClasses} data-testid="header">
      <Link href="/">
        <a
          href="/"
          onClick={closeMenu}
          className="header_logo"
          data-testid="header-logo"
        >
          <div className="header_logoImg">
            <Logo />
          </div>
          <div
            style={{
              fontSize: '16px',
              fontWeight: 600,
              lineHeight: 1,
              textTransform: 'uppercase'
            }}
          >
            APM Components
          </div>
        </a>
      </Link>

      <button
        className="header_navButton"
        onClick={toggleMenu}
        id="navButton"
        aria-haspopup="true"
        aria-controls="navMenu"
      >
        <div className="navIcon">
          <span />
          <span />
          <span />
        </div>
        <span className="invisible">Menu</span>
      </button>

      {/* disabling these eslint jsx-a11y features because this element is for convenience; the menu can still be closed through other means */}
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
      <div
        className="header_navBg"
        data-testid="header-closenav"
        onClick={closeMenu}
      />

      <div className="header_nav">
        <Nav items={navItems} closeMenu={closeMenu} />
      </div>
    </header>
  );
};

export default Header;
