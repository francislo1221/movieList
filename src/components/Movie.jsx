var Movie = ({movie, key, watchedClick}) => {
  return (
  <div className='movie'>
    <li title={movie}>{movie}
      <span>
        <button 
          value={movie}
          className="watched_btn"
          onClick={watchedClick}
          >Watched
        </button>
      </span>
    </li>
  </div>
  )
}


export default Movie;