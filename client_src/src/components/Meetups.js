import React, { Component } from 'react';
import axios from "axios";
import MeetupItem from './MeetupItem';

class Meetups extends Component{

  constructor() {
    super();

    this.state = {
      meetups: []
    }
  }

  getMeetups(){
    axios.get('http://localhost:3000/api/meetups')
      .then(response => {
        // console.log(response.data);
        this.setState({ meetups: response.data }, () => {
         console.log(this.state);
       })
    })
  }

  componentWillMount() {
    this.getMeetups();
  }

  render() {
    // Save the list on a variable
    const meetupItems = this.state.meetups.map((meetup, i) => {
      return (
        <MeetupItem item={meetup} key={meetup.i} />
        // <li className="collection-item">{meetup.name }</li>
      )
    })

    return (
      <div>
        <h1>Meetups</h1>
        <ul className="collection">{meetupItems}</ul>
      </div>
    )
  }

}

export default Meetups;
