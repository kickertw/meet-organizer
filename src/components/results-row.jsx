import { ButtonGroup, Button } from "react-bootstrap";

const ResultsRow = ({ record, showActions }) => {
    const renderActions = () => {
        return (
            <td>
                <ButtonGroup aria-label="Action Buttons">
                    <Button variant="secondary">Edit</Button>
                    <Button variant="secondary">Delete</Button>
                </ButtonGroup>
            </td>
        );
    }

    return (
        <tr>
            <td>{record.Name}</td>
            <td>{record.Age}</td>
            <td>{record.Event}</td>
            <td>{record.Session}</td>
            <td>{record.Time}</td>
            {showActions() && renderActions()}
        </tr>
    );
};

export default ResultsRow