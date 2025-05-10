import Slider from "react-slick";
import SingleBrandItem from "../../../components/SingleBrandItem/SingleBrandItem";

const HomeBrands = () => {
   // slick setting
   const settings = {
      autoplay: false,
      autoplaySpeed: 10000,
      dots: false,
      arrows: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 4,
               slidesToScroll: 1,
               infinite: true,
            }
         },
         {
            breakpoint: 767,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 1,
            }
         },
         {
            breakpoint: 576,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
            }
         },
      ]

   };
   return (
      <>
         <section className="brand__area p-relative pt-160 pb-50">
            <div className="brand__shape">
               <img className="square" src="assets/img/icon/brand/square.png" alt="" />
               <img className="circle" src="assets/img/icon/brand/circle.png" alt="" />
               <img className="circle-2" src="assets/img/icon/brand/circle-2.png" alt="" />
               <img className="triangle" src="assets/img/icon/brand/trianlge.png" alt="" />
            </div>
            <div className="container p-relative">
               <div className="row">
                  <div className="col-xl-4 offset-xl-1 col-lg-4 offset-lg-1">
                     <div className="section__title mb-30">
                        <span>Our Clients</span>
                     </div>
                  </div>
                  <div className="col-xl-6 col-lg-7">
                     <div className="section__title section__title-3 wow fadeInUp" data-wow-delay=".2s">
                        <h2>Over 1,962 designers choose our IT services.</h2>
                     </div>
                     <div className="brand__subtitle mb-90 wow fadeInUp" data-wow-delay=".4s">
                        <p>Design anything from simple icons to fully featured websites and applications.</p>
                     </div>
                  </div>
               </div>
               <div className="row">

                  <Slider className='brand-active' {...settings}>
                     <SingleBrandItem img_1="24" img_2="16" />
                     <SingleBrandItem img_1="23" img_2="18" />
                     <SingleBrandItem img_1="11" img_2="14" />
                     <SingleBrandItem img_1="9" img_2="20" />
                     {/* <SingleBrandItem img_1="16" img_2="6" /> */}
                  </Slider>

               </div>
            </div>
         </section>

      </>
   );
};

export default HomeBrands;