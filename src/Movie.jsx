import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import MovieContext from './MovieContext';

const Movie = ({ match }) => {
  const { setMovieId } = useContext(MovieContext);
  const history = useHistory();
  const movieId = match.params.id;

  useEffect(() => {
    setMovieId(movieId);
    history.push('/watch');
  }, [movieId, setMovieId, history]);

  return null; // No need to render anything in this component
};

export default Movie;
