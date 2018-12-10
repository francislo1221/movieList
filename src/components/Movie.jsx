var Movie = ({movie, key, watchedClick, watched}) => {
  var status = "watch";

  if (watched.includes(movie)) {
    status = "seen"
    movie
  }

  return(
  <div className='movie'>
    <li title={movie}>{movie}
      <span>
        <button 
          value={movie}
          className="watched_btn"
          onClick={watchedClick}>{status}
        </button>
      </span>
    </li>
  </div>
  )
}


export default Movie;