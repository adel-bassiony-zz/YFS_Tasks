import React from 'react';
import moment from 'moment';
import './TasksTableRow.scss';
import ViewTask from 'components/ViewTask/ViewTask';
import EditTask from 'components/EditTask/EditTask';
import DeleteTask from 'components/DeleteTask/DeleteTask';

export default function TasksTableRow(props) {

    // Get Status By ID
    const getStatusByID = () => {
        switch (props.task.task_status) {
            case "0":
                return "Assigned"

            case "1":
                return "Started"

            case "2":
                return "Successful"

            case "3":
                return "Failed"

            case "4":
                return "InProgress"

            case "6":
                return "Unassigned"

            case "7":
                return "Accepted"

            case "8":
                return "Decline"

            case "9":
                return "Cancel"

            case "10":
                return "Deleted"

            default:
                return "-"
        }
    }

    return (
        <tr className="task">
            <td className="task__row">{props.task.task_id}</td>
            <td className="task__row">{props.task.customer_name}</td>
            <td className="task__row">{props.task.customer_phone}</td>
            <td className="task__row">{props.task.customer_email}</td>
            <td className="task__row">{getStatusByID()}</td>
            <td className="task__row">{moment(props.task.task_datetime).format('DD-MM-YYYY hh:mm a')}</td>
            <td className="task__row">
                <ViewTask task={props.task} />
                <EditTask index={props.index} task={props.task} />
                <DeleteTask index={props.index}/>
            </td>
        </tr>
    )
}