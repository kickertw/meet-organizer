import { useEffect, useState } from 'react';
import { readDb } from '../utils/firebase';
import ResultsTable from '../components/results-table';
import { Button } from 'react-bootstrap';

const EventSchedule = () => {
    const [tableData, setTableData] = useState([]);
    const eventHeaders = ['Name', 'Age', 'Event', 'Session', 'Time'];

    const isAdmin = () => {
        return localStorage.getItem('Role') === 'admin';
    }

    const addButton = <Button variant='primary'>Add</Button>

    useEffect(() => {
        // Get Data
        readDb('Events/Mock Meet 1', setTableData);

        // Add extra column for a
        if (isAdmin()){
            eventHeaders.push(' ');
        }
    },[]);

    return (
        <>
            <ResultsTable headers={eventHeaders} data={tableData} showActions={isAdmin} />
            {isAdmin() && addButton}
        </>
    );
}

export default EventSchedule