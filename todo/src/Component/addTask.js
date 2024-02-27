import { Component } from "react";

export default class Add extends Component {
    render() {
        const { taskList, addNewTask, defaultStatus } = this.props;
        return <>
            <div className='container'>
                <div className='form-row mt-3'>
                    <div className='col'>
                        <input ref={(taskInput) => this.Title = taskInput} type='text' placeholder='Enter Task' className='form-control' />
                    </div>
                    <div className='col'>
                        <select className='form-control' ref={(level) => this.Priority = level}>
                            <option>Select task Level</option>
                            <option id='1'>High</option>
                            <option id='2'>Normal</option>
                            <option id='3'>Low</option>
                        </select>
                    </div>
                </div>

                <div className='form-row mt-5'>
                    <div className='col'>
                        <button className='btn btn-danger' onClick={() => addNewTask(this.Title.value, this.Priority.value)}>Add TASK</button>
                    </div>

                    <div className='col-md-3'>
                        <button onClick={() => defaultStatus("active")} className='btn btn-success ml-3'>Active:({taskList.filter((task) => task.status == 'active').length})</button>
                        <button onClick={() => defaultStatus("deactive")} className='btn btn-danger ml-3'>Deactive:({taskList.filter((task) => task.status == 'deactive').length})</button>
                    </div>
                </div>
            </div>
        </>
    }
}