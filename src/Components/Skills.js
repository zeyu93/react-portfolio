import React, { Component } from "react";

class Skills extends Component {
  render() {
    return (
      <section id="skills" style={{ padding: '30px' }}>
        <h1>My Skills</h1>
        <div className="skills">
          <div className="skill-1">
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/nodejs-6-569582.png"
              alt="node"
            />
          </div>
          <div className="skill-2">
            <img
              src=" https://expressjs.com/images/express-facebook-share.png"
              alt="express"
            />
          </div>
          <div className="skill-3">
            <img
              src="https://zdnet3.cbsistatic.com/hub/i/r/2018/02/16/8abdb3e1-47bc-446e-9871-c4e11a46f680/resize/470xauto/2ea638bf5532abe5081dabb0fbecbc2d/mongo-db-logo.png"
              alt="mongodb"
            />
          </div>

          <div className="skill-3">
            <img
              src="http://innovativeteams.net/wp-content/uploads/2017/04/react.png"
              alt="react"
            />
          </div>
        </div>
        <br></br>
        <div className="skills">
          <div className="skill-1">
            <img
              src="https://www.computing.co.uk/w-images/72c3828d-ca81-4ee0-96ec-a06fa90bfce1/0/postgresqllogo-580x358.png"
              alt="postgresql"
            />
          </div>
          <div className="skill-2">
            <img
              src=" https://cdn-images-1.medium.com/max/1200/1*nG8I9lZej45po_0iefI1zg.png"
              alt="sequelize"
            />
          </div>
          <div className="skill-3">
            <img
              src="https://www.oqtic.com/wp-content/uploads/2018/02/bootstrap-logo.jpg"
              alt="bootstrap"
            />
          </div>

          <div className="skill-3">
            <img
              src="https://git-scm.com/images/logos/2color-lightbg@2x.png"
              alt="git"
            />
          </div>
        </div>
        <br></br>
        <div className="skills">
          <div className="skill-1">
            <img
              src="https://zdnet2.cbsistatic.com/hub/i/r/2020/05/11/f9afed5d-33cd-438f-ba73-31b31abba8e1/resize/370xauto/51e7a7c321c6531276c81ec376c7622e/redis-logo-2.png"
              alt="redis"
            />
          </div>
          <div className="skill-2">
            <img
              src="https://www.logopik.com/wp-content/uploads/edd/2018/06/Docker-Vector-Logo.png"
              alt="docker"
            />
          </div>
          <div className="skill-3">
            <img
              src="https://www.onlogic.com/company/io-hub/wp-content/uploads/2013/07/socket-io-logo.jpg"
              alt="SocketIo"
            />
          </div>

          <div className="skill-3">
            <img
              src="https://blog.theodo.com/static/726bca67a2c328a64b12d14e79f36e88/50383/react-hook-1024x512.png"
              alt="react-hooks"
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
