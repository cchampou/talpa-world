import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CryptoConvert from './pages/CryptoConvert';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/crypto/:id" element={<CryptoConvert />} />
      </Routes>
    </BrowserRouter>
  );
}

const rootElement = createRoot(document.getElementById('root'));

rootElement.render(<App />);
