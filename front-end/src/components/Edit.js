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
import { useAuthContext } from "../hooks/useAuthContext";


const API_URL =
  process.env.NODE_ENV === 'production' ? window.API_URL : process.env.REACT_APP_API_URL;


export default function Edit({view}) {

    const [workExp, setWorkExp] = useState([]);
    const [proj, setProj] = useState([]);
    const [setLoaded] = useState(false);
    const { user } = useAuthContext();

    const fetchArrs = () => {
        axios
        .post(`${API_URL}post_expArr`, {
            email: user.email
        })
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
        let entry = { user: user.email, type: 'Work', title: 'Title', org: 'Organization', date:'Date', text: "Description" };
        axios
            .post(`${API_URL}get_work`, {
                entry
            },
            )
            .then((response) => {
                setWorkExp(workExp => [...workExp, response.data]);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                
            });
    };

    const handleProj = () => {
        // setWorkExp(workExp.push({ title: 'Title', org: 'Organization/Project', date:'Date', text: "Description" }));
        let entry = { user: user.email, type: 'Proj', title: 'Title', org: 'Project', date:'Date', text: "Description" };
        axios
            .post(`${API_URL}get_proj`, {
                entry
            },
            )
            .then((response) => {
                setProj(proj => [...proj, response.data]);
                console.log(response.data.id);
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
                <SeeAll items = {workExp} state = {false} edit = {true} arr = "Work"/>
                :
                <SeeAll items = {proj} state = {false} edit = {true} arr = "Proj"/>
                }
                
            </div>
        </>
    );
}

// <input type="text" id="word1" oninput="word1Function(this);" value="Hello"><br>