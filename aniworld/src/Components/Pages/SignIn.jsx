import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import "./signin.css";
import { defaultTheme } from "../../App";
import { CustomButton } from "../../App";
import Logo from "./img/Logo.png";
import { Link, useLocation, useParams } from 'react-router-dom';
import supabase from '../../supabaseClient'; // importă supabaseClient

function Navbar() {
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
                    <img src={Logo} alt="Logo" style={{ marginRight: '0.2em', marginTop: "-0.1em", }} />
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
            <Link color="inherit" to="/" style={{ textDecoration: 'none', color: '#F47521', }}>
                AniWorld
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function SignIn() {
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get('email');
        const password = data.get('password');

        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) {
            console.error('Error logging in:', error.message);
        } else {
            console.log('Logged in successfully!');
            // Redirect or perform any other necessary actions upon successful login
        }
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Navbar />
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 25,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h4">
                        Log In
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
                            Sign In
                        </CustomButton>
                        <Grid container>
                            <Grid item xs>
                                <Link to="#" variant="body2" style={{ textDecoration: 'none', color: '#F47521', }}>
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link to="/SignUp" variant="body2" style={{ textDecoration: 'none', color: '#F47521', }}>
                                    {"No account? Create one"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}
