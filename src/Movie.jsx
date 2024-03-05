import React, { useContext, useEffect } from 'react';
import MovieContext from './MovieContext';

const Movie = ({ match, history }) => {
  const { setMovieId } = useContext(MovieContext);
  const movieId = match.params.id;

  useEffect(() => {
    setMovieId(movieId);
    history.push('/watch');
  }, [movieId, setMovieId, history]);

  return null; // No need to render anything in this component
};

export default Movie;
