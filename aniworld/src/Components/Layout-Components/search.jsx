import React, { useState, useEffect } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: 'transparent',
    '&:hover': {
        backgroundColor: 'transparent',
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

const SuggestionsContainer = styled('div')(({ theme }) => ({
    position: 'absolute',
    backgroundColor: '#909CA2',
    color: '#FFFFFF',
    width: '100%',
    maxHeight: '200px',
    overflowY: 'auto',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    borderRadius: theme.shape.borderRadius,
    zIndex: 1,
}));

const Suggestion = styled('div')(({ theme }) => ({
    padding: theme.spacing(1),
    borderBottom: '1px solid #ccc',
    cursor: 'pointer',
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.black, 0.1),
    },
}));

export default function SearchAppBar() {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        if (query.length > 2) {
            axios.get(`/api/anime/search?query=${query}`)
                .then(response => setSuggestions(response.data))
                .catch(error => console.error(error));
        } else {
            setSuggestions([]);
        }
    }, [query]);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: '#23252B', boxShadow: 'none' }}>
                <Toolbar>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        {suggestions.length > 0 && (
                            <SuggestionsContainer>
                                {suggestions.map((anime) => (
                                    <Suggestion key={anime.id}>
                                        {anime.title}
                                    </Suggestion>
                                ))}
                            </SuggestionsContainer>
                        )}
                    </Search>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
