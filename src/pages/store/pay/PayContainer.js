import React from 'react';
import { Outlet } from 'react-router-dom';

const PayContainer = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default PayContainer;