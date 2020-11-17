import React from 'react';
import {
  Card, Button,
} from 'react-bootstrap'

const Portfolio = ({ data }) => {
  let projects
  const openLink = (url) => {
    window.open(url, "_blank")
  }
  if (data) {
    projects = data.projects.map((projects) => {
      var projectImage = 'images/portfolio/' + projects.image;
      return (
        <Card border="sucess" style={{ width: '35rem', margin: '5px', height: '45em' }}>
          <Card.Img variant="top" src={projectImage} />
          <Card.Body>
            <Card.Title>{projects.title}</Card.Title>
            <Card.Subtitle>{projects.category}</Card.Subtitle>
            <Card.Text>
              {projects.description}
            </Card.Text>
            <Button variant="primary" onClick={() => openLink(projects.url)}>See it on Github</Button>
          </Card.Body>
        </Card>
      )
    })
  }
  return (
    <section id="portfolio">
      <div className="row" style={{ maxWidth: '80%' }}>
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf" style={{ display: "flex", justifyContent: 'center' }}>
            {projects}
          </div>

        </div>
      </div>
    </section>

  )
}

export default Portfolio;
