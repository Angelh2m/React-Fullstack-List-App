import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class AddMeetup extends Component{

  addMeetup(newMeetup){
    axios.request({
      method: 'post',
      url: 'http://localhost:3000/api/meetups',
      data: newMeetup
    }).then( response => {
      this.props.history.push('/');
    }).catch(err => console.log(err));

  }

  onSubmit(e) {
    // console.log(this.refs.name);
    const newMeetup = {
      name: this.refs.name.value,
      city: this.refs.city.value,
      address: this.refs.address.value,
    }

    this.addMeetup(newMeetup);
    e.preventDefault();
    // return 1;
  }



  render() {
    return (
      <div>
        <h1>Add Meetup</h1>
        <Link className="btn gray" to="/">Back </Link>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
            <label htmlFor="name" >Name</label>
            <input type="text" name="name" ref="name" />
          </div>
          <div className="input-field">
            <input type="text" name="city" ref="city" />
            <label htmlFor="city" >City</label>
          </div>
          <div className="input-field">
            <input type="text" name="address" ref="address" />
            <label htmlFor="address" >Address</label>
          </div>
          <input type="submit" value="save" className="btn" />
        </form>
      </div>
    )
  }
}

export default AddMeetup;
