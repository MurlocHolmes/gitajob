import React, {Component} from 'react';
import { Filter } from './components/filter';
import Languages from './data/languages';
import Locations from './data/locations';

export class SearchArea extends Component {

    constructor(props) {
        super(props);
        this.search_options = {
            'Language': Languages,
            'Location': Locations
        };
        this.state ={
            'language': Languages[0],
            'location': Locations[0]
        };
        this.initiate_search = this.initiate_search.bind(this);
        this.updateFilter = this.updateFilter.bind(this);
        this.setLanguage = this.setLanguage.bind(this);
        this.setLocation = this.setLocation.bind(this);
    }

    updateFilter(type, criterion) {
        console.log('type', type);
        if (type === 'Language') {
            this.setLanguage(criterion);
        }
        if (type === 'Location') {
            this.setLocation(criterion);
        }
    }

    setLanguage(language) {
        this.setState({'language': language});
    }

    setLocation(location) {
        this.setState({'location': location});
    }

    initiate_search() {
        console.log(this.state);
        this.props.searchJobs(this.state.language, this.state.location);
    }

    render() {
        const filters = Object.keys(this.search_options).map((key, index) =>
                            <Filter
                                key={key + '-' + index}
                                criterion={key}
                                options={this.search_options[key]}
                                updateFilter={this.updateFilter}/>
                        );
        return (
            <div className="search-container container-fluid col-12 col-lg-8 col-md-8 col-sm-10">
                {filters}
                <button className={'btn btn-primary'} onClick={this.initiate_search}>Search</button>
            </div>
        );
    }
}


export default SearchArea;