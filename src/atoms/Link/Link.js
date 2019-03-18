import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from '@reach/router';

// NOTE: this component does not support hash links (internal anchor links)
//       because reach router doesn't support them. If support becomes
//       available or switching to react-router-v4+ HashLink component,
//       this component can be modified to support them.
// const hostReg = new RegExp(this.host);
const protocolReg = /^(http:\/\/|https:\/\/|\/\/)/;

class Link extends Component {
  constructor(props) {
    super(props);

    this.state = {
      host: '',
      hostReg: ''
    };
  }

  componentDidMount() {
    this.setState({
      host: window.location.host,
      hostReg: new RegExp(this.host)
    });
  }

  pathname(url) {
    return url.replace(protocolReg, '').replace(this.state.hostReg, '');
  }

  isHostnameMatch(url) {
    return (
      url
        .replace(protocolReg, '')
        .substring(this.state.hostReg, this.state.host.length) ===
      this.state.host
    );
  }

  isExternalUrl(url) {
    return protocolReg.test(url);
  }

  render() {
    const { to, children, ...rest } = this.props;

    if (this.isHostnameMatch(to)) {
      return (
        <RouterLink to={this.pathname(to)} {...rest} data-testid="hostnameLink">
          {children}
        </RouterLink>
      );
    } else if (this.isExternalUrl(to)) {
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
  }
}

Link.propTypes = {
  // Children are required because even if the link is styled with a class it should have text inside for accessibility
  children: PropTypes.any.isRequired,
  to: PropTypes.string.isRequired
};

export default Link;
