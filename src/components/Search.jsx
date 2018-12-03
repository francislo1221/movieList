var Search = ({value, handleSearchInput}) => {
  return(
  <div className="search-bar form-inline">
    <input type='text' className="form-control" value={value} onChange={handleSearchInput}/>
    <button className="btn" >
      <span className="glyphicon glyphicon-search"></span>
    </button>

  </div>
  )
}

export default Search;

//render Search Bar