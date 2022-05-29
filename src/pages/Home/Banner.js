import React from "react";
import meter from "../../images/banner/meter.jpg";
import tayarFrame from "../../images/banner/taray-fram.jpg";
import tayar from "../../images/banner/tayar.jpg";

const Banner = () => {
  return (
    <section>
      <div className="carousel w-full" style={{maxHeight: '550px'}} >
        <div id="slide1" className="carousel-item relative w-full">
          <img src={tayar} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle text-white">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle text-white">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={meter} className="w-full" alt="" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle text-white">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle text-white">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={tayarFrame} className="w-full" alt="" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle text-white">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle text-white">
              ❯
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
