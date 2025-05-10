import React from 'react';
import HomeSingleFeature from '../../../components/HomeSingleFeature/HomeSingleFeature';
import { FiGlobe, FiLock} from 'react-icons/fi';
import { FaLightbulb, FaRibbon } from 'react-icons/fa';
import { IoIosCloudOutline } from "react-icons/io";
import { RxMobile } from "react-icons/rx";
import { MdOutlineSecurity } from "react-icons/md";
import { MdMiscellaneousServices } from "react-icons/md";
import { BiSupport } from "react-icons/bi";


const HomeFeatures = () => {
   return (
      <>
         <section className="features__area pb-100 mt--100 wow fadeInUp" data-wow-delay=".5s">
            <div className="container">
               <div className="features__inner fix">
                  <div className="row g-0 ">

                     <HomeSingleFeature icon={<FiGlobe  />} title="Web Development" />
                     <HomeSingleFeature icon={<IoIosCloudOutline  />} title="Cloud Security" />
                     <HomeSingleFeature icon={<RxMobile />} title="Mobile App Development" />
                     <HomeSingleFeature icon={<MdOutlineSecurity />} title="Cybersecurity" />
                     <HomeSingleFeature icon={<MdMiscellaneousServices  />} title="IT Consulting" />
                     <HomeSingleFeature icon={<BiSupport   />} title="Custom Software Development" />

                  </div>
               </div>
            </div>
         </section>

      </>
   );
};

export default HomeFeatures;