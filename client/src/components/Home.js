import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Nav from './Nav';
import Header from './Header';
import People from './People';

function Home({ className }) {
  return (
    <section className={className}>
      <Nav />
      <div className="col">
        <Header />
        <People />
      </div>
    </section>
  );
}

Home.propTypes = {
  className: PropTypes.string.isRequired,
}

export default styled(Home)`
  height: 100vh;
  display: flex;
  overflow: auto;
  background: #fff;

  .col {
    flex: auto;
    display: flex;
    overflow: auto;
    flex-direction: column;
  }
`;
