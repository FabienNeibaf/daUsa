import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Avatar from '../assets/images/user.svg';
import { ReactComponent as DeleteIcon } from '../assets/icons/delete.svg';

function Card({ className, user }) {
  return (
    <div className={className}>
      <img src={Avatar} alt=""/>
      <p className="name">{user.fullName}</p>
      <p className="email">{user.email}</p>
      <p className="job">{user.job}</p>
      <div className="action">
        <button><DeleteIcon /></button>
      </div>
    </div>
  );
}

Card.propTypes = {
  user: PropTypes.shape({}).isRequired,
  className: PropTypes.string.isRequired,
}

export default styled(Card)`
  background: #fff;
  padding-top: 20px;
  border-radius: 5px;
  position: relative;

  img {
    margin: auto;
    width: 95px;
    height: 95px;
    display: block;
    border-radius: 50%;
    background: #eee;
  }

  p {
    text-align: center;

    &.name, &.email {
      padding: 5px 10px;
    }

    &.name {
      font-weight: 500;
    }

    &.email {
      color: #777;
      margin-bottom: 20px;
    }

    &.job {
      color: #888;
      padding: 10px;
      font-weight: 400;
      background: #fbfbfd;
      text-transform: uppercase;
      border-top: 1px solid #eee;
    }
  }

  .action {
    top: 5px;
    right: 5px;
    position: absolute;

    button {
      padding: 10px;

      svg {
        fill: #555;
        width: 13px;
        height: 13px;
      }

      &:hover {
        background: #ddd;
        border-radius: 50%;
      }
    }
  }
`;
