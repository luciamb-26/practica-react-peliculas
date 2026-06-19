import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/home.jsx";
import MovieDetail from "./components/movieDetail/MovieDetail.jsx";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movie/:id" element={<MovieDetail />} />
            </Routes>
        </div>
    );
}

export default App;