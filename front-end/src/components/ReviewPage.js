import * as React from "react";
import {useParams} from "react-router-dom";
import { Stack } from "@mui/system";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { ArrowBack } from "@material-ui/icons";
import CssBaseline from "@mui/material/CssBaseline";
import axios from "axios";
// import Link from '@mui/material/Link';
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";

// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useAuthContext } from "../hooks/useAuthContext";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function ReviewPage() {
  const theme = createTheme();
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const [userData, setuserData] = useState({});
  const [internshipData, setinternshipData] = useState({});
  const [companyData, setcompanyData] = useState({});
  const params = useParams();

  axios
    .post("http://localhost:5002/post_userEmail", {
      email: user.email,
    })
    .then((response) => {
      // axios bundles up all response data in response.data property
      setuserData(response.data);
      // console.log(userData);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
    });

  axios
    .post("http://localhost:5002/get_internshipbyid", {
      id: params.id,
    })
    .then((response) => {
      // axios bundles up all response data in response.data property
      // console.log(response.data);
      setinternshipData(response.data);
    })
    .catch((err) => {
      console.log(err);
    })

    axios
    .post("http://localhost:5002/get_companybyinternshipname", {
      companyName: internshipData.companyName,
    })
    .then((response) => {
      // axios bundles up all response data in response.data property
      setcompanyData(response.data);
      // console.log(companyData);
    })
    .catch((err) => {
      console.log(err);
    })

  const [formData1, setformData1] = useState("");
  const [formData2, setformData2] = useState("");

  function handleSubmit(event) {
    var d = new Date();

    event.preventDefault();
    axios
      .post("http://localhost:5002/post_review", {
        user: userData._id,
        company: companyData.companyName,
        review: formData1,
        rating: formData2,
        position: internshipData.positionName,
        date: d,
        
      })
      .then((res) => {
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const handleChange1 = (event) => {
    setformData1(event.target.value);
  };

  const handleChange2 = (event) => {
    setformData2(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Link to="/applications">
            <IconButton>
              <ArrowBack />
            </IconButton>
          </Link>
          <Typography variant="h6" color="inherit" noWrap>
            Review
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box component="form">
            <Typography
              variant="h5"
              component="div"
              sx={{ flexDirection: "row" }}
            >
              Name: {userData.firstName} {userData.lastName}
            </Typography>
            <Typography
              variant="h5"
              component="div"
              sx={{ flexDirection: "row" }}
            >
              Company: {internshipData.companyName}
            </Typography>
            <Typography
              variant="h5"
              component="div"
              sx={{ flexDirection: "row" }}
            >
              Position: {internshipData.positionName}
            </Typography>

            <form id="form">
              <TextField
                onChange={handleChange1}
                id="outlined-multiline-static"
                rows={4}
                multiline
                margin="normal"
                required
                fullWidth
                name="review"
                label="Leave your review here"
                type="password"
              />
              <Typography
                variant="h6"
                component="div"
                sx={{ flexDirection: "row" }}
              >
                Rate your experience:
              </Typography>
              <Stack direction={{ sm: "row" }}>
                <Typography variant="h6" component="div">
                  <label marginTop="5px">
                    <select onChange={handleChange2}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <default value="1"></default>
                    </select>
                  </label>{" "}
                  /5★
                </Typography>
              </Stack>
              <Button
                onClick={handleSubmit}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Submit
              </Button>
            </form>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
