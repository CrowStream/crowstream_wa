import { Carousel } from 'react-bootstrap';
import React, { MouseEventHandler, useState } from 'react';
function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number, e: any) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://occ-0-987-990.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABf07Ihf0o-BL7ks_pjwU1BfBJzxgHA8Ao8jMZ5dfJA8PZ_R7l-NyvQHtTj1TpmnL7lnR2SA8Nv4VGzEO9yJkmJ_fwArM.jpg?r=7c6"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.atomix.vg/wp-content/uploads/2021/11/spider-man-no-way-home-villains-poster-691x1024.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://areajugones.sport.es/wp-content/uploads/2018/10/MV5BZGRjODk1YjMtNjg0ZS00N2MzLWI2ZjMtOWI0ZDI5MzBlN2IxXkEyXkFqcGdeQXVyNDU5MzA2NzI@._V1_SX1777_CR001777960_AL_.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;