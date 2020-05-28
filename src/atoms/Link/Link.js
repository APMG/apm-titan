import React from 'react';
import PropTypes from 'prop-types';
import RouterLink from 'next/link';
import { useRouter } from 'next/router';

// NOTE: this component does not support hash links (internal anchor links)
//       because reach router doesn't support them. If support becomes
//       available or switching to react-router-v4+ HashLink component,
//       this component can be modified to support them.

const Link = (props) => {
  const { href, as, children, className, activeClassName, ...rest } = props;
  const host = typeof window !== 'undefined' ? window.location.host : '';
  const hostReg = new RegExp(host);
  const protocolReg = /^(http:\/\/|https:\/\/|\/\/)/;
  const router = useRouter();

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
  const currentPath = router?.asPath || router?.pathname; //prefer asPath if it exists
  if (activeClassName && currentPath == href) {
    fullClassName = className
      ? `${className} ${activeClassName}`
      : activeClassName;
  }

  if (isHostnameMatch(href)) {
    return (
      <RouterLink href={pathname(href)} as={as}>
        <a {...rest} className={fullClassName} data-testid="hostnameLink">
          {children}
        </a>
      </RouterLink>
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
      <RouterLink href={href} as={as}>
        <a {...rest} className={fullClassName} data-testid="relativeLink">
          {children}
        </a>
      </RouterLink>
    );
  }
};

Link.propTypes = {
  // Children are required because even if the link is styled with a class it should have text inside for accessibility
  children: PropTypes.any.isRequired,
  href: PropTypes.string.isRequired,
  as: PropTypes.string,
  className: PropTypes.string,
  activeClassName: PropTypes.string
};

export default Link;
