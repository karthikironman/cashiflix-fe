import React from "react";
import "./home.css";
import img1 from "../../images/g1.svg";
import img2 from "../../images/g2.svg";
import img3 from "../../images/g3.svg";
import img4 from "../../images/g4.svg";
import why1 from "../../images/why1.png";
import why2 from "../../images/why2.png";
import why3 from "../../images/why3.png";
import why4 from "../../images/why4.png";
import why5 from "../../images/why5.png";
import why6 from "../../images/why6.png";
import sell1 from "../../images/1.svg";
import sell2 from "../../images/2.svg";
import sell3 from "../../images/3.svg";
import sell4 from "../../images/4.svg";
import sell5 from "../../images/5.svg";
import b1 from "../../images/b1.png";
import b2 from "../../images/b2.png";
import b3 from "../../images/b3.png";
import blog1 from "../../images/blog1.png";
import blog2 from "../../images/blog2.png";
import blog3 from "../../images/blog3.png";
import man from "../../images/man.png";
import c1 from "../../images/c1.svg";
import c2 from "../../images/c2.svg";
import c3 from "../../images/c3.svg";
import c4 from "../../images/c4.svg";
import gg from "../../images/gg.svg";
const Home = () => {
  return (
    <>
      <div className="main_container">
        <header id="main_header">
          <div className="top_banner">
            <h1>
              Find Best Deal
              <br />
              On Cashiflix.
            </h1>
            <p>
              When it comes to smartphones, we’re the only one place that does
              it all.
            </p>
            <button className=" btn_sell">Sell Now</button>
            <button className=" btn_explore">explore more</button>
          </div>
        </header>

        <div className="four_imp_boxes">
          <div className="all_services_nbox shadow">
            <img src={img1} alt="img1" className="sell_img" />
            <h4>Sell Mobile</h4>
            <p>Sell your Mobile Phone for instant cash</p>
          </div>
          <div className="all_services_nbox shadow">
            <img src={img4} alt="img1" className="sell_img" />
            <h4>Sell Tablet / iPad</h4>
            <p>Repair your phone at doorstep</p>
          </div>
          <div className="all_services_nbox shadow">
            <img src={img3} alt="img1" className="sell_img" />
            <h4>Repair Phone</h4>
            <p>Buy latest phones on best deals.</p>
          </div>
          <div className="all_services_nbox shadow">
            <img src={img2} alt="img1" className="sell_img" />
            <h4>Repair Tablet / iPad</h4>
            <p>Recycle your old phone now!</p>
          </div>
          <div className="all_services_nbox shadow">
            <img src={img3} alt="img1" className="sell_img" />
            <h4>Sell Smart Watch</h4>
            <p>Buy latest phones on best deals.</p>
          </div>
          <div className="all_services_nbox shadow">
            <img src={img2} alt="img1" className="sell_img" />
            <h4>Buy Laptop / MacBook</h4>
            <p>Recycle your old phone now!</p>
          </div>
        </div>
        {/* ==================why why_chashflix section start here =================*/}
        <div className="why_heading">
          <h2>why Cashiflix</h2>
          <div className="why_chashflix">
            <div className="why_div">
              <img src={why1} alt="" className="why_imgs" />
              <h3>simple & Hassle-free</h3>
              <p>
                Say goodbye to standing at a shop counter and negotiating or
                going crazy answering messages from prospective buyers when they
                see your listing on a classifieds platform. Cashiflix is a
                breeze. Best Price - Zero Hassle!
              </p>
            </div>
            <div className="why_div">
              <img src={why2} alt="" className="why_imgs" />
              <h3>Amazing Prices</h3>
              <p>
                Based on phone brand, specs, age, condition and market forces
                this intelligent dynamic tool will delight you with a price that
                goes far beyond your expectations. No pesky phone calls, no
                haggling or negotiations.
              </p>
            </div>
            <div className="why_div">
              <img src={why3} alt="" className="why_imgs" />
              <h3>scomplete ownership transfer</h3>
              <p>
                At pickup time our representative will ensure right before your
                eyes that all your data is wiped out as per industry standards
                effectively preventing any misuse.
              </p>
            </div>
            <div className="why_div">
              <img src={why4} alt="" className="why_imgs" />
              <h3>trained professionals</h3>
              <p>Trusted experts to help every step of the way</p>
            </div>
            <div className="why_div">
              <img src={why5} alt="" className="why_imgs" />
              <h3>easy pickups</h3>
              <p>
                For your convenience, Cashiflix along with its logistics
                partners provides pickup in 1200 towns across the country.
                Cashiflix customer service team will try and do its best to
                organize one. Trust us.
              </p>
            </div>
            <div className="why_div">
              <img src={why6} alt="" className="why_imgs" />
              <h3>instant money transfer</h3>
              <p>
                Our money transfers are digital. Get your money via Bank Account
                or Paytm, instantly, before your phone leaves your hands.
              </p>
            </div>
          </div>
        </div>
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

            {/* <div className="sell_process">
                   <img src={sell2} alt="" className="sell_imgs"/>
               </div>
               <div className="sell_process">
                   <img src={sell3} alt="" className="sell_imgs"/>
               </div>
               <div className="sell_process">
                   <img src={sell4} alt="" className="sell_imgs"/>
               </div>
               <div className="sell_process">
                   <img src={sell5} alt="" className="sell_imgs"/>
               </div> */}
          </div>
        </div>

        <div className="blog_section">
          <h2>blog</h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. 
          </p>
          <div className="about_blog">
            <div className="blog_process1">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/doBFPSM9_7I" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            
            </div>
            <div className="blog_process2">
              <img src={blog2} alt="" className="sell_imgs" />
              <img src={blog3} alt="" className="sell_imgs" />
            </div>
           
          </div>
        </div>

        <div className="main_div_client">
          <div className="client_feedback">
            <div className="client_heading">
              <h2>our clients feedback</h2>
            {/* <hr /> */}
          
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Corporis ipsa et odit dignissimos quas, quam tempore perferendis
                iste quae delectus.
              </p>
            </div>
            {/* <div className="read_more">
              <button className=" btn_read_more">read more</button>
            </div> */}
          </div>
          <div className="man_feedback_upbox">
            <div className="client_feedback_box">
              <div className="client_img">
                <img src={man} alt="" className="man_img" />
              </div>
              <div className="feedback_comment">
                <p>
                  "Sed ut perspiciatis unde omnis iste natus error sit
                  voluptatem accusantium doloremque laudantium, totam rem
                  aperiam, eaque ipsa quae ab illo modi tem."
                </p>
                <h6 className="font_weight_bold">riad isalm</h6>
                <p className="font_weight_bold">
                  product manager. <span className="text-primary">@pixbay</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="established_main_section">
          <h2>It is a long established fact that</h2>
          <div className="establish_sub_section">
            <div className="established_boxes">
              <div className="established_super_sub">
                <div className="established_img">
                  <img src={c1} alt="" />
                </div>
                <div className="established_content">
                  <h5>200cr+</h5>
                  <h6>cash given</h6>
                </div>
              </div>
            </div>
            <div className="established_boxes">
              <div className="established_super_sub">
                <div className="established_img">
                  <img src={c2} alt="" />
                </div>
                <div className="established_content">
                  <h5>100+</h5>
                  <h6>gadgets encashed</h6>
                </div>
              </div>
            </div>
            <div className="established_boxes">
              <div className="established_super_sub">
                <div className="established_img">
                  <img src={c3} alt="" />
                </div>
                <div className="established_content">
                  <h5>90+</h5>
                  <h6>device repaired</h6>
                </div>
              </div>
            </div>
            <div className="established_boxes">
              <div className="established_super_sub">
                <div className="established_img">
                  <img src={c4} alt="" />
                </div>
                <div className="established_content">
                  <h5>100+</h5>
                  <h6>happy users</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="contact_us123">
          <div className="send_email_section">
            <h3>Contact us!</h3>
            <p>
              Get travel planning ideas, helpful tips, and stories from our
              visitors delivered right to your inbox.
            </p>
            <input type="text" />
          </div>
          <div className="contact_img" placeholder="Email Address">
            <img src={gg} alt="" />
          </div>
        </div> */}
  </div>
    </>
  );
};
export default Home;
