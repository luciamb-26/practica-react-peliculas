import React from "react";
import moviesJSON from "../../assets/movies.json";
import MovieCard from "../movieCard/MovieCard.jsx";
import "./home.css";

const Home = () => {
    const peliculas = moviesJSON.slice(0, 5);

    return (
        <main className="home">
            <h1>Películas recientes</h1>

            <section className="movies-container">
                {peliculas.map((pelicula) => (
                    <MovieCard key={pelicula.id} pelicula={pelicula} />
                ))}
            </section>
        </main>
    );
};

export default Home;