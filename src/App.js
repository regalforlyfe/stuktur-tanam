import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import ListBuku from './screen/list-buku/list-buku';

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" element={<ListBuku/>} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
