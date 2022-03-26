import React from "react";
import "./sell.css";
import screen1 from "../../images/phones/screen1.png";
import screen2 from "../../images/phones/screen2.png";
import screen3 from "../../images/phones/screen3.png";
import cond1 from "../../images/phones/cond1.png";
import cond2 from "../../images/phones/cond2.png";
import cond3 from "../../images/phones/cond3.png";
import cond4 from "../../images/phones/cond4.png";
import iphone12 from "../../images/phones/iphone12.png";
import { NavLink } from "react-router-dom";
const Sellpart5 = () => {
  return (
    <>
      <div className="current_conditiondevice_section">
        <div className="main_current_condition_div">
          <div className="device_condition_div">
            <h2>Tell Us More About Your Device</h2>
       
            <p>How old is your device ?</p>
            <div className="radio_buttons1">
              <div className="radio_group1">
                <label className="label_space22">
                  <input
                    type="radio"
                    value="yes"
                    name="none"
                    className="radio_button"
                  />

                  <span> Less then 3 months</span>
                </label>
                <label className="label_space22">
                  <input
                    type="radio"
                    value="yes"
                    name="none"
                    className="radio_button"
                  />

                  <span> Between 3-6 months</span>
                </label>
              </div>
            </div>
            <div className="radio_buttons1 mt-3">
              <div className="radio_group1">
                <label className="label_space22">
                  <input
                    type="radio"
                    value="yes"
                    name="none"
                    className="radio_button"
                  />

                  <span> Between 6-11 months</span>
                </label>
                <label className="label_space22">
                  <input
                    type="radio"
                    value="yes"
                    name="none"
                    className="radio_button"
                  />

                  <span> More than 11 months</span>
                </label>
              </div>
            </div>
            <p className="available_pera">Is there any problem with your mobile screen ?</p>
            <div className="available_accessoris_main_div">
              <div className="available_accessoris_sub_div">
                <img src={screen1} alt="" />
                <div className="box_name_acc1">
                  <h6>glass crack</h6>
                </div>
              </div>
              <div className="available_accessoris_sub_div">
                <img src={screen2} alt="" />
                <div className="box_name_acc1">
                  <h6>Broken/Changed<br /> Display</h6>
                </div>
              </div>
              <div className="available_accessoris_sub_div">
                <img src={screen3} alt="" />
                <div className="box_name_acc1">
                  <h6>spots on screen</h6>
                </div>
              </div>
              {/* <div className="available_accessoris_sub_div">
                <img src={acc4} alt="" />
                <div className="box_name_acc">
                  <h6>valid bill</h6>
                </div>
              </div> */}
            </div>
            <p className="available_pera pt-5">Is there any problem with your mobile screen ?</p>
            <div className="available_accessoris_main_div">
              <div className="available_accessoris_sub_div">
                <img src={cond1} alt="" />
                <div className="box_name_acc">
                  <h6>pristine</h6>
                </div>
              </div>
              <div className="available_accessoris_sub_div">
                <img src={cond2} alt="" />
                <div className="box_name_acc">
                  <h6>good</h6>
                </div>
              </div>
              <div className="available_accessoris_sub_div">
                <img src={cond3} alt="" />
                <div className="box_name_acc">
                  <h6>moderate</h6>
                </div>
              </div>
              <div className="available_accessoris_sub_div">
                <img src={cond4} alt="" />
                <div className="box_name_acc">
                  <h6>average</h6>
                </div>
              </div>
            </div>
            <NavLink to="sellpart7" className="btn btn_next33">Continue</NavLink>
          </div>
          <div className="device_condition_update_div">
            <div className="device_img22">
              <img src={iphone12} alt="" />
              <h4>Apple iPhone 12 (4 GB/64 GB)</h4>
            </div>
            <hr />
            <div className="device_evaluation">
              <h3>Device Evaluation</h3>
              <ul>
                <li>Able to Make and Receive Calls</li>
                <li>Mobile Screen Defective</li>
                <li>Phone Body Flawless</li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Sellpart5;
