import React from "react";
import "./about.css";
import about from "../../images/about/about.svg";
import { NavLink } from "react-router-dom";
import about1 from "../../images/about/about1.png";
import about2 from "../../images/about/about2.png";
import about3 from "../../images/about/about3.png";
import about4 from "../../images/about/about4.png";
import about5 from "../../images/about/about5.png";
import team1 from "../../images/about/team1.jpg";
import team2 from "../../images/about/team2.jpg";
import pat1 from "../../images/about/pat1.png"
import pat2 from "../../images/about/pat2.png"
import pat3 from "../../images/about/pat3.png"
import pat4 from "../../images/about/pat4.png"
import pat5 from "../../images/about/pat5.png"
import pat6 from "../../images/about/pat6.png"
import pat7 from "../../images/about/pat7.png"
import pat8 from "../../images/about/pat8.png"
const About = () => {
  return (
    <>
      <div className="main_about_page_layout">
        <div className="main_about_section">
          <div className="about_heading_content">
            <h1>About Us</h1>
            <h4>
              We’re All About <br />
              Smartphones
            </h4>
            <NavLink to="" className="btn btn_join">
              Join Us
            </NavLink>
          </div>
          <div className="about_img_content">
            <img src={about} alt="" />
          </div>
        </div>
      </div>
      {/*================ second section start here-========= */}
      {/* <div className="about_alltop_services">
          <div className="about_all_sevices_boxs11">
            <div className="box1_about_smartphone">
    
            <h4>Smartphone Buyback</h4>

            </div>
          </div>
        </div> */}
      <div className="about_alltop_services">
        <div className="established1_main_section">
          <div className="establish1_sub_section">
            <div className="established1_boxes">
              <div className="established1_super_sub">
                <div className="established1_img">
                  <img src={about1} alt="" />
                </div>
                <div className="established1_content">
                  <h6>
                    Smartphone <br />
                    Buyback
                  </h6>
                </div>
              </div>
            </div>
            <div className="established1_boxes">
              <div className="established1_super_sub">
                <div className="established1_img">
                  <img src={about2} alt="" />
                </div>
                <div className="established1_content">
                  <h6>
                    Refurbished
                    <br /> Smartphones
                  </h6>
                </div>
              </div>
            </div>
            <div className="established1_boxes">
              <div className="established1_super_sub">
                <div className="established1_img">
                  <img src={about3} alt="" />
                </div>
                <div className="established1_content">
                  <h6>
                    Smartphones <br />
                    Accessories
                  </h6>
                </div>
              </div>
            </div>
            <div className="established1_boxes">
              <div className="established1_super_sub">
                <div className="established1_img">
                  <img src={about4} alt="" />
                </div>
                <div className="established1_content">
                  <h6>
                    Smartphones <br />
                    Repair
                  </h6>
                </div>
              </div>
            </div>
            <div className="established1_boxes">
              <div className="established1_super_sub">
                <div className="established1_img">
                  <img src={about4} alt="" />
                </div>
                <div className="established1_content">
                  <h6>
                    Mobile Phone
                    <br /> Recycle
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about_story_boxes">
        <h2>Our Story</h2>
        <div className="all_story_boxes">
          <div className="stort_no_one">
            <div className="story_content">
              <h4>The IDEA originated in 2013 </h4>
              <p>
                When one of 3 friends wanted to buy the latest iPhone, he tried
                to sell off his then-current Samsung phone for funding but found
                it difficult to do so.
              </p>
            </div>
          </div>
          <div className="stort_no_two">
            <div className="story_content2">
              <h4> That’s when the concept of CASHIFLIX was formed </h4>
              <p>
                To create a PLATFORM that would let you Sell, Repair, Recycle &
                Manage your phone in a SIMPLE MANNER for the Best PRICE.
              </p>
            </div>
          </div>
          <div className="stort_no_three">
            <div className="story_content">
              <h4> From 1 Room to 15 Office From 3 people to 800 </h4>
              <p>
                From 1 Room to 15 Office From 3 people to 800 People We are now
                a team of 800 PASSIONATE folks who are DEDICATED to help you
                keep your smartphone (the most important thing in your life)
                forever healthy & UP-TO-DATE.
              </p>
            </div>
          </div>
          <div className="stort_no_two">
            <div className="story_content2">
              <h4> Today </h4>
              <p>
                Cashiflix not just ENABLES you to SELL but also, BUY, RECYCLE,
                ACCESSORIZE & REPAIR your smartphone, so that every time you
                visit us, you get all that you need.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*============== our team section start here ===============*/}
      <div className="team_bg_section">
        <h2>Our Team</h2>
        <p>
          We’re Here To Unleash The World’s Creative Energy By Designing A More
          Enlightened Way Of Working.
        </p>
        <div className="team_top_heading_section">
          <div className="team_boxes_div">
            <img src={team1} alt="" className="img_control"/>
            <div className="team_content">
              <h3>Miles Esther</h3>
              <p>Voluptate exercitation</p>
            </div>
          </div>
          <div className="team_boxes_div">
            <img src={team2} alt="" className="img_control"/>
            <div className="team_content">
              <h3>Miles Esther</h3>
              <p>Voluptate exercitation</p>
            </div>
          </div>
          <div className="team_boxes_div">
            <img src={team1} alt="" className="img_control"/>
            <div className="team_content">
              <h3>Miles Esther</h3>
              <p>Voluptate exercitation</p>
            </div>
          </div>
          <div className="team_boxes_div">
            <img src={team2} alt="" className="img_control"/>
            <div className="team_content">
              <h3>Miles Esther</h3>
              <p>Voluptate exercitation</p>
            </div>
          </div>
          <div className="team_boxes_div">
            <img src={team1} alt="" className="img_control"/>
            <div className="team_content">
              <h3>Miles Esther</h3>
              <p>Voluptate exercitation</p>
            </div>
          </div>
          <div className="team_boxes_div">
            <img src={team2} alt="" className="img_control"/>
            <div className="team_content">
              <h3>Miles Esther</h3>
              <p>Voluptate exercitation</p>
            </div>
          </div>
        </div>
      </div>

{/* partners section bottom section start here */}

      <div className="established_main_section123">
          <div className="establish_sub_section pt-5">
            <div className="established_boxes">
              <div className="established_super_sub">
                <div className="established_img">
                  <img src={pat1} alt="" className="patener_img"/>
                </div>
                <div className="established_content">
                  <h5>20 Lakh+ </h5>
                  <h6>Customers</h6>
                </div>
              </div>
            </div>
            <div className="established_boxes">
              <div className="established_super_sub">
                <div className="established_img">
                  <img src={pat2} alt="" className="patener_img"/>
                </div>
                <div className="established_content">
                  <h5>30 Lakh+</h5>
                  <h6>Devices Bought</h6>
                </div>
              </div>
            </div>
            <div className="established_boxes">
              <div className="established_super_sub">
                <div className="established_img">
                  <img src={pat3} alt="" className="patener_img"/>
                </div>
                <div className="established_content">
                  <h5>1200 Cr+</h5>
                  <h6>Cash Given</h6>
                </div>
              </div>
            </div>
            <div className="established_boxes">
              <div className="established_super_sub">
                <div className="established_img">
                  <img src={pat4} alt="" className="patener_img"/>
                </div>
                <div className="established_content">
                  <h5>40+</h5>
                  <h6>Offline Stores</h6>
                </div>
              </div>
            </div>
            
          </div>
          <div className="establish_sub_section py-5">
            <div className="established_boxes">
              <div className="established_super_sub">
                <div className="established_img">
                  <img src={pat5} alt="" className="patener_img"/>
                </div>
                <div className="established_content">
                  <h5>1 Mn+</h5>
                  <h6>App Downloads</h6>
                </div>
              </div>
            </div>
            <div className="established_boxes">
              <div className="established_super_sub">
                <div className="established_img">
                  <img src={pat6} alt="" className="patener_img"/>
                </div>
                <div className="established_content">
                  <h5>21 Lakh+</h5>
                  <h6>Devices Sold</h6>
                </div>
              </div>
            </div>
            <div className="established_boxes">
              <div className="established_super_sub">
                <div className="established_img">
                  <img src={pat7} alt="" className="patener_img"/>
                </div>
                <div className="established_content">
                  <h5>1500+ </h5>
                  <h6>Serviceable<br /> Locations</h6>
                </div>
              </div>
            </div>
            <div className="established_boxes">
              <div className="established_super_sub">
                <div className="established_img">
                  <img src={pat8} alt="" className="patener_img"/>
                </div>
                <div className="established_content">
                  <h5>500+</h5>
                  <h6>Partners</h6>
                </div>
              </div>
            </div>
            
          </div>
        </div>
    </>
  );
};
export default About;
