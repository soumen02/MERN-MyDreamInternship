import React from 'react';
import { Link } from 'react-router-dom';
import "./Edit.css";
import SeeAll from './SeeAll'; 
import {
    Typography,
    IconButton,
    AppBar,
    Grid,
    Toolbar,
} from "@mui/material";
import { ArrowBack } from "@material-ui/icons";
import AddIcon from '@mui/icons-material/Add';
import axios from "axios";
import { useState, useEffect } from "react";


export default function Edit({view}) {

    // const [workExp, setWorkExp] = React.useState([
    //     { title: 'Research Assistant', org: 'New York University', date:'Aug 2021 - Dec 2021', text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
    //     { title: 'Research Assistant', org: 'New York University', date:'Aug 2021 - Dec 2021', text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
    //     { title: 'Research Assistant', org: 'New York University', date:'Aug 2021 - Dec 2021', text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
    //     { title: 'Research Assistant', org: 'New York University', date:'Aug 2021 - Dec 2021', text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." }
    // ]);

    // const [proj, setProj] = React.useState([
    //     { title: 'Hello World', org: 'Python', date:'Aug 2021 - Dec 2021', text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
    //     { title: 'Hello World', org: 'Python', date:'Aug 2021 - Dec 2021', text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
    //     { title: 'Hello World', org: 'Python', date:'Aug 2021 - Dec 2021', text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
    //     { title: 'Hello World', org: 'Python', date:'Aug 2021 - Dec 2021', text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." }
    // ]);

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

    
    const handleWorkExp = () => {
        // setWorkExp(workExp.push({ title: 'Title', org: 'Organization/Project', date:'Date', text: "Description" }));
        // setWorkExp(workExp => [...workExp, { title: 'Title', org: 'Organization', date:'Date', text: "Description" }]);
        let entry = { title: 'Title', org: 'Organization', date:'Date', text: "Description" };
        axios
            .post('http://localhost:5002/get_work', {
                entry
            },
            )
            .then((response) => {
                setWorkExp(workExp => [...workExp, response.data]);
                console.log(workExp);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                
            });
    };

    const handleProj = () => {
        // setWorkExp(workExp.push({ title: 'Title', org: 'Organization/Project', date:'Date', text: "Description" }));
        let entry = { title: 'Title', org: 'Project', date:'Date', text: "Description" };
        axios
            .post('http://localhost:5002/get_proj', {
                entry
            },
            )
            .then((response) => {
                setProj(proj => [...proj, response.data]);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                
            });
    };

    const handleClick = () => {
        if (view) {
            handleWorkExp();
            // workExp.push({ title: 'Title', org: 'Organization/Project', date:'Date', text: "Description" });
        }
        else{
            handleProj();
            // proj.push({ title: 'Title', org: 'Organization/Project', date:'Date', text: "Description" });
        }
        console.log("clicked")
    };

    return (
        <>
            <AppBar position="relative">
                <Toolbar>
                    <Link to="/profile">
                        <IconButton>
                        <ArrowBack />
                        </IconButton>
                    </Link>
                    <Typography variant="h4">Edit</Typography>

                    <Grid container justifyContent="flex-end">
                        <div id = "iconDiv" onClick = {handleClick}>
                            <AddIcon fontSize = "large"/>
                        </div>
                    </Grid>

                </Toolbar>
            </AppBar>
            <div className = "editsCont"> 
                {view ?
                <SeeAll items = {workExp} state = {false} edit = {true}/>
                :
                <SeeAll items = {proj} state = {false} edit = {true}/>
                }
                
            </div>
        </>
    );
}

// <input type="text" id="word1" oninput="word1Function(this);" value="Hello"><br>