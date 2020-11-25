import React from 'react';
import { useDispatch } from 'react-redux';

export default function DeleteTask({ index }) {
    
    const dispatch = useDispatch()

    return (
        <button
            type="button"
            className="btn btn-sm btn-danger mx-1"
            onClick={() => dispatch({type: "Delete_Task", index: index})}>Delete</button>
    )
}