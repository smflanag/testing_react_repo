import React, {Component} from 'react';

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Please write a comment below.'
    };


    const listItems =[{"comment":"test1"},{"comment":"test2"}];
    this.setState({'listItems':listItems})

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    resetForm = () => {
    this.setState({value: ""});
    };

 handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A comment was submitted: ' + this.state.value);

    event.preventDefault();
  }
   render() {


    return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          Comment:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>

      <div className="commentlist">
        {this.state.listItems }
      </div>
            <ul>
                {this.state.listItems.map((d) => <li key={d.comment}>{d.comment}</li>)}
            </ul>
    </div>
    );

}
}

//last working on getting comments working in a list on page, add to list




export default Comments;