import React from "react";
import "./sell.css";
import acc1 from "../../images/phones/acc1.png";
import acc2 from "../../images/phones/acc2.png";
import acc3 from "../../images/phones/acc3.png";
import acc4 from "../../images/phones/acc4.png";
import iphone12 from "../../images/phones/iphone12.png";
import { NavLink } from "react-router-dom";
const Sellpart5 = () => {
  return (
    <>
      <div className="current_conditiondevice_section">
        <div className="main_current_condition_div">
          <div className="device_condition_div">
            <h2>What Is The Current Condition Of Your Device</h2>
            <p>1. Are you able to make and receive calls?</p>
            <p>Check your device for cellular network connectivity issues.</p>
            <div className="radio_buttons1">
              <div className="radio_group1">
                <label className="label_space1">
                  <input
                    type="radio"
                    value="yes"
                    name="none"
                    className="radio_button"
                  />

                  <span> Yes</span>
                </label>
                <label className="label_space1">
                  <input
                    type="radio"
                    value="yes"
                    name="none"
                    className="radio_button"
                  />

                  <span> No</span>
                </label>
              </div>
            </div>
            <p className="available_pera">2. choose available accessories</p>
            <div className="available_accessoris_main_div">
              <div className="available_accessoris_sub_div">
                <img src={acc1} alt="" />
                <div className="box_name_acc">
                  <h6>box</h6>
                </div>
              </div>
              <div className="available_accessoris_sub_div">
                <img src={acc2} alt="" />
                <div className="box_name_acc">
                  <h6>charger</h6>
                </div>
              </div>
              <div className="available_accessoris_sub_div">
                <img src={acc3} alt="" />
                <div className="box_name_acc">
                  <h6>earphones</h6>
                </div>
              </div>
              <div className="available_accessoris_sub_div">
                <img src={acc4} alt="" />
                <div className="box_name_acc">
                  <h6>valid bill</h6>
                </div>
              </div>
            </div>
            <NavLink to="sellpart6" className="btn btn_next33">Continue</NavLink>
          </div>
          <div className="device_condition_update_div">
            <div className="device_img">
              <img src={iphone12} alt="" />
              <h4>Apple iPhone 12 (4 GB/64 GB)</h4>
            </div>
            <hr />
            <div className="device_evaluation">
              <h3>Device Evaluation</h3>
              <ul>
                <li>Able to Make and Receive Calls</li>
                <li>Box available</li>
                <li></li>
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
