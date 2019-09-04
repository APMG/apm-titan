import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

const Nav = ({ items }) => {
  return (
    <nav className="nav">
      <ul className="nav_list">
        {items.map((item, index) => (
          <li key={index} className="nav_item">
            <Link href={item.to} className="nav_link">
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Nav.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      icon: PropTypes.string,
      to: PropTypes.string
    })
  )
};

export default Nav;
