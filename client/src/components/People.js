import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Main from './Main';

function People({ className }) {
  return (
    <div className={className}>
      <Main />
    </div>
  );
}

People.propTypes = {
  className: PropTypes.string.isRequired,
}

export default styled(People)`
  flex: auto;
  display: flex;
  overflow: auto;
`;
