import { Component } from "react";

export default class Table extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { taskList, defaultStatus } = this.props;
        return <>
            <div className='container mt-5'>
                <table className='table text-center'>
                    <thead>
                        <tr>
                            <th>S NO.</th>
                            <th>Title</th>
                            <th>Date</th>
                            <th>Priority</th>
                            <th>Operation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {taskList.filter((task) => task.status === defaultStatus)
                            .map((task, index) => <tr key={index} >
                                <td>{index + 1}</td>
                                <td>{task.Title}</td>
                                <td>{task.Date}</td>
                                <td className={task.Priority === 'High' ? 'bg-success' : task.Priority === 'Low' ? 'bg-warning' : 'bg-info'}>{task.Priority}</td>
                                <td>
                                    {task.status === 'active' ? <button onClick={() => { this.props.changeTask('deactive', task.SNo) }} className='btn btn-danger'>Deactive</button> : <button onClick={() => { this.props.changeTask('active', task.SNo) }} className='btn btn-success'>Active</button>}
                                </td>
                            </tr>)}
                    </tbody>
                </table>
            </div>
        </>
    }
}