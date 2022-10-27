import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import LogIn from './components/LogIn';
import InternshipDetailed from './components/InternshipDetailed';
import Internships from './components/Internships';
import Companies from './components/Companies';
import CompaniesDetailed from './components/CompaniesDetailed';
import Settings from './components/Settings';
import AllApps from './components/AllApps';
import Saved from './components/AllApps';
import Deadlines from './components/Deadlines';
import Applications from './components/Applications';
import AddApp from './components/AddApp';
import Profile from './components/Profile';

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
        {/* <Route path=':id' element={<CompaniesDetailed/>} /> */}
      </Route>

      <Route path='/companiesdetailed'>
        <Route index element={<CompaniesDetailed/>} />
        {/* <Route path=':id' element={<CompaniesDetailed/>} /> */}
      </Route>

      <Route path='/profile'>
        <Route index element={<Profile/>} />
      </Route>

      <Route path='/all'>
        <Route index element={<AllApps/>} />
      </Route>
      <Route path='/saved'>
        <Route index element={<Saved/>} />
      </Route>
      <Route path='/deadlines'>
        <Route index element={<Deadlines/>} />
      </Route>

      <Route path='/applications'>
        <Route index element={<Applications/>} />
      </Route>
      <Route path='/add-app'>
        <Route index element={<AddApp/>} />
      </Route>
      <Route path='/settings'>
        <Route index element={<Settings/>} />
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