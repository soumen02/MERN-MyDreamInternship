import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
// import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const theme = createTheme();
  const navigate = useNavigate();

  return (
    <div id="content">
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" align="center" color="inherit">
            MyDreamInternship
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className="content">
          <Container maxWidth="sm">
            <div id="imagediv">
              <img id="support" src="supportingimg.jpg" />
            <div id="textdiv">
              <Typography
                component="h5"
                variant="h6"
                align="center"
                // paddingTop={10}
                color="text.secondary"
                gutterBottom
              >
                Work towards your goals today
              </Typography>
              <Typography variant="h3" align="center" color="text.primary" paragraph>
                Score your dream Internsip
              </Typography>
              <div className="buttonscontainer">
                <div className="button">
                <Button variant="contained" onClick={() => navigate("/sign-up")}>Join Us</Button>
                </div>
                <div id="button2">
                <Button sx={{ backgroundColor: 'white' }} variant="outlined" onClick={() => navigate("/log-in")}>Sign In</Button>
                </div>
              </div>
              </div>
              
            </div>
          </Container>
        </div>
      </main>
    </div>
  );
}