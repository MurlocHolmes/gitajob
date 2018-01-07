import React from 'react';

export const JobDetails = (props) => {
    const { job } = props;
    return (
        <div className="job-container">
            <h1>Job Description</h1>
            <hr />
            {job.description}
        </div>
    )
}

export default JobDetails;