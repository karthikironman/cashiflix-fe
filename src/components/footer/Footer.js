import React from 'react'
import "./footer.css"
import { NavLink } from 'react-router-dom'
import logo2  from "../../images/logo2.png"
import fb from "../../images/fb.svg"
import li from "../../images/li.svg"
import tw from "../../images/tw.svg"
import pi from "../../images/pi.svg"
const Footer = () => {
    return (
        <>
 
        <footer className="main_footer">
        <div className="footer">
            <div className="footer_left1">
                <img src={logo2} className="footer_img" alt=""/>
                <ul id="listItems2">
                    <li><NavLink to="/"><span className="social_icons"><img src={fb} alt=""/></span></NavLink> </li>
                    <li><NavLink to="/"><span className="social_icons"><img src={tw} alt=""/></span></NavLink> </li>
                    <li><NavLink to="/"><span className="social_icons"><img src={li} alt=""/></span></NavLink> </li>
                    <li><NavLink to="/"><span className="social_icons"><img src={pi} alt=""/></span></NavLink> </li>
                </ul>
            </div>
            <div className="footer_left2">
                <h2>Links</h2>
                <ul id="listItems">
                    <li><NavLink to="/" className="my_navlink"><p>Home</p></NavLink> </li>
                    <li><NavLink to="/about" className="my_navlink"><p>About</p></NavLink> </li>
                    <li><NavLink to="/service" className="my_navlink"><p>Service</p></NavLink> </li>
                    <li><NavLink to="/blog" className="my_navlink"><p>Blog</p></NavLink> </li>
                    <li><NavLink to="/" className="my_navlink"><p>our clients</p></NavLink> </li>
                </ul>
            </div> 
            <div className="footer_center">
            <h2>Support</h2>
            <ul id="listItems">
                    <li><NavLink to="/" className="my_navlink"><p>FAQ</p></NavLink> </li>
                    <li><NavLink to="/about" className="my_navlink"><p>How it Works</p></NavLink> </li>
                    <li><NavLink to="/service" className="my_navlink"><p>Career</p> </NavLink> </li>
                    <li><NavLink to="/contact" className="my_navlink"><p>Contact</p></NavLink> </li>
                    <li><NavLink to="/" className="my_navlink"> <p>Refer & Earn</p></NavLink> </li>
                </ul>
            </div>
            <div className="footer_right">
            <h2>Contact Us</h2>
            <ul id="listItems">
                    <li><p>+91 8812345678</p> </li>
                    <li><p>info@chashflix.com</p></li>
                    <li><p>Bangalore City</p></li>
                   
                </ul>
            </div>

        </div>
        <div className="copyright">
            <div className="copy_section">
                <p>Copyright & Design by @ creniux</p>
            </div>
            <div className="term_condition">
                <p>Terms of use | Privacy Policy</p>
            </div>
        </div>
        </footer>
        </>
    )
}

export default Footer;