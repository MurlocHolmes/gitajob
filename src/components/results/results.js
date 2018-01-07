import React, {Component} from 'react';
import { ResultRow } from './components/resultrow';
import { TableHeader } from './components/tableheader';
import { JobDetails } from './components/jobdetails';
import { Months } from "./data/months";

/**
 * This class controls the results table of the page and will be responsible for all rows and details of each job.
 */
export class Results extends Component {

    constructor(props) {
        super(props);
        this.state = {
            'job': false
        };
        this.setJob = this.setJob.bind(this);
    }

    /**
     * This lifecycle check is in place to clear out the details if the user has searched for a new job.
     * @param nextProps: The next set of props being passed in
     */
    componentWillUpdate(nextProps) {
        if(this.props.results !== nextProps.results) {
            this.setJob(false);
        }
    }

    /**
     * This function will set the job variable in the state which controls the details pane
     * @param job: The full JSON object of the job, or a boolean false if blank.
     */
    setJob(job) {
        this.setState({'job': job});
    }

    /**
     * The date needed to be in a specialized format, so this function will handle that for us
     * @param date_string: The raw string to be formatted
     */
    formatDate(date_string) {
        const date = new Date(date_string);
        const formatted_date = Months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
        return formatted_date;
    }

    render() {

        // Creates the rows of each result
        const rows = this.props.results.map((result, index) =>
            <ResultRow
                key={'result-' + index}
                result={result}
                setJob={this.setJob}
                formatDate={this.formatDate}/>
        );

        // Creates the details if the job variable is valid in state.
        const details = this.state.job ? <JobDetails job={this.state.job} /> : null;
        return (
            <div className="results-container row">
                <div className={'row col-12'} >
                    <div className={'table-container ' + (this.state.job ? 'col-6' : 'col-12')}>
                        <TableHeader jobCount={rows.length} />
                        <table className={'table table-hover'}>
                            <tbody>
                                {rows}
                            </tbody>
                        </table>
                    </div>
                    {details}
                </div>
            </div>
        );
    }
}


export default Results;