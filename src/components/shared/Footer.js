import React from 'react';
import { FaEnvelope, FaFacebookF, FaPhoneAlt, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { BiMap } from 'react-icons/bi';
import { Link, NavLink } from 'react-router-dom';
import { RiTwitterXFill } from "react-icons/ri";
import { AiOutlineCopyright } from "react-icons/ai";

const Footer = () => {
   return (
      <footer>
         <div className="footer__area grey-bg pt-100">
            <div className="footer__top pb-45">
               <div className="container">
                  <div className="row">
                     <div className="col-xl-3 col-lg-2 col-md-4 col-sm-6">
                        <div className="footer__widget mb-45">
                           <div className="footer__widget-title">
                              <h4>Company</h4>
                           </div>
                           <div className="footer__widget-content">
                              <div className="footer__links">
                                 <ul>
                                    <li><NavLink to="/about">About Us</NavLink></li>
                                    <li><NavLink to="/services">Services</NavLink></li>
                                    <li><NavLink to="/contact">Contact Us</NavLink></li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="col-xl-4 offset-xl-1 col-lg-7 offset-lg-1 col-md-4 col-sm-6">
                        <div className="footer__widget mb-45">
                           <div className="footer__widget-title">
                              <h4>Information</h4>
                           </div>
                           <div className="footer__widget-content">
                              <div className="footer__info">
                                 <ul>
                                    <li>
                                       <div className="icon">
                                          <i><BiMap /></i>
                                       </div>
                                       <div className="text">
                                          <span>Address, India</span>
                                       </div>
                                    </li>
                                    <li>
                                       <div className="icon theme-color">
                                          <i><FaEnvelope /></i>
                                       </div>
                                       <div className="text theme-color">
                                          <span><a href="mailto:annavarapurameshv@gmail.com">email@gmail.com</a></span>
                                       </div>
                                    </li>
                                    <li>
                                       <div className="icon theme-color">
                                          <i><FaPhoneAlt /></i>
                                       </div>
                                       <div className="text theme-color">
                                          <span><a href="tel:(+91)-9964647482">(+91)-91234567890</a></span>
                                       </div>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="col-xl-4 col-lg-3 col-md-4 col-sm-6 d-flex justify-content-lg-end">
                        <div className="footer__widget mb-45">
                           <div className="text theme-color">
                              <p style={{ width: "100%" }}>   <span className="icon theme-color" style={{ position: "relative", top: "-2px", fontSize: "19px" }}><AiOutlineCopyright /> </span>   Copyright © 2024 All Rights Reserved passion by <Link to="/home">MveerInfo Pvt Ltd</Link></p>
                           </div>
                           <div className="footer__widget-title">
                              <h4>Follow Us</h4>
                           </div>
                           <div className="footer__widget-content">
                              <div className="footer__social theme-social">
                                 <ul className="d-flex justify-content">
                                    <li>
                                       {/* <a href="https://www.facebook.com/profile.php?id=61557505104080">
                                          <i><FaFacebookF /></i>
                                          <i><FaFacebookF /></i>
                                       </a> */}
                                    </li>
                                    <li>
                                       {/* <a href="https://twitter.com/mveerinfotech?t=TrbGX1lcSi6Z4c5sVFPdvA&s=08">
                                          <i><RiTwitterXFill /></i>
                                          <i><RiTwitterXFill /></i>
                                       </a> */}
                                    </li>
                                    <li>
                                       <a href="https://www.instagram.com/mveerinfotech/?igsh=cXk3ZHA0ODFqc21w">
                                          <i><FaInstagram /></i>
                                          <i><FaInstagram /></i>
                                       </a>
                                    </li>
                                    <li>
                                       <a href="https://www.linkedin.com/in/mveer-infotech-8530a32ba/">
                                          <i><FaLinkedinIn /></i>
                                          <i><FaLinkedinIn /></i>
                                       </a>
                                    </li>
                                    {/* Add more social icons here */}
                                 </ul>
                              </div>
                           </div>

                        </div>
                     </div>

                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
