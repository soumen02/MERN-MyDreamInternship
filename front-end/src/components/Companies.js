import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Stack } from "@mui/system";
import { Link } from "react-router-dom";
import {
  Avatar,
  CardActionArea,
  Typography,
  IconButton,
  CssBaseline,
  AppBar,
  Toolbar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  ToggleButton,
  CardHeader,
} from "@mui/material";
// import { ArrowBack } from "@material-ui/icons";
//import useStyles from "./CompaniesDetailedStyles";
// import { useLocation, useNavigate } from "react-router-dom";
import useStyles from "./CompaniesStyles";
import { Home } from "@material-ui/icons";
import Footer from "./Footer";
import ReadMore from "./ReadMore";

const lorum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donecin felis pellentesque ante condimentum eleifend vitae laciniaturpis. Mauris imperdiet neque id pellentesque tempor. Uttempor consectetur nibh a malesuada leifend vitae laciniaturpis. Mauris imperdiet neque id pellentesque tempor. Uttempor consectetur nibh a malesuada. Lorem ipsum dolor sitamet, consectetur adipiscing elit. Donec in felis pellentesqueante condimentum eleifend vitae lacinia turpis. Maurisimperdiet neque id pellentesque tempor. Ut tempor consecteturnibh a malesuada leifend vitae lacinia turpis. Maurisimperdiet neque id Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donecin felis pellentesque ante condimentum eleifend vitae laciniaturpis. Mauris imperdiet neque id pellentesque tempor. Uttempor consectetur nibh a malesuada leifend vitae laciniaturpis. Mauris imperdiet neque id pellentesque tempor. Uttempor consectetur nibh a malesuada. Lorem ipsum dolor sitamet, consectetur adipiscing elit. Donec in felis pellentesqueante condimentum eleifend vitae lacinia turpis. Maurisimperdiet neque id pellentesque tempor. Ut tempor consecteturnibh a malesuada leifend vitae lacinia turpis. Maurisimperdiet neque id ";
const card = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Companies() {
  const classes = useStyles();
  const [loaded, setLoaded] = useState(false);
  const [companies, setCompanies] = useState([]);

  const fetchCompanies = () => {
    // setMessages([])
    // setLoaded(false)
    axios
      .get("http://localhost:5002/get_companies")
      .then((response) => {
        // axios bundles up all response data in response.data property
        const companies = response.data;
        setCompanies(companies);
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
      <main>
        <div>
          <Container>
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
              paddingTop="20px"
              paddingBottom="20px"
            >
              Companies
            </Typography>
            <Grid container columnSpacing={12} rowSpacing={2} justify="center">
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
        <Card className={classes.card}>
          <CardActionArea disableRipple>
            <Grid container spacing={2}>
              <Grid item xs={3} paddingLeft="10px">
                <CardHeader avatar={<Avatar src={company.logo} />} />
              </Grid>
              <Grid item xs={5}>
                <Link
                  to={company.companyName.toString()}
                  state={{ selectedCompany: company }}
                  style={{ textDecoration: "none" }}
                >
                  <Typography
                    variant="h5"
                    align="left"
                    gutterBottom
                    paddingTop="10px"
                  >
                    <b>{company.companyName}</b>
                  </Typography>
                </Link>
              </Grid>
              <Grid item xs={4} marginTop="25px" paddingRight="15px">
                <ToggleButton value="bold" aria-label="bold">
                  <Typography align="justify" variant="caption">
                    <b>Follow ✓</b>
                  </Typography>
                </ToggleButton>
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
}
