import React from 'react'
import "./sell.css"
import Slider1 from "../sliders/Slider1";
import sell from "../../images/phones/sell.svg";
import apple from "../../images/phones/apple.jpg"
import { NavLink } from "react-router-dom";
const Sellpart2 = () => {
    return (
        <>
       <div className="main_about_page_layout1234">
        <div className="main_about_section1234">
          <div className="about_heading_content1234">
            <h1>Sell Old Apple Mobile Phone</h1>
          <div className="search_box">
              <input type="text" className="search_feild" placeholder="Search Your Mobile Phone To Sell" />
              {/* <img src="" alt=""/> */}
              <img src="https://img.icons8.com/pastel-glyph/64/000000/search--v3.png"/>
          </div>
         
          </div>
          <div className="about_img_content1234">
            <img src={sell} alt="" />
          </div>
        </div>
      </div>

{/* ===========all phone devices section start here========== */}
<div className="main_all_brand_phones">
<h2>Select Product</h2>
      <div className="all_mobile_devices">
   
          <div className="all_phones_div2">
          <NavLink to="/sellpart3" className="text_decoradtion">
              <img src={apple} alt=""/>
              <p>Apple iphone 12</p>
              </NavLink>
          </div>
       
          <div className="all_phones_div2">
          <NavLink to="/sellpart3" className="text_decoradtion">
              <img src={apple} alt=""/>
              <p>Apple iphone 6</p>
              </NavLink>
          </div>
          <div className="all_phones_div2">
          <NavLink to="/sellpart3" className="text_decoradtion">
              <img src={apple} alt=""/>
              <p>Apple iphone 8</p>
              </NavLink>
          </div>
          <div className="all_phones_div2">
          <NavLink to="/sellpart3" className="text_decoradtion">
              <img src={apple} alt=""/>
              <p>Apple iphone XR</p>
              </NavLink>
          </div>
          <div className="all_phones_div2">
          <NavLink to="/sellpart3" className="text_decoradtion">
              <img src={apple} alt=""/>
              <p>Apple iphone 5</p>
              </NavLink>
          </div>
          <div className="all_phones_div2">
          <NavLink to="/sellpart3" className="text_decoradtion">
              <img src={apple} alt=""/>
              <p>Apple iphone 12 pro</p>
              </NavLink>
          </div>
          <div className="all_phones_div2">
          <NavLink to="/sellpart3" className="text_decoradtion">
              <img src={apple} alt=""/>
              <p>Apple iphone 11</p>
              </NavLink>
          </div>
          <div className="all_phones_div2">
          <NavLink to="/sellpart3" className="text_decoradtion">
              <img src={apple} alt=""/>
              <p>Apple iphone 11 pro</p>
              </NavLink>
          </div>
          <div className="all_phones_div2">
          <NavLink to="/sellpart3" className="text_decoradtion">
              <img src={apple} alt=""/>
              <p>Apple iPhone 12 Pro Max</p>
              </NavLink>
          </div>
          <div className="all_phones_div2">
          <NavLink to="/sellpart3" className="text_decoradtion">
              <img src={apple} alt=""/>
              <p>Apple iPhone 12 Mini</p>
              </NavLink>
          </div>
          
      </div>
      </div>


      <Slider1 />


        </>
    )
}
export default Sellpart2;