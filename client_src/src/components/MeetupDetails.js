import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class MeetupItem extends Component{


  constructor(props) {
    super(props);

    this.state = {
      details: ''
    }
  }

  componentWillMount() {
    this.getMeetups();
  }

  getMeetups() {
    const meetupId = this.props.match.params.id;
    axios.get(`http://localhost:3000/api/meetups/${meetupId}`)
      .then(response => {
        // Set the state
        this.setState({ details: response.data }, () => {
          console.log(this.state);
        })
      })
      .catch(err => console.log(err));

  }

  onDelete() {
    const meetupId = this.state.details.id;
    axios.delete(`http://localhost:3000/api/meetups/${meetupId}`)
      .then(response => {
        this.props.history.push('/');
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.details.name}</h1>
        <ul className="collection">
          <li className="collection-item">City:{this.state.details.city}</li>
          <li className="collection-item">Address:{this.state.details.address}</li>
        </ ul>

        <Link className="btn gray" to={`/meetups/edit/${this.state.details.id}`}  >Edit </Link>
        <Link className="btn gray" to="/">Back </Link>

        <button onClick={this.onDelete.bind(this)} >Delete</button>

        {/* <Link className="btn red" to={`/meetups/edit/${this.state.details.id}`}  >Delete </Link> */}
      </div>
    )
  }
}

export default MeetupItem;
