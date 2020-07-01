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
  padding: 7px;
  display: flex;
  background: #1330c0;
  align-items: center;

  h1 {
    flex: none;
    font-size: 2em;
    padding: 0 10px;
    font-weight: 400;

    @media (max-width: 500px) {
      font-size: 1.5em;
    }
  }

  nav {
    flex: auto;

    ul {
      display: flex;
      padding-right: 5%;
      justify-content: flex-end;

      li {
        margin: 0 1em;

        a {
          display: block;
          font-weight: 400;
          padding: 5px 15px;
          border-radius: 2px;
          background: #2b36d9;
          border: 1px solid transparent;

          &:hover {
            border-color: #6d85ff;
          }
        }
      }

      @media (max-width: 310px) {
        padding-right: 0;

        li {
          margin: 0 5px;
        }
      }
    }
  }
`;
