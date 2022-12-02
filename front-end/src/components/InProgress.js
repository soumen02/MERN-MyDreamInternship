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
import useStyles from "./InternshipsStyles";
import { Link } from "react-router-dom";
import axios from "axios";
import Footer from "./Footer";
import { useAuthContext } from "../hooks/useAuthContext";
import ArticleIcon from "@mui/icons-material/Article";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

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
              <ApplicationCell
                application={application}
                key={application.internshipID}
              />
            ))}
          </Container>
        </div>
      </main>
      <Footer />
    </>
  );
}

function ApplicationCell({ application }) {
  const classes = useStyles();
  let path = "/ReviewPage";
  return (
    <Card className={classes.card}>
      <CardActionArea disableRipple>
        <CardHeader
          avatar={
            <Avatar
              src={
                application.companyLogo !== ""
                  ? application.companyLogo
                  : "https://source.unsplash.com/random/"
              }
            />
          }
          action={
            <Link
              to={application.internshipID.toString()}
              state={{ selectedApplication: application}}
            >
              <IconButton>
                <ArrowForward />
              </IconButton>
            </Link>
          }
          title={application.positionName}
          subheader={application.companyName}
        />
        <Stack direction="row" alignItems="center">
          <Link
            style={{ textDecoration: "none" }}
            to={path + "/" + application.internshipID}
            state={{ selectedApplication: application }}
          >
            <Stack direction="row" paddingLeft="20px">
              <IconButton>
                <Typography paddingRight="5px">Add Note</Typography>

                <AddCircleIcon />
              </IconButton>
            </Stack>
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            to={path}
            state={{ selectedApplication: application }}
          >
            <Stack direction="row" paddingLeft="20px">
              <IconButton>
                <Typography paddingRight="5px">Move to Accepted</Typography>
                <ArrowCircleRightIcon />
              </IconButton>
            </Stack>
          </Link>
        </Stack>
      </CardActionArea>
    </Card>
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
