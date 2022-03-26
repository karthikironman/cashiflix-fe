import React from "react";
import "./sell.css";
import part7 from "../../images/phones/part7.svg";
import part77 from "../../images/phones/part77.svg";
import iphone12 from "../../images/phones/iphone12.png";
import { NavLink } from "react-router-dom";
const Sellpart7 = () => {
  return (
    <>
      <div className="current_conditiondevice_section">
        <div className="main_current_condition_div">
          <div className="device_condition_div">
            <h2>Tell Us More About Your Device</h2>

           
            <p className="available_pera">Choose functional issues if any</p>
            <div className="available_accessoris_main_div">
              <div className="available_accessoris_sub_div">
                <img src={part7} alt="" />
                <NavLink to="" className="box_name_acc1">
                <h6>FRONT CAMERA<br /> FAULTY</h6>
                </NavLink>
                {/* <div className="box_name_acc1">
                  <h6>FRONT CAMERA<br /> FAULTY</h6>
                </div> */}
              </div>
              <div className="available_accessoris_sub_div">
                <img src={part77} alt="" />
                <NavLink to="" className="box_name_acc1">
                  <h6>REAR CAMERA <br /> FAULTY</h6>
          </NavLink>
              </div>
              <div className="available_accessoris_sub_div">
                <img src={part7} alt="" />
                <NavLink to="" className="box_name_acc1">
                  <h6>SPEAKER FAULTY</h6>
               </NavLink>
              </div>
              <div className="available_accessoris_sub_div">
                <img src={part77} alt="" />
                <NavLink to="" className="box_name_acc1">
                  <h6>WIFI FAULTY</h6>
            </NavLink>
              </div>
            </div>
       
            <div className="available_accessoris_main_div mt-5">
              <div className="available_accessoris_sub_div">
                <img src={part7} alt="" />
                
                <NavLink to="" className="box_name_acc1">
                  <h6>pristine</h6>
             </NavLink>
              </div>
              <div className="available_accessoris_sub_div">
                <img src={part77} alt="" />
                <NavLink to="" className="box_name_acc1">
                  <h6>BATTERY FAULTY</h6>
            </NavLink>
              </div>
              <div className="available_accessoris_sub_div">
                <img src={part7} alt="" />
                <NavLink to="" className="box_name_acc1">
                  <h6>HOME BUTTON <br /> FAULTY</h6>
           </NavLink>
              </div>
              <div className="available_accessoris_sub_div">
                <img src={part77} alt="" />
                <NavLink to="" className="box_name_acc1">
                  <h6>POWER BUTTON<br />  FAULTY</h6>
         </NavLink>
              </div>
            </div>
            <div className="available_accessoris_main_div mt-5">
              <div className="available_accessoris_sub_div">
                <img src={part7} alt="" />
                <NavLink to="" className="box_name_acc1">
                  <h6>VOLUME KEY <br /> FAULTY</h6>
             </NavLink>
              </div>
              <div className="available_accessoris_sub_div">
                <img src={part77} alt="" />
                <NavLink to="" className="box_name_acc1">
                  <h6>CHARGING FAULT</h6>
             </NavLink>
              </div>
              <div className="available_accessoris_sub_div">
                <img src={part7} alt="" />
                <NavLink to="" className="box_name_acc1">
                  <h6>FINGERPRINT FAULTY</h6>
            </NavLink>
              </div>
              <div className="available_accessoris_sub_div">
                <img src={part77} alt="" />
                <NavLink to="" className="box_name_acc1">
                  <h6>FACE ID<br /> FAULTY</h6>
          </NavLink>
              </div>
            </div>
            <NavLink to="sellpart4" className="btn btn_next33">Continue</NavLink>
          </div>
          <div className="device_condition_update_div">
            <div className="device_img22">
              <img src={iphone12} alt="" />
              <h4>Apple iPhone 12 (4 GB/64 GB)</h4>
            </div>
            <hr />
            <div className="device_evaluation">
              <h3>Device Evaluation</h3>
              <h5>Device Details</h5>
              <ul>
                <li>Able to Make and Receive Calls</li>
                <li>Mobile Screen Defective</li>
                <li>Phone Body Flawless</li>
                <li>Phone Body Defective</li>
                <li>Mobile Under Warranty</li>
              </ul>
              <h5>Screen Condition</h5>
              <ul>
               <li>Touch Working</li>
               <li>Large/ heavy visible spots on screen</li>
               <li>Display faded along edges</li>
               <li>Screen cracked/ glass broken</li>
              </ul>
              <h5>Phone's Overall Condition</h5>
              <ul>
             <li>More than 2 scratches</li>
             <li>Major dent(s) or more than 2</li>
             <li>Cracked/ broken side or back panel</li>
             <li>Bent/ curved panel</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Sellpart7;
