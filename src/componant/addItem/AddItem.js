import React from 'react'
import PropTypes from 'prop-types'

function AddItem ({ updataCourse, handleSubmit, current }) {
  return (
    <form onSubmit={handleSubmit} className='input-group mb-3'>
      <input
        type='text'
        className='form-control'
        aria-describedby='basic-addon1'
        placeholder='Please enter new course'
        value={current}
        onChange={updataCourse}
      />
      <div className='input-group-prepend'>

      <button className='btn btn-success'>Add Course</button>
      </div>
    </form>
  )
}

export default AddItem;

AddItem.propTypes = {
  updataCourse: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  current: PropTypes.string.isRequired
}
