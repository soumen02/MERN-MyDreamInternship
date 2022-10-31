import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Footer.css";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AppsIcon from '@mui/icons-material/Apps';
import ApartmentIcon from '@mui/icons-material/Apartment';
import WorkIcon from '@mui/icons-material/Work';
import HomeIcon from '@mui/icons-material/Home';
import {Card} from "@mui/material";

export default function Footer() {
    return (
        <Card raised = {true} className = "footer">
           <NavLink end activeClassName='active' to="/" className = "icon"><HomeIcon fontSize = "large"/></NavLink>
           <NavLink activeClassName='active' to="/internships" className = "icon"><WorkIcon fontSize = "large"/></NavLink>
           <NavLink activeClassName='active' to="/companies" className = "icon"><ApartmentIcon fontSize = "large"/></NavLink>
           <NavLink activeClassName='active' to="/companies" className = "icon"><AppsIcon fontSize = "large"/></NavLink>
           <NavLink activeClassName='active' to="/profile" className = "icon"><AccountBoxIcon fontSize = "large"/></NavLink>
        </Card>
    );
}
