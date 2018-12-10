import Movie from './Movie.js';

var MovieList = ({movieList, watchedClick, watched, showInfo}) => {
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
            watched={watched}
            showInfo={showInfo}
          />
        )
      })}
    </ul>
  </div>
  )
}

export default MovieList;