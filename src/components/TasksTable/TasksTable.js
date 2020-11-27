import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Loader from 'components/Loader/Loader';
import TasksTableRow from 'components/TasksTableRow/TasksTableRow';
import './TasksTable.scss';

export default function TasksTable() {

    const tasks = useSelector(state => state.tasks_reducer.tasks)

    const [status, setStatus] = useState("")
    const [date, setDate] = useState(new Date())

    const tasksRows = tasks
        .filter(task => status === "" ? task : task.task_status === status || task.task_datetime === date)
        .map((task, index) => 
            <TasksTableRow
                key={`task-${index}`}
                index={index}
                task={task}
            />
        )

    if (tasks.length > 0) {
        return (
            <>
                <div className="row mt-4">
                    <div className="col-md-6">
                        <h1>Tasks</h1>
                    </div>
                    <div className="col-md-3">
                        <select
                            className="custom-select"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)} >
                            <option value="" disabled>Choose The Status</option>
                            <option value="">All</option>
                            <option value="0">Assigned</option>
                            <option value="1">Started</option>
                            <option value="2">Successful</option>
                            <option value="3">Failed</option>
                            <option value="4">InProgress</option>
                            <option value="6">Unassigned</option>
                            <option value="7">Accepted</option>
                            <option value="8">Decline</option>
                            <option value="9">Cancel</option>
                            <option value="10">Deleted</option>
                        </select>

                    </div>
                    <div className="col-md-3">
                        <input type="date" placeholder="Enter the date" className="form-control" value={date} onChange={(e) => setDate(e.target.value)} />
                    </div>
                </div>
                <table className="w-100 mt-4">
                    <thead className="table__head">
                        <tr>
                            <th className="p-2">ID</th>
                            <th className="p-2">Customer Name</th>
                            <th className="p-2">Customer Phone</th>
                            <th className="p-2">Customer Email</th>
                            <th className="p-2">Status</th>
                            <th className="p-2">Created At</th>
                            <th className="p-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasksRows}
                    </tbody>
                </table>
            </>
        )
    } else {
        return <Loader />
    }
}