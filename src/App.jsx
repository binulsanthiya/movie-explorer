import React, { useState, useMemo, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { MovieProvider, useMovies } from "./context/MovieContext";
import SearchBar from "./components/SearchBar";
import MovieGrid from "./components/MovieGrid";
import MovieDetails from "./components/MovieDetails";
import Favorites from "./components/Favorites";
import { fetchTrending, searchMovies } from "./api/tmdb";
import { Container, Typography, CircularProgress, AppBar, Toolbar, Button } from "@mui/material";

function Home() {
    const { state, dispatch } = useMovies();

    useEffect(() => {
        dispatch({ type: "SET_LOADING" });
        fetchTrending()
            .then((res) => dispatch({ type: "SET_TRENDING", payload: res.data.results }))
            .catch((err) => dispatch({ type: "SET_ERROR", payload: err.message }));
    }, [dispatch]);

    const handleSearch = (query) => {
        if (!query) return;
        dispatch({ type: "SET_LOADING" });
        searchMovies(query)
            .then((res) => dispatch({ type: "SET_MOVIES", payload: res.data.results }))
            .catch((err) => dispatch({ type: "SET_ERROR", payload: err.message }));
    };

    return (
        <Container sx={{ mt: 4 }}>
            <Typography variant="h3" sx={{ mb: 2 }}>
                Movie Explorer
            </Typography>
            <SearchBar onSearch={handleSearch} />
            {state.loading ? (
                <CircularProgress />
            ) : state.searchQuery && state.movies.length > 0 ? (
                <MovieGrid movies={state.movies} />
            ) : (
                <>
                    <Typography variant="h5" sx={{ mt: 2 }}>
                        Trending Movies
                    </Typography>
                    <MovieGrid movies={state.trending} />
                </>
            )}
            {state.error && (
                <Typography color="error" sx={{ mt: 2 }}>
                    {state.error}
                </Typography>
            )}
        </Container>
    );
}

function NavBar({ darkMode, toggleDarkMode }) {
    return (
        <AppBar position="static">
            <Toolbar>
                <Button color="inherit" component={Link} to="/">
                    Home
                </Button>
                <Button color="inherit" component={Link} to="/favorites">
                    Favorites
                </Button>
                <IconButton
                    color="inherit"
                    onClick={toggleDarkMode}
                    sx={{ marginLeft: "auto" }}
                >
                    {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default function App() {
    const [darkMode, setDarkMode] = useState(false);
    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode: darkMode ? "dark" : "light",
                },
            }),
        [darkMode]
    );

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <MovieProvider>
                <Router>
                    <NavBar
                        darkMode={darkMode}
                        toggleDarkMode={() => setDarkMode(!darkMode)}
                    />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/movie/:id" element={<MovieDetails />} />
                        <Route path="/favorites" element={<Favorites />} />
                    </Routes>
                </Router>
            </MovieProvider>
        </ThemeProvider>
    );
}
