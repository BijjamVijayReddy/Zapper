import React from 'react';
import SingleService from '../../../components/SingleService/SingleService';

const HomeServices = () => {
   return (
      <>
         <section className="services__area pt-115 pb-80">
            <div className="container">
               <div className="row">
                  <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                     <div className="section__title section__title-3 text-center mb-90 wow fadeInUp" data-wow-delay=".2s">
                        <span>Our Services</span>
                        <h2>Elevate service excellence with our tools!</h2>
                     </div>
                  </div>
               </div>
               <div className="row">

                  <SingleService icon="1" title="Web Development" subTitle="Creating custom websites tailored to clients' needs" />
                  <SingleService icon="2" title="IT Support and Maintenance" subTitle="Ensuring smooth IT operations"/>
                  <SingleService icon="3" title="IT Consulting" subTitle="Offering expert IT advice and strategy."/>
                  <SingleService icon="4" title="Cybersecurity Services" subTitle="Protecting digital assets from threats."/>
                  <SingleService icon="5" title="Software Development" subTitle="Developing tailored software solutions"/>
                  <SingleService icon="6" title="AI and Machine Learning Services" subTitle="Leveraging AI for automation and insights."/>
                  <SingleService icon="7" title="Mobile App Development" subTitle="Building apps for iOS and Android platforms"/>
                  <SingleService icon="8" title="Cloud Computing Services" subTitle="Providing scalable cloud solutions."/>

               </div>
            </div>
         </section>
      </>
   );
};

export default HomeServices;