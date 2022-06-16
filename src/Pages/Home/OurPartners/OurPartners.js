import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import brand1 from "../../../img/services/advertiser.png";
import daraz from "../../../img/partners/daraz-logo.png";
import bkash from "../../../img/partners/bkash.png";
import citybank from "../../../img/partners/citybank.png";
import nagad from "../../../img/partners/nagad.svg";

export default class OurPartners extends Component {
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
      slidesToShow: 4,
      slidesToScroll: 1,
    };
    return (
      <div className="bg-secondary">
        <div className="text-center pt-7">
          <h3 className="text-2xl text-base-100">OUR PARTNERS</h3>
        </div>
        <div className="px-5 md:px-20 py-10">
          <div className="text-center mb-10">
            <p className="font-bold text-secondary text-2xl">SUCCESS STORIES</p>
          </div>
          <Slider ref={(c) => (this.slider = c)} {...settings}>
            <div key={1} className="mx-2 md:mx-10 pr-5">
              <div>
                <div className="shadow-2xl bg-base-100 w-48 px-10 py-5 rounded-lg">
                  <img className="w-16 mx-auto" src={daraz} alt="" />
                  <p className="mt-5 text-center">Daraz</p>
                </div>
              </div>
            </div>
            <div key={2} className="mx-2 md:mx-10 pr-5">
              <div>
                <div className="shadow-2xl bg-base-100 w-48 px-10 py-6 rounded-lg">
                  <img className="w-[85px] mx-auto" src={bkash} alt="" />
                  <p className="mt-5  text-center">bKash</p>
                </div>
              </div>
            </div>
            <div key={3} className="mx-2 md:mx-10 pr-5 mr-5">
              <div>
                <div className="shadow-2xl bg-base-100 w-48 px-10 py-4  rounded-lg">
                  <img className="w-24" src={citybank} alt="" />
                  <p className="mt-5 text-center">City Bank</p>
                </div>
              </div>
            </div>
            <div key={4} className="mx-2 md:mx-10 pr-5 mr-5">
              <div>
                <div className="shadow-2xl bg-base-100 w-48 px-10 py-7  rounded-lg">
                  <img className="w-28" src={nagad} alt="" />
                  <p className="mt-5 text-center">Nagad</p>
                </div>
              </div>
            </div>
            <div key={5} className="mx-2 md:mx-10 pr-5 mr-5">
              <div>
                <div className="shadow-2xl bg-base-100 w-32 px-10 py-7 rounded-lg">
                  <img className="w-10" src={brand1} alt="" />
                  <p className="mt-5">Daraz</p>
                </div>
              </div>
            </div>
            <div key={6} className="mx-2 md:mx-10 pr-5 mr-5">
              <div className="shadow-2xl bg-base-100 w-32 px-10 py-7 mb-20  rounded-lg">
                <img className="w-10" src={brand1} alt="" />
                <p className="mt-5">Daraz</p>
              </div>
            </div>
          </Slider>
          <div className="mt-16" style={{ textAlign: "center" }}>
            <button
              className=" px-4 mr-3 py-2  bg-base-100 rounded-full shadow-md"
              onClick={this.previous}
            >
              <FontAwesomeIcon icon={faAngleLeft} />
            </button>
            <button
              className=" py-2 px-4 bg-base-100 rounded-full shadow-md"
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
