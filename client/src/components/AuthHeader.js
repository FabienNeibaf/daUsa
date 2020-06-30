import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import styled from 'styled-components';

const AuthHeader = ({ className }) => (
  <header className={className}>
    <h1><Link to="/">DaUsa</Link></h1>
    <nav>
      <ul>
        <li>
          <Link to="/login">Sign in</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </nav>
  </header>
);

AuthHeader.propTypes = {
  className: PropTypes.string.isRequired,
}

export default styled(AuthHeader)`
  color: #fff;
  display: flex;
  background: #45f;
  align-items: center;

  h1 {
    flex: none;
    font-size: 2em;
  }

  nav {
    flex: auto;

    ul {
      display: flex;
      justify-content: flex-end;

      li {
        margin: 0 10px;
        padding: 3px 10px;
        border-radius: 2px;
        border: 1px solid #fff;
      }
    }
  }
`;
