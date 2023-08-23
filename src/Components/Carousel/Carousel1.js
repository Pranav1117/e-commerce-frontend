import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./carousel.css";
const data = [
 
  {
    image: require("../../Media/Carousel imgs/iphoness.jpg"),
    caption: "Iphone's",
    description: "Grab brand latest Iphone's here with best price & save big",
  },
  {
    image: require("../../Media/Carousel imgs/sq.png"),
    caption: "Alienware's",
    description:
      "  “High-performance gaming systems.” Upto 45% off",
  },
  {
    image: require("../../Media/Carousel imgs/cloths.avif"),
    caption: "Men Clothing",
    description: "Upto 70% off on men Ethnic wear",
  },
];

function Carousel1() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="whole">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {data.map((slide, i) => {
          return (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={slide.image}
                alt="slider image"
              />
              <Carousel.Caption>
                <h3 className="caption">{slide.caption}</h3>
                <p className="desc">{slide.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}
export default Carousel1;
