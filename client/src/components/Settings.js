import PropTypes from 'prop-types';
import styled from 'styled-components';
import React , { useState } from 'react';


const Settings = ({ className, user }) => {
  const [state, setState] = useState({
    currentPassword: '', newPassword: '', confirmPassword: '', error: {}
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const confirmPasswordChange = (e) => {
    e.preventDefault();
  };

  return (
    <section className={className}>
      <div className="container">
        <h2>Settings</h2>
        <div className="field">
          <p className="title">First Name</p>
          <p className="value">{user.firstName}</p>
        </div>
        <div className="field">
          <p className="title">Last Name</p>
          <p className="value">{user.lastName}</p>
        </div>
        <div className="field">
          <p className="title">Job</p>
          <p className="value">{user.job}</p>
        </div>
        <div className="field">
          <p className="title">Email</p>
          <p className="value">{user.email}</p>
        </div>
        <h4>Change Password</h4>
        <form onSubmit={confirmPasswordChange}>
          <label>
            <span>Current Password</span>
            <input type="password" name="currentPassword" value={state.currentPassword} onChange={handleChange} />
          </label>
          <label>
            <span>New Password</span>
            <input type="password" name="newPassword" value={state.newPassword} onChange={handleChange} />
            <p className="error">{state.error.newPassword}</p>
          </label>
          <label>
            <span>Confirm Password</span>
            <input type="password" name="confirmPassword" value={state.confirmPassword} onChange={handleChange} />
            <p className="error">{state.error.confirmPassword}</p>
          </label>
          <div className="action">
            <button type="submit">Change Password</button>
          </div>
        </form>
      </div>
    </section>
  );
};

Settings.propTypes = {
  user: PropTypes.shape({}).isRequired,
  className: PropTypes.string.isRequired,
}

export default styled(Settings)`
  padding: 20px;
  min-height: 100%;
  background: #f4f4f7;

  .container {
    margin: auto;
    max-width: 750px;
    background: #fff;
    border-radius: 5px;
    padding: 20px 30px;

    h2 {
      color: #0b1857;
      font-weight: 400;
      font-size: 1.5em;
      text-align: center;
      margin-bottom: 20px;
    }

    .field {
      .title {
        font-weight: 400;
        margin-bottom: 3px;
      }
      .value {
        height: 30px;
        padding: 10px;
        display: flex;
        border-radius: 3px;
        background: #f3f3f4;
        align-items: center;
      }

      &:not(:last-of-type) {
        margin-bottom: 15px;
      }
    }

    h4 {
      font-size: 1.2em;
      margin-top: 30px;
      font-weight: 500;
    }

    form {
      margin-top: 10px;

      label, span, input, button[type=submit] {
        display: block;
      }

      label {
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

      .action {
        overflow: auto;
        margin-top: 20px;

        button[type=submit] {
          margin: 5px;
          float: right;
          background: #ddd;
          font-weight: 400;
          padding: 5px 15px;
          border-radius: 2px;
        }
      }
    }
  }
`;
