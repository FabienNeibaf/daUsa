import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Login = ({ className }) => (
  <section className={className}>
    PAGE NOT FOUND
  </section>
);

Login.propTypes = {
  className: PropTypes.string.isRequired,
}

export default styled(Login)`
  display: flex;
  color: #0b1857;
  font-size: 3em;
  min-height: 100%;
  font-weight: 500;
  background: #f4f4f7;
  align-items: center;
  justify-content: center;
`;
