import Movie from './Movie.js';

var MovieList = ({movieList}) => (
  <div>
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