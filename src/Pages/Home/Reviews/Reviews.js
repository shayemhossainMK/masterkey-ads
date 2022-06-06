import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from "../../../img/reviews/slider1.jpg";
import slider2 from "../../../img/reviews/slider2.jpg";
import slider3 from "../../../img/reviews/slider3.png";
import slider5 from "../../../img/reviews/slider5.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default class Reviews extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="bg-gray-100">
        <div className="px-5 md:px-20 py-14">
          <div className="text-center mb-10">
            <p className="font-bold text-secondary text-3xl">Reviews</p>
          </div>
          <Slider ref={(c) => (this.slider = c)} {...settings}>
            <div key={1} className=" mx-10 pr-5">
              <div className="md:flex">
                <img className="max-w-sm" src={slider1} alt="" />
                <div className="md:px-10">
                  <h4 className="text-xl font-bold my-3">Samuel Howells</h4>
                  <p className="md:pr-48">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Rerum autem aspernatur impedit velit at deserunt laborum,
                    cupiditate reiciendis nisi repellat. Lorem ipsum dolor sit
                    amet, consectetur adipisicing elit. Qui, dolor!
                  </p>
                </div>
              </div>
            </div>
            <div key={2} className=" md:mx-10 pr-5">
              <div className="md:flex">
                <img className="max-w-sm" src={slider5} alt="" />
                <div className="md:px-10">
                  <h4 className="my-3 font-bold text-xl">William Blake</h4>
                  <p className=" md:pr-48">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Rerum autem aspernatur impedit velit at deserunt laborum,
                    cupiditate reiciendis nisi repellat. Lorem ipsum dolor sit
                    amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
            <div key={3} className=" mx-10 pr-5">
              <div className="md:flex">
                <img className="max-w-sm" src={slider2} alt="" />
                <div className=" md:px-10">
                  <h4 className="text-xl font-bold my-3">Hayden Hutchinson</h4>
                  <p className=" md:pr-48">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Rerum autem aspernatur impedit velit at deserunt laborum,
                    cupiditate reiciendis nisi repellat. Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Pariatur aspernatur
                    quibusdam, adipisci architecto maiores fugiat assumenda odit
                    et aliquam aliquid?
                  </p>
                </div>
              </div>
            </div>
            <div key={4} className=" mx-10 pr-5">
              <div className="md:flex">
                <img className="max-w-sm" src={slider3} alt="" />
                <div className="md:mx-10">
                  <h4 className="font-bold text-xl my-3">Laura Waters</h4>
                  <p className="md:pr-48">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Rerum autem aspernatur impedit velit at deserunt laborum,
                    cupiditate reiciendis nisi repellat. Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Accusamus, quis
                    consequuntur! Veritatis itaque hic ducimus expedita.
                    Exercitationem sequi repellat hic!
                  </p>
                </div>
              </div>
            </div>
          </Slider>
          <div className="mt-10" style={{ textAlign: "center" }}>
            <button
              className=" px-6 mr-3 py-2 rounded-full shadow-md"
              onClick={this.previous}
            >
              <FontAwesomeIcon icon={faAngleLeft} />
            </button>
            <button
              className=" px-6 py-2 rounded-full shadow-md"
              onClick={this.next}
            >
              <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
