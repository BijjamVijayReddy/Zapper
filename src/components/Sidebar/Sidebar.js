import React from 'react';
import { Offcanvas } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Collapsible from 'react-collapsible';
import { BiMap } from 'react-icons/bi';
import { FaEnvelope, FaPhoneAlt, FaSearch } from 'react-icons/fa';

const Sidebar = ({ show, handleClose }) => {

   return (
      <>

         <div >
            <Offcanvas show={show} onHide={handleClose} placement='end' className='side__bar'>
               <Offcanvas.Header closeButton>
                  <div className="logo">
                     <a href="/">
                        {/* <img src="assets/img/logo/logo.png" alt="logo" /> */}
                        MVeer Info Tech 
                     </a>
                  </div>
               </Offcanvas.Header>

               <Offcanvas.Body>


                  <section>
                     <div className="p-0">
                        <div className="sidebar__tab">
                           <ul className="nav nav-tabs" id="sidebar-tab" role="tablist">
                              <li className="nav-item">
                                 <a className="nav-link active" id="menu-tab" data-bs-toggle="tab" href="#menu" role="tab" aria-controls="menu" aria-selected="true">menu</a>
                              </li>
                              <li className="nav-item">
                                 <a className="nav-link" id="info-tab" data-bs-toggle="tab" href="#info" role="tab" aria-controls="info" aria-selected="false">info</a>
                              </li>
                           </ul>
                        </div>
                        <div className="sidebar__content">

                           <div className="tab-content" id="sidebar-tab-content">
                              <div className="tab-pane fade show active" id="menu" role="tabpanel" aria-labelledby="menu-tab">

                                 <div className='side_navBar'>

                                    <div className='about iconAdd'>
                                       <NavLink to="//home">Home</NavLink>
                                    </div>

                                    <div className='about iconAdd'>
                                       <NavLink to="/about">About Us </NavLink>
                                    </div>
                                    <div className='about iconAdd'>
                                       <NavLink to="/services">Services</NavLink>
                                    </div>


                                    <div className='about iconAdd border-0'>
                                       <NavLink to="/contact">Contact Us </NavLink>
                                    </div>

                                 </div>

                              </div>

                              <div className="tab-pane fade" id="info" role="tabpanel" aria-labelledby="info-tab">
                                 <div className="sidebar__info">
                                    <div className="logo mb-40">
                                       <a href="/">
                                          {/* <img src="assets/img/logo/logo.png" alt="logo" /> */}
                                          MVeer Info Tech 
                                       </a>
                                    </div>
                                    <p>We must explain to you how all seds this mistakens idea off denouncing pleasures and praising pain was born and I will give you a completed accounts of the system and expound.</p>
                                    <a href="contact.html" className="z-btn z-btn-white">contact us</a>
                                    <div className="sidebar__search">
                                       {/* <form action="#">
                                          <input type="text" placeholder="Your Keywords.."/>
                                          <button type="submit"><i > <FaSearch /> </i></button>
                                       </form> */}
                                    </div>
                                    <div className="sidebar__contact mt-30">
                                       <ul>
                                          <li>
                                             <div className="icon">
                                                <i > <BiMap /> </i>
                                             </div>
                                             <div className="text">
                                                <span> 90, Ground Floor, RJ Garden, Chinnappanahalli, R.J.Gardens, Sanjay Nagar, Marathahalli, Bengaluru, Karnataka 560037</span>
                                             </div>
                                          </li>
                                          <li>
                                             <div className="icon">
                                                <i > <FaEnvelope /> </i>
                                             </div>
                                             <div className="text ">
                                                <span><a href="mailto:annavarapurameshv@gmail.com">annavarapurameshv@gmail.com</a></span>
                                             </div>
                                          </li>
                                          <li>
                                             <div className="icon">
                                                <i ><FaPhoneAlt /> </i>
                                             </div>
                                             <div className="text">
                                                <span><a href="tel: (+91)-9964647482"> (+91)-9964647482</a></span>
                                             </div>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </section>

               </Offcanvas.Body>
            </Offcanvas>
         </div>
      </>
   );
};

export default Sidebar;