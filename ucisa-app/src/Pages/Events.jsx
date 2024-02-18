import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import "../Styles/Events.css"
function Events() {
  return (
    <>
      <div className="container mt-5">
        <h1 className="event-title"> Upcoming Events</h1>
        <hr></hr>
        <Carousel id="first-slider">
          <Carousel.Item >
          <div className="carousel-item-container">
              <img
                className="EventImage"
                src="./EventPhotos/Event.png"
                alt="First slide"
              />
            </div>
            <Carousel.Caption>
  
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <div className="carousel-item-container">
              <img
                className="EventImage"
                src="./EventPhotos/Event.png"
                alt="First slide"
              />
            </div>
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <div className="carousel-item-container">
              <img
                className="EventImage"
                src="./EventPhotos/Event.png"
                alt="First slide"
              />
            </div>
            <Carousel.Caption>
             
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="container mt-5">
        <h4>2023 Highlights</h4>
        {/* Add other events */}
      </div>

      <div className="container mt-5">
        <h4>2022 Highlights</h4>
         {/* Add other events */}
      </div>
    </>
  );
}

export default Events;
