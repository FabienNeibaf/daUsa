import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Router } from '@reach/router';

import Nav from './Nav';
import Header from './Header';
import People from './People';
import Settings from './Settings';

function Home({ className }) {
  return (
    <section className={className}>
      <Nav />
      <div className="col">
        <Header />
        <Router className="router">
          <People path="/" />
          <Settings path="/settings" user={{}} />
        </Router>
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

    .router {
      flex: auto;
    }
  }
`;
