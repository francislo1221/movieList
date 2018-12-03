var Search = ({value, handleSearchInput, handleSearchClick}) => {
  return(
  <div className="search-bar form-inline">
    <input type='text' className="form-control" value={value} onChange={handleSearchInput} placeholder="Search..."/>
    <button className="btn" onClick={handleSearchClick}>
      <span className="glyphicon glyphicon-search"></span>
    </button>

  </div>
  )
}

export default Search;

//render Search Bar