import React, { createContext, useReducer, useContext } from "react";

const MovieContext = createContext();

const initialState = {
    movies: [],
    trending: [],
    favorites: JSON.parse(localStorage.getItem("favorites") || "[]"),
    loading: false,
    error: null,
    searchQuery: "",
};

function reducer(state, action) {
    switch (action.type) {
        case "SET_MOVIES":
            return { ...state, movies: action.payload, loading: false };
        case "SET_TRENDING":
            return { ...state, trending: action.payload, loading: false };
        case "SET_LOADING":
            return { ...state, loading: true, error: null };
        case "SET_ERROR":
            return { ...state, loading: false, error: action.payload };
        case "SET_SEARCH_QUERY":
            return { ...state, searchQuery: action.payload };
        case "ADD_FAVORITE":
            { const newFavs = [...state.favorites, action.payload];
            localStorage.setItem("favorites", JSON.stringify(newFavs));
            return { ...state, favorites: newFavs }; }
        case "REMOVE_FAVORITE":
            { const updatedFavs = state.favorites.filter(m => m.id !== action.payload);
            localStorage.setItem("favorites", JSON.stringify(updatedFavs));
            return { ...state, favorites: updatedFavs }; }
        default:
            return state;
    }
}

export function MovieProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <MovieContext.Provider value={{ state, dispatch }}>
            {children}
        </MovieContext.Provider>
    );
}

export function useMovies() {
    return useContext(MovieContext);
}
