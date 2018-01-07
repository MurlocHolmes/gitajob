import React, { Component } from 'react';
import $ from 'jquery';
import { NavBar } from './components/navbar/navbar';
import { SearchArea } from './components/searcharea/searcharea';
import { Results } from './components/results/results';
import './App.css';

// Constant to be used for the API call
const DEFAULT_URL = 'https://jobs.github.com/positions.json?';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            'results': []
        };
        this.searchJobs = this.searchJobs.bind(this);
    }

    /**
     * This method is where the API call is actually taking place. This call is to populate all of our data in results
     * @param language: The language to query against
     * @param location: The location to query against
     */
    searchJobs(language, location) {
        const search_url = this.format_url(language, location);
        const that = this;
        $.ajax({
            url: search_url,
            method: 'GET'
        })
        .done(function(response) {
            that.setState({results: response});
        });
    }

    /**
     * This is just a helper method to decrease clutter in searchJobs
     * @param language: The language to query against
     * @param location: The location to query against
     * @returns {string}: The newly formatted URL
     */
    format_url(language, location) {
        const lc_language = language.toLowerCase();
        const lc_location = location.toLowerCase();
        return DEFAULT_URL + 'description=' + lc_language + '&location=' + lc_location.replace(' ', '+');
    }

    render() {
        return (
            <div className="App container">
                <NavBar />
                <SearchArea searchJobs={this.searchJobs}/>
                <Results results={this.state.results}/>
            </div>
        );
    }
}

export default App;
