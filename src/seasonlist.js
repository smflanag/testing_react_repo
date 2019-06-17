import React, { Component } from 'react';
import axios from 'axios';


class SeasonList extends Component {
constructor() {
    super()
    this.state = { seasons: [] }
  }
    componentDidMount() {
        axios
        .get("http://api.tvmaze.com/shows")
        .then(response => {
            const season = response.data;
            console.log(season)
            this.setState(season);
        })
        .catch(error => console.log(error));
    };
 render() {
   return (
    <div className="ui card">
        <div className="content">
            <ul>
                {this.state.seasons.map(season => {
                return <li key={`season_${season.id}`}>{season.name}</li>
                })};
            </ul>
        </div>
    </div>
      );
 }
}

export default SeasonList;


