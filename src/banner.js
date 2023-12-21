import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './banner.css';
import { Card, Col, Container, Row } from 'react-bootstrap';

function Banner() {
  return (
    <Container>
      <Row className='section'>
        <Col>
        <Carousel>
            <Carousel.Item interval={1000}>
              <Card.Img className='bannerimg1' />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <Card.Img className='bannerimg2'  />
            </Carousel.Item>
            <Carousel.Item interval={1000} >
              <Card.Img className='bannerimg3' />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}

export default Banner;