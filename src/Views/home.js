import React from 'react';
import Card from 'react-bootstrap/Card';
import {Component} from 'react';
import Button from 'react-bootstrap/Button'
import img1 from './img1.jpg'
import CardDeck from 'react-bootstrap/CardGroup'
import Jumbotron from 'react-bootstrap/Jumbotron'
import img2 from './img2.jpg'
import img6 from './img6.jpg'
import Container from 'react-bootstrap/Container'
import './card-style.css'


class Home extends Component{

render(){
return(
    <>
<Container className='class'>
    <h1>My Projects</h1>
</Container>
<CardDeck className="deck">
    <Card >
    <Card.Img variant="top" src={img2}/>
    <Card.Body >
        <Card.Title>Dungeon Crawler</Card.Title>
        <Card.Text>
        This is a simple text based dungeon crawler game which was written in C++. 
        </Card.Text>
        <Button href="https://github.com/kochkam/Dungeon-Crawler"variant="primary">View Project</Button>
    </Card.Body>
    </Card>
    <Card >
    <Card.Img variant="top" src={img1} />
    <Card.Body >
        <Card.Title>Top Words Hash</Card.Title>
        <Card.Text>
        This project utilizes a hash map with a linked list which can count the top words used in a file.
        </Card.Text>
        <Button href="https://github.com/kochkam/Data-Structure-Hash-Python" variant="primary">View Project</Button>
    </Card.Body>
    </Card>
    <Card >
    <Card.Img variant="top" src={img6} />
    <Card.Body >
        <Card.Title>Checkers App</Card.Title>
        <Card.Text>
        This is a checkers app I made using react. Currently working on an AI feature for the game.
        </Card.Text>
        <Button href="https://checkers-game-kochka.herokuapp.com/"variant="primary">View Project</Button>
    </Card.Body>
    </Card>

</CardDeck>
</>
        )
    }   
}

export default Home;
