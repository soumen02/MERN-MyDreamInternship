import { useState, useEffect } from "react";
import { Container } from "@mui/system";
import SearchBar from "material-ui-search-bar";
import {
  Avatar,
  Card,
  CardHeader,
  IconButton,
  CircularProgress,
  Grid,
  CardActionArea,
  Paper,
  InputBase,
  Divider,
  Stack,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { ArrowForward, ArrowBack } from "@material-ui/icons";
import useStyles from "./InternshipsStyles";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Internships() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);
  const [internships, setInternships] = useState([]);
  const { user } = useAuthContext();

  const fetchInternships = () => {
    // setMessages([])
    // setLoaded(false)
    axios
      .get("http://localhost:5002/get_internships", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
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
    setInternships([]);
    setLoaded(false);
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
        // axios bundles up all response data in response.data property
        const searchedInternships = response.data;
        if (searchedInternships.length > 0) {
          setInternships(searchedInternships);
        } else {
          setInternships([]);
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
    if (user) {
      fetchInternships();
    } else {
      navigate("/log-in");
    }
  }, [user]);

  return (
    <>
      <NavBar pageTitle="Internships" />

      <main>
        <div>
          <SearchBarFunction />

          {!loaded && <CenteredLoader />}
          <Container maxWidth="md" className={classes.cardGrid}>
            {internships.map((internship) => (
              <InternshipCell internship={internship} key={internship._id} />
            ))}
          </Container>
        </div>
      </main>
      <Footer />
    </>
  );

  function SearchBarFunction() {
    const [searchValue, setSearchValue] = useState("");
    const onSubmit = (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        if (user) {
          setLoaded(false);
        }
        searchInternships(searchValue);
      }
    };
    return (
      <Stack direction="row" justifyContent="center">
        <Paper
          component="form"
          sx={{
            mt: 4,
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 500,
          }}
          onKeyPress={onSubmit}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search by position"
            inputProps={{ "aria-label": "search google maps" }}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <IconButton
            type="button"
            sx={{ p: "10px" }}
            aria-label="search"
            onClick={onSubmit}
          >
            <SearchIcon />
          </IconButton>
        </Paper>
      </Stack>
    );
  }
}

function InternshipCell({ internship }) {
  const classes = useStyles();
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
