# 🎬 Movie Explorer

A modern React web app to search, browse, and discover movies using real-time data from [TMDb](https://www.themoviedb.org/).  
Easily search for your favourite films, view trending movies, and manage your personal favourites with a beautiful, responsive UI.

---

## 🚀 Demo

[Live Demo](https://movie-explorer-dve4l1q00-binul-santhiyas-projects.vercel.app)

---


## 📝 Features

- 🔍 **Search** for movies in real-time using the TMDb API
- 🎬 **Trending** movies section on the homepage
- ⭐ **Mark favorites** and view them in a dedicated page
- 🌗 **Light/Dark mode** toggle
- 📱 **Responsive design** for mobile and desktop
- 🎥 **Movie details** page with overview, genres, rating, and trailer

---

## 🛠️ Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/) (or Create React App)
- [Material UI](https://mui.com/)
- [Axios](https://axios-http.com/)
- [React Router](https://reactrouter.com/)
- [TMDb API](https://www.themoviedb.org/documentation/api)

---

## ⚡ Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or newer recommended)
- npm (comes with Node.js) or yarn
- A TMDb API key ([get yours here](https://www.themoviedb.org/settings/api))

### Steps

1. **Clone the repository:**

-git clone https://github.com/binulsanthiya/movie-explorer.git
cd movie-explorer


2. **Install dependencies:**


3. **Set up your API key:**

- Create a file named `.env` in the root directory of the project.
- Add the following line to `.env` (replace with your actual TMDb API key):

  ```
  VITE_TMDB_API_KEY=your_tmdb_api_key_here
  ```

4. **Start the development server:**


The app will be available at [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

---

**Note:**  
- If you use Create React App instead of Vite, use `REACT_APP_TMDB_API_KEY=your_tmdb_api_key_here` in your `.env` file and run `npm start` to launch the app.


