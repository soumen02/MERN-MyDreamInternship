import { useState, useEffect } from "react";
import { Container } from "@mui/system";
import {
  Typography,
  IconButton,
  CssBaseline,
  AppBar,
  Toolbar,
  CircularProgress,
  Grid,
} from "@mui/material";
import { ArrowBack } from "@material-ui/icons";
import useStyles from "./InternshipsStyles";
import { Link } from "react-router-dom";
import axios from "axios";
import Footer from "./Footer";
import { useAuthContext } from "../hooks/useAuthContext";
import "./InProgress.css";
import ApplicationCell from "./ApplicationCell";

export default function AllApps() {
  const classes = useStyles();
  const [loaded, setLoaded] = useState(false);
  const [applications, setApplications] = useState([]);
  const { user } = useAuthContext();

  const fetchApplications = () => {
    let applications = [];
    axios
      .post("http://localhost:5002/get_applications", { user: user.email })
      .then((response) => {
        // axios bundles up all response data in response.data property
        const allApplications = response.data;
        allApplications.forEach(async (application) => {
          if (application.status === "in-progress") {
            applications.push(application);
          }
        });
        setApplications(applications);
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
    fetchApplications();
  }, []);

  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Link to="/applications">
            <IconButton>
              <ArrowBack />
            </IconButton>
          </Link>
          <Typography variant="h4">In Progress</Typography>
        </Toolbar>
      </AppBar>

      <main>
        <div>
          {!loaded && <CenteredLoader />}
          <Container maxWidth="md" className={classes.cardGrid}>
            {applications.map((application) => (
              <>
                <ApplicationCell
                  application={application}
                  key={application.internshipID}
                />
              </>
            ))}
          </Container>
        </div>
      </main>
      <Footer />
    </>
  );
}

function movetoinprogress(application) {
  axios
    .post("http://localhost:5002/movetoinprogress", {
      application}
    )
    .then((response) => {
      // axios bundles up all response data in response.data property
      const newapp = response.data;
      console.log(newapp);
      //refresh page
      window.location.reload();
    })
    .catch((err) => {
      // catching error
    })
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
