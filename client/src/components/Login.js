import PropTypes from 'prop-types';
import styled from 'styled-components';
import React, { useState } from 'react';

import AuthHeader from './AuthHeader';
import { validateEmail } from '../utils';

const Login = ({ className }) => {
  const [state, setState] = useState({email: '', password: '', error: {}});

  const handleChange = (e) => {
    const { name, value } = e.target;
    const error = { ...state.error };

    if (name === 'email') {
      error.email = value && !validateEmail(value) ? 'Invalid Email' : '';
    }

    setState((prev) => ({ ...prev, [name]: value, error }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className={className}>
      <AuthHeader />
      <form onSubmit={handleSubmit}>
        <h3>Authentication</h3>
        <label>
          <span>Email</span>
          <input type="email" name="email" value={state.email} onChange={handleChange} />
          <div className="error">{state.error.email}</div>
        </label>
        <label>
          <span>Password</span>
          <input type="password" name="password" value={state.password} onChange={handleChange} />
        </label>
        <button type="submit">Sign in</button>
        <div className="register">
          Don't have an account? <a href="/register">Register</a>
        </div>
      </form>
    </section>
  );
};

Login.propTypes = {
  className: PropTypes.string.isRequired,
}

export default styled(Login)`
  min-height: 100vh;
  background: #f4f4f7;

  form {
    max-width: 325px;
    background: #fff;
    border-radius: 5px;
    margin: 60px auto 20px;

    h3 {
      color: #0b1857;
      font-size: 2em;
      font-weight: 300;
      text-align: center;
      padding: 10px 20px;
      margin-bottom: 10px;

      @media (max-width: 500px) {
        font-size: 1.5em;
      }
    }

    label, span, input, button[type=submit] {
      display: block;
    }

    label {
      padding: 0 20px;
      position: relative;

      span {
        font-weight: 400;
        margin-bottom: 5px;
      }

      input {
        width: 100%;
        border: none;
        padding: 3px 5px;
        font-weight: 300;
        border-radius: 3px;
        background: #f3f3f4;
      }

      &:not(:last-of-type) {
        margin-bottom: 20px;
      }

      .error {
        top: 100%;
        color: #f00;
        font-size: .85em;
        position: absolute;
      }
    }

    button[type=submit] {
      color: #fff;
      margin: 30px auto;
      min-width: 150px;
      font-weight: 500;
      padding: 5px 20px;
      border-radius: 2px;
      background: #978600;
    }

    @media (max-width: 310px) {
      max-width: 95%;
    }
  }

  .register {
    padding: 10px 20px;
    text-align: center;
    background: #fafafb;
    border-radius: 0 0 5px 5px;

    a {
      color: #1330c0;
    }
  }
`;
