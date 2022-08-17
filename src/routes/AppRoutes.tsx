import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LayoutDefault from '../config/layout/Default';
import About from '../pages/about/About';
import Home from '../pages/home/Home';
import Faqs from '../pages/faqs/Faqs';
import Books from '../pages/books/Books';
import Alunos from '../pages/alunos/Alunos';
import { Produtos } from '../pages/produtos/Produtos';

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutDefault component={Home} />} />
        <Route path="/about" element={<LayoutDefault component={About} />} />
        <Route path="/faqs" element={<LayoutDefault component={Faqs} />} />
        <Route path="/books" element={<LayoutDefault component={Books} />} />
        <Route path="/alunos" element={<LayoutDefault component={Alunos} />} />
        <Route path="/produtos" element={<LayoutDefault component={Produtos} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
