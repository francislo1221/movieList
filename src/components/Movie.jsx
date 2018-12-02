var Movie = ({movie}) => {
  console.log(movie)
  return (
    <div className='movie'>
      <li title={movie}>{movie}</li>
    </div>
    ) 
};

export default Movie;