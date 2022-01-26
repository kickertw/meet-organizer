const ResultsRow = ({ record, index }) => {
    return (
        <tr key={index}>
            <td>{record.Name}</td>
            <td>{record.Age}</td>
            <td>{record.Event}</td>
            <td>{record.Session}</td>
            <td>{record.Time}</td>
        </tr>
    );
};

export default ResultsRow