import * as React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import LogIn from "./components/LogIn";
import InternshipDetailed from "./components/InternshipDetailed";
import Internships from "./components/Internships";
import Companies from "./components/Companies";
import CompaniesDetailed from "./components/CompaniesDetailed";
import Settings from "./components/Settings";
import AllApps from "./components/AllApps";
import Saved from "./components/Saved";
import InProgress from "./components/InProgress";
import Completed from "./components/Completed";
import Sent from "./components/Sent";
import Accepted from "./components/Accepted";
import Deadlines from "./components/Deadlines";
import Applications from "./components/Applications";
import AddApp from "./components/AddApp";
import Profile from "./components/Profile";
import Edit from "./components/Edit";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import AboutUs from "./components/AboutUs";
import PrivacyPolicy from "./components/PrivacyPolicy";
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
// import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

export default function App() {
  return (
    <Routes>
      <Route path="/log-in">
        <Route index element={<LogIn />} />
      </Route>
      <Route path="/sign-up">
        <Route index element={<SignUp />} />
      </Route>

      <Route path="/about-us">
        <Route index element={<AboutUs />} />
      </Route>
      <Route path="/privacy-policy">
        <Route index element={<PrivacyPolicy />} />
      </Route>
      <Route path="/" element={<Home />} />
      <Route path="/internships">
        <Route index element={<Internships />} />
        <Route path=":id" element={<InternshipDetailed />} />
      </Route>
      <Route path="/companies">
        <Route index element={<Companies />} />
        <Route path=':id' element={<CompaniesDetailed/>} />
      </Route>
{/* 
      <Route path="/companiesdetailed">
        <Route index element={<CompaniesDetailed />} />
        { <Route path=':id' element={<CompaniesDetailed/>} /> }
      </Route> */}

      <Route path="/profile">
        <Route index element={<Profile />} />
      </Route>

      <Route path="/all">
        <Route index element={<AllApps />} />
      </Route>
      <Route path="/saved">
        <Route index element={<Saved />} />
      </Route>
      <Route path="/in-progress">
        <Route index element={<InProgress />} />
      </Route>
      <Route path="/completed">
        <Route index element={<Completed />} />
      </Route>
      <Route path="/sent">
        <Route index element={<Sent />} />
      </Route>
      <Route path="/accepted">
        <Route index element={<Accepted />} />
      </Route>
      <Route path="/deadlines">
        <Route index element={<Deadlines />} />
      </Route>
      <Route path="/applications">
        <Route index element={<Applications />} />
      </Route>
      <Route path="/add-app">
        <Route index element={<AddApp />} />
      </Route>

      <Route path="/settings">
        <Route index element={<Settings />} />
      </Route>

      <Route path="/edit">
        {/* TESTING */}
        <Route path="work" element={<Edit view={true} />} />
        <Route path="proj" element={<Edit view={false} />} />
      </Route>

      <Route path="/log-in">
        <Route index element={<LogIn />} />
      </Route>
      <Route path="/sign-up">
        <Route index element={<SignUp />} />
      </Route>
      <Route path="/dash">
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  );
}
