import React from 'react'
import "./sell.css"
import Slider1 from "../sliders/Slider1";
import sell from "../../images/phones/sell.svg";
import iphone12 from "../../images/phones/iphone12.png";
import { NavLink } from "react-router-dom";
const Sellpart3 = () => {
    return (
        <>
       <div className="main_about_page_layout">
        <div className="main_about_section">
          <div className="about_heading_content">
            <h1>Sell Old Apple IPhone 12</h1>
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
<img src={iphone12} alt=""/>
    </div>
    <div className="sub_varien_type_content_div">
<h2>Apple Iphone 12</h2>
<p>150+ already sold on Cashiflix</p>
<p>Choose a variant</p>
<div className="radio_buttons1">
          <div className="radio_group1">
            <label className="label_space1">
              <input
                type="radio"
                value="gb"
                name="none"
                className="radio_button"
              
              />
          
              <span>    64 GB</span>
            </label>
            <label className="label_space1">
              <input
                type="radio"
                value="gb"
                name="none"
                className="radio_button"
              />
       
              <span> 128 GB</span>
            </label>
            <label className="label_space1">
              <input
                type="radio"
                value="gb"
                name="none"
                className="radio_button"
              />
              <span> 256 GB</span>
            </label>
        
          </div>
        </div>
        <NavLink to="sellpart4" className="btn btn_next">Next</NavLink>
        {/* <button className="btn btn_next">Next</button> */}
</div>
</div>
</div>


<Slider1 />
        </>
    )
}
export default Sellpart3;