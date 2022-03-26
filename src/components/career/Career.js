import React from "react";
import "./career.css";
import career from "../../images/Career/career.svg";
import { NavLink } from "react-router-dom";


import team1 from "../../images/about/team1.jpg";
import team2 from "../../images/about/team2.jpg";

import ben1 from "../../images/Career/ben1.png";
import ben2 from "../../images/Career/ben2.png";
import ben3 from "../../images/Career/ben3.png";
import ben4 from "../../images/Career/ben4.png";
import ben5 from "../../images/Career/ben5.png";
import ben6 from "../../images/Career/ben6.png";
import ben7 from "../../images/Career/ben7.png";
import ben8 from "../../images/Career/ben8.png";
const Career = () => {
  return (
    <>
      <div className="main_about_page_layout">
        <div className="main_about_section">
          <div className="about_heading_content">
            <h1>Career</h1>
            <h4>
              Find Your Dream Job <br />
              With Us
            </h4>
            {/* <NavLink to="" className="btn btn_join">
              Join Us
            </NavLink> */}
          </div>
          <div className="about_img_content">
            <img src={career} alt="" />
          </div>
        </div>
      </div>
      {/*================ second section start here-========= */}
      <div className="why_join_section">
        <div className="why_join_content">
          <h2>Why Join Cashiflix?</h2>
          <p>
            If you see yourself as someone who either knows smartphones
            inside-out or who is into learning the same, you’ll fit in
            perfectly. Come, join us as we take on the world of mobile phones in
            order to bring the users the best that they can get out of those
            tiny-looking powerhouses.
          </p>
        </div>
      </div>

      {/*============== our team section start here ===============*/}
      <div className="team_bg_section1">
        <h2>Life At Cashiflix?</h2>
        <div className="team_top_heading_section1">
          <div className="team_boxes_div1">
            <img src={team2} alt="" className="img_control" />
          </div>
          <div className="team_boxes_div1">
            <img src={team1} alt="" className="img_control" />
          </div>
          <div className="team_boxes_div1">
            <img src={team2} alt="" className="img_control" />
          </div>
          <div className="team_boxes_div1">
            <img src={team2} alt="" className="img_control" />
          </div>
          <div className="team_boxes_div1">
            <img src={team1} alt="" className="img_control" />
          </div>
          <div className="team_boxes_div1">
            <img src={team2} alt="" className="img_control" />
          </div>
        </div>
      </div>
      {/* =============perks and benefits section start here ==============*/}
      <div className="main_perks_section">
        <h2>Perks & Benefits</h2>

        <div className="perks_benifits_div">
          <div className="benefits_images_div">
            <img src={ben1} alt="" />
            <p>Flexible Working Hours</p>
          </div>
          <div className="benefits_images_div">
            <img src={ben2} alt="" />
            <p>Library</p>
          </div>
          <div className="benefits_images_div">
            <img src={ben3} alt="" />
            <p>Cafeteria</p>
          </div>
          <div className="benefits_images_div">
            <img src={ben4} alt="" />
            <p>Health Insurance</p>
          </div>
        </div>
        <div className="perks_benifits_div">
          <div className="benefits_images_div">
            <img src={ben5} alt="" />
            <p>Personal Accident Insurance</p>
          </div>
          <div className="benefits_images_div">
            <img src={ben6} alt="" />
            <p>Reward and Recognition</p>
          </div>
          <div className="benefits_images_div">
            <img src={ben7} alt="" />
            <p>Employee Friendly Policies</p>
          </div>
          <div className="benefits_images_div">
            <img src={ben8} alt="" />
            <p>Fast Track Career Growth</p>
          </div>
        </div>
      </div>
      {/* ==============================opening section start here ======================*/}
      <div className="opening_top_section">
        <h2>Current Openings</h2>
        <p>
          Check out the positions we’re looking for someone to fill and apply
          right away if you think you’re the right fit.Send your CV to the email
          id below with Job Title mentioned in the subject line. Break a leg!
        </p>
        <a className="navlink_div" href="">Jobs@cashiflix.in</a>
        <div className="opening_main_div">
          <div className="opening_sub_div">
              <h4>DevOps Engineer Gurugram</h4>
              <p> Gurugram</p>
          </div>
          <div className="opening_sub_div">
              <h4>Legal Advisor</h4>
              <p> Gurugram</p>
          </div>
          <div className="opening_sub_div">
              <h4>Video Producer / Anchor</h4>
              <p> Gurugram</p>
          </div>
          <div className="opening_sub_div">
              <h4>Python Developer</h4>
              <p> Gurugram</p>
          </div>
          <div className="opening_sub_div">
              <h4>Engineer- Machine Learning</h4>
              <p> Gurugram</p>
          </div>
          <div className="opening_sub_div">
              <h4>SEO Link Builder</h4>
              <p> Gurugram</p>
          </div>
          <div className="opening_sub_div">
              <h4>Engineer- Machine Learning</h4>
              <p> Gurugram</p>
          </div>
          <div className="opening_sub_div">
              <h4>SEO Link Builder</h4>
              <p> Gurugram</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Career;
