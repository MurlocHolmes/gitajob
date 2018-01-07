import React, {Component} from 'react';
import { ResultRow } from './components/resultrow';
import { TableHeader } from './components/tableheader';
import { JobDetails } from './components/jobdetails';

export class Results extends Component {

    constructor(props) {
        super(props);
        this.state = {
            'job': null
        }
        this.setJob = this.setJob.bind(this);
    }

    setJob(job) {
        this.setState({'job': job});
    }

    render() {
        const rows = this.props.results.map((result, index) =>
            <ResultRow
                key={'result-' + index}
                result={result}
                setJob={this.setJob} />
        );
        const details = this.state.job == null ? <div /> : <JobDetails job={this.state.job} />
        return (
            <div className="results container-fluid col-12 col-lg-8 col-md-8 col-sm-10">
                <TableHeader jobCount={rows.length} />
                <table className={'table results-table table-hover'}>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
                {details}
            </div>
        );
    }
}


export default Results;