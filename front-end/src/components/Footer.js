import React from 'react';
import { Link } from 'react-router-dom';
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
           <Link to="/" className = "icon"><HomeIcon fontSize = "large"/></Link>
           <Link to="/internships" className = "icon"><WorkIcon fontSize = "large"/></Link>
           <Link to="/companies" className = "icon"><ApartmentIcon fontSize = "large"/></Link>
           <Link to="/companies" className = "icon"><AppsIcon fontSize = "large"/></Link>
           <Link to="/profile" className = "icon"><AccountBoxIcon fontSize = "large"/></Link>
        </Card>
    );
}
