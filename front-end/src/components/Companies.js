import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Stack } from "@mui/system";
import { Link } from "react-router-dom";
import {
  Box,
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
} from "@mui/material";
// import { ArrowBack } from "@material-ui/icons";
//import useStyles from "./CompaniesDetailedStyles";
// import { useLocation, useNavigate } from "react-router-dom";
import useStyles from "./CompaniesStyles";
import logo from "./amazon.png";
import { Home } from "@material-ui/icons";
import Footer from "./Footer";

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

    return(
        <>
            <AppBar position="relative">
                <Toolbar >

                <Link to="/dash" style={{ flexDirection: 'row-reverse' }}>
                    <IconButton >
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
                    <Container >
                        <Typography variant= "h2" align="center" color="textPrimary" gutterBottom paddingTop="20px" paddingBottom="20px">
                            Companies
                        </Typography>
                        <Grid container columnSpacing={12} rowSpacing={2} justify="center">
                            {companies.map((company)=>(
                                <CompanyCell company={company}/>
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
                <Grid item xs={3} paddingLeft = "20px">
                    {/* <CardMedia //className={classes.CardMedia} 
                        image = "./amazon.png" alt = "Logo"  title="Logo"                                   
                    /> */}
                <img
                  src={logo}
                  alt="Logo"
                  title="Logo"
                  height="100px"
                  width="100px"
                ></img>
              </Grid>
              <Grid item xs={5}>
                <Link
                to={company.companyName.toString()}
                state={{ selectedCompany: company }}
                style={{ textDecoration: "none" }}
                  // to="/companiesdetailed"
                >
                  <Typography
                    variant="h4"
                    align="left"
                    gutterBottom
                    paddingTop="30px"
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
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Donec in felis pellentesque ante condimentum
                eleifend vitae lacinia turpis. Mauris imperdiet neque
                id pellentesque tempor. Ut tempor consectetur nibh a
                malesuada leifend vitae lacinia turpis. Mauris
                imperdiet neque id pellentesque tempor. Ut tempor
                consectetur nibh a malesuada.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    );
  }
}
