var Search = ({value, handleInput, handleSearchClick, onKeyDown}) => {
  return(
  <div className="search-bar form-inline">
    <input id='search' type='text' className="form-control" value={value} onChange={handleInput} onKeyDown={onKeyDown} placeholder="Search..."/>
    <button className="btn" onClick={handleSearchClick}>
      <span className="glyphicon glyphicon-search"></span>
    </button>

  </div>
  )
}

export default Search;

//render Search Bar