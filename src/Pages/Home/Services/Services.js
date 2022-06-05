import {
  faBullhorn,
  faPaperPlane,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Services = () => {
  return (
    <div className="bg-gray-100">
      <div className="px-5 md:px-20 py-10">
        <div className="text-center">
          <p className="font-bold text-secondary text-2xl">
            AVAILABLE FOR EVERYONE
          </p>
          <p className="text-primary">Our services</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-5 py-10">
          <div className="shadow-xl rounded-lg py-5 px-2">
            <FontAwesomeIcon
              className="rounded-full p-8 text-6xl bg-base-100 text-blue-900"
              icon={faBullhorn}
            />
            <p className="py-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Obcaecati id quod quia eum pariatur velit accusantium maiores
              labore possimus distinctio?
            </p>
            <button className="btn btn-xs btn-secondary">Read more</button>
          </div>
          <div className="shadow-xl rounded-lg py-5 px-2">
            <FontAwesomeIcon
              className="rounded-full p-8 text-6xl bg-base-100 text-blue-900"
              icon={faPaperPlane}
            />
            <p className="py-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Obcaecati id quod quia eum pariatur velit accusantium maiores
              labore possimus distinctio?
            </p>
            <button className="btn btn-xs btn-secondary">Read more</button>
          </div>
          <div className="shadow-xl rounded-lg py-5 px-2">
            <FontAwesomeIcon
              className="rounded-full text- p-8 text-6xl bg-base-100 text-blue-900"
              icon={faUser}
            />
            <p className="py-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Obcaecati id quod quia eum pariatur velit accusantium maiores
              labore possimus distinctio?
            </p>
            <button className="btn btn-xs btn-secondary">Read more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
