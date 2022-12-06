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
import EditIcon from '@mui/icons-material/Edit';
import Footer from "./Footer";
import SettingsIcon from '@mui/icons-material/Settings';
import SeeAll from './SeeAll';
import BoxField from './BoxField';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuthContext } from "../hooks/useAuthContext";


export default function Profile() {

    const [workExp, setWorkExp] = useState([]);
    const [proj, setProj] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const { user } = useAuthContext();
    const [userData, setuserData] = useState({});

    const fetchArrs = () => {
        axios
        .post("http://localhost:5002/post_expArr", {
            email: user.email
        })
        .then((response) => {
            // axios bundles up all response data in response.data property
            let array1 = response.data[0];
            // console.log(array1);
            let array2 = response.data[1];
            setWorkExp(array1);
            // console.log(workExp);
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

    const fetchUserData = () => {
        axios
        .post("http://localhost:5002/post_userEmail", {
            email: user.email
        })
        .then((response) => {
            // axios bundles up all response data in response.data property
            setuserData(response.data)
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
        fetchUserData();
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
                {/* <Card raised = {true} className = "contBox">
                    <img id = "pfp" src="img_avatar.png" alt="pfp" width = "200"/>
                    <form action="/upload-example" method="POST" enctype="multipart/form-data">
                    <input name="my_files" type="file" multiple />
                    <input type="submit" value="Submit!!!" />
                    </form>


                    <div className = "titleEdit">
                        <div className = "title" id = "name">{userData.firstName + " " + userData.lastName}</div>
                        <div className = "edit">Edit</div>
                    </div>

                    <div id = "edu">
                        <div id = "uni"><img src="NYU-Logo.png" alt="pfp" width = "80"/></div>
                        <div className = "info"><h4>New York University</h4>Bachelors<br></br>Computer Science</div>
                    </div>

                    <BoxField userData = {userData} />

                </Card> */}
                <BoxField email = {user.email} />

                <Card raised= {true} className = "contBox">
                    <div className = "titleEdit">
                        <div className = "title">Work Experience</div>
                        <Link to = "/edit/work" className = "edit"><EditIcon fontSize = "medium"/></Link>
                    </div>
                    <SeeAll items={workExp} state = {true} edit={false} arr = "Work"/>
                </Card>
                    
                <Card raised= {true} className = "contBox">
                    <div className = "titleEdit">
                        <div className = "title">Projects</div>
                        <Link to = "/edit/proj" className = "edit"><EditIcon fontSize = "medium"/></Link>
                    </div>
                    <SeeAll items={proj} state = {true} edit={false} arr = "Proj"/>
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
