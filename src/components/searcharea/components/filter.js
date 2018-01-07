import React from 'react';

export const Filter = (props) => {
    const { criterion, options, updateFilter } = props;
    return (
        <div className="filter-container">
            {criterion}
            <select onChange={(e) => {updateFilter(criterion, e.target.value)}}>
                {options.map((opt, index) =>
                    <option key={opt + '-'+ criterion + '-option-' + index}value={opt}>{opt}</option>
                )}
            </select>
        </div>
    )
}

export default Filter;