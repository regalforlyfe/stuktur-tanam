import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddProduct from './components/AddProduct';
import ShowProduct from './components/ShowProduct';
import EditProduct from './components/EditProduct';
import ListBuku from './components/ListBuku';
import { Container } from '@mui/material';

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" element={<ShowProduct/>} />
          <Route path="add" element={<AddProduct/>} />
          <Route path="edit/:id" element={<EditProduct/>} />
          <Route path="list-buku" element={<ListBuku/>} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
