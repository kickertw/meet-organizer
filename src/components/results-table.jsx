import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import ResultsRow from './results-row';

const ResultsTable = ({headers, data, showActions}) => {
    // const [tableData, setTableData] = useState([]);

    useEffect(() => {
        if (showActions) {
            headers.push(' ')
        }
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
                {data.map((item, index) => {
                    return (
                        <ResultsRow record={item} key={index} showActions={showActions} />
                    );
                })}
            </tbody>
        </Table>
    );
}

export default ResultsTable;
