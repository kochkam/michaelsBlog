import React from 'react';
import Card from 'react-bootstrap/Card';
import {Component} from 'react';
import Button from 'react-bootstrap/Button'
import img1 from './img1.jpg'


class Home extends Component{

render(){
return(

<Card style={{ width: '14rem', height: '8rem' }}>
  <Card.Img variant="top" src={img1} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">View Project</Button>
  </Card.Body>
</Card>



)
}
}

export default Home;
