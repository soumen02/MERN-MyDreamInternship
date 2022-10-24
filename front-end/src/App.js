import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import LogIn from './components/LogIn';
import InternshipDetailed from './components/InternshipDetailed';
import Internships from './components/Internships';
import Companies from './components/Companies';
import CompaniesDetailed from './components/CompaniesDetailed';
import SignUp from './components/SignUp';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/internships'>
        <Route index element={<Internships/>} />
        <Route path=':id' element={<InternshipDetailed/>} />
      </Route>
      <Route path='/companies'>
        <Route index element={<Companies/>} />
        <Route path=':id' element={<CompaniesDetailed/>} />
      </Route>
      <Route path='/log-in'>
        <Route index element={<LogIn/>} />
      </Route>
      <Route path='/sign-up'>
        <Route index element={<SignUp/>} />
      </Route>

    </Routes>
  );
}