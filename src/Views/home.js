import React from 'react';
import Card from 'react-bootstrap/Card';
import {Component} from 'react';
import Button from 'react-bootstrap/Button'
import img1 from './img1.jpg'
import CardGroup from 'react-bootstrap/CardGroup'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'


class Home extends Component{

render(){
return(
    <>
<Jumbotron fluid>
    <h1>Deployed Projects</h1>
</Jumbotron>
<CardGroup>
    <Card style={{ width: '14rem', height: '8rem' }}>
    <Card.Img variant="top" src={img1} />
    <Card.Body>
        <Card.Title>Dungeon Crawler</Card.Title>
        <Card.Text>
        This is a simple text based dungeon crawler game written in C++. 
        </Card.Text>
        <Button variant="primary">View Project</Button>
    </Card.Body>
    </Card>
    <Card style={{ width: '14rem', height: '8rem' }}>
    <Card.Img variant="top" src={img1} />
    <Card.Body>
        <Card.Title>TrailBlazin App</Card.Title>
        <Card.Text>
        This is a website I collaborated on that allows users to search hikes close to them.
        </Card.Text>
        <Button variant="primary">View Project</Button>
    </Card.Body>
    </Card>
    <Card style={{ width: '14rem', height: '8rem' }}>
    <Card.Img variant="top" src={img1} />
    <Card.Body>
        <Card.Title>Top Words Hash</Card.Title>
        <Card.Text>
        This project utilizes a hash map with a linked list which can count the top words used in a file.
        </Card.Text>
        <Button variant="primary">View Project</Button>
    </Card.Body>
    </Card>
   
</CardGroup>

</>
        )
    }   
}

export default Home;
