import React from 'react';
import Card from 'react-bootstrap/Card';
import {Component} from 'react';
import Button from 'react-bootstrap/Button'

class AboutMe extends Component{

render(){
return(

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="/img1.jpg" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      AboutMe.
    </Card.Text>
    <Button variant="primary">View Project</Button>
  </Card.Body>
</Card>



)
}
}

export default AboutMe;