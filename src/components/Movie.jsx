import MovieInfo from './MovieInfo.js'

var Movie = ({movie, key, watchedClick, watched, showInfo}) => {
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
        <MovieInfo title={movie}/>
    </li>
  </div>
  )
}


export default Movie;