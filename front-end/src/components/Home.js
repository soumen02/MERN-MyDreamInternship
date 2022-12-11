import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import "./Home.css";
import NavBar from "./NavBar";
import Stack from "@mui/material/Stack";
import { useEffect } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { CssBaseline, Grid } from "@mui/material";
import { Container } from "@mui/system";
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import useStyles from "./HomeStyles";


export default function Home() {
  const classes = useStyles();
  const navigate = useNavigate();
  const { user } = useAuthContext();
  console.log("The user is: ", user);

  useEffect(() => {
    if (user) {
      navigate("/dash");
    }
  }, [user]);

  return (
    <>
      <CssBaseline />

      <NavBar />

      <main>
        <div className={classes.container}>
          <Container maxWidth="sm">
            <Typography variant="h3" align="center" color="textPrimary" gutterBottom>
              My Dream Internship
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
              Work towards your goals today
            </Typography>

            <div>

              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} justifyContent="center">
                  <Grid item >
                    <Button variant="contained" color="primary" onClick={() => navigate("/sign-up")}>Join Us</Button>
                  </Grid>
                  <Grid item >
                    <Button variant="outlined" color="primary" onClick={() => navigate("/log-in")}>Sign In</Button>
                  </Grid>
                </Grid>
              </Box>
            </div>

          </Container>
        </div>
      </main>

    </>
  );
}
