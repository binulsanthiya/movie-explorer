import React from "react";
import { useMovies } from "../context/MovieContext";
import { Container, Typography } from "@mui/material";
import MovieGrid from "./MovieGrid";

export default function Favorites() {
    const { state } = useMovies();

    return (
        <Container sx={{ mt: 4 }}>
            <Typography variant="h4" sx={{ mb: 3 }}>
                My Favorite Movies
            </Typography>
            {state.favorites.length > 0 ? (
                <MovieGrid movies={state.favorites} />
            ) : (
                <Typography variant="body1">You have no favorite movies yet.</Typography>
            )}
        </Container>
    );
}
