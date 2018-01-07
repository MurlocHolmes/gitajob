import React, {Component} from 'react';
import { Filter } from './components/filter';
import Languages from './data/languages';
import Locations from './data/locations';


/**
 * This class controls the search area, including the filters and the search button
 */
export class SearchArea extends Component {

    /**
     * Important to note that Languages and Locations are stored in separate files to decrease code clutter
     */
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

    /**
     * This function is the click handler for the filters. If we were to add more filters later, it would just mean
     * adding a new conditional or making the function more dynamic as to not need the "ifs" at all.
     * @param type: The criterion being updated
     * @param criterion: The new value for the criterion
     */
    updateFilter(type, criterion) {
        if (type === 'Language') {
            this.setLanguage(criterion);
        }
        if (type === 'Location') {
            this.setLocation(criterion);
        }
    }

    /**
     * Update the language in the state to a new value
     * @param language: The new value for the language variable
     */
    setLanguage(language) {
        this.setState({'language': language});
    }

    /**
     * Update the location in the state to a new value
     * @param location: The new value for the location variable
     */
    setLocation(location) {
        this.setState({'location': location});
    }

    /**
     * To decrease code clutter, the search functionality was extracted here. This was done so that the onClick event
     * could be 'initiate_search' rather than '() => {this.props.searchJobs(this.state.language, this.state.location)}'
     */
    initiate_search() {
        this.props.searchJobs(this.state.language, this.state.location);
    }

    render() {

        // Create the filters for any criteria we want
        const filters = Object.keys(this.search_options).map((key, index) =>
                            <Filter
                                key={key + '-' + index}
                                criterion={key}
                                options={this.search_options[key]}
                                updateFilter={this.updateFilter}/>
                        );
        return (
            <div className="search-container row">
                {filters}
                <div className={'col-4 search-button-container'}>
                    <button className={'btn btn-secondary'} onClick={this.initiate_search}>Search</button>
                </div>
            </div>
        );
    }
}


export default SearchArea;