var MovieInfo = ({title}) => {
  console.log(title)
  return (
  <div id={title} style={{display: "none"}}>
    <ul>
      <li>Year</li>
      <li>Runtime</li>
      <li>Metascore</li>
      <li>imdbRating</li>
      <li>Watched</li>      
    </ul>
  </div>
  )
}

export default MovieInfo;