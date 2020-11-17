import React from 'react';

const About = ({ data }) => {
   if (data) {
      var name = data.name;
      var profilepic = "images/" + data.image;
      var bio = data.bio;
      var city = data.address.city;
      var phone = data.phone;
      var email = data.email;
      var resumeDownload = data.resumedownload;
   }

   return (
      <section id="about">
         <div className="row">
            <div className="three columns">
               <img className="profile-pic" src={profilepic} alt="Zeyu Liu Profile Pic" />
            </div>
            <div className="nine columns main-col">
               <h2>About Me</h2>

               <p>{bio}</p>
               <div className="row">
                  <div className="columns contact-details">
                     <h2> Details</h2>
                     <p className="address">
                        {name}
                        <br></br>
                        {city}
                        <br></br>

                        {phone}
                        <br></br>
                        {email}
                     </p>
                  </div>
                  <div className="columns download">
                     <p>
                        <a href={resumeDownload} className="button"><i className="fa fa-download"></i>View Resume</a>
                     </p>
                  </div>
               </div>
            </div>
         </div>

      </section>
   );
}


export default About;
