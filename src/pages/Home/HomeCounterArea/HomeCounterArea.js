import React from 'react';
import SingleCount from '../../../components/SingleCount/SingleCount';

const HomeCounterArea = () => {
   return (
      <>
         <section className="counter__area pb-100">
            <div className="container">
               <div className="counter__inner white-bg wow fadeInUp" data-wow-delay=".2s">
                  <div className="row">

                     <SingleCount counter={75} title="Happy Clients" />
                     <SingleCount counter={155} title="Project Completed" />
                     <SingleCount counter={48} title="Support Given" />
                     <SingleCount counter={12} title="Offices Worldwide" />

                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeCounterArea;