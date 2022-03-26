import React from "react";
import "./contact.css";
import contact from "../../images/contact.svg";
import contact1 from "../../images/contact1.svg";
import contact2 from "../../images/contact2.svg";
import contact3 from "../../images/contact3.svg";
import contact4 from "../../images/contact4.svg";
import contact5 from "../../images/contact5.svg";
import contact6 from "../../images/contact6.png";
const Contact = () => {
  return (
    <>
      <>
        <div className="main_contact_page_layout">
          <div className="main_contact_section">
            <div className="contact_heading_content">
              <h1>CONTACT US</h1>
              <h4>
                We’d love to <br /> hear from you
              </h4>
            </div>
            <div className="contact_img_content">
              <img src={contact} alt="" />
            </div>
          </div>
        </div>

        <div className="contact_and_map_section">
        <h2>Get In Touch</h2>
        <div className="sub_contact_and_map_div">
        <div className="form_div">
        <p>Please Fill Out The Quick Form And We Will Be In Touch With Lightening Speed.</p>

<div className="main_form_div">
  <form method="post">
    <input type="text" id="fname" name="firstname" placeholder="Name*" />

    <div className="multiple_fields">
    <input type="email" id="email" name="lastname" placeholder="Email*" />
    <input type="text" id="mobile" name="mobile" placeholder="Mobile*" />
    </div>
    <div className="radio_buttons">
          <div className="radio_group">
            <label className="label_space">
              <input
                type="radio"
                value="sell"
                name="none"
                className="radio_button"
              
              />
          
              <span>    Sell</span>
            </label>
            <label className="label_space">
              <input
                type="radio"
                value="sell"
                name="none"
                className="radio_button"
              />
       
              <span> Repair</span>
            </label>
          </div>
        </div>
    <textarea name="" id="message" cols="30" rows="5" placeholder="Description*"></textarea>
    <input type="submit" value="Submit" />
  </form>
</div>
          
        </div>
          <div className="map_div">
          <iframe
                    width="600"
                    height="450"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62205.76671891818!2d77.6158920862314!3d12.980778061040395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe3e4281694d06515!2sRpl%20Techno%20It%20Services%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1612898464918!5m2!1sen!2sin"
                    frameborder="0"
                    style={{ border: 0 }}
                    allowfullscreen=""
                    aria-hidden="false"
                    tabindex="0"
                  ></iframe>
          </div>
        </div>
        </div>

        <div className="all_contact_services">
          <div className="all_boxes_services">
            <div className="services_boxes1">
              <div className="box1_img">
                <img src={contact1} alt="" />
              </div>
              <div className="box1_content">
                <h2>Customer Inquiry</h2>
                <p>
                  For Any Customer Inquiry Or Assistance Regarding Model, Price
                  Or Service Issues.
                </p>
                <a href="">Support@Cashiflix.In</a>
              </div>
            </div>
            <div className="services_boxes1">
              <div className="box1_img">
                <img src={contact2} alt="" />
              </div>
              <div className="box1_content">
                <h2>Address To CEO</h2>
                <p>
                  For Any Customer Inquiry Or Assistance Regarding Model, Price
                  Or Service Issues.
                </p>
                <a href="">Support@Cashiflix.In</a>
              </div>
            </div>
            <div className="services_boxes1">
              <div className="box1_img">
                <img src={contact3} alt="" />
              </div>
              <div className="box1_content">
                <h2>Bulk Selling</h2>
                <p>
                  For Any Customer Inquiry Or Assistance Regarding Model, Price
                  Or Service Issues.
                </p>
                <a href="">Support@Cashiflix.In</a>
              </div>
            </div>
            <div className="services_boxes1">
              <div className="box1_img">
                <img src={contact4} alt="" />
              </div>
              <div className="box1_content">
                <h2>Cashiflix Partner Program</h2>
                <p>
                  For Any Customer Inquiry Or Assistance Regarding Model, Price
                  Or Service Issues.
                </p>
                <a href="">Support@Cashiflix.In</a>
              </div>
            </div>
            <div className="services_boxes1">
              <div className="box1_img">
                <img src={contact5} alt="" />
              </div>
              <div className="box1_content">
                <h2>Business Inquiry</h2>
                <p>
                  For Any Customer Inquiry Or Assistance Regarding Model, Price
                  Or Service Issues.
                </p>
                <a href="">Support@Cashiflix.In</a>
              </div>
            </div>
            <div className="services_boxes1">
              <div className="box1_img">
                <img src={contact6} alt="" />
              </div>
              <div className="box1_content">
                <h2>Job Inquiry</h2>
                <p>
                  For Any Customer Inquiry Or Assistance Regarding Model, Price
                  Or Service Issues.
                </p>
                <a href="">Support@Cashiflix.In</a>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};
export default Contact;
