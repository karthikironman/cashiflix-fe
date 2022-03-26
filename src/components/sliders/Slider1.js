import React, { Component } from "react";
import "./sliders.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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

// import s6 from "../../images/6.svg";
import { AiOutlineArrowUp } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
class Services extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      speed: 500,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
           
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <>
       
        {/* slider start here */}
        <div className="MAIN_SLIDER">
        <div className="main_all_brand_phones222">
        <h2>Top Selling Brands</h2>
          <Slider {...settings}>
        
      
            <div>
              {/* <div className="all_services_box2">
                <img className="ALL_SERVICES_imgs" src={s1} alt="" />
                <h3>EPR Services for Producers & Bulk Consumers</h3>
                        <p>
                        Reach your yearly e-waste collection targets and get EPR authorization by associating with us.
                        </p>
              </div> */}
              <div className="top_selling_brand_sub_div11">
            <img src={phone1} className="main_brand_img11" alt=""/>
              <div className="main_button_box11">
                <div className="circlebox_sub11">
                  <NavLink to="/sellpart2">
                 
                    <AiOutlineArrowUp className="arrow_up11" />
                  </NavLink>
                </div>
              </div>
            </div>
            </div>
            <div>
            <div className="top_selling_brand_sub_div11">
            <img src={phone2} className="main_brand_img11" alt=""/>
              <div className="main_button_box11">
                <div className="circlebox_sub11">
                  <NavLink to="/sellpart2">
                 
                    <AiOutlineArrowUp className="arrow_up11" />
                  </NavLink>
                </div>
              </div>
            </div>
            </div>
            <div>
            <div className="top_selling_brand_sub_div11">
            <img src={phone3} className="main_brand_img11" alt=""/>
              <div className="main_button_box11">
                <div className="circlebox_sub11">
                  <NavLink to="/sellpart2">
                 
                    <AiOutlineArrowUp className="arrow_up11" />
                  </NavLink>
                </div>
              </div>
            </div>
            </div>
            <div>
            <div className="top_selling_brand_sub_div11">
            <img src={phone4} className="main_brand_img11" alt=""/>
              <div className="main_button_box11">
                <div className="circlebox_sub11">
                  <NavLink to="/sellpart2">
                 
                    <AiOutlineArrowUp className="arrow_up11" />
                  </NavLink>
                </div>
              </div>
            </div>
            </div>
            <div>
            <div className="top_selling_brand_sub_div11">
            <img src={phone5} className="main_brand_img11" alt=""/>
              <div className="main_button_box11">
                <div className="circlebox_sub11">
                  <NavLink to="/sellpart2">
                 
                    <AiOutlineArrowUp className="arrow_up11" />
                  </NavLink>
                </div>
              </div>
            </div>
            </div>
            <div>
            <div className="top_selling_brand_sub_div11">
            <img src={phone6} className="main_brand_img11" alt=""/>
              <div className="main_button_box11">
                <div className="circlebox_sub11">
                  <NavLink to="/sellpart2">
                 
                    <AiOutlineArrowUp className="arrow_up11" />
                  </NavLink>
                </div>
              </div>
            </div>
            </div>
            <div>
            <div className="top_selling_brand_sub_div11">
            <img src={phone7} className="main_brand_img11" alt=""/>
              <div className="main_button_box11">
                <div className="circlebox_sub11">
                  <NavLink to="/sellpart2">
                 
                    <AiOutlineArrowUp className="arrow_up11" />
                  </NavLink>
                </div>
              </div>
            </div>
            </div>
            <div>
            <div className="top_selling_brand_sub_div11">
            <img src={phone8} className="main_brand_img11" alt=""/>
              <div className="main_button_box11">
                <div className="circlebox_sub11">
                  <NavLink to="/sellpart2">
                 
                    <AiOutlineArrowUp className="arrow_up11" />
                  </NavLink>
                </div>
              </div>
            </div>
            </div>
            <div>
            <div className="top_selling_brand_sub_div11">
            <img src={phone9} className="main_brand_img11" alt=""/>
              <div className="main_button_box11">
                <div className="circlebox_sub11">
                  <NavLink to="/sellpart2">
                 
                    <AiOutlineArrowUp className="arrow_up11" />
                  </NavLink>
                </div>
              </div>
            </div>
            </div>
            <div>
            <div className="top_selling_brand_sub_div11">
            <img src={phone10} className="main_brand_img11" alt=""/>
              <div className="main_button_box11">
                <div className="circlebox_sub11">
                  <NavLink to="/sellpart2">
                 
                    <AiOutlineArrowUp className="arrow_up11" />
                  </NavLink>
                </div>
              </div>
            </div>
            </div>
            <div>
            <div className="top_selling_brand_sub_div11">
            <img src={phone11} className="main_brand_img11" alt=""/>
              <div className="main_button_box11">
                <div className="circlebox_sub11">
                  <NavLink to="/sellpart2">
                 
                    <AiOutlineArrowUp className="arrow_up11" />
                  </NavLink>
                </div>
              </div>
            </div>
            </div>
            <div>
            <div className="top_selling_brand_sub_div11">
            <img src={phone12} className="main_brand_img11" alt=""/>
              <div className="main_button_box11">
                <div className="circlebox_sub11">
                  <NavLink to="/sellpart2">
                 
                    <AiOutlineArrowUp className="arrow_up11" />
                  </NavLink>
                </div>
              </div>
            </div>
            </div>
            <div>
            <div className="top_selling_brand_sub_div11">
            <img src={phone13} className="main_brand_img11" alt=""/>
              <div className="main_button_box11">
                <div className="circlebox_sub11">
                  <NavLink to="/sellpart2">
                 
                    <AiOutlineArrowUp className="arrow_up11" />
                  </NavLink>
                </div>
              </div>
            </div>
            </div>
   
          </Slider>
        </div>
        </div>
      </>
    );
  }
}
export default Services;
