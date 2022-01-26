import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { readDb } from '../utils/firebase';
import ResultsRow from './results-row';

const ResultsTable = ({headers, data}) => {
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        readDb('Events/Mock Meet 1', setTableData);
        data = tableData;
    },[]);

    return (
        <Table striped bordered hover responsive>
        <thead>
            <tr>
            {headers.map((_, index) => (
                <th key={index}>{headers[index]}</th>
            ))}
            </tr>
        </thead>
        <tbody>
            {tableData.map((item, index) => {
                return (
                    <ResultsRow record={item} key={index} />
                );
            })}
        </tbody>
        </Table>
    );
}

export default ResultsTable;
