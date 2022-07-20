import React from "react";
import facebook from "../../img/social-media/facebook-icon.png";
import instra from "../../img/social-media/instagram-icon.png";
import linkedin from "../../img/social-media/linkedin-icon.png";
import logoOne from "../../img/logo/Asset 1.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-100">
      <div className="py-10 shadow-2xl ">
        <div className="grid grid-cols-2 md:grid-cols-4">
          <div className="md:mx-auto pl-4 md:pl-0">
            <p className="text-secondary text-xl mb-3 font-bold">
              We are social{" "}
            </p>
            <p className="">FOLLOW US</p>
            <br />
            <div className="flex">
              <a href="">
                <img className="w-7" src={facebook} alt="" />
              </a>
              <a href="">
                <img className="w-7" src={instra} alt="" />
              </a>
              <a href="">
                <img className="w-7" src={linkedin} alt="" />
              </a>
            </div>
            <br />
            <img className="w-32" src={logoOne} alt="" />
          </div>
          <div className="mx-auto">
            <p className="text-secondary text-xl mb-3 font-bold">Links</p>
            <Link to="/advertisers" className="font-semibold hover:underline">
              ADVERTISERS
            </Link>
            <br />
            <br />
            <Link to="/publishers" className="font-semibold hover:underline">
              PUBLISHERS
            </Link>
            <br />
            {/* <br />
            <Link to="/influancers" className="font-semibold hover:underline">
              INFLUENCERS
            </Link>
            <br /> */}
            <br />
            <Link
              to="/addformatsmain"
              className="font-semibold hover:underline"
            >
              AD FORMATS
            </Link>
          </div>
          <div className="mx-auto mt-10 md:mt-0 pl-3">
            <p className="text-secondary text-xl mb-3 font-bold">
              Documentation
            </p>
            <a className="font-semibold" href="">
              TERMS & CONDITIONS
            </a>
            <br />
            <br />
            <a className="font-semibold" href="">
              PRIVACY POLICY{" "}
            </a>
            <br />
            <br />
            <a className="font-semibold" href="">
              CANCELLATION POLICY
            </a>
            <br />
            <br />
            <Link to="/blogs" className="font-semibold hover:underline">
              BLOGS
            </Link>
          </div>
          <div className="mx-auto mt-10 md:mt-0">
            <p className="text-secondary text-xl mb-3 font-bold">Support</p>

            <a className="mb-2 font-semibold" href="">
              FAQ
            </a>
            <br />
            <br />
            <a className="mb-2 font-semibold" href="">
              MEDIA KIT
            </a>
            <br />
            <br />
            <Link to="/contact" className="font-semibold hover:underline">
              CONTACT US
            </Link>
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
