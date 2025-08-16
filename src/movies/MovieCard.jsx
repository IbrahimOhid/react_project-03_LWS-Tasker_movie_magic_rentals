import React, { useContext, useState } from "react";
import { getImgUrl } from "../utility/movieUtility";
import Tag from "../assets/tag.svg";
import Rating from "./Rating";
import MovieDetailsModal from "./MovieDetailsModal";
import { MovieContext } from "../context";

const MovieCard = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [cartMovie, setCartMovie] = useContext(MovieContext);

  const handleSelectionMovie = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

  const handleAddMovie = (e, movie) => {
    e.stopPropagation();

    const addedMovie = cartMovie.find((item) => item.id === movie.id);
    if (!addedMovie) {
      setCartMovie([...cartMovie, movie]);
    } else {
      alert("Already Added Movie");
    }
  };

  return (
    <>
      {showModal && (
        <MovieDetailsModal
          movie={selectedMovie}
          onClose={() => setShowModal(false)}
          onAddedModalMovie={handleAddMovie}
        />
      )}
      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <a onClick={() => handleSelectionMovie(movie)}>
          <img
            className="w-full object-cover"
            src={getImgUrl(movie.cover)}
            alt={movie.title}
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{movie.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>

            <Rating value={movie.rating} />

            <a
              className="bg-[#00D991] rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              href="#"
              onClick={(e) => handleAddMovie(e, movie)}
            >
              <img src={Tag} alt="" />
              <span>${movie.price} | Add to Cart</span>
            </a>
          </figcaption>
        </a>
      </figure>
    </>
  );
};

export default MovieCard;
