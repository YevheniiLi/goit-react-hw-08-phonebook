import { Outlet } from 'react-router-dom';
import { Navigate } from './Navigate/Navigate';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <div>
      <Navigate />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
