import React from 'react';
import moment from 'moment';
import './TasksTableRow.scss';
import ViewTask from 'components/ViewTask/ViewTask';
import EditTask from 'components/EditTask/EditTask';
import DeleteTask from 'components/DeleteTask/DeleteTask';
import useTaskStatus from 'hooks/useTaskStatus';

export default function TasksTableRow(props) {
    return (
        <tr className="task">
            <td className="task__row">{props.task.task_id}</td>
            <td className="task__row">{props.task.customer_name}</td>
            <td className="task__row">{props.task.customer_phone}</td>
            <td className="task__row">{props.task.customer_email}</td>
            <td className="task__row">{useTaskStatus(props.task.task_status)}</td>
            <td className="task__row">{moment(props.task.task_datetime).format('DD-MM-YYYY hh:mm a')}</td>
            <td className="task__row">
                <ViewTask task={props.task} />
                <EditTask index={props.index} task={props.task} />
                <DeleteTask index={props.index}/>
            </td>
        </tr>
    )
}