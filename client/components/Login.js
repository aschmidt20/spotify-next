import React, { Component } from 'react';
import loginSVG from '../log_in.svg';

/**
 * Our login page
 * Has a login button that hit's the login url
 */
export default class Login extends Component {
  render() {
    return (
      <div className="login">
        <p>NEXT is music discovery tool built to keep your groove going. Enjoy native Spotify plaback with a twist: If you stop queuing up songs, NEXT will select songs to continue your listening session based off of your listening prefereces, Spotify recommendations, and tunable groove parameters. Connect your Spotify account and find your groove today! </p>
        <a href="/login" dangerouslySetInnerHTML={{__html: loginSVG}}></a>
      </div>
    );
  }
}
