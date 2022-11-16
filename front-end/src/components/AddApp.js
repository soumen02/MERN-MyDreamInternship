import * as React from 'react';
// import { Container, Stack } from "@mui/system";
import { Link, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Toolbar from '@mui/material/Toolbar';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import { ArrowBack } from '@material-ui/icons';
import CssBaseline from '@mui/material/CssBaseline';
import axios from "axios";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
// import qs from 'qs';

// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import AddCircleIcon from '@mui/icons-material/AddCircle';

// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}


export default function LogIn() {
    const theme = createTheme();
    const navigate = useNavigate();
    const [status, setStatus] = React.useState('');


    const handleChange = (event) => {
        setStatus(event.target.value);
        // console.log(status)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const company_name = data.get('company');
        const position = data.get('position');
        const deadline = data.get('deadline');
        // const status = 

        const params = {
            "company_name": company_name,
            "position": position,
            "deadline": deadline,
            "status": status
        }
        // console.log(params);

        axios
            .post('http://localhost:5002/post_applications', {
                params
            },
            )
            .then((response) => {
                let appData = response.data;
                console.log(appData)
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                
            });
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <Link to="/applications">
                        <IconButton>
                            <ArrowBack />
                        </IconButton>
                    </Link>
                    <Typography variant="h6" color="inherit" noWrap>
                        Applications
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <AddCircleIcon sx={{ m: 1}}>
                        {/* <LockOutlinedIcon /> */}
                    </AddCircleIcon>
                    <Typography component="h1" variant="h5">
                        Add New
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="company"
                            label="Company Name"
                            name="company"
                            autoComplete="company"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="position"
                            label="Position Title"
                            id="position"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="deadline"
                            // label="Deadline"
                            type="date"
                            id="deadline"
                        />
                        <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="status">Status</InputLabel>
                            <Select
                            labelId="select-label"
                            id="status"
                            value={status}
                            label="Status"
                            onChange={handleChange}
                            >
                            <MenuItem value={"saved"}>Saved</MenuItem>
                            <MenuItem value={"in-progress"}>In-Progress</MenuItem>
                            <MenuItem value={"completed"}>Completed</MenuItem>
                            <MenuItem value={"sent"}>Sent</MenuItem>
                            <MenuItem value={"accepted"}>Accepted</MenuItem>
                            </Select>
                        </FormControl>
                        </Box>                      
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Add
                        </Button>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    )
}
