import * as React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import LogIn from "./components/LogIn";
import InternshipDetailed from "./components/InternshipDetailed";
import Internships from "./components/Internships";
import Companies from "./components/Companies";
import CompaniesDetailed from "./components/CompaniesDetailed";
import Settings from "./components/Settings";

import Saved from "./components/Saved";
import InProgress from "./components/InProgress";
import Accepted from "./components/Accepted";
import Applications from "./components/Applications";

import Profile from "./components/Profile";
import Edit from "./components/Edit";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import AboutUs from "./components/AboutUs";
import PrivacyPolicy from "./components/PrivacyPolicy";
import ReviewPage from "./components/ReviewPage";

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
        <Route path=":id" element={<CompaniesDetailed />} />
      </Route>

      <Route path="/profile">
        <Route index element={<Profile />} />
      </Route>

      <Route path="/saved">
        <Route index element={<Saved />} />
      </Route>
      <Route path="/in-progress">
        <Route index element={<InProgress />} />
      </Route>
      <Route path="/accepted">
        <Route index element={<Accepted />} />
        <Route path=":id" element={<ReviewPage />} />
      </Route>
      <Route path="/applications">
        <Route index element={<Applications />} />
      </Route>
      <Route path="/edit">
        {/* TESTING */}
        <Route path="work" element={<Edit view={true} />} />
        <Route path="proj" element={<Edit view={false} />} />
      </Route>

      <Route path="/dash">
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  );
}
