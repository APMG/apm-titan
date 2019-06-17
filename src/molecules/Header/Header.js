import React from 'react';
import classNames from 'classnames';
import Nav from './Nav';
import Logo from '../../svg/Logo';
import { navItems } from './test/data/navItems';
import PropTypes from 'prop-types';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false
    };
  }

  toggleMenu = () => {
    if (this.state.menuOpen) {
      this.setState({ menuOpen: false });
    } else {
      this.setState({ menuOpen: true });
    }
  };

  closeMenu = () => {
    this.setState({ menuOpen: false });
  };

  render() {
    const { Link } = this.props;
    const headerClasses = classNames('header', {
      'is-open': this.state.menuOpen,
      'is-closed': !this.state.menuOpen
    });

    return (
      <header className={headerClasses} data-testid="header">
        <Link
          href="/"
          className="header_logo"
          data-testid="header-logo"
          onClick={this.closeMenu}
        >
          {/* eslint-disable-next-line */}
          <a>
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

        <button className="header_navButton" onClick={this.toggleMenu}>
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
          onClick={this.closeMenu}
        />

        <div className="header_nav">
          <Nav items={navItems} closeMenu={this.closeMenu} />
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  Link: PropTypes.func
};

export default Header;
