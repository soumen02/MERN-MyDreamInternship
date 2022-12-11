import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Stack } from "@mui/system";
import { Link, useNavigate } from "react-router-dom";
import { ArrowForward } from "@material-ui/icons";
import {
  Avatar,
  CardActionArea,
  Typography,
  IconButton,
  CircularProgress,
  Card,
  CardContent,
  Grid,
  Paper,
  InputBase,
  CardHeader,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import useStyles from "./CompaniesStyles";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { useAuthContext } from "../hooks/useAuthContext";

const lorum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donecin felis pellentesque ante condimentum eleifend vitae laciniaturpis. Mauris imperdiet neque id pellentesque tempor. Uttempor consectetur nibh a malesuada leifend vitae laciniaturpis. Mauris imperdiet neque id pellentesque tempor. Uttempor consectetur nibh a malesuada. Lorem ipsum dolor sitamet, consectetur adipiscing elit. Donec in felis pellentesqueante condimentum eleifend vitae lacinia turpis. Maurisimperdiet neque id pellentesque tempor. Ut tempor consecteturnibh a malesuada leifend vitae lacinia turpis. Maurisimperdiet neque id Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donecin felis pellentesque ante condimentum eleifend vitae laciniaturpis. Mauris imperdiet neque id pellentesque tempor. Uttempor consectetur nibh a malesuada leifend vitae laciniaturpis. Mauris imperdiet neque id pellentesque tempor. Uttempor consectetur nibh a malesuada. Lorem ipsum dolor sitamet, consectetur adipiscing elit. Donec in felis pellentesqueante condimentum eleifend vitae lacinia turpis. Maurisimperdiet neque id pellentesque tempor. Ut tempor consecteturnibh a malesuada leifend vitae lacinia turpis. Maurisimperdiet neque id ";
const card = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const allcompanies = [];

export default function Companies() {
  const classes = useStyles();
  const [loaded, setLoaded] = useState(false);
  const [companies, setCompanies] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const { user } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/log-in");
    }
  });

  const fetchCompanies = () => {
    // setMessages([])
    // setLoaded(false)
    axios
      .get("http://localhost:5002/get_companies")
      .then((response) => {
        // axios bundles up all response data in response.data property
        const companies = response.data;
        setCompanies(companies);
        allcompanies = companies;
      })
      .catch((err) => {
        // catching error
      })
      .finally(() => {
        // the response has been received, so remove the loading icon
        setLoaded(true);
      });
  };

  const searchCompanies = (searchTerm) => {
    setLoaded(false);
    if (searchTerm === "") {
      setCompanies(allcompanies);
    }

    axios
      .post("http://localhost:5002/search_companies", {
        params: {
          searchTerm: searchTerm,
        },
      })
      .then((response) => {
        // axios bundles up all response data in response.data property
        const companies = response.data;
        if (companies.length > 0) {
          setCompanies(companies);
        } else {
          setCompanies([]);
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
    fetchCompanies();
  }, []);

  return (
    <>
      <NavBar pageTitle="Companies" />

      <main>
        <SearchBarFunction />
        <div>
          <Container>
            <Grid container columnSpacing={12} rowSpacing={2} justify="center">
              {!loaded && <CenteredLoader />}
              {!noResults && loaded && companies.length === 0 && <NoResults />}

              {companies.map((company) => (
                <CompanyCell company={company} />
              ))}
            </Grid>
          </Container>
        </div>
        <Footer />
      </main>
    </>
  );

  function CompanyCell({ company }) {
    const classes = useStyles();
    return (
      <Grid item xs={12} xm={6} xl={4}>
        <Card>
          <CardActionArea disableRipple>
            <Grid container spacing={0} paddingTop="30px">
              <Grid item xs={3}>
                <CardHeader avatar={<Avatar src={company.logo} />} />
              </Grid>
              <Grid item xs={6} paddingTop="20px">
                <Typography
                  variant="h5"
                  align="left"
                  verticalAlign="center"
                  gutterBottom
                >
                  <b>{company.companyName}</b>
                </Typography>
              </Grid>
              <Grid item xs={3} paddingTop="20px">
                <Link
                  to={company.companyName.toString()}
                  state={{ selectedCompany: company }}
                >
                  <IconButton>
                    <ArrowForward />
                  </IconButton>
                </Link>
              </Grid>
            </Grid>
            <CardContent className={classes.cardContent}>
              <Typography
                variant="body2"
                align="Left"
                color="text.Secondary"
                Wrap
              >
                {company.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    );
  }

  function SearchBarFunction() {
    const [searchValue, setSearchValue] = useState("");
    const onSubmit = (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        if (user) {
          setLoaded(false);
        }
        searchCompanies(searchValue);
      }
    };
    return (
      <Stack direction="row" justifyContent="center">
        <Paper
          component="form"
          sx={{
            mt: 4,
            mb: 4,
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

function NoResults() {
  return (
    <div
      style={{
        // center it
        position: "absolute",
        top: "40%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        // style it
        padding: "20px",
        backgroundColor: "white",
        textAlign: "center",
      }}
    >
      <Typography variant="h5" align="left" color="textPrimary" gutterBottom>
        No Results
      </Typography>
    </div>
  );
}
