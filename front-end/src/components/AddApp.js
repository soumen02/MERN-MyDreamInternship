import * as React from 'react';
// import { Container, Stack } from "@mui/system";
import { Link, useNavigate } from "react-router-dom";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { ArrowBack } from '@material-ui/icons';
import CssBaseline from '@mui/material/CssBaseline';

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


export default function AddApp() {
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
                            placeholder="hello"
                            name="deadline"
                            label="Deadline"
                            type="date"
                            id="deadline"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Status"
                            type="password"
                            id="status"
                        />
                        <label>
                        <select>
                            <option value="saved">Saved</option>
                            <option value="inprogress">In-Progress</option>
                            <option value="completed">Completed</option>
                            <option value="sent">Sent</option>
                            <option value="accepted">Accepted</option>
                            </select>
                        </label>
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