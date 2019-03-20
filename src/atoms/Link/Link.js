import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from '@reach/router';

// NOTE: this component does not support hash links (internal anchor links)
//       because reach router doesn't support them. If support becomes
//       available or switching to react-router-v4+ HashLink component,
//       this component can be modified to support them.

export const Link = (props) => {
  const { to, children, ...rest } = props;
  const host =
    typeof window === 'undefined' ? global.host : window.location.host;
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
  function isHostnameMatch(url) {
    return urlWithoutProtocol(url).substring(hostReg, host.length) === host;
  }

  // Checks for 'http://', 'https://', or '//' at the beginning of a string
  function isExternalUrl(url) {
    return protocolReg.test(url);
  }

  if (isHostnameMatch(to)) {
    return (
      <RouterLink to={pathname(to)} {...rest} data-testid="hostnameLink">
        {children}
      </RouterLink>
    );
  } else if (isExternalUrl(to)) {
    return (
      <a href={to} {...rest} data-testid="externalLink">
        {children}
      </a>
    );
  } else {
    return (
      <RouterLink to={to} {...rest} data-testid="relativeLink">
        {children}
      </RouterLink>
    );
  }
};

Link.propTypes = {
  // Children are required because even if the link is styled with a class it should have text inside for accessibility
  children: PropTypes.any.isRequired,
  to: PropTypes.string.isRequired
};

export default Link;
