import * as React from "react";
import {
  Card,
  Typography,
  IconButton,
  AppBar,
  Toolbar,
  Grid,
} from "@mui/material";
// import useStyles from "./CompaniesStyles";
import { Home } from "@material-ui/icons";
import BookmarkIcon from '@mui/icons-material/Bookmark';
import RotateRightIcon from '@mui/icons-material/RotateRight';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { Link } from "react-router-dom";
import Footer from "./Footer"
import { useAuthContext } from "../hooks/useAuthContext";

export default function Applications() {
    const { user } = useAuthContext();

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

                <Link to="/accepted" style={{textDecoration: 'none'}}>       
                    <Card raised = {true} className = "tabs">
                    <DoneAllIcon fontSize = "medium"/>
                        <p>Accepted</p>
                    </Card>
                </Link>
            </div>

            <Footer />

        </div>
    );
}

