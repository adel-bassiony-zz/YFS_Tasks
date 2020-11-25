import { useState, useEffect } from 'react';
export default function useTaskStatus(statusCode) {
    
    const [status, setStatus] = useState("")

    const getStatusByID = () => {
        switch (statusCode) {
            case "0":
                setStatus("Assigned")
                break;

            case "1":
                setStatus("Started")
                break;

            case "2":
                setStatus("Successful")
                break;

            case "3":
                setStatus("Failed")
                break;

            case "4":
                setStatus("InProgress")
                break;

            case "6":
                setStatus("Unassigned")
                break;

            case "7":
                setStatus("Accepted")
                break;

            case "8":
                setStatus("Decline")
                break;

            case "9":
                setStatus("Cancel")
                break;

            case "10":
                setStatus("Deleted")
                break;

            default:
                setStatus("-")
                break;
        }
    }
    useEffect(() => {
        getStatusByID()
    }, [])

    return status
}