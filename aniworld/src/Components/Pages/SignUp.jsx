import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import {defaultTheme} from "../../App";
import {CustomButton} from "../../App";
import "./signin.css"
import Logo from "./img/Logo.png"
import {Link, useLocation, useParams} from 'react-router-dom';

function Navbar(){
    return (
        <a className="navbar">
            <p>
                <Link to="/" style={{
                    textDecoration: 'none',
                    color: '#F47521',
                    display: 'flex',
                    alignItems: 'center',
                    marginTop: '0.6em',
                }}>
                    <img src={Logo} alt="Logo" style={{marginRight: '0.2em', marginTop: "-0.1em",}}/>
                    AniWorld
                </Link>
            </p>
        </a>
    );
}

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" to="/" style={{textDecoration: 'none', color: '#F47521',}}>
                AniWorld
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function SignUp() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Navbar/>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 25,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        backgroundImage: '',
                    }}
                >
                    <Typography component="h1" variant="h4" color="#white">
                        Create Account
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                variant="standard"
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                variant="standard"
                            />

                        <CustomButton
                            type="submit"
                            fullWidth
                            variant="contained"
                        >
                            Create Account
                        </CustomButton>
                        <Grid>
                            <Link to="/signin" variant="body2" style={{textDecoration: 'none', color: '#F47521',}}>
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider>
    );
}
