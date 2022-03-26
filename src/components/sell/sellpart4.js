import React from "react";
import "./sell.css";
import Slider1 from "../sliders/Slider1";
import sell from "../../images/phones/sell.svg";
import iphone12 from "../../images/phones/iphone12.png";
import { NavLink } from "react-router-dom";
const Sellpart4 = () => {
  return (
    <>
      <div className="main_about_page_layout">
        <div className="main_about_section">
          <div className="about_heading_content">
            <h1>
              Sell Old Apple iPhone 12 <br></br>(4 GB/64 GB)
            </h1>
            {/* <h4>
            Sell your Mobile Phone  <br />
            for instant cash
            </h4> */}
          </div>
          <div className="about_img_content">
            <img src={sell} alt="" />
          </div>
        </div>
      </div>
      {/*================= second section statr here ===============*/}
      <div className="varient_type_section">
        <div className="main_varien_type_div">
          <div className="sub_varien_type_img_div">
            <img src={iphone12} alt="" />
          </div>
          <div className="sub_varien_type_content_div">
            <h2>Apple Iphone 12 (4 GB/64 GB)</h2>
            <p>50+ already sold on Cashiflix</p>
            <p>Get Upto</p>
            <div className="price_and_button">
              <h3>₹47,040</h3>
              <NavLink to="sellpart5" className="btn btn_next22">
                Get Exact Value
              </NavLink>
            </div>
          </div>
        </div>
      </div>

<Slider1 />
    </>
  );
};
export default Sellpart4;
