import React from "react";
import facebook from "../../img/social-media/facebook-icon.png";
import instra from "../../img/social-media/instagram-icon.png";
import linkedin from "../../img/social-media/linkedin-icon.png";
import logoOne from "../../img/logo/logoOne.png";

const Footer = () => {
  return (
    <div className="bg-gray-100">
      <div className="py-10 shadow-2xl ">
        <div className="grid grid-cols-2 md:grid-cols-4">
          <div className="md:mx-auto pl-2 md:pl-0">
            <p className="text-secondary text-xl mb-3">We are social </p>
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
            <p className="text-secondary text-xl mb-3">Links</p>
            <a className="font-bold" href="">
              ADVERTISERS
            </a>
            <br />
            <br />
            <a className="font-bold" href="">
              PUBLISHERS
            </a>
            <br />
            <br />
            <a className="font-bold" href="">
              INFLUENCERS
            </a>
            <br />
            <br />
            <a className="font-bold mt-2" href="">
              AD FORMATS
            </a>
          </div>
          <div className="mx-auto mt-10 md:mt-0">
            <p className="text-secondary text-xl mb-3">Documentation</p>
            <a className="font-bold" href="">
              TERMS & CONDITIONS
            </a>
            <br />
            <br />
            <a className="font-bold" href="">
              PRIVACY POLICY{" "}
            </a>
            <br />
            <br />
            <a className="font-bold" href="">
              CANCELLATION POLICY
            </a>
            <br />
            <br />
            <a className="font-bold" href="">
              BLOG
            </a>
          </div>
          <div className="mx-auto mt-10 md:mt-0">
            <p className="text-secondary text-xl mb-3">Support</p>

            <a className="mb-2 font-bold" href="">
              FAQ
            </a>
            <br />
            <br />
            <a className="mb-2 font-bold" href="">
              MEDIA KIT
            </a>
            <br />
            <br />
            <a className="font-bold" href="">
              CONTACT US
            </a>
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
