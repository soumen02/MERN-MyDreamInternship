import React from 'react';
import { Link } from 'react-router-dom';
import "./Profile.css";
import {
    Card,
    Typography,
    IconButton,
    CssBaseline,
    AppBar,
    Toolbar,
  } from "@mui/material";
import { ArrowBack } from "@material-ui/icons";
import Footer from "./Footer";
import SettingsIcon from '@mui/icons-material/Settings';
import SeeAll from './SeeAll';
import { useState, useEffect } from 'react';
import axios from 'axios';


export default function Profile() {

    const [workExp, setWorkExp] = useState([]);
    const [proj, setProj] = useState([]);
    const [loaded, setLoaded] = useState(false);

    const fetchArrs = () => {
        axios
        .get("http://localhost:5002/get_expArr")
        .then((response) => {
            // axios bundles up all response data in response.data property
            let array1 = response.data[0];
            let array2 = response.data[1];
            setWorkExp(array1);
            setProj(array2);
        })
        .catch((err) => {
            // catching error
        })
        .finally(() => {
            // the response has been received, so remove the loading icon
            setLoaded(true);
        });
    };

    // set up loading data from api when the component first loads
    useEffect(() => {
        // fetch messages this once
        fetchArrs();
    }, []);

    
    return (
        <div id = "content">
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                <Link to="/dash">
                    <IconButton>
                    <ArrowBack />
                    </IconButton>
                </Link>
                <Typography variant="h4">Profile</Typography>
                </Toolbar>
            </AppBar>
            <div id = "container">
                <Card raised = {true} className = "contBox">
                    <img id = "pfp" src="img_avatar.png" alt="pfp" width = "200"/>
                    <div className = "titleEdit">
                        <div className = "title" id = "name">Muhammad Zaeem Shahzad</div>
                        <div className = "edit">Edit</div>
                    </div>
                    <div className = "box">Pronouns:<br></br>He/Him</div>
                    <div className = "box">Race/Ethnicity:<br></br>South Asian</div>
                    <h4 id = "tex">Junior, Computer Science</h4>
                    <h4 id = "grey">New York University</h4>
                </Card>

                <Card raised= {true} className = "contBox">

                    <div className = "titleEdit">
                        <div className = "title">Education</div>
                        <div className = "edit">Edit</div>
                    </div>

                    <div id = "edu">
                        <div id = "uni"><img src="NYU-Logo.png" alt="pfp" width = "80"/></div>
                        <div className = "info"><h4>New York University</h4>Bachelors<br></br>Computer Science</div>
                    </div>

                    <div className = "box"> {/*className box or textbox better?*/}
                        <div>Start & Graduation Dates</div>
                        <div>Aug 2020 - Present</div>
                    </div>

                    <div className = "box">
                        <div>Cumulative GPA</div>
                        <div>4.00</div>
                    </div>

                    <div className = "box" id = "end">
                        <div>School</div>
                        <div>NYU Abu Dhabi</div>
                    </div>

                </Card>

                <Card raised= {true} className = "contBox">
                    <div className = "titleEdit">
                        <div className = "title">Work Experience</div>
                        <Link to = "/edit/work" className = "edit">Edit</Link>
                    </div>
                    <SeeAll items={workExp} state = {true} edit={false}/>
                </Card>
                    
                <Card raised= {true} className = "contBox">
                    <div className = "titleEdit">
                        <div className = "title">Projects</div>
                        <Link to = "/edit/proj" className = "edit">Edit</Link>
                    </div>
                    <SeeAll items={proj} state = {true} edit={false}/>
                </Card>

                <Card raised= {true} className = "contBox" id = "accSet">
                    <div className = "titleEdit">
                        <div className = "title" id = "acc">Account Settings</div>
                        <Link to="/settings" className = "icon" id = "settIcon"><SettingsIcon fontSize = "large"/></Link>
                    </div>
                </Card>

                <div id = "endpage"></div>

            </div>
            <Footer />
        </div>
    );
}
