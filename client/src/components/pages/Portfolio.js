import React, { useState } from "react";
import { SliderData } from "./SliderData.js";

import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "./style.css";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

function Portfolio(slides) {
  // const [current, setCurrent] = useState(0);
  // const length = slides.length;

  // const nextSlide = () => {
  //   setCurrent(current === length - 1 ? 0 : current + 1);
  // };

  // const prevSlide = () => {
  //   setCurrent(current === 0 ? length - 1 : current - 1);
  // };

  // console.log(current);

  // if (!Array.isArray(slides) || slides.length <= 0) {
  //   return null;
  // }
  // console.log(SliderData);

  const [currImg, setCurrImg] = useState(0);

  return (
    <>
      <section className="slider">
        <span>
          <a
            target="_blank "
            rel="noreferrer"
            href={SliderData[currImg].gitlink}
          >
            <h1 className="title">{SliderData[currImg].title}</h1>
          </a>
        </span>

        {/* <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} /> */}
        <a target="_blank " rel="noreferrer" href={SliderData[currImg].link}>
          <div className="siderInner">
            <div
              className="left"
              onClick={() => {
                currImg > 0 && setCurrImg(currImg - 1);
              }}
            >
              <FaArrowAltCircleLeft style={{ fontSize: 30 }} />
            </div>

            <img className="image" src={SliderData[currImg].image} alt="" />
            {/* </a> */}
            {/* <div className="center"></div> */}
            {/* <h1 className="title">{SliderData[currImg].title}</h1> */}
            <div
              className="right"
              onClick={() => {
                currImg < SliderData.length - 1 && setCurrImg(currImg + 1);
              }}
            >
              <FaArrowAltCircleRight style={{ fontSize: 30 }} />
            </div>

            {/* {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <Link target="_blank" href={slide.links}>
                <img src={slide.image} alt="" className="image" />
              </Link>
            )}
          </div>
        );
      })} */}
          </div>
        </a>
      </section>
    </>
  );
}

export default Portfolio;
