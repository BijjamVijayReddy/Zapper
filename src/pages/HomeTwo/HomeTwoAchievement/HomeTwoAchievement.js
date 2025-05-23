import React from 'react';
import { Link } from 'react-router-dom';

const HomeTwoAchievement = () => {
   return (
      <>
         <section className="achievement__area pt-135 pb-40">
            <div className="container">
               <div className="row">
                  <div className="col-xl-5 col-lg-6 col-md-6">
                     <div className="achievement__content">
                        <div className="section__title section__title-3 mb-20">
                           <span>Achievement</span>
                           <h2>We are certified IT experts.</h2>
                        </div>
                        <p>Consistently achieving innovation milestones, driving tangible client success stories, and earning esteemed industry recognition.</p>
                        <div className="achievement__wrapper d-flex d-md-block d-lg-flex justify-content-between mb-35 wow fadeInUp" data-wow-delay=".8s">
                           <div className="achievement__item mb-30">
                              <img src="assets/img/icon/achievement/achievement-1.png" alt="achievement"/>
                                 <h3>Achieved Client Satisfaction Through Customized IT Services</h3>
                           </div>
                           <div className="achievement__item mb-30">
                              <img src="assets/img/icon/achievement/achievement-2.png" alt="achievement"/>
                                 <h3>Recognized for Innovation in IT Solutions</h3>
                           </div>
                        </div>
                        <Link to="/contact" className="z-btn">Learn More</Link>
                     </div>
                  </div>
                  <div className="col-xl-7 col-lg-6 col-md-6">
                     <div className="row">
                        <div className="col-xl-7 col-sm-6">
                           <div className="achievement__thumb m-img pl-30 text-right">
                              <img src="assets/img/achievement/achievement-1.jpg" alt="achievement-1"/>
                           </div>
                        </div>
                        <div className="col-xl-5 col-sm-6 d-md-none d-lg-none d-xl-block">
                           <div className="achievement__thumb w-img">
                              <img src="assets/img/achievement/achievement-2.jpg" alt=""/>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeTwoAchievement;