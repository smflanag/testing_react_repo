import React, { Component } from 'react';
import axios from 'axios';


class ShowDetail extends Component {
    state = {};
    componentDidMount() {
        axios
        .get("http://api.tvmaze.com/shows/" + this.props.match.params.showId)
        .then(response => {
            const show = response.data;
            this.setState(show);
        })
        .catch(error => console.log(error));
    };
  render() {
      return (
        <div className="ui card">
            <div className="content">
                <p className="header"><b>Name: </b>{this.state.name}</p>
                <p><b>Summary:</b> {this.state.summary}</p>
            </div>
        </div>
      );
  }
}

export default ShowDetail;
