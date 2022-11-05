import * as React from "react";
import { Container, Stack } from "@mui/system";
import {
  Box,
  Typography,
  IconButton,
  CssBaseline,
  AppBar,
  Toolbar,
  Button,
} from "@mui/material";
import { ArrowBack } from "@material-ui/icons";
import useStyles from "./InternshipDetailedStyles";
import { useLocation, useNavigate } from "react-router-dom";

export default function InternshipDetailed() {
  const classes = useStyles();
  const navigate = useNavigate();
  const { selectedInternship } = useLocation().state;

  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <IconButton onClick={() => navigate(-1)}>
            <ArrowBack />
          </IconButton>
          <Typography variant="h4">{selectedInternship.companyName}</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth="md" className={classes.mainContainer}>
            <Stack direction="column" spacing={2}>
              <Stack direction="row" className={classes.horizontalStack}>
                <Typography variant="h10" className={classes.dataLabel}>
                  Position title:
                </Typography>
                <Typography variant="h10">
                  {selectedInternship.positionName}
                </Typography>
              </Stack>
              <Stack direction="row" className={classes.horizontalStack}>
                <Typography variant="h10" className={classes.dataLabel}>
                  Deadline:
                </Typography>
                <Typography variant="h10">Not yet</Typography>
              </Stack>
              <Stack direction="row" className={classes.horizontalStack}>
                <Typography variant="h10" className={classes.dataLabel}>
                  Posted time:
                </Typography>
                <Typography variant="h10">Not yet</Typography>
              </Stack>
              <Stack direction="row" className={classes.horizontalStack}>
                <Typography variant="h10" className={classes.dataLabel}>
                  Requirements:
                </Typography>
                <Stack direction="column" spacing={0.3}>
                  Not yet
                  {/* {selectedInternship.requirements.map((requirement) => (
                    <Typography variant="h10">{requirement}</Typography>
                  ))} */}
                </Stack>
              </Stack>
              <Stack direction="row" className={classes.horizontalStack}>
                <Typography variant="h10" className={classes.dataLabel}>
                  Location:
                </Typography>
                <Typography variant="h10">
                  {selectedInternship.locations}
                </Typography>
              </Stack>
            </Stack>
            <Box textAlign="center" className={classes.applyButton}>
              <Button
                variant="contained"
                size="medium"
                href={selectedInternship.url}
              >
                Apply
              </Button>
            </Box>
          </Container>
        </div>
      </main>
    </>
  );
}
