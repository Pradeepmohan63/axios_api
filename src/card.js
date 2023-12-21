import React, { useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import './card.css'
import Card from 'react-bootstrap/Card';
import axios from 'axios';



function Cards(){
const [movie,setMovie] = useState([]);

useEffect(()=>{
    axios.get("https://api.tvmaze.com/shows/1/episodes")


    .then((data1)=>{
        setMovie(data1.data)
        
    })

},[])

const movielist = movie.map((arr)=>{
    return(
    <Col sm={3}>
        <Card className='border-sec' style={{ width: '18rem' }}>
            <Card.Img className='card-img' variant="top" src={arr.image.original} />
            <Card.Body className='card-details'>
                <Card.Title className='movieName' >Movie : <span className='moviename'>{arr.name}</span></Card.Title>
                <Card.Text className='ratings'>Ratings : <span className='ratingspan'>{arr.rating.average}</span></Card.Text>
                <Card.Text>{arr.url}</Card.Text>
            </Card.Body>
        </Card>
    </Col>
)})
  return (
    <div>
        <div className='Border-container'>
            <Container>
                <Row>
                    {movielist}
                </Row>
            </Container>
        </div>
    </div>
  )
}

export default Cards;