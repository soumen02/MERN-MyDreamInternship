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
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import useStyles from "./InternshipsStyles";
import { Link } from "react-router-dom";
import axios from "axios";
import Footer from "./Footer"

export default function Applications() {
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
          <Typography variant="h4">Applications</Typography>
          <Grid container justifyContent="flex-end">
          <Link to="/">
            <IconButton>
              <MenuIcon />
            </IconButton>
          </Link>
          </Grid>
        </Toolbar>
      </AppBar>
    <Card className={classes.card}>
      <CardActionArea disableRipple>
        <CardHeader
          action={
            <Link to="/all">
          </Link>
          }
          title={
            <Grid container direction="row">
                <Grid item xs={11}>
                    All
                </Grid>
                <Grid item xs={1} justifyContent="flex-end">
                    <Typography>
                        15
                    </Typography>
                </Grid> 
            </Grid>
        }
        />
      </CardActionArea>
    </Card>
    <Card className={classes.card}>
      <CardActionArea disableRipple>
        <CardHeader
        //   action={
        //   }
          title={
            <Grid container direction="row">
                <Grid item xs={11}>
                    Saved
                </Grid>
                <Grid item xs={1} justifyContent="flex-end">
                    <Typography>
                        6
                    </Typography>
                </Grid> 
            </Grid>
        }
        />
      </CardActionArea>
    </Card>
    <Card className={classes.card}>
      <CardActionArea disableRipple>
        <CardHeader
        //   action={
        //   }
          title={
            <Grid container direction="row">
                <Grid item xs={11}>
                    In-Progress
                </Grid>
                <Grid item xs={1} justifyContent="flex-end">
                    <Typography>
                        20
                    </Typography>
                </Grid> 
            </Grid>
        }
        />
      </CardActionArea>
    </Card>
    <Card className={classes.card}>
      <CardActionArea disableRipple>
        <CardHeader
        //   action={
        //   }
          title={
            <Grid container direction="row">
                <Grid item xs={11}>
                    Completed
                </Grid>
                <Grid item xs={1} justifyContent="flex-end">
                    <Typography>
                        5
                    </Typography>
                </Grid> 
            </Grid>
        }
        />
      </CardActionArea>
    </Card>
    <Card className={classes.card}>
      <CardActionArea disableRipple>
        <CardHeader
        //   action={
        //   }
          title={
            <Grid container direction="row">
                <Grid item xs={11}>
                    Sent
                </Grid>
                <Grid item xs={1} justifyContent="flex-end">
                    <Typography>
                        8
                    </Typography>
                </Grid> 
            </Grid>
        }
        />
      </CardActionArea>
    </Card>
    <Card className={classes.card}>
      <CardActionArea disableRipple>
        <CardHeader
        //   action={
        //   }
          title={
            <Grid container direction="row">
                <Grid item xs={11}>
                    Accepted
                </Grid>
                <Grid item xs={1} justifyContent="flex-end">
                    <Typography>
                        1
                    </Typography>
                </Grid> 
            </Grid>
        }
        />
      </CardActionArea>
    </Card>
    <Card className={classes.card}>
      <CardActionArea disableRipple>
        <CardHeader
        //   action={
        //   }
          title={
            <Grid container direction="row">
                <Grid item xs={11}>
                    Deadlines
                </Grid>
                <Grid item xs={1} justifyContent="flex-end">
                    <Typography>
                        15
                    </Typography>
                </Grid> 
            </Grid>
        }
        />
      </CardActionArea>
    </Card>
    <Footer/>
    </>
  );
}

// function InternshipCell({ internship }) {
//   const classes = useStyles();

//   return (
//     <Card className={classes.card}>
//       <CardActionArea disableRipple>
//         <CardHeader
//         //   action={
//         //     <Link
//         //       to={internship.id.toString()}
//         //       state={{ selectedInternship: internship }}
//         //     >
//         //     </Link>
//         //   }
//           title={
//             <Grid container direction="row">
//                 <Grid item xs={10}>
//                     All
//                 </Grid>
//                 <Grid item xs={2} justifyContent="flex-end">
//                     <Typography>
//                         15
//                     </Typography>
//                 </Grid> 
//             </Grid>
//         }
//         />
//       </CardActionArea>
//     </Card>
//   );
// }

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
