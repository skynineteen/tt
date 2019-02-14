import React from 'react';

const Header = () => {
  return (
    <header className="header" id="home">
      <div>
        <div className="info">
          <h2 className="heading heading--link">
            <a href="/">
              talking<span>thread</span>.com
            </a>
          </h2>
          <h3 className="subheading--link">Mobile game</h3>
          <h2 className="subheading--header">Mobile game</h2>
          <h1 className="heading--header">Setup garage</h1>
          <div className="glide" id="glide2">
            <div className="glide__track" data-glide-el="track">
              <ul className="glide__slides">
                <li className="glide__slide">
                  <p>
                    It was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages.
                  </p>
                </li>
                <li className="glide__slide">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Animi, accusantium dolorem.
                  </p>
                </li>
                <li className="glide__slide">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Atque eaque nemo porro.
                  </p>
                </li>
              </ul>
            </div>
            <div className="slider__nav">
              <div className="glide__arrows arrows" data-glide-el="controls">
                <span
                  className="glide__arrow glide__arrow--left arrows--left"
                  data-glide-dir="<"
                >
                  prev
                </span>
                <span
                  className="glide__arrow glide__arrow--right arrows--right"
                  data-glide-dir=">"
                >
                  next
                </span>
              </div>
              <div
                className="glide__bullets slider__dots"
                data-glide-el="controls[nav]"
              >
                <span
                  className="glide__bullet dots__item"
                  data-glide-dir="=0"
                />
                <span
                  className="glide__bullet dots__item"
                  data-glide-dir="=1"
                />
                <span
                  className="glide__bullet dots__item"
                  data-glide-dir="=2"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="video">
          <svg
            width="0"
            height="0"
            viewBox="0 0 851 716"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <clipPath id="path">
              <path
                d="M72.5 96.5C72.5 26 49 0 49 0H851V564C851 564 739 629 685 652.5C631 676 414 741 274.5 705C45.945 646.018 -1.06096e-05 481.5 0 390.5C1.06096e-05 299.5 72.5 167 72.5 96.5Z"
                fill="#777"
              />
            </clipPath>
          </svg>
          <div className="video__item">
            <video autoPlay="autoplay" loop="loop" muted>
              <source src="video/sunset.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <a href="#about" className="down" />
    </header>
  );
};

export default Header;
