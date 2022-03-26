import React from "react";
import "./sell.css";
import Slider1 from "../sliders/Slider1";
import Slider2 from "../sliders/Slider2";
import sell from "../../images/phones/sell.svg";
import phone1 from "../../images/phones/phone1.png";
import phone2 from "../../images/phones/phone2.png";
import phone3 from "../../images/phones/phone3.png";
import phone4 from "../../images/phones/phone4.png";
import phone5 from "../../images/phones/phone5.png";
import phone6 from "../../images/phones/phone6.png";
import phone7 from "../../images/phones/phone7.png";
import phone8 from "../../images/phones/phone8.png";
import phone9 from "../../images/phones/phone9.png";
import phone10 from "../../images/phones/phone10.png";
import phone11 from "../../images/phones/phone11.png";
import phone12 from "../../images/phones/phone12.png";
import phone13 from "../../images/phones/phone13.png";
import phone14 from "../../images/phones/phone14.png";
import sell1 from "../../images/1.svg";
import sell2 from "../../images/2.svg";
import sell3 from "../../images/3.svg";
import sell4 from "../../images/4.svg";
import sell5 from "../../images/5.svg";
import hot from "../../images/phones/hot.png"
import { NavLink } from "react-router-dom";
const Sell = () => {
  return (
    <>
      <div className="main_about_page_layout">
        <div className="main_about_section">
          <div className="about_heading_content">
            <h1>Sell Phone</h1>
            <h4>
              Sell your Mobile Phone <br />
              for instant cash
            </h4>
          </div>
          <div className="about_img_content">
            <img src={sell} alt="" />
          </div>
        </div>
      </div>

      {/* ===========all phone devices section start here========== */}
      <div className="main_all_brand_phones">
        <h2>Popular Brands</h2>
        <div className="all_mobile_devices">
          <div className="all_phones_div">
            <img src={phone1} alt="" />
          </div>
          <div className="all_phones_div">
            <img src={phone2} alt="" />
          </div>
          <div className="all_phones_div">
            <img src={phone3} alt="" />
          </div>
          <div className="all_phones_div">
            <img src={phone4} alt="" />
          </div>
          <div className="all_phones_div">
            <img src={phone5} alt="" />
          </div>
          <div className="all_phones_div">
            <img src={phone6} alt="" />
          </div>
          <div className="all_phones_div">
            <img src={phone7} alt="" />
          </div>
          <div className="all_phones_div">
            <img src={phone8} alt="" />
          </div>
          <div className="all_phones_div">
            <img src={phone9} alt="" />
          </div>
          <div className="all_phones_div">
            <img src={phone10} alt="" />
          </div>
          <div className="all_phones_div">
            <img src={phone11} alt="" />
          </div>
          <div className="all_phones_div">
            <img src={phone12} alt="" />
          </div>
          <div className="all_phones_div">
            <img src={phone13} alt="" />
          </div>
          <div className="all_phones_div">
            <img src={phone14} alt="" />
          </div>
        </div>
      </div>

      {/* how to sell section start here */}

      <div className="hoeto_sell_heading">
        <h2>how to sell old phones on cashiflix</h2>
        <div className="how_to_sell">
          <div className="sell_process1">
            <img src={sell1} alt="" className="sell_imgs" />
            <div className="sell_content">
              <h5>Select device</h5>
              <p>Search for your device or select from the list.</p>
            </div>
          </div>
          <div className="sell_process1">
            <img src={sell2} alt="" className="sell_imgs" />
            <div className="sell_content">
              <h5>CheckLIST</h5>
              <p>Tell us about its current condition or functional issues.</p>
            </div>
          </div>
          <div className="sell_process1">
            <img src={sell3} alt="" className="sell_imgs" />
            <div className="sell_content">
              <h5>Check Price</h5>
              <p>Get to know the price offered by Cashiflix.</p>
            </div>
          </div>
          <div className="sell_process1">
            <img src={sell4} alt="" className="sell_imgs" />
            <div className="sell_content">
              <h5>Schedule Pickup</h5>
              <p>Scheduled the free pickup as per your convenience.</p>
            </div>
          </div>
          <div className="sell_process1">
            <img src={sell5} alt="" className="sell_imgs" />
            <div className="sell_content">
              <h5>Instant Payment</h5>
              <p>Get Paid As Soon As Our Executive Picks Up Your Device.</p>
            </div>
          </div>
        </div>
      </div>
<Slider1 />
<Slider2 />
{/* 
<div className="happy_customber">
  <div className="happy_customber_sub">
    <div className="happy_customber_boxes">
<div className="icon_img_happy"></div>
<div className="happy_content">

</div>
    </div>
  </div>
</div> */}
<div className="main_happy_customer">
<div class="first-title">
		<h2>Happy Customers</h2>
	</div>

<div class="main_content_happy">
 <div class="section_happy_customer">
	<div class="panel-1">
		<img src="https://i.ibb.co/BqC4Hnp/pic2.jpg" alt="HTML5 Icon"/>
		
	    <p><span class="quote-1">&#147;</span> Lorem Ipsum is simply dummy textof the printing and typesetting industry.Lorem Ipsum has been the industry standard dummy text ever sunce the 1500s;when an unknown printer took a galley of type and scrambled it to make <span class="quote-2">&#x93;</span></p>
		<a href="#">Shalini Singh,</a> <span class="job-title">PROJECT MANAGER</span>
   </div>
   <div class="panel-2">
		<img src="https://i.ibb.co/BqC4Hnp/pic2.jpg" alt="HTML5 Icon"/> 
	  
	    <p><span class="quote-1">&#147;</span> Lorem Ipsum is simply dummy textof the printing and typesetting industry.Lorem Ipsum has been the industry standard dummy text ever sunce the 1500s;when an unknown printer took a galley of type and scrambled it to make <span class="quote-2">&#x93;</span></p>
		<a href="#">Madam Elisabath,</a> <span class="job-title">Creative Director</span>
   </div>
 </div>
 


 {/* <div class="section">
	<div class="panel-1">
		<img src="https://i.ibb.co/BqC4Hnp/pic2.jpg" alt="HTML5 Icon"/> 
		<p><span class="quote-1">&#147;</span> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make.<span class="quote-2">&#x93;</span></p>
		<a href="#">Clips arter,</a> <span class="job-title">Lipsum directer</span> 
    </div>
	
    <div class="panel-2">
		<img src="https://i.ibb.co/BqC4Hnp/pic2.jpg" alt="HTML5 Icon"/> 
		<p><span class="quote-1">&#147;</span> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make.<span class="quote-2">&#x93;</span></p>
		<a href="#">zam cristafr,</a> <span class="job-title">manager</span>	
	</div>
   
 </div> */}
 </div>
 </div>
 <div className="hot_deal_section">
   <h2>Hot Deals</h2>
   <div className="hot_deals_sub_section">
     <div className="hot_deal_sub_div">
       <div className="hot_buttons">
         <NavLink to="/" className="hot_btn_bg">BUYBACK</NavLink>
         <p>OFFERS</p>
       </div>
       <div className="hot_imges">
         <img src={hot} alt=""/>
       </div>
     </div>
     <div className="hot_deal_sub_div">
       <div className="hot_buttons">
         <NavLink to="/" className="hot_btn_bg">REPAIR</NavLink>
         <p>OFFERS</p>
       </div>
       <div className="hot_imges">
         <img src={hot} alt=""/>
       </div>
     </div>
     <div className="hot_deal_sub_div">
       <div className="hot_buttons">
         <NavLink to="/" className="hot_btn_bg">EXCHANGE</NavLink>
         <p>OFFERS</p>
       </div>
       <div className="hot_imges">
         <img src={hot} alt=""/>
       </div>
     </div>
   </div>
 </div>
    </>
  );
};
export default Sell;
