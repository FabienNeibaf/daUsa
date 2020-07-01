import React from 'react';
import { Redirect } from '@reach/router';

const Signout = () => {
  return (
    <Redirect to="/login" noThrow />
  )
};

export default Signout;

