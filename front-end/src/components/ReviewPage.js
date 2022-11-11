import * as React from 'react';
 import { Stack } from "@mui/system";
import { Link, useNavigate } from "react-router-dom";

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { ArrowBack } from '@material-ui/icons';
import CssBaseline from '@mui/material/CssBaseline';
import axios from "axios";
// import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';

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


export default function ReviewPage() {
    const theme = createTheme();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        navigate('/all');
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
                        Review
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
                    <Box component="form" onSubmit={handleSubmit}>
                        <Typography variant="h5" component="div" sx={{flexDirection: 'row' }}>
                            Name: Zaeem
                        </Typography>
                        <Typography variant="h5" component="div" sx={{flexDirection: 'row' }}>
                            Company: Amazon
                        </Typography>
                        <Typography variant="h5" component="div" sx={{flexDirection: 'row' }}>
                            Position: SWE
                        </Typography>

                        <form id="form">

                        <TextField
                            id="outlined-multiline-static"
                            rows={4}
                            multiline
                            margin="normal"
                            required
                            fullWidth
                            name="review"
                            label="Leave your review here"
                            type="password"
                        />
                        <Typography variant="h6" component="div" sx={{flexDirection: 'row' }}>
                            Rate your experience:
                        </Typography>
                        <Stack
                        direction={{ sm: 'row' }}
                        >
                        
                        <Typography variant="h6" component="div">
                        <label marginTop="5px">
                            <select>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>                
                        </label>  /5★
                        </Typography>
                        </Stack>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Submit
                        </Button>
                        </form>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    )
    const postreview = () => {
    const form = document.getElementById("form");
    form.addEventListener('submit',function(e) {
        e.preventDefault();
        const formData = new FormData(form);
        console.log(...formData);
        axios.post("https://httpbin.org/post", formData);
    })
    };
}