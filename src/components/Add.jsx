var Add = ({value, handleInput, handleAdd, onKeyDown}) => {
  return (
    <div className="add-bar form-inline">
      <input id='add' type='text' className="form-control" value={value} onChange={handleInput} onKeyDown={onKeyDown} placeholder="Add Movie.."/>
      <button className="btn" onClick={handleAdd}>
        <span className="glyphicon glyphicon-plus"></span>
      </button>

    </div>
  )

}

export default Add;