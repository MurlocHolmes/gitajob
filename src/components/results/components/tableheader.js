import React from 'react';

export const TableHeader = (props) => {
    const { jobCount } = props;
    return (
        <h3 className={'col-12'}>Showing {jobCount} jobs.</h3>
    )
}

export default TableHeader;