import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// AVATARS IMPORTS
import avatar1 from "../images/avatars/avatar-1.png";
import avatar2 from "../images/avatars/avatar-2.png";
import avatar3 from "../images/avatars/avatar-3.png";
import avatar4 from "../images/avatars/avatar-4.png";


const TestimonialsCarousel = () => {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={3000}
    >

      <>
        <img src={avatar3} alt="Halza Software Solution LLC" />
        <div className="myCarousel">
          <h3>Halza Software Solution LLC </h3>
          {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ratione sequi saepe dicta blanditiis, molestias eum excepturi quod fugiat veniam!</p> */}
        </div>
      </>

      <>
        <img src={avatar1} alt="Three Phase Techno Solutions ( I ) Pvt Ltd." />
        <div className="myCarousel">
          <h3>Three Phase Techno Solutions ( I ) Pvt Ltd.</h3>
          {/* <p>TPTS is a digital transformation partner with end to end solutions comprising hardware and software. Our suite of products can be tailored to fit a wide variety of sectors like Manufacturing, Infrastructure, Logistics, Hospitality etc. Our IoT based devices combined with ML, AI software are at the cutting edge of innovation. Our ecosystem of products allow our customers to adapt to the changing business environments and create value for themselves and their customers.</p> */}
        </div>
      </>
      {/* <>
        <img src={avatar1} alt="Three Phase Techno Solutions ( I ) Pvt Ltd." />
        <div className="myCarousel">
          <h3>Three Phase Techno Solutions ( I ) Pvt Ltd.</h3>
        </div>
      </> */}
      <>
        <img src={avatar2} alt="Three Phase Technical Services LLC" />
        <div className="myCarousel">
          <h3>Three Phase Technical Services LLC</h3>
          {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ratione sequi saepe dicta blanditiis, molestias eum excepturi quod fugiat veniam!</p> */}
        </div>
      </>
      <>
        <img src={avatar3} alt=" Volkkommen Industries LLP " />
        <div className="myCarousel">
          <h3> Volkkommen Industries LLP </h3>
          {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ratione sequi saepe dicta blanditiis, molestias eum excepturi quod fugiat veniam!</p> */}
        </div>
      </>
      {/*
      <>
        <img src={avatar4} alt="John Doe 4" />
        <div className="myCarousel">
          <h3>John Doe 4</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ratione sequi saepe dicta blanditiis, molestias eum excepturi quod fugiat veniam!</p>
        </div>
      </> */}
    </Carousel>
  )
}

export default TestimonialsCarousel;
