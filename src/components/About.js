import React from 'react';

const About = () => {
  return (
    <div className="section section--about" id="about">
      <div className="container container--about">
        <h2 className="heading-section heading-section--about">
          Busy mobile game
        </h2>
        <h3 className="subheading-section">About us</h3>
        <div className="about-content">
          <img
            className="about-content__img"
            src="./images/about.png"
            alt="About us"
          />
          <p className="about-content__text">
            On the other hand, we denounce with righteous indignation and
            dislike men who are so beguiled and demoralized by the charms of
            pleasure of the moment, so blinded by desire, that they cannot
            foresee the pain and trouble that are bound to ensue; and equal
            blame belongs to those who fail in their duty through weakness of
            will, which is the same as saying through shrinking from toil and
            pain. These cases are perfectly simple and easy to distinguish. In a
            free hour, when our power of choice is untrammelled and when nothing
            prevents
          </p>
        </div>
        <button className="button button--about">Buzy download game</button>
      </div>
    </div>
  );
};

export default About;
