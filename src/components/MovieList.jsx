import Movie from './Movie.js';

var MovieList = ({movieList, watchedClick}) => {
  return (
  <div className="movie-list">
    <ul>
      {movieList.map((title, index) => 
      {
        return (  
          <Movie 
            movie={title}
            key={index} 
            watchedClick={watchedClick}
          />
        )
      })}
    </ul>
  </div>
  )
}

export default MovieList;