import React, { PureComponent } from 'react';

export class Join extends PureComponent {
  render() {
    return (
      <div className="section section--contact" id="contact">
        <h2 className="heading-section heading-section--slider">
          Buzy mobile game
        </h2>
        <h3 className="subheading-section">Download game</h3>
        <form>
          <input type="email" placeholder="Enter Your Email" />
          <button className="button button--contact" type="submit">
            Join
          </button>
        </form>
      </div>
    );
  }
}

export default Join;
