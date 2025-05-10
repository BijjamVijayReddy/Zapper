import React from 'react';
import HomeThreeSecondSingleService from '../../../components/HomeThreeSecondSingleService/HomeThreeSecondSingleService';
import { SiKnowledgebase } from 'react-icons/si';
import { BsTools, BsHeart, BsBag } from 'react-icons/bs';
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { RiToolsLine } from "react-icons/ri";
import { AiOutlineCustomerService } from "react-icons/ai";


const HomeThreeSecondServices = () => {
   return (
      <>
         <section className="services__area-3 pt-115 pb-160">
            <div className="container">
               <div className="row">
                  <div className="col-xl-6">
                     <div className="section-title section__title-3 mb-70">
                        <h2>We Help <br /> Clients Make Profit</h2>
                        <p>We help you weather today's uncertainty through our best team.</p>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-xl-12">
                     <div className="services__nav wow fadeInUp" data-wow-delay=".4s">
                        <ul className="nav nav-pills " id="services-tab" role="tablist">
                           <li className="nav-item mb-45">
                              <a className="nav-link active" id="share-tab" data-bs-toggle="pill" href="#share" role="tab" aria-controls="share" aria-selected="true">
                                 <i> <SiKnowledgebase /> </i>Share Knowledge
                              </a>
                           </li>
                           <li className="nav-item mb-30">
                              <a className="nav-link" id="customer-tab" data-bs-toggle="pill" href="#customer" role="tab" aria-controls="customer" aria-selected="true">
                                 <i ><AiOutlineCustomerService  /></i> Customer Service
                              </a>
                           </li>
                           <li className="nav-item mb-30">
                              <a className="nav-link" id="social-tab" data-bs-toggle="pill" href="#social" role="tab" aria-controls="social" aria-selected="true">
                                 <i ><MdOutlineMiscellaneousServices /></i> IT Services
                              </a>
                           </li>
                           <li className="nav-item mb-30">
                              <a className="nav-link" id="financial-tab" data-bs-toggle="pill" href="#financial" role="tab" aria-controls="financial" aria-selected="true">
                                 <i ><RiToolsLine /></i> IT Maintenance
                              </a>
                           </li>
                        </ul>
                     </div>
                  </div>
                  <div className="col-xl-12">
                     <div className="services__tab grey-bg-18">
                        <div className="tab-content" id="services-content">
                           <div className="tab-pane fade show active" id="share" role="tabpanel" aria-labelledby="share-tab">
                              <HomeThreeSecondSingleService title="Share Knowledge" subTitle="Share Knowledge in the IT industry means spreading valuable information and expertise among professionals through various channels like forums, blogs, workshops, and internal platforms. It's vital for staying updated, solving problems, and driving innovation collectively." />
                           </div>
                           <div className="tab-pane fade" id="customer" role="tabpanel" aria-labelledby="customer-tab">
                              <HomeThreeSecondSingleService title="Customer Service" subTitle="Customer service in the IT industry involves helping customers with technical issues, questions, and support related to hardware, software, and online services through various channels like phone, email, or live chat. It's about solving problems, providing accurate information, and ensuring customer satisfaction" />
                           </div>
                           <div className="tab-pane fade" id="social" role="tabpanel" aria-labelledby="social-tab">
                              <HomeThreeSecondSingleService title="IT Services" subTitle="IT services in the IT industry involve providing support, solutions, and expertise to help businesses manage their technology effectively. This includes services like consulting for strategy, managing infrastructure like networks and servers, developing custom software, ensurin" />
                           </div>
                           <div className="tab-pane fade" id="financial" role="tabpanel" aria-labelledby="financial-tab">
                              <HomeThreeSecondSingleService title="IT Maintenance" subTitle="IT maintenance in the IT industry involves regular tasks to keep computer systems running smoothly, like updating software, fixing problems, and making sure everything stays secure and reliable"/>
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

export default HomeThreeSecondServices;