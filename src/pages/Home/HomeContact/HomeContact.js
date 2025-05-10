import React, { useState } from 'react';
import emailjs from "@emailjs/browser";

const HomeContact = () => {
   const [userName, setUserName] = useState('');
   const [userEmail, setUserEmail] = useState('');
   const [userDesc, setUserDesc] = useState('');
   const [errors, setErrors] = useState({});
   const [sucessMsg, setSucessMsg] = useState(false)

   const validateValues = () => {
      let errors = {};

      if (!/^[a-zA-Z\s]*$/.test(userName.trim())) {
         errors.userName = "Name should not contain Numbers.";
      } else if (userName.trim().length < 5) {
         errors.userName = "Name is too short";
      }

      if (!userEmail.includes('@')) {
         errors.userEmail = "Invalid email address.";
      } else if (userEmail.trim().length < 5) {
         errors.userEmail = "Email is too short.";
      }

      if (userDesc.trim().length < 5) {
         errors.userDesc = "Your Message is too short.";
      }
      return errors;
   };

   const submitHandler = (e) => {
      e.preventDefault();

      const validationErrors = validateValues();
      setErrors(validationErrors);

      if (Object.keys(validationErrors).length === 0) {
         setSucessMsg(true)
         const serviceId = "service_2nnv24h"
         const templateId = "template_nh0sh0q"
         const publicKey = "hf-yd-5evVY9Uxnoe"

         const templateParams = {
            from_name: userName,
            from_email: userEmail,
            message: userDesc,
         };

         emailjs
            .send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
               console.log("Email sent successfully!", response);
               alert("Your details have been successfully submitted", response)
               setUserName("");
               setUserEmail("");
               setUserDesc("");
               setSucessMsg(false)
            })
            .catch((error) => {
               console.error("Error sending email:", error);
            });

      }
   };

   const errorStyles = {
      color: '#F90D0D',
      fontSize: '14px',
      marginTop: '-10px',
      fontWeight: 500
   };


   return (
      <>
         <section className="contact__area">
            <div className="container-fluid p-0">
               <div className="row g-0">
                  <div className="col-xl-12">
                     <div className="contact__map">
                        <iframe title='contact' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31105.72662156289!2d77.65561190467572!3d12.958036826761209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13b4551d0957%3A0x597894d77e1e4919!2sMarathahalli%2C%20Bengaluru%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sus!4v1710131519475!5m2!1sen!2sus"></iframe>
                        <div className="contact__wrapper d-md-flex justify-content-between wow fadeInUp" data-wow-delay=".3s">
                           <div className="contact__info mr-100">
                              <h3>Get in touch</h3>
                              <ul>
                                 <li>
                                    <h4>Address</h4>
                                    <p>90, Ground Floor, RJ Garden, Chinnappanahalli, </p>
                                    <p>Sanjay Nagar, Marathahalli, Bengaluru, Karnataka 560037, India</p>
                                 </li>
                                 <li>
                                    <h4>call us</h4>
                                    {/* <p><a href="tel:(+91)-9491467216">(+91) 9491467216</a></p> */}
                                    <p><a href="tel:(+91)-9964647482">(+91) 9964647482</a></p>
                                 </li>
                                 <li>
                                    <h4>Email Address</h4>
                                    <p><a href="mailto:annavarapurameshv@gmail.com">annavarapurameshv@gmail.com</a></p>
                                 </li>
                              </ul>
                           </div>
                           <div className="contact__form">
                              <form onSubmit={submitHandler}>
                                 <input type="text" name={userName} value={userName} placeholder="Your Name" onChange={(e) => setUserName(e.target.value)} />
                                 {errors.userName && <p style={errorStyles}>{errors.userName}</p>}

                                 <input type="email" name={userEmail} value={userEmail} onChange={(e) => setUserEmail(e.target.value)} placeholder="Your Email" />
                                 {errors.userEmail && <p style={errorStyles}>{errors.userEmail}</p>}

                                 <textarea value={userDesc} name={userDesc} onChange={(e) => setUserDesc(e.target.value)} placeholder="Your Message"></textarea>
                                 {errors.userDesc && <p style={errorStyles}>{errors.userDesc}</p>}

                                 <button type="submit" className="z-btn">
                                    {sucessMsg ? (
                                       <div><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Processing...</div>
                                    ) : (
                                       "Send Message"
                                    )}
                                 </button>
                              </form>
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

export default HomeContact;