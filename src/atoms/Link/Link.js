import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

// NOTE: this component does not support hash links (internal anchor links)
//       because reach router doesn't support them. If support becomes
//       available or switching to react-router-v4+ HashLink component,
//       this component can be modified to support them.

const TitanLink = (props) => {
  const {
    href,
    as,
    children,
    className,
    activeClassName,
    currentPath,
    ...rest
  } = props;
  const host = typeof window !== 'undefined' ? window.location.host : '';
  const hostReg = new RegExp(host);
  const protocolReg = /^(http:\/\/|https:\/\/|\/\/)/;

  // Provide the url without 'http://', 'https://', or '//'
  function urlWithoutProtocol(url) {
    return url.replace(protocolReg, '');
  }

  // Get the url without the protocol or domain (host)
  function pathname(url) {
    return urlWithoutProtocol(url).replace(hostReg, '');
  }

  // Determine if url's hostname matches the website's hostname
  //
  // Disabling this function for now;
  // TODO: set up a global config for Titan that can pass in the hostname from the site
  // eslint-disable-next-line
  function isHostnameMatch(url) {
    // return urlWithoutProtocol(url).substring(hostReg, host.length) === host;
    return false;
  }

  // Checks for 'http://', 'https://', or '//' at the beginning of a string
  function isExternalUrl(url) {
    return protocolReg.test(url);
  }

  let fullClassName = className;
  if (activeClassName && currentPath == href) {
    fullClassName = className
      ? `${className} ${activeClassName}`
      : activeClassName;
  }

  if (isHostnameMatch(href)) {
    return (
      <Link
        {...rest}
        href={pathname(href)}
        as={as}
        className={fullClassName}
        data-testid="hostnameLink"
      >
        {children}
      </Link>
    );
  } else if (isExternalUrl(href)) {
    return (
      <a
        href={href}
        {...rest}
        className={fullClassName}
        data-testid="externalLink"
      >
        {children}
      </a>
    );
  } else {
    return (
      <Link
        {...rest}
        href={href}
        as={as}
        className={fullClassName}
        data-testid="relativeLink"
      >
        {children}
      </Link>
    );
  }
};

TitanLink.propTypes = {
  // Children are required because even if the link is styled with a class it should have text inside for accessibility
  children: PropTypes.any.isRequired,
  href: PropTypes.string.isRequired,
  as: PropTypes.string,
  className: PropTypes.string,
  activeClassName: PropTypes.string,
  currentPath: PropTypes.string
};

export default TitanLink;
