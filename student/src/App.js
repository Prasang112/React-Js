import './App.css';
import Header from './Component/Header';
import First from './Component/first';
import AddStudent from './Component/AddStudent';
import data from './data';
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      studentList: data,
      defaultBranch: "all"
    }
  }
  handleChange = (defaultBranch) =>{
    this.setState({defaultBranch});
  }
  addNewRecord = (roll, name, branch, mobile) => {
    let newStudent = { roll, name, branch, mobile };
    this.setState({ studentList: [...this.state.studentList, newStudent] });
  }

  deleteRecord = (roll) => {
    if (window.confirm("Are you sure")) {
      let index = this.state.studentList.findIndex((student) => student.roll == roll);
      this.state.studentList.splice(index, 1);
      this.setState({ studentList: [...this.state.studentList] });
    }
  }

  render() {
    return <>
      <Header />
      <AddStudent studentList={this.state.studentList} addNewRecord = {this.addNewRecord} defaultBranch = {this.handleChange} />
      <First studentList={this.state.studentList} defaultBranch={this.state.defaultBranch} deleteRecord={this.deleteRecord} />
    </>
  }
}

export default App;
