// import logo from './logo.svg';
import './App.css';
import data from './data';
import { Component } from "react";
import Add from './Component/addTask';
import Table from './Component/table';

class App extends Component {
  constructor() {
    super();
    this.state = {
      taskList: data,
      defaultStatus: "active"
    }
  }
  handleChange = (defaultStatus) => {
    this.setState({ defaultStatus });
  }
  addNewTask = (Title, Priority) => {
    let curruntDate = new Date().toLocaleDateString();
    let copyList = [...this.state.taskList];
    let newTask = { Title, Date: curruntDate, Priority, SNo: copyList[copyList.length - 1].SNo + 1, status: 'active' };

    console.log('newTask', newTask);
    console.log('taskList', this.state.taskList);

    this.setState({ taskList: [...this.state.taskList, newTask] });
    console.log('taskList', this.state.taskList);
    window.alert("new task inserted")
  }

  changeTask = (status, SNo) => {
    if (window.confirm("You want to change")) {
      let index = this.state.taskList.find((task) => task.SNo == SNo);
      index.status = status;
      this.setState({});
    }
  }

  render() {
    return <>
      <div className='container-fluid bg-danger p-1'>
        <h2 className='text-center text-white'>TO DO LIST</h2>
      </div>
      <Add taskList={this.state.taskList} addNewTask={this.addNewTask} defaultStatus={this.handleChange} />
      <Table taskList={this.state.taskList} defaultStatus={this.state.defaultStatus} changeTask={this.changeTask} />
    </>
  }
}

export default App;