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

export default function Home() {
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
      <NavBar />

      <Paper
        elevation={0}
        sx={{
          padding: 20,
        }}
      >
        <Stack spacing={3} justifyContent="center" alignItems="center">
          <Typography
            component="h5"
            variant="h6"
            align="center"
            color="text.secondary"
            gutterBottom
          >
            Work towards your goals today
          </Typography>
          <Typography
            variant="h3"
            align="center"
            color="text.primary"
            paragraph
          >
            Score your dream Internship
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button variant="contained" onClick={() => navigate("/sign-up")}>
              Join Us
            </Button>
            <Button
              sx={{ backgroundColor: "white" }}
              variant="outlined"
              onClick={() => navigate("/log-in")}
            >
              Sign In
            </Button>
          </Stack>
        </Stack>
      </Paper>
    </>
  );
}
