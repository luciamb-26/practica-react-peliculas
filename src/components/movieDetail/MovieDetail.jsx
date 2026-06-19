import React from "react";
import { useParams, Link } from "react-router-dom";
import moviesJSON from "../../assets/movies.json";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const MovieDetail = () => {
    const { id } = useParams();

    const pelicula = moviesJSON.find(
        (pelicula) => pelicula.id === Number(id)
    );

    if (!pelicula) {
        return (
            <Container sx={{ mt: 4 }}>
                <Typography variant="h4" component="h1">
                    Película no encontrada
                </Typography>

                <Button
                    component={Link}
                    to="/"
                    variant="contained"
                    sx={{ mt: 2 }}
                >
                    Volver
                </Button>
            </Container>
        );
    }

    return (
        <Container sx={{ mt: 4 }}>
            <Typography variant="h3" component="h1">
                {pelicula.title}
            </Typography>

            <Button
                component={Link}
                to="/"
                variant="contained"
                sx={{ mt: 3 }}
            >
                Volver
            </Button>
        </Container>
    );
};

export default MovieDetail;