var Add = ({value, handleAddInput, handleAddClick}) => {
  return (
    <div className="add-bar form-inline">
      <input type='text' className="form-control" value={value} onChange={handleAddInput} placeholder="Add Movie.."/>
      <button className="btn" onClick={handleAddClick}>
        <span className="glyphicon glyphicon-plus"></span>
      </button>

    </div>
  )

}

export default Add;