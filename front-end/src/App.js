import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import InternshipDetailed from './components/InternshipDetailed';
import Internships from './components/Internships';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/internships'>
        <Route index element={<Internships/>} />
        <Route path=':id' element={<InternshipDetailed/>} />
      </Route>
    </Routes>
  );
}