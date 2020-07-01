import React from 'react';
import { format } from 'date-fns'
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import styled from 'styled-components';

import Avatar from '../assets/images/user.svg';
import { ReactComponent as NotifIcon } from '../assets/icons/notif.svg';
import { ReactComponent as CaretIcon } from '../assets/icons/chevron.svg';

function Header({ className }) {
  return (
    <header className={className}>
      <h1><Link to="/">DaUsa</Link></h1>
      <ul>
        <li className="date" >{format(new Date(), 'dd MMM yyyy')}</li>
        <li className="notif"><NotifIcon /></li>
        <li className="name">Fabien RAKOTOMAMPIANDRA</li>
        <li className="menu">
          <button className="photo">
            <img src={Avatar} alt=""/>
            <CaretIcon />
          </button>
          <ul className="settings">
            <li className="name">Fabien RAKOTOMAMPIANDRA</li>
            <li><Link to="settings">Settings</Link></li>
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
  align-items: center;
  border-bottom: 1px solid #ddd;

  h1 {
    color: #1330c0;;
    font-size: 1.5em;
    font-weight: 400;
    padding: 10px 20px;

    @media (max-width: 400px) {
      padding: 5px;
      font-size: 1.2em;
    }
  }

  >ul {
    flex: auto;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    >.date,
    >.name {
      padding: 0 20px;
      text-align: center;
    }

    >.date {
      color: #777;

      @media (max-width: 400px) {
        padding: 0 10px;
      }
    }

    >.notif {
      padding-right: 20px;

      svg {
        width: 16px;
        height: 16px;
      }

      @media (max-width: 400px) {
        padding-right: 0;
      }
    }

    >.name {
      @media (max-width: 750px) {
        display: none;
      }
    }

    >.menu {
      margin: 0 20px;
      padding: 5px 0;
      position: relative;

      >.photo {
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
        right: 0;
        top: 100%;
        z-index: 1;
        display: none;
        background: #fff;
        position: absolute;
        border-radius: 3px;
        white-space: nowrap;
        border: 1px solid #ddd;

        li {
          a {
            padding: 10px;
            display: block;

            &:hover {
              background: #eee;
            }

            &:active {
              background: #f5f5f5;
            }

            @media (max-width: 750px) {
              text-align: center;
            }
          }

          &.name {
            display: none;
            line-height: 1.7;
            padding: 5px 10px;
            text-align: center;
            background: #fafafa;
            white-space: pre-wrap;

            @media (max-width: 750px) {
              display: block;
            }
          }

          &:not(:last-of-type) {
            border-bottom: 1px solid #eee;
          }
        }
      }

      &:hover .settings {
        display: block;
      }

      @media (max-width: 400px) {
        margin: 0 10px;
      }
    }
  }
`;
