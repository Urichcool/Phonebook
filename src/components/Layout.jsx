import { AppBar } from './AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppLoader } from './App,styled';
import { ThreeDots } from 'react-loader-spinner';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<AppLoader><ThreeDots color="orange" /></AppLoader>}>
        <Outlet />
      </Suspense>
    </>
  );
};
