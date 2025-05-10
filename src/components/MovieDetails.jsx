import React, { useEffect, useState } from "react";
import { getMovieDetails } from "../api/tmdb";
import { useParams } from "react-router-dom";
import { Container, Typography, Chip, Box } from "@mui/material";

export default function MovieDetails() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        getMovieDetails(id).then((res) => setMovie(res.data));
    }, [id]);

    if (!movie) return <div>Loading...</div>;

    return (
        <Container sx={{ mt: 4 }}>
            <Typography variant="h4">{movie.title}</Typography>
            <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                style={{ maxWidth: 300 }}
            />
            <Typography variant="body1" sx={{ mt: 2 }}>
                {movie.overview}
            </Typography>
            <Box sx={{ mt: 2 }}>
                {movie.genres.map((genre) => (
                    <Chip key={genre.id} label={genre.name} sx={{ mr: 1 }} />
                ))}
            </Box>
            <Typography variant="body2" sx={{ mt: 2 }}>
                Release Date: {movie.release_date}
            </Typography>
            <Typography variant="body2">
                Rating: {movie.vote_average}
            </Typography>
            {/* Show trailer if available */}
            {movie.videos?.results?.length > 0 && (
                <Box sx={{ mt: 2 }}>
                    <Typography variant="subtitle1">Trailer:</Typography>
                    <iframe
                        width="400"
                        height="225"
                        src={`https://www.youtube.com/embed/${movie.videos.results[0].key}`}
                        title="Trailer"
                        allowFullScreen
                    />
                </Box>
            )}
        </Container>
    );
}
