import * as React from 'react';
import { Container } from '@mui/system';
import { Avatar, Card, CardHeader, Grid, Typography, IconButton, CssBaseline, AppBar, Toolbar } from '@mui/material';
import {ArrowForward, ArrowBack} from "@material-ui/icons";
import useStyles from './InternshipsStyles'

export default function Internships() {
    const classes = useStyles();
    return (
        <>
        <CssBaseline/>
        <AppBar position="relative">
            <Toolbar>
                <IconButton>
                    <ArrowBack/>
                </IconButton>
                <Typography variant='h4'>Internships</Typography>
            </Toolbar>
        </AppBar>
        <main>
            <div>
                <Container maxWidth="md" className={classes.cardGrid}>
                    <Grid xs={12} sm={6} md={4}>
                        <InternshipCell/>
                    </Grid>
                </Container>
            </div>
        </main>
        </>
    );
}

function InternshipCell() {
    const classes = useStyles();
    const internships = Array(10).fill({
        'logo': 'https://source.unsplash.com/random',
        'title': 'Software Engineer',
        'companyName': 'Google'
    });

    return internships.map((internship) => (
        <Card className={classes.card}>
            <CardHeader
                avatar={
                    <Avatar>
                    :)
                    </Avatar>
                }
                action={
                    <IconButton>
                        <ArrowForward />
                    </IconButton>
                }
                title={internship.title}
                subheader={internship.companyName}
            />
        </Card>
    )
    );
}