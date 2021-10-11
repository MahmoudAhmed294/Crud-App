import React from "react";

const AddItem = ({ updataCourse, handleSubmit, current }) => {
  return (
    <form onSubmit={handleSubmit} className='input-group mb-3'>
      <input
        type="text"
        className="form-control"
        aria-describedby="basic-addon1"
        placeholder="Please Enter Courser"
        value={current}
        onChange={updataCourse}
      />
      <div className='input-group-prepend'>

      <button className="btn btn-success">Add Course</button>
      </div>
    </form>
  );
};
export default AddItem;
