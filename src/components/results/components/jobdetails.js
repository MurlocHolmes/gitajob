import React from 'react';

export const JobDetails = (props) => {
    const { job } = props;
    return (
        <div className="details-container col-6">
            <h1>Job Description</h1>
            <hr />
            <div dangerouslySetInnerHTML={{__html: job.description}} />
        </div>
    )
}

export default JobDetails;