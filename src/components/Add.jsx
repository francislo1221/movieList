var Add = ({value, handleInput}) => {
  return (
    <div className="add-bar form-inline">
      <input type='text' className="form-control" value={value} onChange={handleInput} placeholder="Add Movie.."/>
      <button className="btn">
        <span className="glyphicon glyphicon-plus"></span>
      </button>

    </div>
  )

}

export default Add;