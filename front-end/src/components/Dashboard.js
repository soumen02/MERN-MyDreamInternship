import React from "react";
import "./Dashboard.css";
import { Card } from "@mui/material";
import { Typography } from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import AppsIcon from "@mui/icons-material/Apps";
import ApartmentIcon from "@mui/icons-material/Apartment";
import WorkIcon from "@mui/icons-material/Work";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

export default function Dashboard() {
  return (
    <div className="container">
      <NavBar />

      <Typography
        variant="h3"
        align="center"
        color="textPrimary"
        gutterBottom
        paddingTop="20px"
        paddingBottom="20px"
      >
        Dashboard
      </Typography>
      <div className="cards">
        <Link to="/internships" style={{ textDecoration: "none" }}>
          <Card raised={true} className="tabs">
            <WorkIcon fontSize="medium" />
            <p>Internships</p>
          </Card>
        </Link>

        <Link to="/companies" style={{ textDecoration: "none" }}>
          <Card raised={true} className="tabs">
            <ApartmentIcon fontSize="medium" />
            <p>Companies</p>
          </Card>
        </Link>

        <Link to="/applications" style={{ textDecoration: "none" }}>
          <Card raised={true} className="tabs">
            <AppsIcon fontSize="medium" />
            <p>Applications</p>
          </Card>
        </Link>

        <Link to="/profile" style={{ textDecoration: "none" }}>
          <Card raised={true} className="tabs">
            <AccountBoxIcon fontSize="medium" />
            <p>Profile</p>
          </Card>
        </Link>

        <Link to="/settings" style={{ textDecoration: "none" }}>
          <Card raised={true} className="tabs">
            <SettingsIcon fontSize="medium" />
            <p>Account Settings</p>
          </Card>
        </Link>
      </div>
    </div>
  );
}
