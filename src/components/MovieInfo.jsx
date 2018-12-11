var MovieInfo = ({title, year, runtime, metascore}) => {
  console.log(title)
  return (
  <div id={title} style={{display: "none"}}>
    <ul>
      <li> Year {year} </li>
      <li> Runtime {runtime} </li>
      <li> Metascore {metascore} </li>
    </ul>
  </div>
  )
}

export default MovieInfo;