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


const workExp = [
    { title: 'Research Assistant', org: 'New York University', date:'Aug 2021 - Dec 2021', text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
    { title: 'Research Assistant', org: 'New York University', date:'Aug 2021 - Dec 2021', text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
    { title: 'Research Assistant', org: 'New York University', date:'Aug 2021 - Dec 2021', text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
    { title: 'Research Assistant', org: 'New York University', date:'Aug 2021 - Dec 2021', text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." }
];

const proj = [
    { title: 'Hello World', org: 'Python', date:'Aug 2021 - Dec 2021', text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
    { title: 'Hello World', org: 'Python', date:'Aug 2021 - Dec 2021', text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
    { title: 'Hello World', org: 'Python', date:'Aug 2021 - Dec 2021', text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
    { title: 'Hello World', org: 'Python', date:'Aug 2021 - Dec 2021', text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." }
];

export default function Profile() {
    
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
