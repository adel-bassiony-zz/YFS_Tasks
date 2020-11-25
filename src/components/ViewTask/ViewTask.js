import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import moment from 'moment';

export default function ViewTask({ task }) {


    const [show, setShow] = useState(false);

    return (
        <>
            <button type="button" className="btn btn-sm btn-info mx-1" onClick={() => setShow(!show)}>View</button>

            <Modal show={show} onHide={() => setShow(!show)} size="lg" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Task: {task.task_id}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="w-100">
                    <div className="row">
                        <div className="col-md-6">
                            <p><strong>Customer Name:</strong> {task.customer_name} </p>
                        </div>
                        <div className="col-md-6">
                            <p><strong>Customer Phone:</strong> {task.customer_phone} </p>
                        </div>
                        <div className="col-md-6">
                            <p><strong>Customer Email:</strong> {task.customer_email} </p>
                        </div>
                        <div className="col-md-6">
                            <p><strong>Status:</strong> {task.task_status} </p>
                        </div>
                        <div className="col-md-6">
                            <p><strong>Barcode:</strong> {task.barcode} </p>
                        </div>
                        <div className="col-md-6">
                            <p><strong>Date:</strong> {moment(task.task_datetime).format('DD-MM-YYYY hh:mm a')} </p>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button className="" onClick={() => setShow(!show)}>Close</button>
                </Modal.Footer>
            </Modal>
        </>
    )
}