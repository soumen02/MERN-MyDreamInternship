import * as React from "react";
import { Container, Stack } from "@mui/system";
import { Link } from "react-router-dom";
import {
  Avatar,
  Box,
  Typography,
  IconButton,
  CssBaseline,
  AppBar,
  Toolbar,
  Button,
  Card,
  CardActionArea,
  CardHeader,
  CardMedia,
  CardContent,
  Grid,
  ToggleButton,
} from "@mui/material";
import { ArrowBack, ArrowForward } from "@material-ui/icons";
import useStyles from "./CompaniesDetailedStyles";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "./Footer";
// import SettingsIcon from '@mui/icons-material/Settings';
import { useTheme } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import ReadMore from "./ReadMore";

const lorum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donecin felis pellentesque ante condimentum eleifend vitae laciniaturpis. Mauris imperdiet neque id pellentesque tempor. Uttempor consectetur nibh a malesuada leifend vitae laciniaturpis. Mauris imperdiet neque id pellentesque tempor. Uttempor consectetur nibh a malesuada. Lorem ipsum dolor sitamet, consectetur adipiscing elit. Donec in felis pellentesqueante condimentum eleifend vitae lacinia turpis. Maurisimperdiet neque id pellentesque tempor. Ut tempor consecteturnibh a malesuada leifend vitae lacinia turpis. Maurisimperdiet neque id";

export default function CompaniesDetailed() {
  const theme = useTheme();
  const classes = useStyles();
  const navigate = useNavigate();
  const { selectedCompany } = useLocation().state;
  const [loaded, setLoaded] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [internships, setInternships] = useState([]);

  const fetchReviews = () => {
    // setMessages([])
    // setLoaded(false)
    axios
      .post("http://localhost:5002/get_reviews",{reviewids: selectedCompany.reviewids})
      .then((response) => {
        // axios bundles up all response data in response.data property
        const r = response.data;
        setReviews(r);
      })
      .catch((err) => {
        // catching error
      })
      .finally(() => {
        // the response has been received, so remove the loading icon
        setLoaded(true);
      });
  };

  const fetchInternships = () => {
    // setMessages([])
    // setLoaded(false)
    axios
      .post("http://localhost:5002/get_company_internships", {
        companyPositions: selectedCompany.companyPositions,
      })
      .then((response) => {
        const r = response.data;
        setInternships(r);
        console.log(response.data);
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
    fetchInternships();
    fetchReviews();
  }, []);

  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <Link to="/companies" style={{ flexDirection: "row-reverse" }}>
            <IconButton>
              <ArrowBack />
            </IconButton>
          </Link>
          <Typography variant="h6" color="inherit" noWrap>
            MyDreamInternship
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Typography
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
            paddingTop="20px"
            paddingBottom="40px"
          >
            {selectedCompany.companyName}
          </Typography>
          <Container>
            <Stack spacing={2}>
              <Card className={classes.card}>
                <Typography
                  variant="h5"
                  color="textPrimary"
                  gutterBottom
                  padding="20px"
                >
                  <b>{selectedCompany.companyName} Overview</b>
                </Typography>
                <div>
                  <Grid
                    container
                    columnSpacing={0}
                    rowSpacing={2}
                    justify="center"
                  >
                    <Grid item xs={12} xm={6} xl={6}>
                      <Stack
                        direction="row"
                        spacing={1}
                        className={classes.horizontalStack}
                      >
                        <Typography
                          variant="h6"
                          color="textPrimary"
                          gutterBottom
                          paddingLeft="20px"
                        >
                          Locations:
                        </Typography>
                        <Typography
                          variant="h6"
                          color="textPrimary"
                          gutterBottom
                          paddingRight="20px"
                        >
                          {selectedCompany.locations}
                        </Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                </div>
              </Card>
              <Card className={classes.card}>
                <div>
                  <Typography
                    variant="h5"
                    color="textPrimary"
                    gutterBottom
                    paddingTop="20px"
                    paddingLeft="20px"
                  >
                    <b>Company Description</b>
                  </Typography>
                </div>
                <Typography padding="20px">
                  {selectedCompany.description}
                </Typography>
              </Card>
              <Card className={classes.card}>
                <div>
                  <Typography
                    variant="h5"
                    color="textPrimary"
                    gutterBottom
                    paddingTop="20px"
                    paddingLeft="20px"
                  >
                    <b>Internships</b>
                  </Typography>
                </div>

                {internships.map((a) => (
                  <InternshipCell internship={a} />
                ))}
              </Card>
              <Card>
                <div>
                  <Typography
                    variant="h5"
                    color="textPrimary"
                    gutterBottom
                    paddingTop="20px"
                    paddingLeft="20px"
                  >
                    <b>Reviews</b>
                  </Typography>
                </div>
                {reviews.map((a) => (
                  <ReviewCell review={a} key={a.user} />
                ))}
              </Card>
            </Stack>
          </Container>
        </div>
        <br></br> <br></br> <br></br>
        <Footer />
      </main>
    </>
  );

  function ReviewCell(review) {
    const classes = useStyles();
    return (
      <Card margin="100px" padding="25px">
        <Stack
          paddingTop="15px"
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 2, sm: 4, md: 4 }}
          xs={12}
          xm={6}
          xl={4}
        >
          <Typography
            component="div"
            sx={{ flexDirection: "row" }}
            paddingLeft="25px"
          >
            Name: {review.review.name}
          </Typography>
          <Divider variant="vertical" />
          <Typography component="div" sx={{ flexDirection: "row" }}>
            Position: {review.review.position}
          </Typography>
          <Divider variant="vertical" />
          <Typography component="div" sx={{ flexDirection: "row" }}>
            Rating: {review.review.rating}/5★
          </Typography>
          <Typography component="div" sx={{ flexDirection: "row" }}>
            Date: {review.review.date}
          </Typography>
        </Stack>
        <Typography
          component="div"
          paddingLeft="25px"
          paddingTop="10px"
          paddingBottom="10px"
        >
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 2, sm: 4, md: 4 }}
            xs={12}
            xm={6}
            xl={4}
          >
            Review:&nbsp;
            <ReadMore text={review.review.review} />
          </Stack>
        </Typography>
        <Divider orientation="row" variant="middle" flexItem />
      </Card>
    );
  }

  function InternshipCell(internship) {
    const classes = useStyles();
    return (
      <Card className={classes.card}>
        <CardActionArea disableRipple>
          <CardHeader
            avatar={<Avatar src={internship.internship.companyLogo} />}
            action={
              <Link href={internship.internship.url}>
                <IconButton href={internship.internship.url} target="_blank">
                  <ArrowForward />
                </IconButton>
              </Link>
            }
            title={internship.internship.positionName}
            subheader={internship.internship.companyName}
          />
        </CardActionArea>
      </Card>
    );
  }
}
