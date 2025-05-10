import React from "react";
import { Card, CardMedia, CardContent, Typography, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useMovies } from "../context/MovieContext";
import { useNavigate } from "react-router-dom";

export default function MovieCard({ movie }) {
    const { state, dispatch } = useMovies();
    const navigate = useNavigate();

    const isFavorite = state.favorites.some((fav) => fav.id === movie.id);

    const handleFavorite = (e) => {
        e.stopPropagation();
        if (isFavorite) {
            dispatch({ type: "REMOVE_FAVORITE", payload: movie.id });
        } else {
            dispatch({ type: "ADD_FAVORITE", payload: movie });
        }
    };

    return (
        <Card
            sx={{ width: 200, m: 1, cursor: "pointer" }}
            onClick={() => navigate(`/movie/${movie.id}`)}
        >
            <CardMedia
                component="img"
                height="300"
                image={
                    movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                        : "https://via.placeholder.com/200x300?text=No+Image"
                }
                alt={movie.title}
            />
            <CardContent>
                <Typography variant="subtitle1" noWrap>
                    {movie.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    ⭐ {movie.vote_average || "N/A"}
                </Typography>
                <IconButton onClick={handleFavorite} size="small">
                    <FavoriteIcon color={isFavorite ? "error" : "inherit"} />
                </IconButton>
            </CardContent>
        </Card>
    );
}
