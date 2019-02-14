import React, { PureComponent } from 'react';

class Slider extends PureComponent {
  state = {
    images: ['images/slider1.png', 'images/slider2.jpg', 'images/slider3.jpg']
  };
  render() {
    let slides = this.state.images.map((slide, index) => {
      return (
        <li className="glide__slide" key={index}>
          <img src={slide} alt="" />
        </li>
      );
    });
    return (
      <div className="section section--slider">
        <h2 className="heading-section heading-section--slider">
          Make your car in your garage
        </h2>
        <h3 className="subheading-section">Game elements</h3>
        <div className="slider">
          <div className="glide slider__slide" id="glide1">
            <div className="glide__track" data-glide-el="track">
              <ul className="glide__slides">{slides}</ul>
            </div>
            <div className="glide__arrows" data-glide-el="controls">
              <div
                className="glide__arrow glide__arrow--left slider__arrow slider__arrow--left"
                data-glide-dir="<"
              />
              <div
                className="glide__arrow glide__arrow--right slider__arrow slider__arrow--right"
                data-glide-dir=">"
              />
            </div>
            <div
              className="glide__bullets slider__dots"
              data-glide-el="controls[nav]"
            >
              <span className="glide__bullet dots__item" data-glide-dir="=0" />
              <span className="glide__bullet dots__item" data-glide-dir="=1" />
              <span className="glide__bullet dots__item" data-glide-dir="=2" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;
