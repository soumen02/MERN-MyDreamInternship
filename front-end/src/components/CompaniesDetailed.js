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

export default function CompaniesDetailed() {
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
              <Card className={classes.card}>
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
              </Card>
            </Stack>
          </Container>
        </div>
        <Footer />
      </main>
    </>
  );
}
