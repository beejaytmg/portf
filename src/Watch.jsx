import React, { useContext } from 'react';
import MovieContext from './MovieContext';

const Watch = () => {
  const { movieId } = useContext(MovieContext);

  // Embed the iframe with the movie source
  return (
    <div>
      <h2>Watch Movie</h2>
      <iframe src={`https://embtaku.pro/streaming.php?id=${movieId}`} frameborder="0" allowfullscreen></iframe>
    </div>
  );
};

export default Watch;
