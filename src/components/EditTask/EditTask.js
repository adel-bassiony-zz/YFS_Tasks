import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import moment from 'moment';

export default function EditTask(props) {


    const [show, setShow] = useState(false);

    const [name, setName] = useState(props.task.customer_name)
    const [email, setEmail] = useState(props.task.customer_email)
    const [phone, setPhone] = useState(props.task.customer_phone)
    const [status, setStatus] = useState(props.task.task_status)
    const [barcode, setBarcode] = useState(props.task.barcode)
    const [date, setDate] = useState(props.task.task_datetime)
    
    const dispatch = useDispatch()

    const updateTask = () => {
        let newTaskDetails = {
            "task_id": props.task.task_id,
            "customer_name": name,
            "customer_phone": phone,
            "customer_email": email,
            "task_status": status,
            "task_datetime": date,
            "barcode": barcode,
        }

        dispatch({type: "Edit_Task", index: props.index, taskDetails: newTaskDetails})
    }

    return (
        <>
            <button type="button" className="btn btn-sm btn-warning mx-1" onClick={() => setShow(!show)}>Edit</button>

            <Modal show={show} onHide={() => setShow(!show)} size="lg" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Task: {props.task.task_id}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="w-100">
                    <div className="row">

                        {/* Customer Name */}
                        <div className="col-md-6 mt-3">
                            <label>Name:</label>
                            <input
                                className="form-control"
                                placeholder="Enter customer name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        {/* Customer Phone */}
                        <div className="col-md-6 mt-3">
                            <label>Phone:</label>
                            <input
                                className="form-control"
                                placeholder="Enter customer phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>

                        {/* Customer Email */}
                        <div className="col-md-6 mt-3">
                            <label>Email:</label>
                            <input
                                className="form-control"
                                placeholder="Enter customer email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        
                        {/* Task Status */}
                        <div className="col-md-6 mt-3">
                            <label>Status:</label>
                            <select className="custom-select" value={status} onChange={(e) => setStatus(e.target.value)}>
                                <option value="">Option 1</option>
                            </select>
                        </div>
                        
                        {/* Task Barcode */}
                        <div className="col-md-6 mt-3">
                            <label>Barcode:</label>
                            <input
                                className="form-control"
                                placeholder="Enter task barcode"
                                value={barcode}
                                onChange={(e) => setBarcode(e.target.value)}
                            />
                        </div>
                        
                        {/* Task Date */}
                        <div className="col-md-6 mt-3">
                            <label>Date:</label>
                            <input
                                className="form-control"
                                placeholder="Enter task barcode"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </div>
                    
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button className="w-25 btn btn-secondary" onClick={() => setShow(!show)}>Close</button>
                    <button className="w-25 btn btn-success" onClick={updateTask}>Save</button>
                </Modal.Footer>
            </Modal>
        </>
    )
}