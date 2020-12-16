import React from 'react';
import Card from 'react-bootstrap/Card';
import {Component} from 'react';
import Button from 'react-bootstrap/Button'
import img1 from './img1.jpg'
import CardDeck from 'react-bootstrap/CardGroup'
import Jumbotron from 'react-bootstrap/Jumbotron'
import img2 from './img2.jpg'
import img4 from './img4.jpg'
import Container from 'react-bootstrap/Container'
import './card-style.css'


class Home extends Component{

render(){
return(
    <>
<Container className='class'>
    <h1>My Projects</h1>
</Container>
<CardDeck>
    <Card className= "card-style" style={{ width: '480px'}}>
    <Card.Img variant="top" src={img2}/>
    <Card.Body>
        <Card.Title>Dungeon Crawler</Card.Title>
        <Card.Text>
        This is a simple text based dungeon crawler game which was written in C++. 
        </Card.Text>
        <Button href="https://github.com/kochkam/Dungeon-Crawler"variant="primary">View Project</Button>
    </Card.Body>
    </Card>
    <Card className= "card-style" style={{ width: '480px'}}>
    <Card.Img variant="top" src={img1} />
    <Card.Body>
        <Card.Title>Top Words Hash</Card.Title>
        <Card.Text>
        This project utilizes a hash map with a linked list which can count the top words used in a file.
        </Card.Text>
        <Button href="https://github.com/kochkam/Data-Structure-Hash-Python" variant="primary">View Project</Button>
    </Card.Body>
    </Card>
    <Card className= "card-style" style={{ width: '480rem' }}>
    <Card.Img variant="top" src={img4} />
    <Card.Body>
        <Card.Title>TrailBlazin App</Card.Title>
        <Card.Text>
        This is a website I collaborated on that allows users to search hikes close to them.
        </Card.Text>
        <Button variant="primary">View Project</Button>
    </Card.Body>
    </Card>

</CardDeck>

</>
        )
    }   
}

export default Home;
