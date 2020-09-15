import React, { Component } from "react";

class Courser extends Component {
  state = {
    toggle: false,
  };

  RenderCourse = () => {
    return (
      <div className="input-group mt-2">
        <span className='form-control'>{this.props.details.name}</span>
        <div className='input-group-append'>

        <button
          className=" btn btn-secondary pr-3 pl-3"
          onClick={() => {
              this.toggleChange();
          }}
        >
          Edit
        </button>
        <button
          className="btn btn-danger "
          onClick={() => {
            this.props.delete(this.props.index);
        }}
        >
          Delete
        </button>
        </div>
      </div>
    );
  };
  toggleChange = () => {
    let toggle = this.state.toggle;
    this.setState({
      toggle: !toggle,
    });
  };
  handleEdit = (e) => {
    e.preventDefault();
    this.props.EditCourse(this.props.index, this.input.value);
    this.toggleChange();
  };
  ChangeComponent = () => {
    return (
      <form onSubmit={this.handleEdit} className='input-group mt-2'>
        <input
        className='form-control'
          type="text"
          ref={(v) => {
            this.input = v;
          }}
          defaultValue={this.props.details.name}
        />
        <button className="btn btn-success">UpData</button>
      </form>
    );
  };
  render() {
    let toggle = this.state.toggle;

    return <div>{toggle ? this.ChangeComponent() : this.RenderCourse()}</div>;
  }
}
export default Courser;
