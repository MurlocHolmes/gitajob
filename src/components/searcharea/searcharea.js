import React, {Component} from 'react';
import { Filter } from './components/filter';

export class SearchArea extends Component {

    constructor(props) {
        super(props);
        this.search_options = {
            'Language': ['hey', 'hi', 'how you derin'],
            'Location': ['hey', 'hi', 'how you derin']
        }


    }
    render() {
        const filters = Object.keys(this.search_options).map((key, index) =>
                            <Filter key={key + '-' + index} criterion={key} options={this.search_options[key]} />
                        );
        return (
            <div className="search-container container-fluid col-12 col-lg-8 col-md-8 col-sm-10">
                {filters}
                <button className={'btn btn-primary'}>Search</button>
            </div>
        );
    }
}


export default SearchArea;