// import { Navigate, Route, Routes } from 'react-router-dom';
// import Layout from './components/Layout';
// import HomePage from 'pages/HomePage/HomePage';
// import FavoritePage from 'pages/FavoritePage';
// import CatalogPage from 'pages/CatalogPage';

import Layout from './components/Layout';
import CatalogPage from 'pages/CatalogPage';
import FavoritePage from 'pages/FavoritePage';
import HomePage from 'pages/HomePage/HomePage';
import { Navigate, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="favorites" element={<FavoritePage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}
