import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListBuku from './screen/buku/list-buku';
import Dashboard from './screen/dashboard/dashboard';
import Product from './screen/product/product';
import FirebaseUtility from './utility/firebase-utility';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListBuku />} />
        <Route path="/product" element={<Product />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
