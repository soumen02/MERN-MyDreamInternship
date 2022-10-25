import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css";
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AppsIcon from '@mui/icons-material/Apps';
import ApartmentIcon from '@mui/icons-material/Apartment';
import WorkIcon from '@mui/icons-material/Work';
import HomeIcon from '@mui/icons-material/Home';
import {Card} from "@mui/material";

export default function Footer() {
    return (
        <Card raised = {true} className = "footer">
           <Link to="/" className = "icon"><HomeIcon sx={{ fontSize: 30 }}/></Link>
           <Link to="/internships" className = "icon"><WorkIcon sx={{ fontSize: 30 }}/></Link>
           <Link to="/companies" className = "icon"><ApartmentIcon sx={{ fontSize: 30 }}/></Link>
           <Link to="/companies" className = "icon"><AppsIcon sx={{ fontSize: 30 }}/></Link>
           <Link to="/profile" className = "icon"><AccountBoxIcon sx={{ fontSize: 30 }}/></Link>
           <Link to="/settings" className = "icon"><SettingsIcon sx={{ fontSize: 30 }}/></Link>
        </Card>
    );
}
