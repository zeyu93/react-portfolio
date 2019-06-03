import React, { Component } from 'react';

class Skills extends Component {
  render() {
    return (
      <section id="skills">
        <h1>My Skills</h1>
        <div className="skills">
          <div className="skill-1">
            
            <img src="https://cdn.iconscout.com/icon/free/png-256/nodejs-6-569582.png"
              alt="node"
            />
          </div>
          <div className="skill-2">
            
            <img src=" https://expressjs.com/images/express-facebook-share.png"
              alt="express"
            />

          </div>
          <div className="skill-3">
            
            <img src="https://cms-assets.tutsplus.com/uploads/users/34/posts/26587/preview_image/preview.jpg"
              alt="rails"
            />
          </div>

          <div className="skill-3">
            
            <img src="http://innovativeteams.net/wp-content/uploads/2017/04/react.png"
              alt="react"
            />
          </div>
        </div>
        <br></br>
        <div className="skills">
          <div className="skill-1">
            
            <img src="https://www.computing.co.uk/w-images/72c3828d-ca81-4ee0-96ec-a06fa90bfce1/0/postgresqllogo-580x358.png"
              alt="postgresql"
            />
          </div>
          <div className="skill-2">
            
            <img src=" https://cdn-images-1.medium.com/max/1200/1*nG8I9lZej45po_0iefI1zg.png"
              alt="sequelize"
            />

          </div>
          <div className="skill-3">
            
            <img src="https://www.oqtic.com/wp-content/uploads/2018/02/bootstrap-logo.jpg"
              alt="bootstrap"
            />
          </div>

          <div className="skill-3">
            
            <img src="https://git-scm.com/images/logos/2color-lightbg@2x.png"
              alt="git"
            />
          </div>
        </div>

      </section>
    )
  }
}

export default Skills; 