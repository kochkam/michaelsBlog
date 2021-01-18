import React from 'react';
import Card from 'react-bootstrap/Card';
import {Component} from 'react';
import Button from 'react-bootstrap/Button'
import self from './portrait.jpg'
import './portrait.css'
import { Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import Accordion from 'react-bootstrap/Accordion'


class AboutMe extends Component{

render(){
return(
<Container>
<Container>
<div className='portrait'>
    <Image src={self}  roundedCircle />
</div>
</Container>
<div className='info'>
<Container>
<Accordion defaultActiveKey="0">
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Education
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body><h5>Oregon State University March 2021</h5>
      <p>Bachelor's Degree, Computer Science, 3.8 GPA</p>
      <h5>Azusa Pacific University 2015</h5>
      <p>Bachelor's Degree, Applied Exercise Science, 3.5 GPA</p>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card >
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
        Objective
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>Thanks for checking out my web page! I am currently seeking a position as a software developer and I made this site to showcase my personal projects.
          Please feel free to contact me if you have any questions about my work or if you would like to consider me for a position.
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card >
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="3">
        Contact Info
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="3">
      <Card.Body><p>E-mail: mjkochka@gmail.com</p>
      <p>LinkedIn URL: <a href="https://www.linkedin.com/in/michael-kochka">www.linkedin.com/in/michael-kochka</a></p>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
</Container>
</div>
</Container>


)
}
}

export default AboutMe;