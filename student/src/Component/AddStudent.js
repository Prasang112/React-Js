import { Component } from "react";

export default class AddStudent extends Component {
    constructor(props){
        super(props)
        console.log(this.props)
    }
    
    render() {
        // const { studentList, addNewRecord } = this.props;
        return <>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='form-group'>
                            <input ref={(rollInput) => this.roll = rollInput} type='text' placeholder='Enter Roll Number' className='form-control' />
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='form-group'>
                            <input ref={(nameInput) => this.name = nameInput} type='text' placeholder='Enter Student Name' className='form-control' />
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='form-group'>
                            <select ref={(branchInput) => this.branch = branchInput} className='form-control'>
                                <option>Select Branch</option>
                                <option value="CS">CS</option>
                                <option value="IT">IT</option>
                                <option value="EC">EC</option>
                                <option value="MECH">MECH</option>
                            </select>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='form-group'>
                            <input ref={(mobileInput) => this.mobile = mobileInput} type='text' placeholder='Enter Contact Number' className='form-control' />
                        </div>
                    </div>

                </div>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='form-group'>
                            <button onClick={()=>this.props.addNewRecord(this.roll.value,this.name.value,this.branch.value,this.mobile.value)} className='btn btn-danger'>Add</button>
                        </div>
                    </div>
                    <div className='col-md-6 '>
                        <button onClick={() => this.props.defaultBranch("CS")} className='btn btn-primary ml-2'>CS:({this.props.studentList.filter((student) => student.branch == "CS").length})</button>

                        <button onClick={() => this.props.defaultBranch("IT")} className='btn btn-danger ml-2'>IT:({this.props.studentList.filter((student) => student.branch == "IT").length})</button>

                        <button onClick={() => this.props.defaultBranch("EC")} className='btn btn-info ml-2'>EC:({this.props.studentList.filter((student) => student.branch == "EC").length})</button>

                        <button onClick={() => this.props.defaultBranch("MECH")} className='btn btn-warning ml-2'>MECH:({this.props.studentList.filter((student) => student.branch == "MECH").length})</button>

                        <button onClick={() => this.props.defaultBranch("all")} className='btn btn-secondary ml-2'>Total:({this.props.studentList.length})</button>
                    </div>
                </div>
            </div>
        </>
    }
}