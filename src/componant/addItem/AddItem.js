import React from "react";

const AddItem = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className='input-group mb-3'>
      <input
        type="text"
        className="form-control"
        aria-describedby="basic-addon1"
        placeholder="Please Enter Courser"
        value={props.current}
        onChange={props.UpdataCourse}
      />
      <div className='input-group-prepend'>

      <button className="btn btn-success">Add Course</button>
      </div>
    </form>
  );
};
export default AddItem;
