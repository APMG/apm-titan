import React from 'react';
import { Link } from '@reach/router';
import PropTypes from 'prop-types';

const Nav = (props) => {
  return (
    <nav className="nav">
      <ul className="nav_list">
        {props.items.map((item, index) => (
          <li key={index} className="nav_item">
            <Link to={item.to} className="nav_link" onClick={props.closeMenu}>
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Nav.propTypes = {
  closeMenu: PropTypes.func,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      icon: PropTypes.string,
      to: PropTypes.string
    })
  )
};

export default Nav;
