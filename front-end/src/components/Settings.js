import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import "./Settings.css";
import {
    Card,
    Typography,
    IconButton,
    CssBaseline,
    AppBar,
    Toolbar,
  } from "@mui/material";
  import { ArrowBack } from "@material-ui/icons";

export default function Settings() {
    return (
        <div id = "content">
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                <Link to="/profile">
                    <IconButton>
                    <ArrowBack />
                    </IconButton>
                </Link>
                <Typography variant="h4">Settings</Typography>
                </Toolbar>
            </AppBar>
            <div id = "container">
                <Card raised = {true} className = "contBox">
                    <div className = "settSec">Log out</div>
                </Card>
                <Card raised = {true} className = "contBox">
                    <div className = "settSec">Log out</div>
                </Card>
                <Card raised = {true} className = "contBox">
                    <div className = "settSec">Log out</div>
                </Card>
            </div>
            <Footer/>
        </div>
    );
}