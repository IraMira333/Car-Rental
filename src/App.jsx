import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';

import CatalogPage from 'pages/CatalogPage';
import FavoritePage from 'pages/FavoritePage';
import HomePage from 'pages/HomePage/HomePage';

export default function App() {
  console.log('Hello World');
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
