import PropTypes from 'prop-types';
import styled from 'styled-components';
import React, { useState } from 'react';

import Card from './Card';
import { ReactComponent as SearchIcon } from '../assets/icons/search.svg';

const users = [
  { id: 1, fullName: 'John Dark', email: 'johndark@gmail.com', 'job': 'Executive Officer'},
  { id: 2, fullName: 'John Dark', email: 'johndark@gmail.com', 'job': 'Executive Officer'},
  { id: 3, fullName: 'John Dark', email: 'johndark@gmail.com', 'job': 'Executive Officer'},
  { id: 4, fullName: 'John Dark', email: 'johndark@gmail.com', 'job': 'Executive Officer'},
  { id: 5, fullName: 'John Dark', email: 'johndark@gmail.com', 'job': 'Executive Officer'},
  { id: 6, fullName: 'John Dark', email: 'johndark@gmail.com', 'job': 'Executive Officer'},
  { id: 7, fullName: 'John Dark', email: 'johndark@gmail.com', 'job': 'Executive Officer'},
  { id: 8, fullName: 'John Dark', email: 'johndark@gmail.com', 'job': 'Executive Officer'},
]

function Main({ className }) {
  const email = 'dfafafa';
  const showDeletionConfirmation = false;
  const [state, setState] = useState({ email: '' });

  const handleChange = (e) => {
    setState({ email: e.target.value });
  }

  const cancelDeletion = (e) => {
    e.preventDefault();
  };

  const confirmUserDeletion = (e) => {
    e.preventDefault();
  };

  return (
    <main className={className}>
      <header>
        <h2>People</h2>
        <div className="search">
          <input type="text" placeholder="Search by name" />
          <SearchIcon />
        </div>
      </header>
      <section>
        <ul className="users">
          {users.map((user) => (
            <li key={user.id}>
              <Card user={user} />
            </li>
          ))}
        </ul>
      </section>
      {showDeletionConfirmation ? (
        <form onSubmit={confirmUserDeletion} className="user-del-form">
          <label>
            <span>Re-enter the email below for confirmation</span>
            <span>{email}</span>
            <input type="email" value={state.email} onChange={handleChange} />
          </label>
          <div className="action">
            <button className="cancel" onClick={cancelDeletion}>Cancel</button>
            <button type="submit">Delete User</button>
          </div>
        </form>
      ) : ''}
    </main>
  );
}

Main.propTypes = {
  className: PropTypes.string.isRequired,
}

export default styled(Main)`
  flex: auto;
  padding: 20px;
  overflow: auto;
  background: #f4f4f7;

  header {
    display: flex;
    padding: 10px 0;
    align-items: center;
    border-bottom: 1px solid #ccc;

    h2 {
      color: #24244e;
      font-size: 1.3em;
      font-weight: 400;

      @media (max-width: 300px) {
        font-size: 1.1em;
      }
    }

    .search {
      flex: auto;
      overflow: auto;
      position: relative;
      padding-left: 20px;

      input {
        width: 100%;
        float: right;
        display: block;
        max-width: 300px;
        border-radius: 3px;
        background: #ecedf6;
        padding: 3px 25px 3px 5px;

        ::placeholder {
          color: #333;
        }
      }

      svg {
        top: 50%;
        right: 5px;
        fill: #222;
        width: 17px;
        height: 17px;
        position: absolute;
        transform: translateY(-50%);
        -webkit-transform: translateY(-50%);
      }
    }
  }

  section {
    margin-top: 20px;

    .users {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      li {
        padding: 1em;
        min-width: 240px;
        max-width: 240px;

        @media (max-width: 290px) {
          min-width: 200px;
          max-width: 200px;
        }
      }
    }
  }

  .user-del-form {
    top: 10%;
    left: 50%;
    z-index: 10;
    padding: 15px;
    position: fixed;
    min-width: 300px;
    background: #fff;
    border-radius: 5px;
    border: 1px solid #b22;
    transform: translateX(-50%);

    label, button[type=submit] {
      display: block;
    }

    label {
      margin-bottom: 10px;

      >* {
        display: block;
      }

      span {
        text-align: center;

        &:first-of-type {
          font-size: 1.2em;
          font-weight: 400;
        }
        &:last-of-type {
          color: #b74914;
          padding: 5px 0;
          font-size: 1.1em;
        }
      }

      input {
        width: 100%;
        margin: 10px 0;
        padding: 2px 5px;
        border-radius: 2px;
        border: 1px solid #aaa;
      }
    }

    .action {
      display: flex;
      justify-content: center;

      button {
        margin: 5px;
        width: 100px;
        font-weight: 400;
        padding: 5px 15px;
        border-radius: 2px;

        &.cancel {
          background: #ddd;
        }

        &[type=submit] {
          color: #fff;
          background: #b22;
        }
      }
    }
  }

  @media (max-width: 300px) {
    padding: 5px;
  }
`;
