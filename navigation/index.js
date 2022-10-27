import React from 'react';
import { AuthProvider } from './AuthProvider';
import Routes from './Routers';

const Providers = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default Providers;