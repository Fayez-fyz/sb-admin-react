import React from 'react'
import { Link } from 'react-router-dom'

export default function User() {
    let userdata =[
        { 
            id:1,
            name:'Person 1',
            positon:'System Archeitect',
            office: 'Edinburgh',
            age: 40,
            startDate : '24/05/2012',
            salery: "$350,000"

        },
        { 
            id:2,
            name:'Person 1',
            positon:'System Archeitect',
            office: 'Edinburgh',
            age: 40,
            startDate : '24/05/2012',
            salery: "$350,000"

        }
]
    return (
        <>
        <h1 class="h3 mb-2 text-gray-800">Users</h1>
                    <p class="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
                        For more information about DataTables, please visit the <a target="_blank"
                            href="https://datatables.net">official DataTables documentation</a>.</p>
                    <Link to="/create-user" href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
            class="fas fa-download fa-sm text-white-50"></i> Create User</Link>         
        <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                        <th>ID</th>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Office</th>
                            <th>Age</th>
                            <th>Start date</th>
                            <th>Salary</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                        <th>ID</th>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Office</th>
                            <th>Age</th>
                            <th>Start date</th>
                            <th>Salary</th>
                            <th>Action</th>
                        </tr>
                    </tfoot>
                    <tbody>
                       {
                           userdata.map((obj)=>{
                            return <tr>
                            <td>{obj.id}</td>
                            <td>{obj.name}</td>
                            <td>{obj.positon}</td>
                            <td>{obj.positon}</td>
                            <td>{obj.age}</td>
                            <td>{obj.startDate}</td>
                            <td>{obj.salery}</td>
                            
                            <td>
                                <Link to={`/user/edit/${obj.id}`} className=" btn-sm btn-primary mx-1">Edit</Link>
                                <button  className=" btn-sm btn-danger mx-1"> Delete</button>
                            </td>
                        </tr>
                           })
                       }
                       
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    </>
    )
}
