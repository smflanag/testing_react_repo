import React, { Component } from 'react';
import axios from 'axios';


class ShowList extends Component {
state = {
    shows: []
};
    componentDidMount() {
        axios
        .get("http://api.tvmaze.com/shows")
        .then(response => {
            const show_data = response.data;
            this.setState({shows : show_data});
        })
        .catch(error => console.log(error));
    };
 render() {
    if (this.state.shows.length === 0) {
    return (
        <div className="ui card">
        <div className="content">
            <p>The show list is empty right now</p>
        </div>
    </div>
    )
    }

   return (
    <div className="ui card">
        <div className="content">
            <ul>
            {this.state.shows.map((item,id) => (
                        <li key={`item_${item.id}`}>
                        <a href={`/show/${item.id}`}>{item.name}</a>
                        </li>
                      ))}
            </ul>
        </div>
    </div>
      );
 }
}

export default ShowList;
