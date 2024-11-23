import React from 'react';
import { Carousel } from 'react-bootstrap';


const solar = '/images/Energia-solar.png';
const eolica = '/images/Energia-eolic.jpg';

const EnergyCarousel = () => (
  <Carousel className="energy-carousel">
    <Carousel.Item>
      <img className="d-block w-100 energy-carousel__image" src={solar} alt="Energia Solar" />
      <Carousel.Caption>
        <h3>Energia Solar</h3>
        <p>Transforme o sol em eletricidade.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100 energy-carousel__image" src={eolica} alt="Energia Eólica" />
      <Carousel.Caption>
        <h3>Energia Eólica</h3>
        <p>Ventos para um futuro sustentável.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);

export default EnergyCarousel;
