import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ButtonLink({ to, className, children }) {
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}

ButtonLink.defaultProps = {
  to: '',
  className: '',
  children: React.ReactNode,
};

ButtonLink.propTypes = {
  to: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default ButtonLink;
