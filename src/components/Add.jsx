var Add = ({value, handleAddInput, handleAddClick, onKeyDown}) => {
  return (
    <div className="add-bar form-inline">
      <input id='add' type='text' className="form-control" value={value} onChange={handleAddInput} onKeyDown={onKeyDown} placeholder="Add Movie.."/>
      <button className="btn" onClick={handleAddClick}>
        <span className="glyphicon glyphicon-plus"></span>
      </button>

    </div>
  )

}

export default Add;