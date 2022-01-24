import Table from 'react-bootstrap/Table';

const EventTable = () => {
    return (
        <Table striped bordered hover responsive>
        <thead>
            <tr>
            <th>#</th>
            {Array.from({ length: 6 }).map((_, index) => (
                <th key={index}>Table heading {index}</th>
            ))}
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>1</td>
            {Array.from({ length: 6 }).map((_, index) => (
                <td key={index}>Table cell {index}</td>
            ))}
            </tr>
            <tr>
            <td>2</td>
            {Array.from({ length: 6 }).map((_, index) => (
                <td key={index}>Table cell {index}</td>
            ))}
            </tr>
            <tr>
            <td>3</td>
            {Array.from({ length: 6 }).map((_, index) => (
                <td key={index}>Table cell {index}</td>
            ))}
            </tr>
        </tbody>
        </Table>
    );
}

export default EventTable;