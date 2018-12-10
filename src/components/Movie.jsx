var Movie = ({movie}) => {
  debugger;
  return (
  <div className='movie'>
    <li title={movie}>{movie}
      <span>
        <button className="watched_btn">Watched
        </button>
      </span>
    </li>
  </div>
  )
}


export default Movie;