import { useState, useEffect } from "react";
import { Container } from "@mui/system";
import Home from "@mui/icons-material/Home";
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
import SearchBar from "material-ui-search-bar";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Internships() {
  const classes = useStyles();
  const [loaded, setLoaded] = useState(false);
  const [internships, setInternships] = useState([]);
  const { user } = useAuthContext();

  const fetchInternships = () => {
    // setMessages([])
    // setLoaded(false)
    axios
      .get("http://localhost:5002/get_internships")
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

  const searchInternships = (searchTerm) => {
    if (searchTerm === "") {
      fetchInternships();
    }

    axios
      .post("http://localhost:5002/search_internships", {
        params: {
          searchTerm: searchTerm,
        },
      })
      .then((response) => {
        {
          const internships = response.data;
          // console.log(internships);
          setInternships(internships);
        }

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
    console.log(user.email);
  }, []);


  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <Link to="/dash" style={{ flexDirection: "row-reverse" }}>
            <IconButton>
              <Home />
            </IconButton>
          </Link>
          <Typography variant="h6" color="inherit" noWrap>
            MyDreamInternship
          </Typography>
        </Toolbar>
      </AppBar>

      <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
              paddingTop="20px"
              paddingBottom="20px"
            >
              Internships
            </Typography>

      <SearchBar
        placeholder="Search Position"
        // onChange={() => fetchInternships()}
        onRequestSearch={(e) => searchInternships(e)}
        onCancelSearch={() => fetchInternships()}
        style={{
          margin: "20px",
          maxWidth: 800
        }}
      />
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
      <Footer />
    </>
  );
}

function InternshipCell({ internship }) {
  const classes = useStyles();

  // // console.clear();
  // console.log(internship.positionName);

  return (
    <Card className={classes.card}>
      <CardActionArea disableRipple>
        <CardHeader
          avatar={
            <Avatar
              src={
                internship.companyLogo !== ""
                  ? internship.companyLogo
                  : "https://source.unsplash.com/random/"
              }
            />
          }
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
          title={internship.positionName}
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
