import TasksTableRow from 'components/TasksTableRow/TasksTableRow';
import React from 'react';
import { useSelector } from 'react-redux';
import Loader from 'components/Loader/Loader';

export default function TasksTable() {

    const tasks = useSelector(state => state.tasks_reducer.tasks)

    const tasksRows = tasks.map((task, index) => 
        <TasksTableRow
            key={`task-${index}`}
            index={index}
            task={task}
        />
    )

    if (tasks.length > 0) {
        return (
            <>
                <table className="w-100">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Customer Name</th>
                            <th>Customer Phone</th>
                            <th>Customer Email</th>
                            <th>Status</th>
                            <th>Created At</th>
                            <th>Actions</th>
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