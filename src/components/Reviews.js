import React, { PureComponent } from 'react';

class Reviews extends PureComponent {
  state = {
    reviews: [
      {
        id: 1,
        text:
          'TalkingThread is a great way to communicate with your team! I love you guys, you are the best!',
        author: 'Alisa Kolenko',
        starsNum: 5
      },
      {
        id: 2,
        text:
          'TalkingThread is one of those programs that I said to myself "how did I live without this"?',
        author: 'Maksym Sytnyk',
        starsNum: 5
      },
      {
        id: 3,
        text:
          'It is free, easy-to-use tool for messaging, video and audio conferences, and screensharing"',
        author: 'Valeriia Lisovaya',
        starsNum: 5
      }
    ]
  };

  render() {
    let reviews = this.state.reviews.map(review => {
      return (
        <li className="reviews-list__item" key={review.id}>
          <div className="reviews-list__content">
            <p>{review.text}</p>
            <div className="stars">
              <span className="stars__item" />
              <span className="stars__item" />
              <span className="stars__item" />
              <span className="stars__item" />
              <span className="stars__item" />
            </div>
          </div>
          <span className="reviews-list__author">
            <span className="reviews-list__letter">
              {review.author.charAt(0)}
            </span>
            {review.author}
          </span>
        </li>
      );
    });
    return (
      <div className="section section--reviews" id="reviews">
        <h3>What our customers are saying</h3>
        <ul className="reviews-list">{reviews}</ul>
      </div>
    );
  }
}

export default Reviews;
