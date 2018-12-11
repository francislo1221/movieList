import MovieInfo from './MovieInfo.js'

var Movie = ({movie, key, watchedClick, watched, showInfo, year, runtime, metascore}) => {
  var status = "watch";

  if (watched.includes(movie)) {
    status = "seen"
    movie
  }


  return(
  <div className='movie' onClick={showInfo}>
    <li title={movie}>{movie}
      <span>
        <button 
          value={movie}
          className="watched_btn"
          onClick={watchedClick}>{status}
        </button>
      </span>
        <MovieInfo title={movie} year={year} runtime={runtime} metascore={metascore}/>
    </li>
  </div>
  )
}


export default Movie;