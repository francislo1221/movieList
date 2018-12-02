import Movie from './Movie.js';

var MovieList = ({movieList}) => (
  <div className="movie-list">
    <ul>
      {movieList.map((title, index) => 
      {
        return (  
          <Movie 
            movie={title}
            key={index} 
          />
        )
      })}
    </ul>
  </div>
)

export default MovieList;