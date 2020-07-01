import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const NotFound = ({ className }) => (
  <section className={className}>
    PAGE NOT FOUND
  </section>
);

NotFound.propTypes = {
  className: PropTypes.string.isRequired,
}

export default styled(NotFound)`
  display: flex;
  color: #0b1857;
  font-size: 4em;
  min-height: 100%;
  font-weight: 400;
  background: #f4f4f7;
  align-items: center;
  justify-content: center;
`;
