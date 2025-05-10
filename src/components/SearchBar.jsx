import React from "react";
import { TextField } from "@mui/material";
import { useMovies } from "../context/MovieContext";


export default function SearchBar({ onSearch }) {
    const { state, dispatch } = useMovies();

    const handleChange = (e) => {
        dispatch({ type: "SET_SEARCH_QUERY", payload: e.target.value });
        onSearch(e.target.value);
    };

    return (
        <TextField
            label="Search Movies"
            variant="outlined"
            fullWidth
            value={state.searchQuery}
            onChange={handleChange}
            sx={{ mb: 3 }}
        />
    );
}
