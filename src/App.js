import React, { Component } from 'react';
import $ from 'jquery';
import { NavBar } from './components/navbar/navbar';
import { SearchArea } from './components/searcharea/searcharea';
import { Results } from './components/results/results';
import './App.css';
const DEFAULT_URL = 'https://jobs.github.com/positions.json?';
class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            'results': []
        };
        this.searchJobs = this.searchJobs.bind(this);
    }

    searchJobs(language, location) {
        const search_url = (DEFAULT_URL + 'description=' + language.toLowerCase() + '&location=' +
            location.replace(' ', '+').toLowerCase());
        const that = this;
        $.ajax({
            url: search_url,
            method: 'GET'
        })
        .done(function(response) {
            that.setState({results: response});
        });
    }

    render() {
        return (
            <div className="App">
                <NavBar />
                <SearchArea searchJobs={this.searchJobs}/>
                <Results results={this.state.results}/>
            </div>
        );
    }
}

export default App;
