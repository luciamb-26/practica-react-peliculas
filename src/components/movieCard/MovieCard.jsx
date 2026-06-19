import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

const MovieCard = ({ pelicula }) => {
    const imageUrl = `https://image.tmdb.org/t/p/w500${pelicula.poster_path}`;

    return (
        <Card className="movie-card">
            <CardMedia
                component="img"
                image={imageUrl}
                alt={pelicula.title}
                className="movie-image"
            />

            <CardActions className="movie-actions">
                <Button
                    size="small"
                    component={Link}
                    to={`/movie/${pelicula.id}`}
                >
                    + INFO
                </Button>
            </CardActions>
        </Card>
    );
};

export default MovieCard;