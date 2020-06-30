import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
      font-size: 1.2em;
      color: #24244e;
      font-weight: 500;
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
          color: #555;
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
      }
    }
  }
`;
