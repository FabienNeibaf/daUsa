import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Link } from '@reach/router';
import { ReactComponent as MoreIcon } from '../assets/icons/more.svg';
import { ReactComponent as CaretIcon } from '../assets/icons/chevron.svg';
import { ReactComponent as PowerIcon } from '../assets/icons/turn-off.svg';

function Nav({ className }) {
  return (
    <div className={className}>
      <div className="toggler">
        <MoreIcon />
        <CaretIcon />
      </div>
      <button className="add">Add User</button>
      <ul>
        <li className="active">
          <Link to="/people">People</Link>
        </li>
      </ul>
      <Link to="/signout" className="signout">
        <PowerIcon />
      </Link>
    </div>
  );
}

Nav.propTypes = {
  className: PropTypes.string.isRequired,
}

export default styled(Nav)`
  flex: none;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #ddd;

  .toggler {
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      &:first-of-type {
        width: 40px;
        height: 40px;
        margin-right: 5px;
        border-radius: 50%;
        border: 7px solid #eee;
      }
      &:last-of-type {
        width: 10px;
        height: 10px;
      }
    }
  }

  .add {
    color: #fff;
    display: block;
    background: #1330c0;
    padding: 2px 10px;
    margin: 50px auto;
    border-radius: 2px;
  }

  ul {
    flex: auto;
    li {
      a {
        display: block;
        font-weight: 400;
        min-width: 150px;
        padding: 5px 10px;
      }

      &.active {
        a {
          background: #f5f5f5;
          border-left: 3px solid #1330c0;
        }
      }
    }
  }

  .signout {
    display: block;
    margin: 20px auto;

    svg {
      fill: #1330c0;
      width: 40px;
      height: 40px;
    }
  }
`;
