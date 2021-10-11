import React, { Component } from "react";
import AddItem from "./componant/addItem/AddItem";
import Courser from "./componant/courses/courser";
import "./App.css";

class App extends Component {
  state = {
    item: [{ name: "Html" }],
    current: "",
  };
  updataCourse = (e) => {
    this.setState({
      current: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    let item = this.state.item;
    let current = this.state.current;
    if (current !== "") {
      item.push({ name: current });
      this.setState({ item, current: "" });
    } else alert("Please Enter Course! ");
  };

  delete = (index) => {
    let filterCourse = this.state.item.filter((item, q) => {
      return q !== index;
    });
    this.setState({ item: filterCourse });
  };

  EditCourse = (index, value) => {
    let CourseUnit = this.state.item;
    let coursesIndex = CourseUnit[index];
    coursesIndex["name"] = value;
  };

  render() {
    const { item } = this.state;
    const length = item.length;
    const SetCourse = length ? (item.map((course, index) => {
            return (
                <Courser
                details={course}
                key={index}
                EditCourse={this.EditCourse}
                delete={this.delete}
                index={index}
                />
                )
            })
            ):(<h5 className="text-center text-danger"> No courses to show!</h5>);
    return (
      <div className="container mt-5 ">
        <h4 className="text-center mt-5 mb-3 p-3 bg-warning">ADD Course</h4>
        <AddItem
          updataCourse={this.updataCourse}
          handleSubmit={this.handleSubmit}
          current={this.state.current}
        />
        {SetCourse}
      </div>
    );
  }
}

export default App;
