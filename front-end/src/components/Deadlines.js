import { useState, useEffect } from "react";
import { Container } from "@mui/system";
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
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import useStyles from "./InternshipsStyles";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Deadlines() {
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
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Link to="/">
            <IconButton>
              <ArrowBack />
            </IconButton>
          </Link>
          <Typography variant="h4">Deadlines</Typography>
          <Grid container justifyContent="flex-end">
          <Link to="/add-app">
            <IconButton>
              <AddIcon />
            </IconButton>
          </Link>
          <Link to="/">
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </Link>
          </Grid>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          {!loaded && <CenteredLoader />}
          <Container maxWidth="md" className={classes.cardGrid}>
            {internships.map((internship) => (
              <InternshipCell internship={internship} key={internship.id} />
            ))}
          </Container>
        </div>
      </main>
    </>
  );
}

function InternshipCell({ internship }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea disableRipple>
        <CardHeader
          avatar={<Avatar src={internship.logo} />}
          action={
            <Link
              to={internship.id.toString()}
              state={{ selectedInternship: internship }}
            >
              <IconButton>
                <ArrowForward />
              </IconButton>
            </Link>
          }
          title={internship.positionTitle}
          subheader={internship.companyName}
        />
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
