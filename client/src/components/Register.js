import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import AuthHeader from './AuthHeader';

const Register = ({ className }) => (
  <section className={className}>
    <AuthHeader />
    <form action="">
      <h3>Create an account</h3>
      <label>
        <span>First Name</span>
        <input type="text"/>
      </label>
      <label>
        <span>Last Name</span>
        <input type="text"/>
      </label>
      <label>
        <span>Job</span>
        <input type="text"/>
      </label>
      <label>
        <span>Email</span>
        <input type="email"/>
      </label>
      <label>
        <span>Password</span>
        <input type="text"/>
      </label>
      <label>
        <span>Confirmation Password</span>
        <input type="text"/>
      </label>
      <button type="submit">Submit</button>
      <div className="login">
        Have an account? <a href="/login">Login</a>
      </div>
    </form>
  </section>
);

Register.propTypes = {
  className: PropTypes.string.isRequired,
}

export default styled(Register)`
  background: #f7f7f7;

  form {
    margin: 20px auto;
    max-width: 500px;
    background: #fff;
    border-radius: 5px;
    padding: 0 20px 20px;
    border: 1px solid #ccc;

    h3 {
      font-size: 1.2em;
      font-weight: 700;
      padding: 20px 10px;
      text-align: center;
    }

    label, span, input, button[type=submit] {
      display: block;
    }

    label {
      margin-bottom: 20px;

      span {
        font-weight: 700;
        margin-bottom: 5px;
      }
      input {
        width: 100%;
        padding: 5px;
        border-radius: 2px;
        border: 1px solid #aaa;
      }
    }

    button[type=submit] {
      color: #fff;
      margin: auto;
      min-width: 200px;
      background: #45f;
      font-weight: 700;
      padding: 5px 20px;
      border-radius: 2px;
    }
  }

  .login {
    margin-top: 20px;
    text-align: center;

    a {
      color: #fe3;
    }
  }
`;
