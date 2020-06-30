import React from 'react';
import { format } from 'date-fns'
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import styled from 'styled-components';

import Avatar from '../assets/images/user.svg';
import { ReactComponent as CaretIcon } from '../assets/icons/chevron.svg';

function Header({ className }) {
  return (
    <header className={className}>
      <h1>DaUsa</h1>
      <ul>
        <li className="date" >{format(new Date(), 'dd MMM yyyy')}</li>
        <li className="name">Fabien RAKOTOMAMPIANDRA</li>
        <li className="menu">
          <button className="photo">
            <img src={Avatar} alt=""/>
            <CaretIcon />
          </button>
          <ul className="settings">
            <li><Link to="/settings">Settings</Link></li>
            <li><Link to="/signout">Sign out</Link></li>
          </ul>
        </li>
      </ul>
    </header>
  );
}

Header.propTypes = {
  className: PropTypes.string.isRequired,
}

export default styled(Header)`
  flex: none;
  width: 100%;
  display: flex;
  border-bottom: 1px solid #ddd;

  h1 {
    font-weight: 700;
    padding: 10px 20px;
  }

  >ul {
    flex: auto;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .date,
    .name {
      padding: 0 20px;
    }

    .date {
      color: #777;
    }

    .menu {
      margin: 0 20px;
      padding: 5px 0;
      position: relative;

      .photo {
        display: flex;
        align-items: center;

        img {
          width: 30px;
          height: 30px;
          background: #eee;
          border-radius: 50%;
        }

        svg {
          width: 10px;
          height: 10px;
          margin-left: 10px;
        }
      }

      .settings {
        top: 100%;
        right: 0;
        display: none;
        background: #fff;
        position: absolute;
        border-radius: 3px;
        white-space: nowrap;
        border: 1px solid #ddd;

        li {
          a {
            display: block;
            padding: 5px 10px;

            &:hover {
              background: #eee;
            }

            &:active {
              background: #f5f5f5;
            }
          }
        }
      }

      &:hover .settings {
        display: block;
      }
    }
  }
`;
