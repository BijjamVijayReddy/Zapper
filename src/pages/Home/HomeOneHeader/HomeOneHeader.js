import { useState } from 'react';
import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebookF, FaTwitter, FaInstagram, FaPhoneAlt, FaEnvelope, FaSearch, FaLinkedinIn } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import Sidebar from '../../../components/Sidebar/Sidebar';
import useGlobalContext from '../../../hooks/useGlobalContext';

const HomeOneHeader = () => {
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   const { stickyMenu } = useGlobalContext();
   return (
      <>
         <header>
            <div className="header__area p-relative header__transparent">
               <div className="header__top d-none d-md-block">
                  <div className="container">
                     <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-5 col-md-4">
                           <div className="header__social">
                              <ul>
                                 {/* <li><a href="https://www.facebook.com/profile.php?id=61557505104080"><i ><FaFacebookF /></i> </a></li>
                                 <li><a href="https://twitter.com/mveerinfotech?t=TrbGX1lcSi6Z4c5sVFPdvA&s=08"><i ><RiTwitterXFill /> </i></a> </li> */}
                                 <li><a href="https://www.instagram.com/mveerinfotech/?igsh=cXk3ZHA0ODFqc21w"><i ><FaInstagram /></i></a></li>
                                 <li><a href="https://www.linkedin.com/in/mveer-infotech-8530a32ba/"><i > <FaLinkedinIn /> </i></a></li>
                              </ul>
                           </div>
                        </div>
                        <div className="col-xl-6 col-lg-7 col-md-8">
                           <div className="header__info f-right">
                              <ul>
                                 <li>
                                    <a href="tel:(+91)-9964647482">
                                       <i > <FaPhoneAlt /> </i>
                                       (+91)-91234567890
                                    </a>
                                 </li>
                                 <li>
                                    <a href="mailto: annavarapurameshv@gmail.com">
                                       <i > <FaEnvelope /> </i>
                                       Email@gmail.com
                                    </a>
                                 </li>
                                 <li>
                                    {/* <a href="#" className="search-toggle">
                                       <i > <FaSearch/> </i>
                                    </a> */}
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div id="header__sticky" className={stickyMenu ? "sticky header__bottom" : "header__bottom"}>
                  <div className="container">
                     <div className="row align-items-center">
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                           <div className="logo">
                              <NavLink to="/" style={{color:"#ffff",fontSize:"15px",fontWeight:"500"}}>
                                 {/* <img src="assets/img/logo/logo.png" alt="logo"/> */}
                                 Valenetech Pvt Ltd
                              </NavLink>
                           </div>
                           <div className="logo-gradient">
                              <NavLink to="/">
                                 {/* <img src="assets/img/logo/logo-gradient.png" alt="logo" /> */}
                                 Valenetech Pvt Ltd
                              </NavLink>
                           </div>
                        </div>
                        <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6">
                           <div className="header__bottom-right d-flex justify-content-end align-items-center">
                              <div className="main-menu menu_wrapper_one">
                                 <nav id="mobile-menu">
                                    <ul>
                                       <li>
                                          <NavLink to="/home">Home</NavLink>

                                       </li>
                                       <li><NavLink to="/about">About Us </NavLink></li>
                                       <li>
                                          <NavLink to="/services">Services</NavLink>
                                          {/* <ul className="submenu">
                                             <li><NavLink to="/services">Services</NavLink></li>
                                             <li><NavLink to="/servicesDetails">Services Details</NavLink></li>
                                          </ul> */}
                                       </li>
                                       {/* <li>
                                          <NavLink to="/portfolio">Insights</NavLink>
                                          <ul className="submenu">
                                             <li><NavLink to="/portfolio">portfolio</NavLink></li>
                                             <li><NavLink to="/portfolioDetails">portfolio Details</NavLink></li>
                                             <li><NavLink to="/team">team</NavLink></li>
                                             <li><NavLink to="/teamDetails">team Details</NavLink></li>
                                          </ul>
                                       </li> */}
                                       {/* <li>
                                          <NavLink to="/blogs">Blog</NavLink>
                                          <ul className="submenu">
                                             <li><NavLink to="/blogs">Blog</NavLink></li>
                                             <li><NavLink to="/blogDetails">Blog Details</NavLink></li>
                                          </ul>
                                       </li> */}
                                       <li><NavLink to="/contact">Contact Us</NavLink></li>
                                    </ul>
                                 </nav>
                              </div>
                              <div className="header__btn d-none d-sm-block d-lg-none d-xl-block ml-50">
                                 <Link to="/contact" className="z-btn z-btn-white">Get a Quote</Link>
                              </div>
                              <div onClick={handleShow} className="sidebar__menu d-lg-none">
                                 <div className="sidebar-toggle-btn" id="sidebar-toggle">
                                    <span className="line"></span>
                                    <span className="line"></span>
                                    <span className="line"></span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="header__search-wrapper">
                  <div className="container">
                     <div className="row">
                        <div className="col-xl-12">
                           {/* <form action="#">
                              <input type="text" placeholder="Your Keywords" />
                              <button type="button"><i > <FaSearch/> </i></button>
                           </form> */}
                        </div>
                     </div>
                  </div>
               </div>
               <div className="body-overlay-2"></div>
            </div>
         </header>



         <Sidebar show={show} handleClose={handleClose} />

      </>
   );
};

export default HomeOneHeader;