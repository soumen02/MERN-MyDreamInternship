import * as React from "react";
import { useState, useEffect } from "react";
import { Container, Stack } from "@mui/system";
import {
  Avatar,
  Card,
  CardHeader,
  Typography,
  IconButton,
  CssBaseline,
  AppBar,
  Toolbar,
  CircularProgress,
  Grid,
  CardActionArea,
} from "@mui/material";
import { ArrowForward, ArrowBack } from "@material-ui/icons";
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import useStyles from "./InternshipsStyles";
import { Home } from "@material-ui/icons";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AppsIcon from '@mui/icons-material/Apps';
import ApartmentIcon from '@mui/icons-material/Apartment';
import WorkIcon from '@mui/icons-material/Work';
import SettingsIcon from '@mui/icons-material/Settings';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import RotateRightIcon from '@mui/icons-material/RotateRight';
import SendIcon from '@mui/icons-material/Send';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from "react-router-dom";
import axios from "axios";
import Footer from "./Footer"

export default function Applications() {
  const classes = useStyles();
  const [loaded, setLoaded] = useState(false);
  const [internships, setInternships] = useState([]);

  const fetchInternships = () => {
    // setMessages([])
    // setLoaded(false)
    axios
      .get("https://my.api.mockaroo.com/internships?key=59e053a0")
      .then((response) => {
        // axios bundles up all response data in response.data property
        const internships = response.data;
        setInternships(internships);
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
    fetchInternships();
  }, []);
  console.log(internships[0]);

  return (

    <div className = "container">
        <AppBar position="relative">
            <Toolbar >
            <Link to="/dash" style={{ flexDirection: 'row-reverse' }}>
                    <IconButton >
                        <Home />
                    </IconButton>
            </Link>
            <Typography variant="h6" color="inherit" paddingLeft={1}>
                MyDreamInternship
            </Typography>
            <Grid container justifyContent="flex-end"></Grid>
            </Toolbar>
        </AppBar>

            <Typography variant= "h3" align="center" color="textPrimary" gutterBottom paddingTop="20px" paddingBottom="20px">
                        Applications
                    </Typography>
        <div className = "cards">
            <Link to="/all" style={{textDecoration: 'none'}}>
                <Card raised = {true} className = "tabs">
                    <AppsIcon fontSize = "medium"/>
                    <p>All</p>
                </Card>
            </Link>
            
            <Link to="/saved" style={{textDecoration: 'none'}}>
                <Card raised = {true} className = "tabs">
                    <BookmarkIcon fontSize = "medium"/>
                    <p>Saved</p>
                </Card>
            </Link>

            <Link to="/in-progress" style={{textDecoration: 'none'}}>       
                <Card raised = {true} className = "tabs">
                    <RotateRightIcon fontSize = "medium"/>
                    <p>In Progress</p>
                </Card>
            </Link>

            <Link to="/completed" style={{textDecoration: 'none'}}>       
                <Card raised = {true} className = "tabs">
                    <PlaylistAddCheckIcon fontSize = "medium"/>
                    <p>Completed</p>
                </Card>
            </Link>

            <Link to="/sent" style={{textDecoration: 'none'}}>       
                <Card raised = {true} className = "tabs">
                <SendIcon fontSize = "medium"/>
                    <p>Sent</p>
                </Card>
            </Link>

            <Link to="/accepted" style={{textDecoration: 'none'}}>       
                <Card raised = {true} className = "tabs">
                <DoneAllIcon fontSize = "medium"/>
                    <p>Accepted</p>
                </Card>
            </Link>

            <Link to="/deadlines" style={{textDecoration: 'none'}}>       
                <Card raised = {true} className = "tabs">
                <AccessTimeFilledIcon fontSize = "medium"/>
                    <p>Deadlines</p>
                </Card>
            </Link>
        </div>

        

    </div>
);
}

function CenteredLoader() {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={3}>
        <CircularProgress size={100} />
      </Grid>
    </Grid>
  );
}
