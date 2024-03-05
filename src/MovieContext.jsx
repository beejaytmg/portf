import React, { createContext, useState } from 'react';

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movieId, setMovieId] = useState(null);

  return (
    <MovieContext.Provider value={{ movieId, setMovieId }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContext;
