import React from 'react';

export const ResultRow = (props) => {
    const { result, setJob } = props;
    return (
        <tr className={'result-row'} onClick={() => {setJob(result);}}>
            <td>
                <p className={'row-title col-12'}>{result.title}</p>
                <p>
                    <span className={'company-name'}>{result.company} - </span>
                    <span className={'result-type'}>{result.type}</span>
                </p>
            </td>
            <td className={'row-date'}><p>{result.created_at}</p></td>
        </tr>
    )
}

export default ResultRow;