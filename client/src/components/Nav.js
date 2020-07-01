import PropTypes from 'prop-types';
import styled from 'styled-components';
import React, { useState } from 'react';

import { Link } from '@reach/router';
import { ReactComponent as MoreIcon } from '../assets/icons/more.svg';
import { ReactComponent as UsersIcon } from '../assets/icons/users.svg';
import { ReactComponent as CaretIcon } from '../assets/icons/chevron.svg';
import { ReactComponent as PowerIcon } from '../assets/icons/turn-off.svg';
import { ReactComponent as AddUserIcon } from '../assets/icons/add-user.svg';

function Nav({ className }) {
  const [email, setEmail] = useState('');
  const [shrinked, shrink] = useState(false);
  const [addUserForm, showAddUserForm] = useState(false);
  const [confirm, showConfirmation] = useState(false);

  const handleAddUserClick = () => {
    showAddUserForm(!addUserForm);
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    showAddUserForm(false);
    showConfirmation(true);
  };

  const cancelRequest = () => {
    setEmail('');
    showConfirmation(false);
  };

  const confirmRequest = () => {
    setEmail('');
    showConfirmation(false);
  };

  const toggle = () => {
    shrink(!shrinked);
  };


  return (
    <div className={`${className}${shrinked ? ' shrinked' : ''}`}>
      <button className="toggler" onClick={toggle}>
        <MoreIcon />
        <CaretIcon />
      </button>
      <div className="add-user">
        <button className="add" onClick={handleAddUserClick}>
          <AddUserIcon />
          <span>Add User</span>
        </button>
        <form onSubmit={handleSubmit} className={addUserForm ? 'show' : ''}>
          <label>
            <span>Enter the email of the user</span>
            <input type="email" value={email} onChange={handleChange} />
          </label>
          <button type="submit">Send Request</button>
        </form>
        <div className={`confirmation${confirm ? ' show' : ''}`}>
          <h4>
            A request will be sent to
            <span className="email">{email}</span>
          </h4>
          <div className="action">
            <button className="cancel" onClick={cancelRequest}>Cancel</button>
            <button className="ok" onClick={confirmRequest}>OK</button>
          </div>
        </div>
      </div>
      <ul>
        <li className="active">
          <Link to="/">
            <UsersIcon />
            <span>People</span>
          </Link>
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
    max-width: 100%;
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

  .add-user {
    position: relative;

    .add {
      color: #fff;
      display: flex;
      padding: 2px 10px;
      margin: 50px auto;
      border-radius: 2px;
      background: #1330c0;
      align-items: center;

      svg {
        fill: #fff;
        width: 13px;
        height: 13px;
        margin-right: 7px;
      }
    }

    form,
    .confirmation {
      top: 50%;
      left: calc(100% - 10px);
      z-index: 1;
      display: none;
      padding: 15px;
      min-width: 250px;
      background: #fff;
      position: absolute;
      border-radius: 5px;
      border: 1px solid #acb2ca;
      transform: translateY(-50%);

      &.show {
        display: block;
      }
    }

    form {
      label, button[type=submit] {
        display: block;
      }

      label {
        margin-bottom: 10px;

        >* {
          display: block;
        }

        span {
          font-size: 1.2em;
          font-weight: 400;
          text-align: center;
        }

        input {
          width: 100%;
          margin: 10px 0;
          padding: 2px 5px;
          border-radius: 2px;
          border: 1px solid #aaa;
        }
      }

      button[type=submit] {
        color: #fff;
        margin: auto;
        font-weight: 400;
        padding: 5px 15px;
        border-radius: 2px;
        background: #1330c0;
      }
    }

    .confirmation {
      h4 {
        font-size: 1.2em;
        font-weight: 400;
        text-align: center;

        .email {
          color: #b99d04;
          display: block;
          font-weight: 300;
          margin-top: 10px;
          text-align:center;
        }
      }

      .action {
        display: flex;
        margin-top: 20px;
        justify-content: center;

        button {
          width: 60px;
          margin: 0 10px;
          padding: 2px 10px;
          border-radius: 2px;

          &.cancel {
            background: #ddd;
          }

          &.ok {
            color: #fff;
            background: #1330c0;
          }
        }
      }
    }
  }

  ul {
    flex: auto;
    li {
      a {
        display: flex;
        font-weight: 400;
        min-width: 150px;
        padding: 10px;
        align-items: center;
        border-left: 3px solid transparent;

        svg {
          width: 16px;
          height: 16px;
          margin-right: 5px;
        }
      }

      &.active {
        a {
          background: #f5f5f5;
          border-left-color: #1330c0;
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

  &.shrinked {
    .toggler svg {
      &:first-of-type {
        margin-right: 0;
      }

      &:last-of-type {
        display: none;
      }
    }

    .add-user .add {
      padding: 10px;
      margin: 50px auto;
      border-radius: 50%;

      svg {
        width: 16px;
        height: 16px;
        margin-right: 0;
      }

      span {
        display: none;
      }
    }

    ul > li > a {
      padding: 10px;
      min-width: auto;
      justify-content: center;

      svg {
        width: 17px;
        height: 17px;
        margin-right: 0;
      }

      span {
        display: none;
      }
    }
  }

  @media (max-width: 700px) {
    .toggler svg {
      &:first-of-type {
        margin-right: 0;
      }

      &:last-of-type {
        display: none;
      }
    }

    .add-user .add {
      padding: 10px;
      margin: 50px auto;
      border-radius: 50%;

      svg {
        width: 16px;
        height: 16px;
        margin-right: 0;
      }

      span {
        display: none;
      }
    }

    ul > li > a {
      padding: 10px;
      min-width: auto;
      justify-content: center;

      svg {
        width: 17px;
        height: 17px;
        margin-right: 0;
      }

      span {
        display: none;
      }
    }
  }

  @media (max-width: 400px) {
    .toggler {
      padding: 10px 5px;

      svg:first-of-type {
        width: 35px;
        height: 35px;
      }
    }

    .add-user .add svg {
      width: 13px;
      height: 13px;
    }

    ul > li > a svg {
      width: 15px;
      height: 15px;
    }

    .signout svg {
      width: 30px;
      height: 30px;
    }
  }
`;
