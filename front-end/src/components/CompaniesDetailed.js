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
// import logo from "./amazon.png";
// import {Home} from "@material-ui/icons";
import Footer from "./Footer";
// import SettingsIcon from '@mui/icons-material/Settings';
import { useTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import ReadMore from "./ReadMore"

const lorum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donecin felis pellentesque ante condimentum eleifend vitae laciniaturpis. Mauris imperdiet neque id pellentesque tempor. Uttempor consectetur nibh a malesuada leifend vitae laciniaturpis. Mauris imperdiet neque id pellentesque tempor. Uttempor consectetur nibh a malesuada. Lorem ipsum dolor sitamet, consectetur adipiscing elit. Donec in felis pellentesqueante condimentum eleifend vitae lacinia turpis. Maurisimperdiet neque id pellentesque tempor. Ut tempor consecteturnibh a malesuada leifend vitae lacinia turpis. Maurisimperdiet neque id"


export default function CompaniesDetailed() {
  const theme = useTheme();
  const classes = useStyles();
  const navigate = useNavigate();
  const { selectedCompany } = useLocation().state;
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
                        spacing={2}
                        className={classes.horizontalStack}
                      >
                        <Typography
                          variant="h6"
                          color="textPrimary"
                          gutterBottom
                          paddingLeft="20px"
                        >
                          Type:
                        </Typography>
                        <Typography
                          variant="h6"
                          color="textPrimary"
                          gutterBottom
                          paddingRight="20px"
                        >
                          Tech industry
                        </Typography>
                      </Stack>
                    </Grid>
                    <Grid item xs={12} xm={5} xl={5} paddingLeft="50px">
                      <Stack
                        direction="row"
                        spacing={2}
                        className={classes.horizontalStack}
                      >
                        <Typography
                          variant="h6"
                          color="textPrimary"
                          gutterBottom
                          paddingLeft="20px"
                        >
                          Date:
                        </Typography>
                        <Typography
                          variant="h6"
                          color="textPrimary"
                          gutterBottom
                        >
                          6/6/2020
                        </Typography>
                      </Stack>
                    </Grid>
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
                    <Grid item xs={12} xm={5} xl={5} paddingLeft="50px">
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
                          URL:
                        </Typography>
                        <link
                        to= {selectedCompany.url}
                        >
                        </link>
                      </Stack>
                    </Grid>
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
                          Employees:
                        </Typography>
                        <Typography
                          variant="h6"
                          color="textPrimary"
                          gutterBottom
                          paddingRight="20px"
                        >
                          100000+
                        </Typography>
                      </Stack>
                    </Grid>
                    <Grid item xs={12} xm={5} xl={5} paddingLeft="50px">
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
                          Revenue:
                        </Typography>
                        <Typography
                          variant="h6"
                          color="textPrimary"
                          gutterBottom
                        >
                          10B$
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  in felis pellentesque ante condimentum eleifend vitae lacinia
                  turpis. Mauris imperdiet neque id pellentesque tempor. Ut
                  tempor consectetur nibh a malesuada leifend vitae lacinia
                  turpis. Mauris imperdiet neque id pellentesque tempor. Ut
                  tempor consectetur nibh a malesuada. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Donec in felis pellentesque
                  ante condimentum eleifend vitae lacinia turpis. Mauris
                  imperdiet neque id pellentesque tempor. Ut tempor consectetur
                  nibh a malesuada leifend vitae lacinia turpis. Mauris
                  imperdiet neque id pellentesque tempor. Ut tempor consectetur
                  nibh a malesuada.
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
                <Card className={classes.card}>
                  <CardActionArea disableRipple>
                    <CardHeader
                      avatar={<Avatar src='amazon.png' />}
                      action={
                        <Link to="/internships/1">
                          <IconButton>
                            <ArrowForward />
                          </IconButton>
                        </Link>
                      }
                      title={"Junior Software Developer"}
                      subheader={"Amazon"}
                    />
                  </CardActionArea>
                </Card>
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

              <ReviewCell/>
              </Card>
              {/* <Card className={classes.card}>
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
                <Typography padding="20px">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  in felis pellentesque ante condimentum eleifend vitae lacinia
                  turpis. Mauris imperdiet neque id pellentesque tempor. Ut
                  tempor consectetur nibh a malesuada leifend vitae lacinia
                  turpis. Mauris imperdiet neque id pellentesque tempor. Ut
                  tempor consectetur nibh a malesuada. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Donec in felis pellentesque
                  ante condimentum eleifend vitae lacinia turpis. Mauris
                  imperdiet neque id pellentesque tempor. Ut tempor consectetur
                  nibh a malesuada leifend vitae lacinia turpis. Mauris
                  imperdiet neque id pellentesque tempor. Ut tempor consectetur
                  nibh a malesuada.
                </Typography>
              </Card> */}
            </Stack>
          </Container>
        </div>
        <br></br> <br></br> <br></br>
        <Footer />
      </main>
    </>
  );

  function ReviewCell(){
    const classes = useStyles();
    return(
      <Card  margin="100px" padding="25px">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 2, sm: 4, md: 4 }}
          xs={12} xm={6} xl={4}
        >
          <Typography variant="h5" component="div" sx={{flexDirection: 'row' }} paddingLeft="25px">
              Name: Zaeem
          </Typography>
          <Divider variant="vertical" />
          <Typography variant="h5" component="div" sx={{flexDirection: 'row' }}>
              Position: SWE
          </Typography>
          <Divider variant="vertical" />
          <Typography component="div" variant="h5" sx={{flexDirection: 'row' }}>
           Review: 5/5★
          </Typography>
          <Typography component="div" variant="h5" sx={{flexDirection: 'row' }}>
           Date: 11/10/2022
          </Typography>
        </Stack>
      
      <Typography component="div" padding="25px">
        <ReadMore text = {lorum}/>
      </Typography>
      <Divider orientation="row" variant="middle" flexItem />
    </Card>
    
    
    );

  }
}
