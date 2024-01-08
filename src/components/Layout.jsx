import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import React from 'react';
import Spiner from './Spiner/Spiner';
import AppBar from './AppBar/AppBar';
import Footer from './Footer/Footer';

export default function Layout() {
  return (
    <>
      <AppBar />
      <main className="mainFT">
        <Suspense fallback={<Spiner />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
